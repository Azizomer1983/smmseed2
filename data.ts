
import type { AppData, Translations } from './types';

export const appData: AppData = {
    sudan: {
        name: "Sudan",
        landscape: {
            penetration: "28.7%",
            socialUsers: "13.5 Million",
            keyInsight: "Facebook Dominance (89%)",
            platforms: {
                labels: ['Facebook', 'Twitter', 'YouTube', 'Instagram', 'Pinterest', 'LinkedIn', 'TikTok', 'WhatsApp'],
                data: [89.39, 9.28, 0.82, 0.4, 0.07, 0.03, 0.05, 0.06],
                colors: ['#4267B2', '#1DA1F2', '#FF0000', '#C13584', '#E60023', '#0A66C2', '#000000', '#25D366']
            }
        },
        behavior: {
            peakTimes: [
                { time: "Morning (9 AM - 11 AM)", platforms: "Facebook, Twitter", icon: "☀️" },
                { time: "Afternoon (1 PM - 3 PM)", platforms: "Facebook, Twitter", icon: "🏙️" },
                { time: "Evening (7 PM - 10 PM)", platforms: "YouTube, Facebook", icon: "🌙" }
            ],
            engagingContent: [
                { nameKey: "visualContent", icon: "🖼️" },
                { nameKey: "breakingNews", icon: "📰" },
                { nameKey: "politicalDiscourse", icon: "🗳️" },
                { nameKey: "humorSatire", icon: "😂" },
                { nameKey: "localContent", icon: "📍" },
                { nameKey: "personalStories", icon: "❤️" }
            ]
        },
        agriculture: {
            topics: [
                { titleKey: "knowledgeDissemination", descriptionKey: "knowledgeDisseminationDesc" },
                { titleKey: "marketAccess", descriptionKey: "marketAccessDesc" },
                { titleKey: "foodSecurity", descriptionKey: "foodSecurityDesc" }
            ],
            platforms: [
                { name: "WhatsApp / Facebook", descriptionKey: "whatsappFacebookDesc", icon: "💬" },
                { name: "YouTube", descriptionKey: "youtubeDesc", icon: "▶️" }
            ]
        },
        calendar: {
            activeDays: [0, 1, 2, 3, 4, 5, 6],
            activePeriods: {
                0: ['9 AM - 11 AM', '1 PM - 3 PM'], 1: ['9 AM - 11 AM', '1 PM - 3 PM', '7 PM - 10 PM'], 2: ['9 AM - 11 AM', '1 PM - 3 PM', '7 PM - 10 PM'], 3: ['9 AM - 11 AM', '1 PM - 3 PM', '7 PM - 10 PM'], 4: ['9 AM - 11 AM', '1 PM - 3 PM', '7 PM - 10 PM'], 5: ['7 PM - 10 PM'], 6: ['7 PM - 9 PM']
            },
            facebookActiveDays: [0, 1, 2, 3, 4, 5, 6],
            facebookPosts: [ { date: '07-14', title: 'Pinned Post: Aid & Resources', description: 'A post with contact info for NGOs and a link to a guide on applying for vegetable seed and tool aid.' } ],
            tiktokActiveDays: [0, 2, 3, 5, 6],
            tiktokPosts: [ { date: '07-15', title: 'Quick Tip', description: '15-second seed spacing tip for Okra.' } ],
            instagramActiveDays: [0, 1, 3, 4, 6],
            instagramPosts: [ { date: '07-14', title: 'Photo Series: "Hands of the Harvest"', description: "Close-up, expressive photos of farmers' hands holding vegetable seeds." } ],
            linkedinActiveDays: [1, 2, 3, 4, 5],
            linkedinPosts: [ { date: '07-14', title: 'Article: Horticulture as a Pillar of Stability', description: 'The Unseen Economic Engine in Wartime Sudan.' } ],
            youtubeActiveDays: [0, 3, 4, 5, 6],
            youtubePosts: [ { date: '07-13', title: 'Series: "Voices of Resilience"', description: 'Short (3-5 minute) audio interviews with static portraits of farmers sharing stories of how they saved tomato and okra seeds.' } ],
            whatsappActiveDays: [5, 6],
            whatsappPosts: [ { date: '07-19', title: "WhatsApp: Good morning, farmers! ☀️", description: "When we see this bountiful harvest, we know your hard work has paid off. Fertile land brings prosperity to all. Congratulations! (Image of a bountiful harvest)" } ]
        }
    },
    oman: {
        name: "Oman",
        landscape: {
            penetration: "97.8%",
            socialUsers: "3.97 Million",
            keyInsight: "Diverse Market & Visual Platforms",
            platforms: {
                labels: ['Facebook', 'Twitter', 'Instagram', 'Pinterest', 'YouTube', 'LinkedIn', 'TikTok', 'WhatsApp'],
                data: [52.81, 21.87, 16.98, 3.76, 3.61, 0.54, 0.25, 0.38],
                colors: ['#4267B2', '#1DA1F2', '#C13584', '#E60023', '#FF0000', '#0A66C2', '#000000', '#25D366']
            }
        },
        behavior: {
            peakTimes: [
                { time: "Morning (10 AM - 11 AM)", platforms: "Twitter, LinkedIn", icon: "☀️" },
                { time: "Afternoon (1 PM - 4 PM)", platforms: "Instagram, Facebook", icon: "🏙️" },
                { time: "Evening (8 PM - 9 PM)", platforms: "Instagram, YouTube", icon: "🌙" }
            ],
            engagingContent: [
                { nameKey: "visualStorytelling", icon: "📸" },
                { nameKey: "shortFormVideo", icon: "📱" },
                { nameKey: "localContent", icon: "🇴🇲" },
                { nameKey: "influencerMarketing", icon: "✨" },
                { nameKey: "thoughtLeadership", icon: "💡" },
                { nameKey: "directEngagement", icon: "💬" }
            ]
        },
        agriculture: {
            topics: [
                { titleKey: "waterScarcity", descriptionKey: "waterScarcityDesc" },
                { titleKey: "techInnovations", descriptionKey: "techInnovationsDesc" },
                { titleKey: "digitalMarketing", descriptionKey: "digitalMarketingDesc" }
            ],
            platforms: [
                { name: "Instagram", descriptionKey: "instagramDesc_oman", icon: "📸" },
                { name: "Twitter / LinkedIn", descriptionKey: "twitterLinkedinDesc_oman", icon: "🔗" }
            ]
        },
        calendar: {
            activeDays: [0, 1, 2, 3, 4, 5, 6],
            activePeriods: {
                0: ['6 PM - 9 PM', '8 PM (Instagram)'], 1: ['9 AM - 11 AM', '1 PM - 2 PM'], 2: ['9 AM - 11 AM', '1 PM - 2 PM'], 3: ['9 AM - 11 AM', '1 PM - 2 PM'], 4: ['9 AM - 11 AM', '1 PM - 2 PM', '6 PM - 9 PM'], 5: ['6 PM - 9 PM'], 6: ['8 PM (Instagram)', '6 PM - 9 PM']
            },
            facebookActiveDays: [0, 1, 2, 3, 4, 5, 6],
            facebookPosts: [{ date: '07-14', title: 'Photo Album: Oman\'s Agricultural Heritage', description: 'A gallery of photos from vegetable farms across the country.' }],
            tiktokActiveDays: [0, 2, 4, 5],
            tiktokPosts: [{ date: '07-15', title: 'Quick Tip', description: '3 Omani heirloom vegetable seeds you can grow at home.' }],
            instagramActiveDays: [0, 1, 3, 4, 6],
            instagramPosts: [{ date: '07-14', title: 'Reel: "Ancient Engineering, Modern Growth"', description: 'A drone shot flying through an aflaj channel that feeds into a field of lush green vegetables.' }],
            linkedinActiveDays: [0, 2, 4],
            linkedinPosts: [{ date: '07-15', title: 'Article: Oman Vision 2040', description: 'How Vegetable Seed Technology is Driving Economic Diversification.' }],
            youtubeActiveDays: [0, 3, 5, 6],
            youtubePosts: [{ date: '07-13', title: 'Documentary: "The Veins of the Mountain"', description: 'A film about the aflaj irrigation systems, focusing on the heirloom vegetable seeds and crops they sustain.' }],
            whatsappActiveDays: [1, 3, 5],
            whatsappPosts: [{ date: '07-19', title: "WhatsApp: Good morning, farmers! ☀️", description: "When we see this bountiful harvest, we know your hard work has paid off. Fertile land brings prosperity to all. Congratulations! (Image of a bountiful harvest)" }]
        }
    },
    uganda: {
        name: "Uganda",
        landscape: {
            penetration: "24.6%",
            socialUsers: "11.77 Million",
            keyInsight: "Twitter Leads & Youthful Audience",
            platforms: {
                labels: ['Twitter', 'Facebook', 'Pinterest', 'YouTube', 'Instagram', 'LinkedIn', 'TikTok', 'WhatsApp'],
                data: [35.74, 20.11, 19.8, 12.17, 8.32, 1.88, 0.9, 0.7],
                colors: ['#1DA1F2', '#4267B2', '#E60023', '#FF0000', '#C13584', '#0A66C2', '#000000', '#25D366']
            }
        },
        behavior: {
            peakTimes: [
                { time: "Morning (9 AM - 11 AM)", platforms: "Twitter, Facebook", icon: "☀️" },
                { time: "Midday", platforms: "LinkedIn", icon: "🏙️" },
                { time: "Evening (7 PM - 10 PM)", platforms: "YouTube, TikTok", icon: "🌙" }
            ],
            engagingContent: [
                { nameKey: "videoContent", icon: "📹" },
                { nameKey: "influencerMarketing", icon: "⭐" },
                { nameKey: "liveStreaming", icon: "🔴" },
                { nameKey: "interactiveContent", icon: "❓" },
                { nameKey: "storytelling", icon: "📖" },
                { nameKey: "educationalContent", icon: "🎓" }
            ]
        },
        agriculture: {
            topics: [
                { titleKey: "smartAgriculture", descriptionKey: "smartAgricultureDesc" },
                { titleKey: "knowledgeExchange_ug", descriptionKey: "knowledgeExchangeDesc_ug" },
                { titleKey: "marketAccess_ug", descriptionKey: "marketAccessDesc_ug" }
            ],
            platforms: [
                { name: "WhatsApp", descriptionKey: "whatsappDesc_ug", icon: "💬" },
                { name: "Facebook / YouTube", descriptionKey: "facebookYoutubeDesc_ug", icon: "▶️" }
            ]
        },
        calendar: {
            activeDays: [0, 1, 2, 3, 4, 5, 6],
            activePeriods: {
                0: ['7 PM - 10 PM'], 1: ['9 AM - 11 AM', '7 PM - 10 PM'], 2: ['9 AM - 11 AM', '7 PM - 10 PM'], 3: ['9 AM - 12 PM', '7 PM - 10 PM'], 4: ['9 AM - 11 AM', '7 PM - 10 PM'], 5: ['8 PM (Instagram)', '6 AM - 9 AM', '7 PM - 10 PM'], 6: ['7 PM - 10 PM']
            },
            facebookActiveDays: [0, 1, 2, 3, 4, 5, 6],
            facebookPosts: [ { date: '07-14', title: 'Live Debate: GMO Vegetable Seeds', description: 'Should Uganda embrace GMO vegetable seeds? A conversation for farmers. Host with experts from UFAAS and NARO.' } ],
            tiktokActiveDays: [0, 1, 2, 3, 4, 5, 6],
            tiktokPosts: [ { date: '07-14', title: 'Dance Challenge: #VegetableDance', description: 'Create a #VegetableDance challenge using a hit song by a Ugandan artist.' } ],
            instagramActiveDays: [0, 1, 2, 3, 4, 5, 6],
            instagramPosts: [ { date: '07-14', title: 'Reel: "The Gorilla Grin"', description: 'A video of a gorilla, captioned "Protecting their home protects the wild relatives of our vegetables."' } ],
            linkedinActiveDays: [0, 2, 4],
            linkedinPosts: [ { date: '07-15', title: 'Startup Profile: "Startup of the Week"', description: 'Profiling a Ugandan company that developed a new vegetable seed coating technology.' } ],
            youtubeActiveDays: [0, 1, 3, 5],
            youtubePosts: [ { date: '07-14', title: 'Series: "Ugandan Innovators"', description: 'A weekly show profiling young agritech entrepreneurs focusing on their vegetable seed-related innovations.' } ],
            whatsappActiveDays: [1, 4],
            whatsappPosts: [ { date: '07-26', title: "WhatsApp: Seeing your farms flourish fills us with joy! ✨", description: "Your hard work is creating abundance and a better life for everyone. Keep up the great work! (Voice note from a SeedTech representative)" } ]
        }
    }
};

export const translations: Translations = {
    en: {
        mainTitle: "Social Media Analysis and Contents Calendar for Seedtech",
        mainSubtitle: "Explore the digital landscape in Sudan, Oman, and Uganda",
        sudan: "Sudan",
        oman: "Oman",
        uganda: "Uganda",
        all: "All",
        sectionTitleLandscape: "Digital Landscape Overview",
        landscapeIntro_sudan: "Sudan's digital landscape is characterized by the near-total dominance of Facebook, supported by its 'Free Mode' feature, making it a lifeline for information. Mobile access is the primary norm, guiding content strategies towards simplicity and accessibility.",
        landscapeIntro_oman: "Oman features a mature digital environment with high internet penetration. Users are spread across several major platforms, with a clear preference for high-quality visual content and content that reflects local culture.",
        landscapeIntro_uganda: "Uganda's digital landscape is diverse and largely youth-driven. TikTok is the leading platform for engagement. The tone should be empowering, pragmatic, and aspirational, celebrating accessible innovation and the journey from subsistence farming to commercial vegetable enterprise.",
        statTitleInternet: "Internet Penetration",
        statTitleSocial: "Social Media Users",
        statTitleInsight: "Key Insight",
        chartTitle: "Platform Market Share Distribution",
        marketShareText_sudan: "Facebook holds an overwhelming market share of nearly 90%, making it the primary channel for digital communication. Twitter comes in a distant second, followed by YouTube, Instagram, Pinterest, and LinkedIn with much smaller shares.",
        marketShareText_oman: "Facebook leads the market but with less dominance, with a very strong presence from Twitter and Instagram, followed by Pinterest, YouTube, and LinkedIn. This diversity requires a multi-platform strategy to reach different audience segments.",
        marketShareText_uganda: "Twitter tops the market share, followed by Facebook and Pinterest, then YouTube, Instagram, and LinkedIn. This diversity reflects the preferences of a young, digitally active audience, making it a dynamic market for digital marketing.",
        sectionTitleBehavior: "User Behavior & Engagement Patterns",
        behaviorIntro: "Here, we explore when users are most active and which content types generate the highest engagement. Understanding these patterns is key to effectively communicating with the local audience.",
        peakTimesTitle: "Peak Activity Times (Estimated)",
        engagingContentTitle: "Most Engaging Content",
        visualContent: "Visual Content",
        breakingNews: "Breaking News",
        politicalDiscourse: "Political Discourse",
        humorSatire: "Humor & Satire",
        localContent: "Local Content",
        personalStories: "Personal Stories",
        visualStorytelling: "Visual Storytelling",
        shortFormVideo: "Short-form Video",
        influencerMarketing: "Influencer Marketing",
        thoughtLeadership: "Thought Leadership",
        directEngagement: "Direct Engagement",
        videoContent: "Video Content",
        liveStreaming: "Live Streaming",
        interactiveContent: "Interactive Content",
        storytelling: "Storytelling",
        educationalContent: "Educational Content",
        sectionTitleAgri: "Agriculture in the Digital Age",
        agriIntro_sudan: "In Sudan, social media is used as a vital tool for agricultural extension and market access, especially amid the challenges posed by conflict. Platforms facilitate knowledge exchange on resilient farming techniques.",
        agriIntro_oman: "In Oman, digital agricultural content focuses on addressing environmental challenges like water scarcity. There is significant interest in technological innovations such as protected agriculture and smart irrigation to enhance food security.",
        agriIntro_uganda: "In Uganda, the digital agricultural dialogue revolves around using technology to address climate threats. There is a strong focus on digitization and financial inclusion programs to empower farmers in rural areas.",
        agriTopicsTitle: "Top Agricultural Topics",
        agriTopicsSubtitle: "Click on a topic to explore more details.",
        knowledgeDissemination: "Knowledge Dissemination",
        knowledgeDisseminationDesc: "Sharing information on crop management, pest control, market prices, and agritech solutions to address immediate challenges.",
        marketAccess: "Market Access",
        marketAccessDesc: "Using platforms like Facebook Marketplace and TikTok for direct-to-consumer sales, bypassing traditional intermediaries.",
        foodSecurity: "Food Security",
        foodSecurityDesc: "Focusing on protecting agricultural resources, preserving vital seeds in the face of conflict, and promoting resilient farming practices.",
        waterScarcity: "Water Scarcity Solutions",
        waterScarcityDesc: "Discussions on advanced irrigation techniques like drip irrigation and hydroponics to tackle the challenge of water scarcity.",
        techInnovations: "Technological Innovations",
        techInnovationsDesc: "Showcasing protected agriculture solutions, greenhouses, and biotechnology to increase year-round productivity.",
        digitalMarketing: "Digital Marketing",
        digitalMarketingDesc: "The emergence of 'agri-influencers' and the use of digital platforms to connect farmers with markets and promote local products.",
        smartAgriculture: "Smart Agriculture",
        smartAgricultureDesc: "Focus on climate-smart interventions and digital technologies to address climate change and enhance environmental resilience.",
        knowledgeExchange_ug: "Knowledge Exchange",
        knowledgeExchangeDesc_ug: "Widespread use of platforms like WhatsApp and YouTube for information on crop varieties, fertilizers, and pest control.",
        marketAccess_ug: "Market Access",
        marketAccessDesc_ug: "Initiatives to connect farmers to broader markets through digital platforms and promote financial inclusion via mobile money.",
        agriPlatformsTitle: "Top Platforms for Farmers",
        whatsappFacebookDesc: "For groups and rapid knowledge exchange.",
        youtubeDesc: "For practical tutorials and modern techniques.",
        instagramDesc_oman: "For visually showcasing agricultural products and innovations.",
        twitterLinkedinDesc_oman: "For discussing policies and technical solutions.",
        whatsappDesc_ug: "The primary tool for communication among farmers in groups.",
        facebookYoutubeDesc_ug: "For sharing information and visual tutorials.",
        sectionTitleCalendar: "Professional Content Calendar",
        calendarIntro: "Explore the most active days and hours in {country}, and get creative content ideas tailored to audience interests. Green days are the most active overall. Click a day to see suggestions.",
        weekdays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        modalTitle: "Suggestions for {month} {day}",
        modalActiveHours: "Active Hours for this Day:",
        modalNoActiveHours: "No prominent active times noted for this day.",
        modalSuggestedPosts: "Suggested Posts for {platform}:",
        modalNoContent: "No specific content suggestions for this day or platform filter.",
        footerPreparedBy: "Prepared by Brandi for Seedtech"
    },
    ar: {
        mainTitle: "تحليل وسائل التواصل الاجتماعي وتقويم المحتوى لـ Seedtech",
        mainSubtitle: "استكشف المشهد الرقمي في السودان وعُمان وأوغندا",
        sudan: "السودان",
        oman: "عُمان",
        uganda: "أوغندا",
        all: "الكل",
        sectionTitleLandscape: "نظرة عامة على المشهد الرقمي",
        landscapeIntro_sudan: "يتميز المشهد الرقمي في السودان بالهيمنة شبه الكاملة لفيسبوك، مدعومًا بميزة 'الوضع المجاني'، مما يجعله شريان حياة للمعلومات. الوصول عبر الهاتف المحمول هو القاعدة الأساسية، مما يوجه استراتيجيات المحتوى نحو البساطة وسهولة الوصول.",
        landscapeIntro_oman: "تتميز عُمان ببيئة رقمية ناضجة مع نسبة انتشار عالية للإنترنت. يتوزع المستخدمون على عدة منصات رئيسية، مع تفضيل واضح للمحتوى المرئي عالي الجودة والمحتوى الذي يعكس الثقافة المحلية.",
        landscapeIntro_uganda: "المشهد الرقمي في أوغندا متنوع ويقوده الشباب إلى حد كبير. يتصدر TikTok المشاركة. يجب أن تكون النبرة تمكينية وعملية وطموحة، تحتفي بالابتكار المتاح ورحلة التحول من زراعة الكفاف إلى مشاريع الخضروات التجارية.",
        statTitleInternet: "انتشار الإنترنت",
        statTitleSocial: "مستخدمو وسائل التواصل",
        statTitleInsight: "رؤية أساسية",
        chartTitle: "توزيع حصة السوق للمنصات",
        marketShareText_sudan: "يستحوذ فيسبوك على حصة سوقية تقارب 90٪، مما يجعله القناة الأساسية للاتصال الرقمي. يأتي تويتر في المرتبة الثانية بفارق كبير، يليه يوتيوب وإنستغرام وبينترست ولينكد إن بحصص أصغر بكثير.",
        marketShareText_oman: "يقود فيسبوك السوق ولكن بهيمنة أقل، مع وجود قوي جدًا لتويتر وإنستغرام، يليهما بينترست ويوتيوب ولينكد إن. يتطلب هذا التنوع استراتيجية متعددة المنصات للوصول إلى شرائح الجمهور المختلفة.",
        marketShareText_uganda: "يتصدر تويتر حصة السوق، يليه فيسبوك وبينترست، ثم يوتيوب وإنستغرام ولينكد إن. يعكس هذا التنوع تفضيلات جمهور شاب ونشط رقميًا، مما يجعله سوقًا ديناميكيًا للتسويق الرقمي.",
        sectionTitleBehavior: "سلوك المستخدم وأنماط التفاعل",
        behaviorIntro: "هنا، نستكشف الأوقات التي يكون فيها المستخدمون أكثر نشاطًا وأنواع المحتوى التي تحقق أعلى تفاعل. فهم هذه الأنماط هو مفتاح التواصل الفعال مع الجمهور المحلي.",
        peakTimesTitle: "أوقات الذروة للنشاط (تقديري)",
        engagingContentTitle: "المحتوى الأكثر تفاعلاً",
        visualContent: "محتوى مرئي",
        breakingNews: "أخبار عاجلة",
        politicalDiscourse: "نقاش سياسي",
        humorSatire: "فكاهة وسخرية",
        localContent: "محتوى محلي",
        personalStories: "قصص شخصية",
        visualStorytelling: "سرد قصصي مرئي",
        shortFormVideo: "فيديو قصير",
        influencerMarketing: "تسويق عبر المؤثرين",
        thoughtLeadership: "قيادة فكرية",
        directEngagement: "تفاعل مباشر",
        videoContent: "محتوى فيديو",
        liveStreaming: "بث مباشر",
        interactiveContent: "محتوى تفاعلي",
        storytelling: "سرد القصص",
        educationalContent: "محتوى تعليمي",
        sectionTitleAgri: "الزراعة في العصر الرقمي",
        agriIntro_sudan: "في السودان، تُستخدم وسائل التواصل الاجتماعي كأداة حيوية للإرشاد الزراعي والوصول إلى الأسواق، خاصة في ظل التحديات التي يفرضها النزاع. تسهل المنصات تبادل المعرفة حول تقنيات الزراعة المرنة.",
        agriIntro_oman: "في عُمان، يركز المحتوى الزراعي الرقمي على مواجهة التحديات البيئية مثل ندرة المياه. هناك اهتمام كبير بالابتكارات التكنولوجية مثل الزراعة المحمية والري الذكي لتعزيز الأمن الغذائي.",
        agriIntro_uganda: "في أوغندا، يتمحور الحوار الزراعي الرقمي حول استخدام التكنولوجيا لمواجهة التهديدات المناخية. هناك تركيز قوي على برامج الرقمنة والشمول المالي لتمكين المزارعين في المناطق الريفية.",
        agriTopicsTitle: "أهم المواضيع الزراعية",
        agriTopicsSubtitle: "انقر على موضوع لاستكشاف المزيد من التفاصيل.",
        knowledgeDissemination: "نشر المعرفة",
        knowledgeDisseminationDesc: "مشاركة المعلومات حول إدارة المحاصيل ومكافحة الآفات وأسعار السوق والحلول التقنية الزراعية لمواجهة التحديات الفورية.",
        marketAccess: "الوصول إلى الأسواق",
        marketAccessDesc: "استخدام منصات مثل فيسبوك ماركت بليس وتيك توك للمبيعات المباشرة للمستهلكين، متجاوزين الوسطاء التقليديين.",
        foodSecurity: "الأمن الغذائي",
        foodSecurityDesc: "التركيز على حماية الموارد الزراعية، والحفاظ على البذور الحيوية في مواجهة النزاع، وتعزيز ممارسات الزراعة المرنة.",
        waterScarcity: "حلول ندرة المياه",
        waterScarcityDesc: "مناقشات حول تقنيات الري المتقدمة مثل الري بالتنقيط والزراعة المائية لمواجهة تحدي ندرة المياه.",
        techInnovations: "الابتكارات التكنولوجية",
        techInnovationsDesc: "عرض حلول الزراعة المحمية، والبيوت البلاستيكية، والتكنولوجيا الحيوية لزيادة الإنتاجية على مدار العام.",
        digitalMarketing: "التسويق الرقمي",
        digitalMarketingDesc: "ظهور 'المؤثرين الزراعيين' واستخدام المنصات الرقمية لربط المزارعين بالأسواق والترويج للمنتجات المحلية.",
        smartAgriculture: "الزراعة الذكية",
        smartAgricultureDesc: "التركيز على التدخلات الذكية مناخياً والتقنيات الرقمية لمواجهة تغير المناخ وتعزيز المرونة البيئية.",
        knowledgeExchange_ug: "تبادل المعرفة",
        knowledgeExchangeDesc_ug: "استخدام واسع النطاق لمنصات مثل واتساب ويوتيوب للحصول على معلومات حول أصناف المحاصيل والأسمدة ومكافحة الآفات.",
        marketAccess_ug: "الوصول إلى الأسواق",
        marketAccessDesc_ug: "مبادرات لربط المزارعين بأسواق أوسع عبر المنصات الرقمية وتعزيز الشمول المالي عبر الأموال المحمولة.",
        agriPlatformsTitle: "أفضل المنصات للمزارعين",
        whatsappFacebookDesc: "للمجموعات وتبادل المعرفة السريع.",
        youtubeDesc: "للدروس التعليمية العملية والتقنيات الحديثة.",
        instagramDesc_oman: "لعرض المنتجات والابتكارات الزراعية بشكل مرئي.",
        twitterLinkedinDesc_oman: "لمناقشة السياسات والحلول التقنية.",
        whatsappDesc_ug: "الأداة الأساسية للتواصل بين المزارعين في المجموعات.",
        facebookYoutubeDesc_ug: "لمشاركة المعلومات والدروس المرئية.",
        sectionTitleCalendar: "تقويم المحتوى الاحترافي",
        calendarIntro: "استكشف الأيام والساعات الأكثر نشاطًا في {country}، واحصل على أفكار محتوى إبداعية مصممة خصيصًا لاهتمامات الجمهور. الأيام الخضراء هي الأكثر نشاطًا بشكل عام. انقر على يوم لرؤية الاقتراحات.",
        weekdays: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
        dayNames: ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'],
        months: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
        modalTitle: "اقتراحات ليوم {day} {month}",
        modalActiveHours: "ساعات النشاط لهذا اليوم:",
        modalNoActiveHours: "لا توجد أوقات نشاط بارزة مسجلة لهذا اليوم.",
        modalSuggestedPosts: "منشورات مقترحة لـ {platform}:",
        modalNoContent: "لا توجد اقتراحات محتوى محددة لهذا اليوم أو فلتر المنصة.",
        footerPreparedBy: "تم الإعداد بواسطة براندي لصالح سيدتك"
    }
};

export const PLATFORMS = {
    all: 'All',
    facebook: 'Facebook',
    tiktok: 'TikTok',
    instagram: 'Instagram',
    linkedin: 'LinkedIn',
    youtube: 'YouTube',
    whatsapp: 'WhatsApp',
};
