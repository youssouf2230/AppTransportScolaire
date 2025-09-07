import ToggleTheme from "@/components/shared/toggle-theme"
import Image from "next/image"
import Link from "next/link"

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="grid min-h-svh lg:grid-cols-2">
            {/* Colonne gauche : contenu login/register */}
            <div className="flex flex-col gap-4 p-6 md:p-10">


                {/* Contenu principal */}
                <div className="flex flex-1 items-center justify-center">
                    <div className="w-full max-w-xs">
                        {children}
                    </div>
                </div>
            </div>

            {/* Colonne droite : image + phrase marketing */}
            <div className="bg-muted relative hidden lg:block">
                <h3 className="z-10 absolute bottom-10 left-6 text-4xl text-zinc-50 font-medium">
                    Innovation is just a click away. Sign in to browse electronics that redefine performance and style
                </h3>
                <Image
                    src="https://images.pexels.com/photos/28706295/pexels-photo-28706295.jpeg"
                    loading="lazy"
                    alt="Image"
                    width={500}
                    height={500}
                    className="absolute z-0 inset-0 h-full w-full object-cover dark:brightness-40 brightness-75 grayscale-25"
                />
            </div>
        </div>
    );
}
