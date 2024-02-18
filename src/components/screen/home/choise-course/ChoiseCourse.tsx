'use client';
import { useQuery } from '@tanstack/react-query';
import { CategoryCard } from './category-card/CategoryCard';
import Button from '@/components/ui/button/Button';
import { CategoryService } from '@/services/category.service';

export function ChoiseCourse() {
	const { data } = useQuery({
		queryKey: ['get category'],
		queryFn: () => {
			return CategoryService.getAll();
		},
	});

	return (
		<div className="h-[916px] bg-white">
			<header className="container flex items-center justify-between pb-11 pt-20">
				<p className="text-4xl">Choice favourite course from top category</p>
				<Button>See all Catergories</Button>
			</header>
			<section className="grid grid-cols-4  gap-8">
				{data?.map((category) => (
					<CategoryCard
						key={category.name}
						// Icon={category.icon}
						icon={category.icon}
						title={category.name}
						description={category.description}
						color={category.colors}
					/>
				))}
			</section>
		</div>
	);
}
