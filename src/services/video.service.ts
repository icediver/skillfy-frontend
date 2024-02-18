import { instance } from "@/api/api.interceptor";
import { getVideosUrl } from "@/config/api.config";
import { IVideo, TypeVideoUpdate } from "@/types/video.interface";

export const VideoService = {
  async getAll() {
    const videos = await instance.get<IVideo[]>(getVideosUrl(``));
    return videos;
  },

  async getById(videoId: number) {
    const { data: video } = await instance.get<IVideo>(
      getVideosUrl(`/${videoId}`),
    );
    return video;
  },
  async getByCourse(slug: string) {
    const { data: video } = await instance.get<IVideo[]>(
      getVideosUrl(`/course/${slug}`),
    );
    return video;
  },

  async create() {
    const { data } = await instance.post<IVideo>(getVideosUrl(``));
    return data;
  },

  async update(videoId: number, data: TypeVideoUpdate) {
    const { data: video } = await instance.put<IVideo>(
      getVideosUrl(`/${videoId}`),
      data,
    );
    return video;
  },
};
