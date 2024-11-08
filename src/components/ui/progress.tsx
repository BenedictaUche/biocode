import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => {
  const primaryValue = value || 0;
  const secondaryValue = 100 - primaryValue;

  return (
    <ProgressPrimitive.Root
      ref={ref}
      className={cn(
        "relative h-6 w-full overflow-hidden rounded-full bg-blue-800 flex",
        className
      )}
      {...props}
    >
      <div
        className="h-full bg-blue-500 flex items-center justify-center text-white text-sm font-medium"
        style={{ width: `${primaryValue}%` }}
      >
        {primaryValue}%
      </div>
      <div
        className="h-full bg-blue-300 flex items-center justify-center text-white text-sm font-medium"
        style={{ width: `${secondaryValue}%` }}
      >
        {secondaryValue}%
      </div>
    </ProgressPrimitive.Root>
  );
});
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
