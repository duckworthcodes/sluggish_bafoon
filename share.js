document.addEventListener('DOMContentLoaded', () => {
    const videoElement = document.getElementById('video');
    const videoSourceElement = document.getElementById('videoSource');
    const shareBtn = document.getElementById('shareBtn');
    const sharePopup = document.getElementById('sharePopup');
    const closeSharePopup = document.getElementById('closeSharePopup');
    const videoLink = document.getElementById('videoLink');
    const copyLinkBtn = document.getElementById('copyLinkBtn');
    const videoList = document.getElementById('videoList');

    // Video data
    const videos = [
        {
            'video1': 'https://d21v3ezekkpxhy.cloudfront.net/Going+Bad.mp4',
'video2': 'https://d21v3ezekkpxhy.cloudfront.net/The+Warm+Up+J+Cole+Last+Call.mp4',
'video3': 'https://d21v3ezekkpxhy.cloudfront.net/ZEZE.mp4',
'video4': 'https://d21v3ezekkpxhy.cloudfront.net/Bound.mp4',
'video5': 'https://d21v3ezekkpxhy.cloudfront.net/Duckworth.mp4',
'video6': 'https://d21v3ezekkpxhy.cloudfront.net/Feel+The+Fiyaah.mp4',
'video7': 'https://d21v3ezekkpxhy.cloudfront.net/Fukk+Sleep.mp4',
'video8': 'https://d21v3ezekkpxhy.cloudfront.net/Good+Ass+Job.mp4',
'video9': 'https://d21v3ezekkpxhy.cloudfront.net/IGOR.mp4',
'video10': 'https://d21v3ezekkpxhy.cloudfront.net/Never+See+Me+Again.mp4',
'video11': 'https://d21v3ezekkpxhy.cloudfront.net/4+Your+Eyez+Only+J+Cole.mp4',
'video12': 'https://d21v3ezekkpxhy.cloudfront.net/Weeknd+Unreleased.mp4',
'video13': 'https://d21v3ezekkpxhy.cloudfront.net/All+Caps+MF+DOOM.mp4',
'video14': 'https://d21v3ezekkpxhy.cloudfront.net/Back+To+The+Moon+Gunna.mp4',
'video15': 'https://d21v3ezekkpxhy.cloudfront.net/Boredom+Tyler+The+Creator.mp4',
'video16': 'https://d21v3ezekkpxhy.cloudfront.net/Brand+New+Lil+Wayne.mp4',
'video17': 'https://d21v3ezekkpxhy.cloudfront.net/California+Love+2Pac.mp4',
'video18': 'https://d21v3ezekkpxhy.cloudfront.net/For+The+Longest+Time+HIMYM.mp4',
'video19': 'https://d21v3ezekkpxhy.cloudfront.net/Hypnotize+Biggie.mp4',
'video20': 'https://d21v3ezekkpxhy.cloudfront.net/Meet+The+Grahams+Kendrick.mp4',
'video21': 'https://d21v3ezekkpxhy.cloudfront.net/Moonshooter+AB+Soul+Joey+Bada$$.mp4',
'video22': 'https://d21v3ezekkpxhy.cloudfront.net/Nee+Nah+Travis+Scott.mp4',
'video23': 'https://d21v3ezekkpxhy.cloudfront.net/Nikes+Frank+Ocean.mp4',
'video24': 'https://d21v3ezekkpxhy.cloudfront.net/Noamd+Clario.mp4',
'video25': 'https://d21v3ezekkpxhy.cloudfront.net/One+Beer+MF+DOOM.mp4',
'video26': 'https://d21v3ezekkpxhy.cloudfront.net/Saint+Pablo+Kanye+West.mp4',
'video27': 'https://d21v3ezekkpxhy.cloudfront.net/Sexual+Erruption+Snoop+Dogg.mp4',
'video28': 'https://d21v3ezekkpxhy.cloudfront.net/Still+Dre+Dr+Dre+Snoop+Dogg.mp4',
'video29': 'https://d21v3ezekkpxhy.cloudfront.net/Sweet.mp4',
'video30': 'https://d21v3ezekkpxhy.cloudfront.net/The+Watcher+Dr+Dre.mp4',
'video31': 'https://d21v3ezekkpxhy.cloudfront.net/y2mate.com%20-%2021%20Savage%20%20a%20lot%20Official%20Video%20ft%20J%20Cole_1440p.mp4',
'video32': 'https://d21v3ezekkpxhy.cloudfront.net/y2mate.com+-+444+ft+Tyler+The+Creator+ZIPLOC+mashup_1080p.mp4',
'video33': 'https://d21v3ezekkpxhy.cloudfront.net/y2mate.com%20-%20AAP%20Rocky%20%20LD%20LOVE%20x%20EX%20x%20DREAMS_1080p.mp4',
'video34': 'https://d21v3ezekkpxhy.cloudfront.net/y2mate.com%20-%20ARE%20WE%20STILL%20FRIENDS%20But%20It%20Will%20Change%20Your%20Life%20%20prodsb_1440p.mp4',
'video35': 'https://d21v3ezekkpxhy.cloudfront.net/y2mate.com%20-%20Bruno%20Mars%20Anderson%20Paak%20Silk%20Sonic%20%20Leave%20the%20Door%20Open%20Official%20Video_1440p.mp4',
'video36': 'https://d21v3ezekkpxhy.cloudfront.net/y2mate.com%20-%20Denzel%20Curry%20%20%20HOODLUMZ%20ft%20PlayThatBoiZay%20%20AAP%20Rocky%20Official%20Lyric%20Video_1080p.mp4',
'video37': 'https://d21v3ezekkpxhy.cloudfront.net/y2mate.com%20-%20Doomsday_1080p.mp4',
'video38': 'https://d21v3ezekkpxhy.cloudfront.net/y2mate.com%20-%20EAZY%20E%20RIOT%20REMIX%20EXTENDED_1080p.mp4',
'video39': 'https://d21v3ezekkpxhy.cloudfront.net/y2mate.com%20-%20Gucci%20Mane%20Bruno%20Mars%20Kodak%20Black%20%20Wake%20Up%20in%20The%20Sky%20Official%20Music%20Video_1440p.mp4',
'video40': 'https://d21v3ezekkpxhy.cloudfront.net/y2mate.com%20-%20illmatic%20%2002%20%20%20Nas%20%20NY%20State%20of%20Mind_480p.mp4',
'video41': 'https://d21v3ezekkpxhy.cloudfront.net/y2mate.com%20-%20J%20Cole%20%20ATM_1080p.mp4',
'video42': 'https://d21v3ezekkpxhy.cloudfront.net/y2mate.com%20-%20J%20Cole%20%20Freestyle%20Over%20Still%20Tippin%20%20LA%20Leakers%20Freestyle%20Freestyle_1080p.mp4',
'video43': 'https://d21v3ezekkpxhy.cloudfront.net/y2mate.com%20-%20J%20Cole%20%20Kevins%20Heart_1080p.mp4',
'video44': 'https://d21v3ezekkpxhy.cloudfront.net/y2mate.com%20-%20J%20Cole%20%20Trae%20The%20Truth%20In%20Ibiza%20Official%20Audio_1440p.mp4',
'video45': 'https://d21v3ezekkpxhy.cloudfront.net/y2mate.com%20-%20Kendrick%20Lamar%20%20Bitch%20Dont%20Kill%20My%20Vibe%20ft%20JayZ%20Official%20Remix_480p.mp4',
'video46': 'https://d21v3ezekkpxhy.cloudfront.net/y2mate.com%20-%20Kendrick%20Lamar%20%20J%20Cole%20%20Black%20Friday_720pFH.mp4',
'video47': 'https://d21v3ezekkpxhy.cloudfront.net/y2mate.com%20-%20Mac%20Miller%20%20Floating_1080p.mp4',
'video48': 'https://d21v3ezekkpxhy.cloudfront.net/y2mate.com%20-%20Mirage_1080p.mp4',
'video49': 'https://d21v3ezekkpxhy.cloudfront.net/y2mate.com%20-%20Mobb%20Deep%20%20Shook%20Ones%20Pt%20II%20Official%20HD%20Video_1080p.mp4',
'video50': 'https://d21v3ezekkpxhy.cloudfront.net/y2mate.com%20-%20Momma_1080p.mp4',
'video51': 'https://d21v3ezekkpxhy.cloudfront.net/y2mate.com%20-%20Nigo%20%20Arya%20ft%20AAP%20Rocky%20Official%20Music%20Video_1440p.mp4',
'video52': 'https://d21v3ezekkpxhy.cloudfront.net/y2mate.com%20-%20Travis%20Scott%20%20STOP%20TRYING%20TO%20BE%20GOD_1080p.mp4',
'video53': 'https://d21v3ezekkpxhy.cloudfront.net/y2mate.com%20-%20Travis%20Scott%20%20ASTROWORLD%20Full%20Album_1080p.mp4',
'video54': 'https://d21v3ezekkpxhy.cloudfront.net/y2mate.com%20-%20Remember%20the%20Time_1080p.mp4',
'video55': 'https://d21v3ezekkpxhy.cloudfront.net/y2mate.com%20-%20Travis%20Scott%20feat%20Young%20Thug%20%20MIA%20%20FRANCHISE%20Official%20Music%20Video_1440p.mp4',
'video56': 'https://d21v3ezekkpxhy.cloudfront.net/y2mate.com%20-%20White_1080p.mp4',
'video57': 'https://d21v3ezekkpxhy.cloudfront.net/y2mate.com%20-%20Wings_1080p.mp4',
'video58': 'https://d21v3ezekkpxhy.cloudfront.net/y2mate.com%20-%20The%20Notorious%20BIG%20%20Big%20Poppa%20Official%20Music%20Video%20HD_1080p.mp4',
'video59': 'https://d21v3ezekkpxhy.cloudfront.net/y2mate.com%20-%20Michael%20Jackson%20%20Beat%20It%20Official%204K%20Video_1440p.mp4',
'video60': 'https://d21v3ezekkpxhy.cloudfront.net/y2mate.com%20-%20Tyler%20The%20Creator%20%20JUGGERNAUT%20Official%20Video_1080p.mp4',
'video61': 'https://d21v3ezekkpxhy.cloudfront.net/y2mate.com%20-%20The%20White%20Stripes%20%20Seven%20Nation%20Army%20Official%20Music%20Video_1080p.mp4',
'video62': 'https://d21v3ezekkpxhy.cloudfront.net/y2mate.com%20-%20System%20Of%20A%20Down%20%20Chop%20Suey%20Official%20HD%20Video_1080p.mp4',
'video63': 'https://d21v3ezekkpxhy.cloudfront.net/y2mate.com%20-%20Stronger_1080p.mp4',
'video64': 'https://d21v3ezekkpxhy.cloudfront.net/y2mate.com%20-%20Slipknot%20%20Duality%20OFFICIAL%20VIDEO%20HD_1080p.mp4',
'video65': 'https://d21v3ezekkpxhy.cloudfront.net/y2mate.com%20-%20Rome%20Streetz%20Wavy%20Da%20Ghawd%20%2092%20Mike%20Official%20Video_1080p.mp4',
'video66': 'https://d21v3ezekkpxhy.cloudfront.net/y2mate.com%20-%20Rick%20Astley%20%20Never%20Gonna%20Give%20You%20Up%20Official%20Music%20Video_1080p.mp4',
'video67': 'https://d21v3ezekkpxhy.cloudfront.net/y2mate.com%20-%20Queen%20%20Dont%20Stop%20Me%20Now%20Official%20Video_360p.mp4',
'video68': 'https://d21v3ezekkpxhy.cloudfront.net/y2mate.com%20-%20Pusha%20T%20%20Diet%20Coke_1440p.mp4',
'video69': 'https://d21v3ezekkpxhy.cloudfront.net/y2mate.com%20-%20Protect%20Ya%20Neck%20Official%20Audio_1080p.mp4',
'video70': 'https://d21v3ezekkpxhy.cloudfront.net/y2mate.com%20-%20PIMP_720pFH.mp4',
'video71': 'https://d21v3ezekkpxhy.cloudfront.net/y2mate.com%20-%20One%20Step%20Ahead_1080p.mp4',
'video72': 'https://d21v3ezekkpxhy.cloudfront.net/y2mate.com%20-%20Nirvana%20%20Smells%20Like%20Teen%20Spirit%20Official%20Music%20Video_1080p.mp4',
'video73': 'https://d21v3ezekkpxhy.cloudfront.net/y2mate.com%20-%20Metallica%20Enter%20Sandman%20Official%20Music%20Video_480p.mp4',
'video74': 'https://d21v3ezekkpxhy.cloudfront.net/y2mate.com%20-%20Kenny%20Loggins%20%20Danger%20Zone%20Official%20Video%20%20Top%20Gun_480p.mp4',
'video75': 'https://d21v3ezekkpxhy.cloudfront.net/y2mate.com%20-%20I%20Luv%20Your%20Girl_720pFH.mp4',
'video76': 'https://d21v3ezekkpxhy.cloudfront.net/y2mate.com%20-%20Gold%20Digger%20feat%20Jamie%20Foxx%20Explicit_480p.mp4',
'video77': 'https://d21v3ezekkpxhy.cloudfront.net/y2mate.com%20-%20Cookin%20soul%20x%20MFDOOM%20type%20beat%20li%C4%9Fm%C3%A0%20%C5%94izz%20bby_v720P.mp4',
'video78': 'https://d21v3ezekkpxhy.cloudfront.net/y2mate.com%20-%20Kendrick%20Lamar%20%20Not%20Like%20Us_1080p.mp4',
'video79': 'https://d21v3ezekkpxhy.cloudfront.net/y2mate.com%20-%20Green%20Day%20%20Boulevard%20Of%20Broken%20Dreams%20Official%20Music%20Video_480p.mp4',
'video80': 'https://d21v3ezekkpxhy.cloudfront.net/y2mate.com%20-%20Freddie%20Gibbs%20%20The%20Alchemist%20%20Something%20to%20Rap%20About%20feat%20Tyler%20The%20Creator%20Visualizer_1080p.mp4',
'video81': 'https://d21v3ezekkpxhy.cloudfront.net/y2mate.com%20-%20Eagles%20%20Hotel%20California%20Live%201977%20Official%20Video%20HD_1080p.mp4',
'video82': 'https://d21v3ezekkpxhy.cloudfront.net/y2mate.com%20-%20Bon%20Jovi%20%20Livin%20On%20A%20Prayer_1440p.mp4',
'video83': 'https://d21v3ezekkpxhy.cloudfront.net/y2mate.com%20-%20BLACK%20SABBATH%20%20Paranoid%20Official%20Video_480p.mp4',
'video84': 'https://d21v3ezekkpxhy.cloudfront.net/y2mate.com%20-%20JID%20%20J%20Cole%20feat%20Kenny%20Mason%20%20Sheck%20Wes%20%20Stick%20Official%20Music%20Video_1440p.mp4',
'video85': 'https://d21v3ezekkpxhy.cloudfront.net/y2mate.com%20-%20J%20Cole%20%20Neighbors%20Official%20Music%20Video_1080p.mp4',
'video86': 'https://d21v3ezekkpxhy.cloudfront.net/y2mate.com%20-%20Drake%20%20Jimmy%20Cooks%20ft%2021%20Savage_1080p.mp4',
'video87': 'https://d21v3ezekkpxhy.cloudfront.net/y2mate.com%20-%20Migos%20Trade%20Bars%20In%20Culture%203%20Stamped%20Freestyle%20With%20The%20LA%20Leakers%20%20Freestyle%20111_1080p.mp4',
'video88': 'https://d21v3ezekkpxhy.cloudfront.net/y2mate.com%20-%20Caged%20Bird_1080p.mp4',
'video89': 'https://d21v3ezekkpxhy.cloudfront.net/y2mate.com%20-%20New%20Slaves_1080p.mp4',
'video90': 'https://d21v3ezekkpxhy.cloudfront.net/Y2meta.app-Righteous%20Minds.mp4',
'video91': 'https://d21v3ezekkpxhy.cloudfront.net/y2mate.com%20-%20Kendrick%20Lamar%20ft%20Kodak%20Black%20%20Silent%20Hill%20Music%20Video_1080pFHR.mp4',
'video92': 'https://d21v3ezekkpxhy.cloudfront.net/Y2meta.app-Life.mp4',
'video93': 'https://d21v3ezekkpxhy.cloudfront.net/y2mate.com%20-%20Travis%20Scott%20%20YOSEMITE_1080p.mp4',
'video94': 'https://d21v3ezekkpxhy.cloudfront.net/y2mate.com%20-%2021%20Savage%20Offset%20Metro%20Boomin%20%20Ric%20Flair%20Drip%20Official%20Music%20Video_1080p.mp4',
'video95': 'https://d21v3ezekkpxhy.cloudfront.net/Y2meta.app-A$AP%20Rocky%20-%20Jukebox%20Joints%20(Explicit%20-%20Official%20Video)%20ft.%20Joe%20Fox,%20Kanye%20West.mp4',
'video96': 'https://d21v3ezekkpxhy.cloudfront.net/y2mate.com%20-%2090210%20by%20Travis%20Scott%20but%20it%20will%20change%20your%20life_1080pFH.mp4',
'video97': 'https://d21v3ezekkpxhy.cloudfront.net/y2mate.com%20-%20Bruno%20mars%20%20unreleased%20tracks_1080p.mp4',
'video98': 'https://d21v3ezekkpxhy.cloudfront.net/y2mate.com%20-%20Joey%20Bada%20Spits%20Fire%20Over%20Futures%20Mask%20Off%20beat%20%20Freestyle%20005_1080p.mp4',
'video99': 'https://d21v3ezekkpxhy.cloudfront.net/y2mate.com%20-%20Kendrick%20Lamar%20%20LOYALTY%20ft%20Rihanna_1080p.mp4',
'video100':'https://d21v3ezekkpxhy.cloudfront.net/y2mate.com%20-%20Hell%20Of%20A%20Life_1080p.mp4',
'video101': 'https://d21v3ezekkpxhy.cloudfront.net/Clairo%20-%20Juna.mp4',
'video102': "https://d21v3ezekkpxhy.cloudfront.net/Runnin'%20(Dying%20To%20Live)%20-%202Pac%20(feat.%20Notorious%20B.I.G).mp4",
'video103': 'https://d21v3ezekkpxhy.cloudfront.net/Kanye%20West%20&%20Andr%C3%A9%203000%20-%20Life%20of%20the%20Party%20OG%20VERSE.mp4',
'video104': 'https://d21v3ezekkpxhy.cloudfront.net/Travis%20Scott%20-%20sdp%20interlude%20(Extended).mp4',
'video105': 'https://d21v3ezekkpxhy.cloudfront.net/Roses.mp4',
'video106': 'https://d21v3ezekkpxhy.cloudfront.net/Already%20Home.mp4',
'video107': 'https://d21v3ezekkpxhy.cloudfront.net/Eminem%20-%20Fuel%20(feat.%20JID)%20%5BOfficial%20Audio%5D.mp4',
'video108': 'https://d21v3ezekkpxhy.cloudfront.net/Gorgeous.mp4',
'video109': 'https://d21v3ezekkpxhy.cloudfront.net/Frank%20Ocean%20-%20Ivy.mp4',
'video110': 'https://d21v3ezekkpxhy.cloudfront.net/BoJack%20Horseman%20_%20Opening%20Credits%20Theme%20Song%20%5BHD%5D%20_%20Netflix.mp4',
'video111': 'https://videostreambucketpleasedontdeleteorstopit.s3.amazonaws.com/Frank+Ocean+-+Pink+%2B+White+(1).mp4',
'video112': 'https://d21v3ezekkpxhy.cloudfront.net/Red%20Hot%20Chili%20Peppers%20-%20Scar%20Tissue%20%5BOfficial%20Music%20Video%5D.mp4',
'video113': 'https://d21v3ezekkpxhy.cloudfront.net/Playboi%20Carti-%20Immortal%20(Lyrics).mp4',
'video114': 'https://d21v3ezekkpxhy.cloudfront.net/The%20Weeknd%20-%20Dawn%20FM%20_%20Full%20Album.mp4',
'video115': 'https://d21v3ezekkpxhy.cloudfront.net/y2mate.com%20-%20In%20The%20End%20Official%20HD%20Music%20Video%20%20Linkin%20Park_1080.mp4',
'video116': 'https://d21v3ezekkpxhy.cloudfront.net/Oasis%20-%20Champagne%20Supernova%20(Official%20Video).mp4',
'video117': 'https://d21v3ezekkpxhy.cloudfront.net/Kanye%20West%20Sunday%20Service%20-%20_Father%20Stretch%20My%20Hands_%20(Live%20From%20Paris,%20France).mp4',
'video118': 'https://d21v3ezekkpxhy.cloudfront.net/John%20Cena%E2%80%99s%202005%20%E2%80%9CMy%20Time%20is%20Now%E2%80%9D%20entrance%20video.mp4',
'video119': 'https://d21v3ezekkpxhy.cloudfront.net/Big%20Pun,%20Fat%20Joe_%20Twinz%20(Deep%20Cover%2098)%20(EXPLICIT)%20%5BUP.S%201440p%5D%20(1998).mp4',
'video120': 'https://d21v3ezekkpxhy.cloudfront.net/Metro%20Boomin%20-%20BBL%20DRIZZY.mp4',





        },
        // Add more videos as needed
    ];

    // Populate the playlist
    videos.forEach((video) => {
        const li = document.createElement('li');
        li.textContent = video.title;
        li.dataset.url = video.url;
        li.style.cursor = 'pointer';
        li.addEventListener('click', () => {
            videoSourceElement.src = video.url;
            videoElement.load();
        });
        videoList.appendChild(li);
    });

    // Share button click event
    shareBtn.addEventListener('click', () => {
        const videoSource = videoSourceElement.src;
        videoLink.value = videoSource;
        sharePopup.style.display = 'flex';  // Show the popup
    });

    // Close share popup
    closeSharePopup.addEventListener('click', () => {
        sharePopup.style.display = 'none';  // Hide the popup
    });

    // Copy video link to clipboard
    copyLinkBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(videoLink.value)
            .then(() => {
                copyLinkBtn.innerText = 'Copied';
                setTimeout(() => {
                    copyLinkBtn.innerText = 'Copy Link';
                }, 3000);
            })
            .catch(err => {
                console.error('Failed to copy: ', err);
            });
    });
});