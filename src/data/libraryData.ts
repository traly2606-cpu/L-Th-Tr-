import { LibraryCategory } from '../types';

export const LIBRARY_CATEGORIES: LibraryCategory[] = [
  {
    id: 'gay_ap_luc_tinh_cam',
    name: 'Gây áp lực tình cảm (Emotional Pressure)',
    shortTag: 'Tống tiền cảm xúc',
    iconName: 'HeartHandshake',
    color: 'text-rose-600',
    bgColor: 'bg-rose-50',
    borderColor: 'border-rose-200',
    description: 'Sử dụng mối quan hệ thân thiết (tình bạn thân, tình cảm tuổi học trò) như một công cụ đòn bẩy để ép buộc bạn làm điều mình không muốn hoặc hạ thấp giới hạn bản thân.',
    psychologicalMechanics: 'Người gây áp lực thường gắn việc bạn từ chối với việc bạn "không yêu quý", "không coi trọng" họ, khiến bạn lo sợ bị mất mối quan hệ và chấp nhận nhượng bộ dù cảm thấy bất an.',
    redFlags: [
      '“Nếu cậu coi tớ là bạn thân thật sự thì cậu đã không từ chối...”',
      '“Cậu yêu tớ thì cậu phải chứng minh bằng cách làm việc này cho tớ.”',
      'Chiến tranh lạnh, im lặng trừng phạt (silent treatment) kéo dài khi bạn không làm theo ý họ.',
      'So sánh bạn với bạn bè khác: “Bạn người ta sẵn sàng làm thế, còn cậu thì tính toán từng chút.”',
    ],
    healthyVsManipulative: [
      {
        healthy: 'Tôn trọng khi bạn nói “Không” hoặc bận việc riêng, tìm giải pháp khác.',
        manipulative: 'Dỗi hờn, trách móc, chất vấn tình cảm ngay khi bạn từ chối yêu cầu.',
      },
      {
        healthy: 'Cùng nhau chia sẻ khó khăn trên tinh thần tự nguyện.',
        manipulative: 'Tạo cảm giác bạn "mắc nợ" tình cảm và bắt buộc phải trả lời mọi lúc mọi nơi.',
      },
    ],
    realWorldScenario: {
      context: 'Áp lực tình cảm trong nhóm bạn thân trước kỳ thi học kỳ',
      dialogue: [
        { sender: 'A', text: 'Mai thi Sử rồi, cậu gửi bài tóm tắt và chụp đáp án lúc thi cho tớ nhé.' },
        { sender: 'Bạn', text: 'Tớ nghĩ cậu nên tự ôn đi, trong phòng thi giám thị gắt lắm, tớ sợ bị lập biên bản.' },
        { sender: 'A', text: 'Cậu nói thế mà nghe được à? Tớ coi cậu là tri kỷ mà cậu tính toán thế à? Cậu muốn tớ trượt tốt nghiệp để cậu vui lòng hả?', isCaution: true },
        { sender: 'A', text: 'Nếu mai không giúp thì từ nay đừng coi nhau là bạn nữa.', isCaution: true },
      ],
      analysis: 'Bạn A đang sử dụng tình bạn và viễn cảnh thi trượt để dồn bạn vào thế phải hy sinh sự an toàn học tập của chính mình. Đây là hành vi dùng tình cảm để ép buộc.',
    },
    safeBoundaries: [
      'Khẳng định tình cảm tách biệt với hành động: “Tớ rất quý cậu, nhưng việc này vi phạm quy chế thi và tớ không thể làm được.”',
      'Không giải thích dông dài hay xin lỗi khi bản thân từ chối một yêu cầu vô lý.',
      'Chấp nhận việc người kia có thể giận dỗi tạm thời; tình bạn chân chính sẽ không tan vỡ chỉ vì một lời từ chối chính đáng.',
    ],
  },
  {
    id: 'gay_cam_giac_toi_loi',
    name: 'Gây cảm giác tội lỗi (Guilt Tripping & Đảo ngược vai)',
    shortTag: 'Đổ lỗi & Đóng vai nạn nhân',
    iconName: 'AlertCircle',
    color: 'text-amber-600',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-200',
    description: 'Biến mọi mâu thuẫn hoặc sai lầm của bản thân thành lỗi của bạn. Khiến bạn luôn có cảm giác mình là người tồi tệ, ích kỷ hoặc là nguyên nhân gây ra sự đau khổ của họ.',
    psychologicalMechanics: 'Họ đánh vào lòng trắc ẩn và sự tự vấn của học sinh có tính cách hiền lành. Khi bạn bận rộn tự trách mình, bạn sẽ không còn năng lượng để nhìn nhận xem ai mới là người hành xử không đúng.',
    redFlags: [
      '“Tất cả là tại cậu, nếu cậu không nói thế thì tớ đâu có buồn đến mức bỏ ăn/bỏ học!”',
      '“Tớ đã vì cậu mà làm bao nhiêu thứ, còn cậu thì đối xử với tớ thế này đây.”',
      'Dọa tự làm đau bản thân hoặc đăng trạng thái tiêu cực ám chỉ bạn để bạn hoảng sợ.',
      'Từ việc họ làm sai chuyển thành: “Tớ làm thế cũng chỉ vì tớ quá quan tâm đến cậu thôi!”',
    ],
    healthyVsManipulative: [
      {
        healthy: 'Nhận trách nhiệm về cảm xúc và hành vi của chính mình khi có bất đồng.',
        manipulative: 'Luôn luôn biến mình thành nạn nhân đáng thương và biến bạn thành thủ phạm tàn nhẫn.',
      },
      {
        healthy: 'Cùng thảo luận để hiểu nhau hơn và sửa sai.',
        manipulative: 'Ép bạn phải liên tục xin lỗi và bồi thường cảm xúc dù bạn không làm gì sai.',
      },
    ],
    realWorldScenario: {
      context: 'Mâu thuẫn bài tập nhóm trên Zalo',
      dialogue: [
        { sender: 'Bạn', text: 'Phần slide thuyết trình hôm nay là hạn chót rồi, sao cậu chưa nộp vậy?' },
        { sender: 'B', text: 'Cậu biết dạo này gia đình tớ nhiều chuyện mà cậu còn ép tớ à? Cậu là nhóm trưởng mà vô cảm thế?' },
        { sender: 'B', text: 'Nhìn cậu thúc giục làm tớ stress muốn trầm cảm luôn rồi đấy. Nếu tớ ngã bệnh là tại cậu ép tớ.', isCaution: true },
      ],
      analysis: 'B đang né tránh trách nhiệm hoàn thành bài tập chung bằng cách phóng đại sự việc và đổ trách nhiệm sức khỏe tâm lý lên người nhắc nhở.',
    },
    safeBoundaries: [
      'Nhận diện rõ ranh giới trách nhiệm: Cảm xúc và bài tập của người khác không phải là trách nhiệm bạn phải gánh thay.',
      'Phản hồi bình tĩnh: “Tớ rất thông cảm nếu cậu đang gặp khó khăn, nhưng thời hạn của cả nhóm là quy định chung. Chúng mình cùng báo cô giáo để tìm cách giải quyết nhé.”',
      'Không nhận lời xin lỗi gượng ép nếu bạn không có lỗi.',
    ],
  },
  {
    id: 'kiem_soat_va_co_lap',
    name: 'Kiểm soát và cô lập (Control & Isolation)',
    shortTag: 'Cắt đứt các mối quan hệ',
    iconName: 'Lock',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    description: 'Hành vi can thiệp vào cuộc sống cá nhân, cấm đoán bạn kết bạn, ép bạn rời khỏi các hội nhóm, hoặc bắt bạn phải báo cáo liên tục để tách bạn khỏi mạng lưới hỗ trợ xung quanh.',
    psychologicalMechanics: 'Khi một học sinh bị tách khỏi bạn bè cùng lớp, thầy cô và gia đình, bạn sẽ hoàn toàn phụ thuộc vào người kiểm soát. Lúc đó, bạn mất đi góc nhìn đối chiếu từ người ngoài để nhận ra mình đang bị thao túng.',
    redFlags: [
      '“Sao cậu lại kết bạn với đứa đó trên Instagram? Hủy kết bạn ngay đi.”',
      '“Đi chơi với ai? Chụp ảnh chỗ đó gửi qua định vị cho tớ ngay lập tức.”',
      '“Cả cái lớp này không ai tốt với cậu bằng tớ đâu, bọn nó chỉ nói xấu sau lưng cậu thôi.”',
      'Bắt bạn rời khỏi nhóm chat học tập hoặc nhóm bạn bè cũ.',
    ],
    healthyVsManipulative: [
      {
        healthy: 'Khuyến khích bạn có không gian riêng, bạn bè riêng và sở thích cá nhân.',
        manipulative: 'Muốn độc chiếm 100% thời gian, ghen tuông vô lý với cả bạn cùng giới hoặc người thân.',
      },
      {
        healthy: 'Tin tưởng và tôn trọng các mối quan hệ xã hội của bạn.',
        manipulative: 'Nói xấu bạn bè xung quanh để bạn mất lòng tin vào mọi người và chỉ còn biết dựa vào họ.',
      },
    ],
    realWorldScenario: {
      context: 'Tin nhắn kiểm soát trong mối quan hệ tình cảm tuổi học trò',
      dialogue: [
        { sender: 'C', text: 'Cậu vừa bình luận bài viết của bạn nam lớp bên đúng không?' },
        { sender: 'Bạn', text: 'Bạn ấy hỏi về tài liệu ôn thi môn Toán thôi mà.' },
        { sender: 'C', text: 'Xóa bình luận ngay. Tớ cấm cậu nhắn tin hay nói chuyện với bất kỳ bạn nam nào khác.', isCaution: true },
        { sender: 'C', text: 'Cậu chỉ cần có tớ là đủ rồi. Mấy đứa kia toàn có ý đồ xấu cả thôi.', isCaution: true },
      ],
      analysis: 'Hành vi cấm đoán giao tiếp và gieo rắc suy nghĩ tiêu cực về người khác là dấu hiệu điển hình của việc kiểm soát và cô lập xã hội.',
    },
    safeBoundaries: [
      'Giữ vững các mối quan hệ lành mạnh với gia đình, thầy cô và bạn bè thân thiết.',
      'Tuyên bố rõ ràng: “Tớ có quyền tự do giao tiếp học tập lành mạnh và tớ không đồng ý bị cấm đoán việc này.”',
      'Nếu cảm thấy bị ngột ngạt và mất tự do, hãy chia sẻ ngay với người lớn đáng tin cậy.',
    ],
  },
  {
    id: 'de_doa_va_uy_hiep',
    name: 'Đe dọa và uy hiếp (Intimidation & Blackmail)',
    shortTag: 'Dọa dẫm & Tống tiền',
    iconName: 'ShieldAlert',
    color: 'text-red-600',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200',
    description: 'Sử dụng bí mật cá nhân, tin nhắn riêng tư, ảnh nhạy cảm hoặc nguy cơ bạo lực học đường/tẩy chay mạng để ép nạn nhân phải phục tùng.',
    psychologicalMechanics: 'Hành vi này tạo ra nỗi sợ hãi tột cùng về việc bị mất danh dự, xấu hổ trước trường lớp hoặc bị gia đình la mắng. Kẻ đe dọa thường hứa “nếu làm theo sẽ xóa”, nhưng thực tế yêu sách sẽ ngày càng tăng.',
    redFlags: [
      '“Nếu cậu không làm theo tớ, tớ sẽ cap màn hình tin nhắn này đăng lên confession trường.”',
      '“Cậu dám chia tay thì đừng trách tớ gửi video/ảnh này cho bố mẹ cậu.”',
      'Đe dọa kêu gọi hội đồng mạng “bóc phốt” hoặc dọa chặn đường đánh sau giờ học.',
      'Đòi tiền chuộc hoặc đòi hình ảnh nhạy cảm khác để đổi lấy sự im lặng.',
    ],
    healthyVsManipulative: [
      {
        healthy: 'Tôn trọng sự riêng tư và danh dự của nhau dù có chia tay hay bất đồng.',
        manipulative: 'Dùng điểm yếu hoặc thông tin riêng tư làm vũ khí để khống chế và tống tiền/tống tình.',
      },
      {
        healthy: 'Giải quyết mâu thuẫn bằng đối thoại hòa bình.',
        manipulative: 'Tạo áp lực sợ hãi, bạo lực ngôn từ và đe dọa hủy hoại cuộc sống của bạn.',
      },
    ],
    realWorldScenario: {
      context: 'Đe dọa phát tán tin nhắn riêng tư sau khi bất hòa',
      dialogue: [
        { sender: 'D', text: 'Tớ cần 500k gấp để nạp game, chuyển khoản cho tớ ngay.' },
        { sender: 'Bạn', text: 'Tớ không có tiền đâu, tớ chỉ là học sinh thôi.' },
        { sender: 'D', text: 'Không có thì đi vay mượn. Trong 1 tiếng nữa không có tiền, tớ sẽ đăng ảnh với mấy đoạn chat tâm sự chuyện gia đình cậu lên mạng cho cả trường biết.', isCaution: true },
        { sender: 'D', text: 'Lúc đấy xem cậu còn dám vác mặt đi học không nhé.', isCaution: true },
      ],
      analysis: 'ĐÂY LÀ HÀNH VI TỐNG TIỀN VÀ XÂM PHẠM PHÁP LUẬT NGHIÊM TRỌNG. Tuyệt đối không được chuyển tiền hoặc giấu giếm một mình.',
    },
    safeBoundaries: [
      '🚨 KHẨN CẤP: TUYỆT ĐỐI KHÔNG làm theo yêu sách (không chuyển tiền, không gửi ảnh tiếp).',
      'CHỤP MÀN HÌNH TOÀN BỘ BẰNG CHỨNG (bao gồm cả link trang cá nhân, số điện thoại, thời gian).',
      'GỌI NGAY TỔNG ĐÀI 111 (miễn phí) hoặc báo ngay cho cha mẹ, thầy cô, công an phường/xã.',
    ],
  },
  {
    id: 'loi_dung_long_tin',
    name: 'Lợi dụng lòng tin (Trust Exploitation)',
    shortTag: 'Lợi dụng sự tốt bụng',
    iconName: 'UserCheck',
    color: 'text-teal-600',
    bgColor: 'bg-teal-50',
    borderColor: 'border-teal-200',
    description: 'Xây dựng hình ảnh thân thiện, đáng tin cậy hoặc giả vờ đáng thương để mượn tài sản, tài khoản mạng xã hội, mượn tiền, hoặc nhờ vả những việc vi phạm mà không chịu trách nhiệm.',
    psychologicalMechanics: 'Họ lợi dụng tính cách hay giúp đỡ bạn bè của học sinh. Sau khi nhận được sự giúp đỡ, họ thường trốn tránh, hứa suông hoặc biến mất khi xảy ra hậu quả.',
    redFlags: [
      '“Cậu đưa tài khoản Facebook/Zalo cho tớ mượn 5 phút nhắn tin này gấp, bạn bè không tin nhau à?”',
      'Vay tiền liên tục với lý do cấp bách nhưng khất lần không trả, khi bị đòi thì tỏ thái độ khó chịu.',
      'Nhờ đứng tên nhận bưu phẩm lạ, mua hộ sim rác, hoặc cho mượn tài khoản ngân hàng/ví điện tử.',
      'Nhờ bạn làm bài tập, thi hộ với lời hứa hẹn “hôm nào sẽ đãi trà sữa” nhưng không bao giờ có.',
    ],
    healthyVsManipulative: [
      {
        healthy: 'Sòng phẳng, giữ đúng lời hứa, trân trọng sự giúp đỡ của bạn.',
        manipulative: 'Xem sự giúp đỡ của bạn là điều hiển nhiên, liên tục đòi hỏi thêm và bội tín.',
      },
      {
        healthy: 'Minh bạch lý do và chịu trách nhiệm cá nhân về đồ đạc mượn.',
        manipulative: 'Mập mờ, giấu giếm, khi có sự cố thì để bạn gánh chịu hậu quả.',
      },
    ],
    realWorldScenario: {
      context: 'Mượn tài khoản mạng xã hội và thông tin cá nhân',
      dialogue: [
        { sender: 'E', text: 'Acc Facebook của tớ bị khóa rồi. Cậu cho tớ mượn acc của cậu nhắn tin tán crush chút nhé.' },
        { sender: 'Bạn', text: 'Acc tớ có nhiều tin nhắn riêng tư với gia đình lắm, không tiện đâu.' },
        { sender: 'E', text: 'Tớ chỉ mượn 10 phút thôi mà, tớ thề không đọc trộm gì đâu. Chẳng lẽ bạn thân cả năm trời mà cậu không tin tớ bằng người ngoài à?', isCaution: true },
      ],
      analysis: 'E đang dùng danh nghĩa tình bạn thân để gây áp lực đòi quyền truy cập tài khoản cá nhân. Việc giao tài khoản mạng xã hội tiềm ẩn nguy cơ bị chiếm đoạt hoặc dùng để lừa đảo.',
    },
    safeBoundaries: [
      'Quy tắc bất biến: Mật khẩu, mã OTP, tài khoản ngân hàng và tài khoản mạng xã hội là ranh giới bất khả xâm phạm.',
      'Từ chối dứt khoát: “Tài khoản của tớ cài bảo mật 2 lớp gắn với số điện thoại của mẹ, tớ không được phép đưa cho bất kỳ ai.”',
      'Không đứng tên hộ bất kỳ giao dịch tài chính hoặc bưu phẩm nào.',
    ],
  },
  {
    id: 'xam_pham_quyen_rieng_tu',
    name: 'Xâm phạm quyền riêng tư (Privacy Violation)',
    shortTag: 'Soi mói & Theo dõi lén',
    iconName: 'EyeOff',
    color: 'text-cyan-600',
    bgColor: 'bg-cyan-50',
    borderColor: 'border-cyan-200',
    description: 'Hành vi dò xét tin nhắn, đòi quyền xem điện thoại, bắt bật định vị vị trí 24/7, tự ý chụp ảnh/quay video riêng tư hoặc công khai thông tin cá nhân của bạn khi chưa được phép.',
    psychologicalMechanics: 'Hành vi này được ngụy trang dưới vỏ bọc "quan tâm", "vì yêu nên mới muốn biết tất cả", dần dần bào mòn cảm giác tự chủ và không gian an toàn cá nhân của học sinh.',
    redFlags: [
      '“Yêu nhau thì có gì phải giấu, đưa mật khẩu điện thoại/mạng xã hội cho tớ xem ngay.”',
      'Tự ý giật điện thoại đọc trộm tin nhắn khi bạn đi vệ sinh hoặc sơ ý.',
      'Cài đặt ứng dụng theo dõi vị trí, bắt chia sẻ định vị liên tục (Live Location).',
      'Đòi chụp ảnh phòng riêng, đòi gọi video xem bạn đang ở với ai dù bạn không muốn.',
    ],
    healthyVsManipulative: [
      {
        healthy: 'Tôn trọng không gian riêng tư, tin tưởng nhau mà không cần giám sát.',
        manipulative: 'Bắt bạn chứng minh sự trong sạch bằng cách giao nộp mọi bí mật và quyền riêng tư.',
      },
      {
        healthy: 'Hỏi ý kiến trước khi chia sẻ hình ảnh hoặc thông tin của bạn lên mạng.',
        manipulative: 'Tự ý đăng tải thông tin, hình ảnh cá nhân của bạn mà không có sự đồng ý.',
      },
    ],
    realWorldScenario: {
      context: 'Đòi hỏi quyền riêng tư dưới danh nghĩa tình yêu',
      dialogue: [
        { sender: 'F', text: 'Cậu chụp màn hình danh sách chat gần đây nhất trên Messenger gửi tớ xem.' },
        { sender: 'Bạn', text: 'Sao lại phải chụp? Tớ nói chuyện với bạn bè lớp tớ thôi mà.' },
        { sender: 'F', text: 'Không có tật thì sao phải giật mình? Nếu cậu không làm gì sai thì có gì mà không dám cho tớ xem? Cậu đang giấu tớ đúng không?', isCaution: true },
      ],
      analysis: 'F đang dùng lý lẽ ngụy biện "không làm gì sai thì sao phải giấu" để tước đoạt quyền riêng tư chính đáng của bạn. Mỗi người đều có quyền giữ bí mật trao đổi cá nhân.',
    },
    safeBoundaries: [
      'Ghi nhớ: Quyền riêng tư là quyền cơ bản, không phải là thứ để đem ra "chứng minh tình cảm".',
      'Phản hồi tự tin: “Tớ tôn trọng không gian riêng của cậu và tớ cũng mong cậu tôn trọng sự riêng tư của tớ. Việc tớ giữ tài khoản của mình không đồng nghĩa với việc tớ giấu diếm điều sai trái.”',
      'Đổi mật khẩu định kỳ và không lưu thông tin đăng nhập trên thiết bị người khác.',
    ],
  },
];
