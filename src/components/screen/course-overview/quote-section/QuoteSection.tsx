import Image from 'next/image';

export function QuoteSection() {
	return (
		<section className="container py-20">
			<div className="flex items-start justify-center gap-6 bg-main-background p-20 text-[#302D3A]">
				<div>
					<p className="mb-20 text-2xl  font-medium italic">
						I believe in lifelong learning and Skillfy is a great place to learn
						from experts. I’ve learned a lot and recommend it to all my friends.
					</p>
					<p>Riaz Surti | Hearthy Foods</p>
				</div>

				<Image
					src="/uploads/images/riaz-surti.jpg"
					alt="Riaz Surti"
					width={478}
					height={364}
					className="rounded-lg shadow-xl "
				/>
			</div>
		</section>
	);
}
