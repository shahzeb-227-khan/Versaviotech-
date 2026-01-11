import React, { useState, useRef, useEffect, memo } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
  sizes?: string;
  onLoad?: () => void;
}

/**
 * OptimizedImage component that implements:
 * - Native lazy loading
 * - Proper width/height to prevent CLS
 * - Loading placeholder for better UX
 * - Intersection Observer fallback
 */
const OptimizedImageComponent: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  loading = 'lazy',
  priority = false,
  sizes,
  onLoad,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (priority) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '200px', // Start loading 200px before entering viewport
        threshold: 0,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  // Generate srcset for responsive images if it's a local image
  const generateSrcSet = (imgSrc: string): string | undefined => {
    // Only generate srcset for relative/local images
    if (imgSrc.startsWith('http') || imgSrc.startsWith('//')) {
      return undefined;
    }
    return undefined; // For external images, let them load as-is
  };

  const aspectRatio = width && height ? width / height : undefined;

  return (
    <div
      ref={imgRef}
      className={`relative overflow-hidden ${className}`}
      style={{
        aspectRatio: aspectRatio ? `${aspectRatio}` : undefined,
      }}
    >
      {/* Placeholder skeleton */}
      {!isLoaded && (
        <div 
          className="absolute inset-0 bg-thistle-900/50 animate-pulse"
          aria-hidden="true"
        />
      )}
      
      {isInView && (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? 'eager' : loading}
          decoding={priority ? 'sync' : 'async'}
          fetchPriority={priority ? 'high' : 'auto'}
          sizes={sizes}
          srcSet={generateSrcSet(src)}
          onLoad={handleLoad}
          className={`
            w-full h-full object-cover
            transition-opacity duration-500
            ${isLoaded ? 'opacity-100' : 'opacity-0'}
          `}
        />
      )}
    </div>
  );
};

// Memoize to prevent unnecessary re-renders
export const OptimizedImage = memo(OptimizedImageComponent);
export default OptimizedImage;
