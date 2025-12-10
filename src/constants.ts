
import type { Attraction, Mountain, Product, LocalizedString, RedeemItem } from './types';

export const TRANSLATIONS = {
  vi: {
    home: "Trang chủ",
    intro: "Giới thiệu",
    destinations: "Điểm đến",
    shop: "Cửa hàng",
    language: "Ngôn ngữ",
    buyTicket: "Mua Vé",
    exploreNow: "Khám Phá Ngay",
    watchVideo: "Xem Video",
    getDirections: "Chỉ Đường",
    heritage: "Di sản văn hóa & Thiên nhiên",
    heroTitle: "Ngũ Hành Sơn Travel Discovery",
    heroDesc: "Khám phá vẻ đẹp huyền bí của quần thể di tích Ngũ Hành Sơn - Kỳ quan tâm linh giữa lòng Đà Nẵng.",
    passportTitle: "Hộ Chiếu Du Lịch Thông Minh",
    passportDesc: "Tích điểm, nhận quà và lưu giữ kỷ niệm hành trình.",
    createPassport: "Tạo Hộ Chiếu Ngay",
    footerAddress: "Ngũ Hành Sơn Travel Discovery",
    back: "Quay lại",
    shopTitle: "Làng Đá Mỹ Nghệ Non Nước",
    shopDesc: "Tinh hoa nghệ thuật điêu khắc đá qua bàn tay nghệ nhân.",
    viewDetail: "Xem Chi Tiết",
    price: "Giá",
    priceReference: "Tham khảo",
    contact: "Liên Hệ",
    openTime: "Giờ Mở Cửa",
    ticketPrice: "Giá Vé Tham Quan",
    bestTime: "Thời Điểm Lý Tưởng",
    exploreTitle: "Hành Trình Khám Phá",
    exploreDesc: "Những điểm đến tâm linh và văn hóa không thể bỏ qua.",
    redeemPoints: "Đổi Điểm Thưởng",
    redeemTitle: "Kho Quà Lưu Niệm & Tem Số",
    redeemDesc: "Sử dụng điểm tích lũy từ hộ chiếu để đổi lấy các vật phẩm độc quyền.",
    myPoints: "Điểm của bạn",
    redeem: "Đổi Ngay",
    redeemed: "Đã Đổi",
    insufficientPoints: "Không đủ điểm",
    backToPassport: "Về Hộ Chiếu",
    close: "Đóng",
    legendTitle: "Huyền Thoại & Lịch Sử",
    legendDesc: "Theo truyền thuyết, thuở xa xưa có một con rồng lớn từ biển Đông bay vào đẻ trứng. Sau 1000 ngày đêm, trứng nở ra một nàng tiên xinh đẹp, còn vỏ trứng vỡ thành 5 mảnh tạo nên 5 ngọn núi: Kim, Mộc, Thủy, Hỏa, Thổ. Ngày nay, đây là biểu tượng văn hóa tâm linh độc đáo của Đà Nẵng, hội tụ vẻ đẹp của núi non, hang động và chùa chiền.",
    mountainsTitle: "Năm Ngọn Núi Hùng Vĩ"
  },
  en: {
    home: "Home",
    intro: "Introduction",
    destinations: "Destinations",
    shop: "Shop",
    language: "Language",
    buyTicket: "Buy Ticket",
    exploreNow: "Explore Now",
    watchVideo: "Watch Video",
    getDirections: "Get Directions",
    heritage: "Cultural & Natural Heritage",
    heroTitle: "Marble Mountains Travel Discovery",
    heroDesc: "Discover the mystical beauty of the Marble Mountains complex - A spiritual wonder in the heart of Da Nang.",
    passportTitle: "Digital Travel Passport",
    passportDesc: "Collect points, get rewards and save your journey memories.",
    createPassport: "Create Passport",
    footerAddress: "Marble Mountains Travel Discovery",
    back: "Back",
    shopTitle: "Non Nuoc Stone Carving Village",
    shopDesc: "The essence of stone sculpture art through the hands of artisans.",
    viewDetail: "View Details",
    price: "Price",
    priceReference: "Reference",
    contact: "Contact",
    openTime: "Opening Hours",
    ticketPrice: "Entrance Fee",
    bestTime: "Best Time to Visit",
    exploreTitle: "Discovery Journey",
    exploreDesc: "Spiritual and cultural destinations you cannot miss.",
    redeemPoints: "Redeem Points",
    redeemTitle: "Souvenirs & Digital Stamps",
    redeemDesc: "Use your passport points to redeem exclusive items.",
    myPoints: "Your Points",
    redeem: "Redeem",
    redeemed: "Redeemed",
    insufficientPoints: "Need more points",
    backToPassport: "Back to Passport",
    close: "Close",
    legendTitle: "Legend & History",
    legendDesc: "According to legend, a dragon from the East Sea laid an egg here. After 1000 days, it hatched a beautiful fairy, and the eggshell broke into 5 pieces forming 5 mountains: Metal, Wood, Water, Fire, and Earth. Today, it is a unique spiritual symbol of Da Nang, converging the beauty of mountains, caves, and pagodas.",
    mountainsTitle: "The Five Majestic Mountains"
  },
  cn: {
    home: "主页",
    intro: "介绍",
    destinations: "目的地",
    shop: "商店",
    language: "语言",
    buyTicket: "买票",
    exploreNow: "立即探索",
    watchVideo: "观看视频",
    getDirections: "获取路线",
    heritage: "文化与自然遗产",
    heroTitle: "五行山旅游探索",
    heroDesc: "探索五行山遗迹群的神秘之美——岘港中心的精神奇观。",
    passportTitle: "数字旅游护照",
    passportDesc: "收集积分，获得奖励并保存您的旅程记忆。",
    createPassport: "立即创建护照",
    footerAddress: "Marble Mountains Travel Discovery",
    back: "返回",
    shopTitle: "Non Nuoc 石雕村",
    shopDesc: "工匠手中的石雕艺术精髓。",
    viewDetail: "查看详情",
    price: "价格",
    priceReference: "参考",
    contact: "联系",
    openTime: "开放时间",
    ticketPrice: "门票价格",
    bestTime: "最佳游览时间",
    exploreTitle: "探索之旅",
    exploreDesc: "不可错过的精神和文化目的地。",
    redeemPoints: "兑换积分",
    redeemTitle: "纪念品和数字邮票",
    redeemDesc: "使用您的护照积分兑换独家物品。",
    myPoints: "您的积分",
    redeem: "兑换",
    redeemed: "已兑换",
    insufficientPoints: "积分不足",
    backToPassport: "返回护照",
    close: "关",
    legendTitle: "传说与历史",
    legendDesc: "相传，东海一条巨龙在此产下一枚蛋。1000天后，孵化出一位美丽的仙女，蛋壳碎成5块，形成5座山：金、木、水、火、土。如今，它是岘港独特的精神象征，汇聚了山、洞、寺之美。",
    mountainsTitle: "五座雄伟的山峰"
  },
  kr: {
    home: "홈",
    intro: "소개",
    destinations: "목적지",
    shop: "상점",
    language: "언어",
    buyTicket: "티켓 구매",
    exploreNow: "지금 탐험하기",
    watchVideo: "비디오 보기",
    getDirections: "길 찾기",
    heritage: "문화 및 자연 유산",
    heroTitle: "오행산 여행 발견",
    heroDesc: "다낭의 중심부에 있는 영적인 경이로움인 오행산 복합 단지의 신비로운 아름다움을 발견하세요.",
    passportTitle: "디지털 여행 여권",
    passportDesc: "포인트를 모으고 보상을 받고 여행의 추억을 저장하세요.",
    createPassport: "여권 만들기",
    footerAddress: "Marble Mountains Travel Discovery",
    back: "뒤로",
    shopTitle: "논 누옥 석조 조각 마을",
    shopDesc: "장인의 손을 통한 석조 조각 예술의 정수.",
    viewDetail: "상세 보기",
    price: "가격",
    priceReference: "참고",
    contact: "연락처",
    openTime: "개장 시간",
    ticketPrice: "입장료",
    bestTime: "방문하기 가장 좋은 시간",
    exploreTitle: "탐험 여정",
    exploreDesc: "놓칠 수 없는 영적 및 문화적 명소.",
    redeemPoints: "포인트 사용",
    redeemTitle: "기념품 및 디지털 스탬프",
    redeemDesc: "여권 포인트를 사용하여 독점 아이템을 교환하세요.",
    myPoints: "내 포인트",
    redeem: "교환하기",
    redeemed: "교환됨",
    insufficientPoints: "포인트 부족",
    backToPassport: "여권으로 돌아가기",
    close: "닫기",
    legendTitle: "전설과 역사",
    legendDesc: "전설에 따르면 동해의 용이 이곳에 알을 낳았다고 합니다. 1000일 후 아름다운 요정이 부화했고, 알 껍질은 5조각으로 깨져 금, 목, 수, 화, 토의 5개 산이 되었습니다. 오늘날 이곳은 산, 동굴, 사찰의 아름다움이 어우러진 다낭의 독특한 영적 상징입니다.",
    mountainsTitle: "다섯 개의 장엄한 산"
  }
};

export const ATTRACTIONS: Attraction[] = [
  {
    id: 'linhung',
    name: { vi: 'Chùa Linh Ứng', en: 'Linh Ung Pagoda', cn: '灵应寺', kr: '린응 사원' },
    description: { 
      vi: 'Ngôi chùa cổ linh thiêng bậc nhất tại Ngũ Hành Sơn, nổi tiếng với tượng Phật Thích Ca cao 10m.',
      en: 'The most sacred ancient pagoda in Marble Mountains, famous for the 10m high Buddha statue.',
      cn: '五行山最神圣的古寺，以10米高的释迦牟尼佛像闻名。',
      kr: '10m 높이의 불상으로 유명한 오행산에서 가장 신성한 고대 사원입니다.'
    },
    details: {
      vi: 'Chùa Linh Ứng (Thủy Sơn) là ngôi chùa cổ nhất trong "Tam Linh Ứng" tại Đà Nẵng, được vua Minh Mạng sắc phong Quốc tự vào năm 1825. Ngôi chùa mang đậm kiến trúc Phật giáo Việt Nam thế kỷ 19 với mái ngói lưu ly và các cột rồng uy nghi. Điểm nhấn đặc biệt là tượng Phật Thích Ca Mâu Ni cao 10m trắng muốt, tọa lạc trang nghiêm giữa núi rừng. Phía sau chùa là Tháp Xá Lợi 7 tầng, nơi lưu giữ nhiều kinh sách và xá lợi Phật quý giá.',
      en: 'Linh Ung Pagoda (on Water Mountain) is the oldest of the three "Linh Ung" pagodas in Da Nang, designated as a National Pagoda by King Minh Mang in 1825. It features 19th-century Vietnamese Buddhist architecture with glazed tile roofs and majestic dragon pillars. The highlight is the 10m tall white Shakyamuni Buddha statue. Behind the pagoda stands the 7-story Xa Loi Stupa, housing Buddhist scriptures and relics.',
      cn: '灵应寺（水山）是岘港三座“灵应”寺中最古老的一座，于1825年被明命帝封为国寺。它具有19世纪越南佛教建筑风格。亮点是10米高的白色释迦牟尼佛像。寺后是7层舍利塔，藏有珍贵的佛经和舍利。',
      kr: '린응 사원(수산)은 1825년 민망 왕이 국립 사찰로 지정한 다낭의 3대 "린응" 사찰 중 가장 오래된 사찰입니다. 19세기 베트남 불교 건축 양식이 특징입니다. 하이라이트는 10m 높이의 흰색 석가모니 불상입니다. 사원 뒤에는 불교 경전과 사리를 보관하는 7층 사리탑이 있습니다.'
    },
    image: 'https://vinwondershoian.com/userfiles/image/hoian-danang/2022/chua-linh-ung/1-toan-anh-chua-linh-ung.jpg',
    features: ['Tâm linh', 'Kiến trúc cổ']
  },
  {
    id: 'huyenkhong',
    name: { vi: 'Động Huyền Không', en: 'Huyen Khong Cave', cn: '玄空洞', kr: '후옌 콩 동굴' },
    description: {
      vi: 'Hang động đẹp nhất với vòm trần hở đưa ánh sáng mặt trời rọi xuống tượng Phật huyền ảo.',
      en: 'The most beautiful cave with an open ceiling letting sunlight shine down on the mystical Buddha statue.',
      cn: '最美丽的洞穴，开放的拱顶让阳光照耀在神秘的佛像上。',
      kr: '열린 천장으로 햇빛이 신비로운 불상을 비추는 가장 아름다운 동굴입니다.'
    },
    details: {
      vi: 'Động Huyền Không được mệnh danh là hang động đẹp và huyền ảo nhất của Ngũ Hành Sơn. Trần động có các lỗ hổng tự nhiên (giếng trời) giúp ánh sáng chan hòa, tạo nên khung cảnh tiên bồng thực thực hư hư. Trong lịch sử kháng chiến, đây từng là trạm sơ cứu thương binh bí mật. Ngày nay, động là nơi thờ Phật Thích Ca ở vị trí cao nhất, cùng đền thờ Bà Chúa Tiên, thu hút hàng triệu lượt khách cầu bình an và tài lộc.',
      en: 'Huyen Khong Cave is considered the most beautiful and mystical cave of the Marble Mountains. The ceiling has natural skylights allowing sunlight to pour in, creating a surreal atmosphere. Historically, it served as a secret field hospital during the war. Today, it houses a high-placed Shakyamuni Buddha statue and shrines to the Lady Fairy, attracting millions of visitors praying for peace and prosperity.',
      cn: '玄空洞被誉为五行山最美丽、最神秘的洞穴。天花板上有天然天窗，阳光倾泻而入，营造出超现实的氛围。历史上，它曾在战争期间作为秘密野战医院。如今，它是供奉释迦牟尼佛和仙女的地方，吸引了数百万游客祈求平安和繁荣。',
      kr: '후옌 콩 동굴은 오행산에서 가장 아름답고 신비로운 동굴로 간주됩니다. 천장에는 자연 채광창이 있어 햇빛이 쏟아져 들어와 초현실적인 분위기를 연출합니다. 역사적으로 전쟁 중에는 비밀 야전 병원 역할을 했습니다. 오늘날 이곳에는 석가모니 불상과 선녀 사당이 있어 평화와 번영을 기원하는 수백만 명의 방문객이 찾습니다.'
    },
    image: 'https://cdn3.ivivu.com/2022/09/dong-huyen-khong-ivivu.jpeg',
    features: ['Hang động', 'Ánh sáng tự nhiên']
  },
  {
    id: 'amphu',
    name: { vi: 'Động Âm Phủ', en: 'Hell Cave', cn: '阴府洞', kr: '암 푸 동굴' },
    description: {
      vi: 'Tái hiện cảnh giới âm phủ và thiên đường, giáo dục về luật nhân quả và đạo hiếu.',
      en: 'Recreates the realms of hell and heaven, educating about karma and filial piety.',
      cn: '重现地狱和天堂的境界，教育因果报应和孝道。',
      kr: '지옥과 천국의 영역을 재현하여 인과응보와 효도에 대해 교육합니다.'
    },
    details: {
      vi: 'Động Âm Phủ là một tuyệt tác tự nhiên kết hợp nhân tạo, tái hiện thuyết luân hồi và luật nhân quả của Phật giáo. Cấu trúc động chia làm hai ngả: ngả lên "Thiên Đường" sáng sủa với các tượng tiên thánh, và ngả xuống "Địa Ngục" u tối với 18 tầng hình phạt. Du khách sẽ đi qua cầu Âm Dương, suối Giải Oan và chiêm nghiệm về thiện - ác. Đây là bài học giáo dục đạo đức sâu sắc cho mọi thế hệ.',
      en: 'Hell Cave is a masterpiece illustrating Buddhist reincarnation and karma. The structure splits into two paths: one leading up to a bright "Heaven" with deity statues, and one descending into a dark "Hell" depicting 18 levels of punishment. Visitors cross the Yin-Yang Bridge and reflect on good versus evil. It serves as a profound moral lesson for all generations.',
      cn: '阴府洞是阐述佛教轮回和因果报应的杰作。结构分为两条路：一条通向光明的“天堂”，另一条通向黑暗的“地狱”，描绘了18层刑罚。游客穿过阴阳桥，反思善与恶。这对世世代代都是深刻的道德教训。',
      kr: '암 푸 동굴은 불교의 윤회와 업보를 보여주는 걸작입니다. 구조는 두 갈래로 나뉩니다. 하나는 신상이 있는 밝은 "천국"으로 이어지고, 다른 하나는 18단계의 형벌을 묘사한 어두운 "지옥"으로 내려갑니다. 방문객들은 음양교를 건너며 선과 악에 대해 생각합니다. 이는 모든 세대에게 심오한 도덕적 교훈을 줍니다.'
    },
    image: 'https://statics.vinpearl.com/dong-am-phu-1_1679474728.jpg',
    features: ['Bí ẩn', 'Giáo dục']
  },
  {
    id: 'tangchon',
    name: { vi: 'Động Tàng Chơn', en: 'Tang Chon Cave', cn: '藏真洞', kr: '탕 촌 동굴' },
    description: {
      vi: 'Nằm sau chùa Linh Ứng, mang vẻ đẹp hoang sơ, tĩnh lặng, nơi lưu giữ nhiều văn bia cổ.',
      en: 'Located behind Linh Ung Pagoda, it has a wild, quiet beauty and preserves many ancient steles.',
      cn: '位于灵应寺后，拥有原始、宁静的美，保存着许多古碑。',
      kr: '린응 사원 뒤에 위치하며, 야생적이고 조용한 아름다움을 지니고 있으며 많은 고대 비석을 보존하고 있습니다.'
    },
    details: {
      vi: 'Động Tàng Chơn, hay "nơi cất giấu chân lý", nằm ẩn mình sau chùa Linh Ứng. Động thông thiên qua cửa Thiên Long Cốc, đón nắng gió tự nhiên. Nền động bằng phẳng, thờ các vị thần Chăm Pa cổ đại cùng chư Phật, cho thấy sự giao thoa tín ngưỡng độc đáo. Đặc biệt, nơi đây còn lưu giữ các tấm bia đá cổ từ thời Nguyễn, ghi lại lịch sử trùng tu và danh tính các vị cao tăng.',
      en: 'Tang Chon Cave, meaning "place hiding the truth", is tucked behind Linh Ung Pagoda. It connects to the sky through the Thien Long Coc gate. The cave floor is flat, housing altars for ancient Cham Pa deities and Buddhas, showcasing a unique blend of beliefs. It also preserves ancient stone steles from the Nguyen Dynasty, recording restoration history and high monks.',
      cn: '藏真洞意为“藏真理之地”，位于灵应寺后。它通过天龙谷门与天空相连。洞底平坦，供奉着古老的占婆神和佛像，展示了独特的信仰融合。它还保存着阮朝的古石碑，记录了修缮历史和高僧。',
      kr: '탕 촌 동굴은 "진리를 숨기는 곳"이라는 뜻으로 린응 사원 뒤에 숨겨져 있습니다. 티엔 롱 콕 문을 통해 하늘과 연결됩니다. 동굴 바닥은 평평하며 고대 참파 신과 불상을 위한 제단이 있어 독특한 신앙의 융합을 보여줍니다. 또한 응우옌 왕조의 고대 비석이 보존되어 있어 복원 역사와 고승들에 대한 기록이 남아 있습니다.'
    },
    image: 'https://danangbest.com/upload_content/dong-tang-chon-5.jpg',
    features: ['Yên tĩnh', 'Văn bia']
  },
  {
    id: 'vonggiang',
    name: { vi: 'Vọng Giang Đài', en: 'River Watching Terrace', cn: '望江台', kr: '강 전망대' },
    description: {
      vi: 'Điểm cao nhất trên Thủy Sơn, nơi ngắm toàn cảnh sông Cổ Cò và làng đá mỹ nghệ bên dưới.',
      en: 'The highest point on Water Mountain, offering a panoramic view of the Co Co River and the stone village below.',
      cn: '水山的最高点，可全景俯瞰古哥河和下方的石雕村。',
      kr: '수산의 가장 높은 지점으로, 코코 강과 아래의 석조 마을을 파노라마로 볼 수 있습니다.'
    },
    details: {
      vi: 'Vọng Giang Đài nằm ở vị trí đắc địa trên đỉnh Thủy Sơn, được xây dựng từ năm 1837. Đúng như tên gọi "Đài ngắm sông", từ đây du khách có thể thu vào tầm mắt dòng sông Cổ Cò uốn lượn hiền hòa, bao quanh là ruộng đồng xanh ngát và làng đá mỹ nghệ Non Nước nhộn nhịp. Đây là điểm check-in lý tưởng để bắt trọn khoảnh khắc hoàng hôn buông xuống núi Ngũ Hành.',
      en: 'Vong Giang Dai is located at a prime spot on Water Mountain, built in 1837. True to its name "River Watching Terrace", visitors can enjoy a panoramic view of the gentle Co Co River, surrounded by green fields and the bustling Non Nuoc stone carving village. It is an ideal check-in spot to capture the sunset over the Marble Mountains.',
      cn: '望江台位于水山的黄金地段，建于1837年。正如其名“望江台”，游客可以欣赏到柔和的古哥河全景，周围是绿色的田野和繁忙的 Non Nuoc 石雕村。这是拍摄五行山日落的理想打卡点。',
      kr: '봉장대는 1837년에 지어진 수산의 주요 지점에 위치해 있습니다. "강을 바라보는 테라스"라는 이름에 걸맞게 방문객들은 푸른 들판과 번화한 논 누옥 석조 조각 마을로 둘러싸인 완만한 코코 강의 파노라마 전망을 즐길 수 있습니다. 오행산의 일몰을 담기에 이상적인 체크인 장소입니다.'
    },
    image: 'https://nguhanhson.org/wp-content/uploads/2012/10/p1030068_1024x768.jpg',
    features: ['Cảnh quan', 'Check-in']
  },
  {
    id: 'nannuoc',
    name: { vi: 'Làng Đá Non Nước', en: 'Non Nuoc Stone Village', cn: 'Non Nuoc 石雕村', kr: '논 누옥 석조 마을' },
    description: {
      vi: 'Làng nghề truyền thống 400 năm tuổi, nơi các nghệ nhân thổi hồn vào đá.',
      en: 'A 400-year-old traditional craft village where artisans breathe life into stone.',
      cn: '拥有400年历史的传统手工艺村，工匠们在此赋予石头生命。',
      kr: '장인들이 돌에 생명을 불어넣는 400년 된 전통 공예 마을입니다.'
    },
    details: {
      vi: 'Làng đá mỹ nghệ Non Nước hình thành từ thế kỷ 17, là Di sản văn hóa phi vật thể quốc gia. Đến đây, du khách không chỉ được chiêm ngưỡng hàng ngàn tác phẩm điêu khắc tinh xảo từ đá cẩm thạch (tượng Phật, linh thú, trang sức) mà còn được tận mắt chứng kiến quy trình chế tác công phu. Đây là nơi mua sắm quà lưu niệm uy tín và mang đậm dấu ấn văn hóa Đà Nẵng.',
      en: 'Non Nuoc Stone Carving Village, established in the 17th century, is a National Intangible Cultural Heritage. Visitors can admire thousands of exquisite marble sculptures (Buddhas, mascots, jewelry) and witness the meticulous crafting process firsthand. It is a reputable place to buy souvenirs bearing the cultural mark of Da Nang.',
      cn: 'Non Nuoc 石雕村始建于17世纪，是国家非物质文化遗产。游客可以欣赏数千件精美的大理石雕塑（佛像、吉祥物、珠宝），并亲眼目睹细致的制作过程。这是购买带有岘港文化印记的纪念品的信誉之地。',
      kr: '17세기에 설립된 논 누옥 석조 조각 마을은 국가 무형 문화 유산입니다. 방문객들은 수천 점의 정교한 대리석 조각품(불상, 마스코트, 보석)을 감상하고 세심한 제작 과정을 직접 목격할 수 있습니다. 다낭의 문화적 흔적이 담긴 기념품을 구입할 수 있는 평판 좋은 곳입니다.'
    },
    image: 'https://statics.vinpearl.com/lang-da-my-nghe-non-nuoc-02_1636966774.jpg',
    features: ['Làng nghề', 'Mua sắm']
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: { vi: 'Tượng Phật Di Lặc', en: 'Maitreya Buddha Statue', cn: '弥勒佛像', kr: '미륵불상' },
    price: 350000,
    category: 'fengshui',
    image: 'https://damynghenamthanhphat.com/wp-content/uploads/2024/03/tuong-di-lac.jpg'
  },
  {
    id: 'p2',
    name: { vi: 'Vòng Tay Đá Cẩm Thạch', en: 'Marble Bracelet', cn: '大理石手链', kr: '대리석 팔찌' },
    price: 450000,
    category: 'souvenir',
    image: 'https://vongtayphongthuy.co/wp-content/uploads/2022/04/vong-tay-cam-thach-trang.webp'
  },
  {
    id: 'p3',
    name: { vi: 'Sư Tử Đá Phong Thủy', en: 'Feng Shui Stone Lion', cn: '风水石狮', kr: '풍수 돌사자' },
    price: 1200000,
    category: 'fengshui',
    image: 'https://cdn.tgdd.vn/Files/2022/02/24/1417031/su-tu-da-phong-thuy-co-y-nghia-gi-cach-dat-tuong-su-tu-da-dung-phong-thuy-202202240011399806.jpg'
  },
  {
    id: 'p4',
    name: { vi: 'Bình Hoa Đá Trắng', en: 'White Stone Vase', cn: '白石花瓶', kr: '흰 돌 꽃병' },
    price: 850000,
    category: 'handicraft',
    image: 'https://daphongthuyth.com/wp-content/uploads/2024/06/binh-768x1024.jpg'
  },
  {
    id: 'p5',
    name: { vi: 'Vòng Tay Thạch Anh Tím', en: 'Amethyst Bracelet', cn: '紫水晶手链', kr: '자수정 팔찌' },
    price: 550000,
    category: 'souvenir',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=500'
  },
  {
    id: 'p6',
    name: { vi: 'Móc Khóa Tỳ Hưu Đá', en: 'Pixiu Stone Keychain', cn: '貔貅石钥匙扣', kr: '비휴 돌 열쇠고리' },
    price: 150000,
    category: 'souvenir',
    image: 'https://bizweb.dktcdn.net/thumb/1024/100/345/386/products/moc-khoa-ty-huu-da-mat-ho-vang-nau-1.jpg'
  },
  {
     id: 'p7',
     name: { vi: 'Vòng Tay Đá Mắt Hổ', en: 'Tiger Eye Bracelet', cn: '虎眼石手链', kr: '호랑이 눈 팔찌' },
     price: 450000,
     category: 'fengshui',
     image: 'https://images.unsplash.com/photo-1602752250055-567f4a72758c?q=80&w=500'
  },
  {
    id: 'p8',
    name: { vi: 'Móc Khóa 12 Con Giáp', en: 'Zodiac Stone Keychain', cn: '十二生肖石钥匙扣', kr: '12지신 돌 열쇠고리' },
    price: 120000,
    category: 'souvenir',
    image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=500'
  }
];

export const MOUNTAINS: Mountain[] = [
  {
    id: 'kim',
    name: { vi: 'Kim Sơn', en: 'Metal Mountain', cn: '金山', kr: '김 손' },
    element: { vi: 'Kim', en: 'Metal', cn: '金', kr: '금' },
    description: { vi: 'Nằm bên bờ sông Cổ Cò, có hình dáng như quả chuông úp. Nơi đây có chùa Quan Thế Âm cổ kính và động Quan Âm huyền bí.', en: 'Located by the Co Co River, shaped like an inverted bell. It houses the ancient Quan The Am Pagoda and the mystical Quan Am Cave.', cn: '位于古哥河畔，形状像倒置的钟。这里有古老的观世音寺和神秘的观音洞。', kr: '코코 강가에 위치하며 거꾸로 된 종 모양입니다. 고대 관세음 사원과 신비로운 관음 동굴이 있습니다.' },
    color: 'text-gray-500'
  },
  {
    id: 'moc',
    name: { vi: 'Mộc Sơn', en: 'Wood Mountain', cn: '木山', kr: '목 손' },
    element: { vi: 'Mộc', en: 'Wood', cn: '木', kr: '목' },
    description: { vi: 'Ngọn núi nằm song song với Thủy Sơn, có hình dáng như mào gà trống. Đây là ngọn núi duy nhất không có chùa chiền, giữ vẻ đẹp hoang sơ.', en: 'Parallel to Water Mountain, shaped like a rooster comb. It is the only mountain without pagodas, retaining its wild beauty.', cn: '与水山平行，形状像鸡冠。这是唯一没有寺庙的山，保留了其原始美。', kr: '수산과 평행하며 닭 벼슬 모양입니다. 사원이 없는 유일한 산으로 야생의 아름다움을 간직하고 있습니다.' },
    color: 'text-green-600'
  },
  {
    id: 'thuy',
    name: { vi: 'Thủy Sơn', en: 'Water Mountain', cn: '水山', kr: '투이 손' },
    element: { vi: 'Thủy', en: 'Water', cn: '水', kr: '수' },
    description: { vi: 'Ngọn núi lớn nhất, đẹp nhất và tập trung nhiều hang động, chùa chiền nhất (Chùa Linh Ứng, Động Huyền Không).', en: 'The largest, most beautiful mountain with the most caves and pagodas (Linh Ung Pagoda, Huyen Khong Cave).', cn: '最大、最美丽的山，拥有最多的洞穴和寺庙（灵应寺、玄空洞）。', kr: '가장 크고 아름다운 산으로 가장 많은 동굴과 사원이 있습니다(린응 사원, 후옌 콩 동굴).' },
    color: 'text-blue-500'
  },
  {
    id: 'hoa',
    name: { vi: 'Hỏa Sơn', en: 'Fire Mountain', cn: '火山', kr: '호아 손' },
    element: { vi: 'Hỏa', en: 'Fire', cn: '火', kr: '화' },
    description: { vi: 'Gồm Âm Hỏa Sơn và Dương Hỏa Sơn. Nơi đây có khai thác đá cẩm thạch đỏ quý hiếm ngày xưa.', en: 'Includes Yin Fire Mountain and Yang Fire Mountain. Rare red marble was quarried here in the past.', cn: '包括阴火和阳火。过去这里曾开采稀有的红大理石。', kr: '음화산과 양화산을 포함합니다. 과거에는 희귀한 붉은 대리석이 채석되었습니다.' },
    color: 'text-red-500'
  },
  {
    id: 'tho',
    name: { vi: 'Thổ Sơn', en: 'Earth Mountain', cn: '土山', kr: '토 손' },
    element: { vi: 'Thổ', en: 'Earth', cn: '土', kr: '토' },
    description: { vi: 'Ngọn núi thấp nhất nhưng dài nhất, hình dáng như con rồng nằm trên bãi cát. Có di tích địa đạo núi đá chồng.', en: 'The lowest but longest mountain, shaped like a dragon lying on the sand. Features the rock pile tunnel relic.', cn: '最低但最长的山，形状像躺在沙滩上的龙。拥有叠石隧道遗迹。', kr: '가장 낮지만 가장 긴 산으로, 모래 위에 누워 있는 용의 모양입니다. 바위 더미 터널 유적이 특징입니다.' },
    color: 'text-yellow-600'
  }
];

export const REDEEM_ITEMS: RedeemItem[] = [
  {
    id: 'stamp_huyenkhong',
    name: { vi: 'Tem Số Động Huyền Không', en: 'Huyen Khong Digital Stamp', cn: '玄空洞数字邮票', kr: '후옌 콩 디지털 스탬프' },
    description: { vi: 'Tem chứng nhận "Nhà thám hiểm" tại Động Huyền Không', en: 'Certificate stamp "Explorer" at Huyen Khong Cave', cn: '玄空洞“探险家”认证邮票', kr: '후옌 콩 동굴의 "탐험가" 인증 스탬프' },
    points: 50,
    image: 'https://images.unsplash.com/photo-1590494056254-204129c54536?q=80&w=400&auto=format&fit=crop',
    type: 'stamp'
  },
  {
    id: 'voucher_coffee',
    name: { vi: 'Voucher Cà Phê Đá', en: 'Iced Coffee Voucher', cn: '冰咖啡券', kr: '아이스 커피 바우처' },
    description: { vi: 'Miễn phí 1 ly cà phê tại trạm dừng chân', en: 'Free 1 iced coffee at rest station', cn: '休息站免费一杯冰咖啡', kr: '휴게소에서 아이스 커피 1잔 무료' },
    points: 100,
    image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?q=80&w=400&auto=format&fit=crop',
    type: 'voucher'
  },
  {
    id: 'gift_keychain',
    name: { vi: 'Móc Khóa Đá Non Nước', en: 'Non Nuoc Stone Keychain', cn: 'Non Nuoc 石钥匙扣', kr: '논 누옥 스톤 키체인' },
    description: { vi: 'Quà lưu niệm nhỏ xinh từ làng đá', en: 'Cute souvenir from stone village', cn: '石村的小纪念品', kr: '석조 마을의 귀여운 기념품' },
    points: 150,
    image: 'https://images.unsplash.com/photo-1618413159300-36e24687232d?q=80&w=400&auto=format&fit=crop',
    type: 'gift'
  },
  {
    id: 'badge_master',
    name: { vi: 'Huy Hiệu Master', en: 'Master Badge', cn: '大师徽章', kr: '마스터 배지' },
    description: { vi: 'Huy hiệu vinh danh người chinh phục toàn bộ Ngũ Hành Sơn', en: 'Honorary badge for conquering all Marble Mountains', cn: '征服五行山的荣誉徽章', kr: '모든 오행산을 정복한 명예 배지' },
    points: 250,
    image: 'https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=400&auto=format&fit=crop',
    type: 'stamp'
  }
];
