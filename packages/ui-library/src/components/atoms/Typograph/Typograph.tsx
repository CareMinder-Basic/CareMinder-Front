import '@careminder/fonts/dist/index.css';
import * as React from "react";
import { cn } from "@/lib/util";
import { cva, type VariantProps } from "class-variance-authority";

const typographyVariants = cva("font-pretendard", {
  variants: {
    variant: {
      // 제목 스타일
      h1: "text-typography-h1",
      h2: "text-typography-h2",
      h3: "text-typography-h3",
      h4: "text-typography-h4",
      h5: "text-typography-h5",
      
      // 본문 스타일
      body1: "text-typography-body1",
      body2: "text-typography-body2",
      
      // 부제목 스타일
      subtitle1: "text-typography-subtitle1",
      subtitle2: "text-typography-subtitle2",
      
      // 기타 스타일
      caption: "text-typography-caption",
      overline: "text-typography-overline",
      title: "text-typography-title",
    },
    color: {
      default: "text-text-DEFAULT",
      primary: "text-primary",
      secondary: "text-text-secondary",
      disabled: "text-disabled",
      white: "text-white",
      destructive: "text-destructive",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
   
  },
  defaultVariants: {    
    color: "default",
    align: "left",
  },
});

export interface TypographyProps extends Omit<React.HTMLAttributes<HTMLParagraphElement>, 'color'>, 
    VariantProps<typeof typographyVariants> {
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  fontSize?: number;
  fontWeight?: number;
}

const Typography = React.forwardRef<HTMLParagraphElement, TypographyProps>(
  ({ className, variant, color, align, fontSize, fontWeight, as: Component = "p", ...props }, ref) => {    
    const getFontWeightClass = (weight: number) => {
      switch (weight) {
        case 100: return 'font-thin';
        case 200: return 'font-extralight';
        case 300: return 'font-light';
        case 400: return 'font-normal';
        case 500: return 'font-medium';
        case 600: return 'font-semibold';
        case 700: return 'font-bold';
        case 800: return 'font-extrabold';
        case 900: return 'font-black';
        default: return `font-[${weight}]`; // 커스텀 값인 경우
      }
    };

    const dynamicFontSize = fontSize ? `text-[${fontSize/16}rem]` : '';           
    const dynamicFontWeight = fontWeight ? getFontWeightClass(fontWeight) : '';
    

    
    return (
      <Component
        className={cn(
          "font-pretendard",
          variant ? typographyVariants({ variant, color, align }) : '',                    
          dynamicFontSize,
          dynamicFontWeight,
          color && `text-${color}`,
          align && `text-${align}`,
          className
        )}        
        ref={ref}
        {...props}
      />
    );
  }
);

Typography.displayName = "Typography";

export { Typography, typographyVariants };