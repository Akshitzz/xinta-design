import {cn} from "@/app/lib/utils"

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: ContainerProps) => {

    return (
        <div className={cn(" mx-[95px] max-w-9xl px-4 sm:px-6 lg:px-8 inset-0", className)}>
            {children}
        </div>
    )
}
export default Container;