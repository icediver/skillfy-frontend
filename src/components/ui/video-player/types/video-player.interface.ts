import { Dispatch, RefObject, SetStateAction } from 'react';

export interface IVideoElement extends HTMLVideoElement {
	msRequestFullscreen?: () => void;
	mozRequestFullScreen?: () => void;
	webkitRequestFullscreen?: () => void;
}

export interface IPlayVideo {
	videoRef: RefObject<IVideoElement>;
	properties: IVideoProperties;
	actions: IVideoActions;
}

export interface IVideoProperties {
	isPause: boolean;
	volume: number;
}

export interface IVideoActions {
	toggleVideo: () => void;
	forward: () => void;
	backward: () => void;
	fullScreen: () => void;
	setVolume: Dispatch<SetStateAction<number>>;
	togglePlay: () => void;
}

export interface IVideoActionsWithHotkeys extends IVideoActions {
	setIsDisabledHotkey: Dispatch<SetStateAction<boolean>>;
}

export interface IVideoPropertiesWithProgress extends IVideoProperties {
	currentTime: number;
	videoTime: number;
	progress: number;
}

export interface IVideoPlayer {
	videoRef: RefObject<IVideoElement>;
	properties: IVideoPropertiesWithProgress;
	actions: IVideoActionsWithHotkeys;
}
