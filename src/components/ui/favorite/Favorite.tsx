import { UserService } from '@/services/user.service';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa6';

interface IFavorite {
	courseId: number;
}

export function Favorite({ courseId }: IFavorite) {
	const queryClient = useQueryClient();
	const { data: profile } = useQuery({
		queryKey: ['profile'],
		queryFn: () => UserService.getProfile(),
		select: ({ data }) => data,
	});

	const { mutate } = useMutation({
		mutationKey: ['toggle favorite'],
		mutationFn: () => UserService.toggleFavorite(courseId),
		onSuccess() {
			queryClient.invalidateQueries({ queryKey: ['profile'] });
		},
	});

	if (!profile) return null;

	function clickHandler() {
		mutate();
	}

	const isFavorite = profile.favorites.some((item) => item.id === courseId);

	return (
		<button onClick={clickHandler}>
			{isFavorite ? (
				<FaStar className="text-1.5xl duration-1000 animate-in  fade-in zoom-in " />
			) : (
				<FaRegStar className="text-1.5xl duration-1000 animate-in  fade-in zoom-in " />
			)}
		</button>
	);
}
