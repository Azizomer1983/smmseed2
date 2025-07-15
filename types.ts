
export type CountryKey = 'sudan' | 'oman' | 'uganda';
export type LanguageKey = 'en' | 'ar';
export type PlatformKey = 'all' | 'facebook' | 'tiktok' | 'instagram' | 'linkedin' | 'youtube' | 'whatsapp';

export interface PlatformData {
    labels: string[];
    data: number[];
    colors: string[];
}

export interface LandscapeData {
    penetration: string;
    socialUsers: string;
    keyInsight: string;
    platforms: PlatformData;
}

export interface PeakTime {
    time: string;
    platforms: string;
    icon: string;
}

export interface EngagingContent {
    nameKey: string;
    icon: string;
}

export interface BehaviorData {
    peakTimes: PeakTime[];
    engagingContent: EngagingContent[];
}

export interface AgriTopic {
    titleKey: string;
    descriptionKey: string;
}

export interface AgriPlatform {
    name: string;
    descriptionKey: string;
    icon: string;
}

export interface AgricultureData {
    topics: AgriTopic[];
    platforms: AgriPlatform[];
}

export interface ContentPost {
    date: string;
    title: string;
    description: string;
}

export interface CalendarData {
    activeDays: number[];
    activePeriods: { [key: number]: string[] };
    facebookActiveDays: number[];
    facebookPosts: ContentPost[];
    tiktokActiveDays: number[];
    tiktokPosts: ContentPost[];
    instagramActiveDays: number[];
    instagramPosts: ContentPost[];
    linkedinActiveDays: number[];
    linkedinPosts: ContentPost[];
    youtubeActiveDays: number[];
    youtubePosts: ContentPost[];
    whatsappActiveDays: number[];
    whatsappPosts: ContentPost[];
}

export interface CountryData {
    name: string;
    landscape: LandscapeData;
    behavior: BehaviorData;
    agriculture: AgricultureData;
    calendar: CalendarData;
}

export interface AppData {
    sudan: CountryData;
    oman: CountryData;
    uganda: CountryData;
}

export interface Translations {
    [key: string]: { [key: string]: string | string[] };
}
