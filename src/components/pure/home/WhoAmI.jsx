import Image from "next/image";
import RandomImg from "@/public/images/random/personal_nigga_trainer.jpg";
import "iconify-icon";

export default function WhoAmI() {
	return (
		<section className="pt-5">
			<h1 className="block px-4 py-5 text-white bg-[#490b0a] font-medium text-md text-center uppercase mb-10">
				Ayudamos a personas y culturistas naturales a alcanzar sus metas de
				entrenamiento
			</h1>

			<div className="flex flex-col gap-6 items-center w-full lg:max-w-[70%] mx-auto max-lg:px-4 pt-8 lg:flex-row lg:[&>div]:text-start [&>div]:text-center [&>div>h2]:text-md [&>div>h2]:font-medium [&>div>h2]:uppercase [&>div>p]:text-sm [&>div>p]:mt-1">
				<Image
					className="w-full max-w-[420px] h-full mx-auto"
					width={300}
					height={300}
					src={RandomImg}
					alt="Personal Trainer"
				/>
				<div className="w-full max-w-[580px] mx-auto">
					<h2>Quién Soy?</h2>
					<p>
						Soy tu nuevo entrenador personal y me dedico a mejorar el cuerpo de
						los ganadores de una manera inimaginable. Cuento con bastantes casos
						de alumnos de los cuales tuvieron increíbles cambios físicos en un
						corto tiempo siguiendo mis programas de asesorías. A través de mis
						años de experiencia y aprendizaje diseñé los programas más efectivos
						para que las personas mejoren su fisico en el menor tiempo posible.
					</p>
				</div>
			</div>

			<div className=" [&>h1]:pb-5 [&>h1]:text-center [&>h1]:text-md [&>h1]:uppercase [&>h1]:font-medium mt-20 mb-14">
				<h1>Sígueme en mis Redes Sociales</h1>

				<div className="flex justify-center gap-20 t-14">
					<a
						_target="blank"
						className="hover:scale-125 hover:rotate-12 transition-all"
						href="https://www.tiktok.com/@nestorcoach"
					>
						<iconify-icon icon="logos:tiktok-icon" width="50" height="50" />
					</a>
					<a
						href="https://www.tiktok.com/@nestorcoach"
						_target="blank"
						className="hover:scale-125 hover:-rotate-12 transition-all"
					>
						<iconify-icon icon="skill-icons:instagram" width="50" height="50" />
					</a>
				</div>
			</div>
		</section>
	);
}
