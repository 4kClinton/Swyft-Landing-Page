"use client";
import { useState } from "react";
import Image, { ImageProps } from "next/image";
import styles from "./LazyImage.module.css";

interface LazyImageProps extends Omit<ImageProps, "onLoadingComplete"> {
  placeholderColor?: string;
}

export default function LazyImage({
  src,
  alt,
  width,
  height,
  className,
  placeholderColor,
  ...props
}: LazyImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div
      className={`${styles.wrapper} ${className ?? ""}`}
      style={{ width: width as number, height: height as number }}
    >
      {isLoading && (
        <div className={styles.spinner}>
          <div
            className={styles["three-body"]}
            style={
              { "--uib-color": placeholderColor ?? "#5D3FD3" } as React.CSSProperties
            }
          >
            <div className={styles["three-body__dot"]}></div>
            <div className={styles["three-body__dot"]}></div>
            <div className={styles["three-body__dot"]}></div>
          </div>
        </div>
      )}
      <Image
        src={src}
        alt={alt as string}
        width={width}
        height={height}
        className={className}
        onLoadingComplete={() => setIsLoading(false)}
        {...props}
      />
    </div>
  );
}