import { QuizQuestion } from '../types';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    contextTag: 'Áp lực tình bạn',
    scenario: 'Bạn thân nói: “Nếu cậu thật lòng coi tớ là tri kỷ thì cậu phải cho tớ chép bài kiểm tra 1 tiết hôm nay, bằng không chứng tỏ cậu chỉ giả tạo thôi.”',
    question: 'Hành vi của người bạn này thuộc nhóm nào và bạn nên phản hồi ra sao?',
    options: [
      {
        text: 'Đây là tình bạn bình thường, bạn nên cho chép một lần để giữ hòa khí.',
        isOptimal: false,
        feedback: 'Sai lầm. Việc nhân nhượng sẽ biến bạn thành đối tượng bị lợi dụng lâu dài và khiến bạn chịu rủi ro bị kỷ luật thi cử.',
      },
      {
        text: 'Gây áp lực tình cảm (Emotional Blackmail). Bạn nên tách bạch tình bạn với quy chế thi và từ chối rõ ràng.',
        isOptimal: true,
        feedback: 'Chính xác! Đối phương đang dùng danh nghĩa "bạn thân" như một đòn bẩy để ép buộc bạn làm điều vi phạm nội quy.',
      },
      {
        text: 'Đây là đe dọa vũ lực, bạn nên lập tức báo công an phường.',
        isOptimal: false,
        feedback: 'Chưa chính xác về cấp độ. Đây là áp lực cảm xúc học đường, chưa phải tội phạm hình sự vũ lực, nên ưu tiên thiết lập ranh giới giao tiếp trước.',
      },
      {
        text: 'Cắt đứt liên lạc vĩnh viễn và chặn mọi tài khoản ngay lập tức mà không cần nói gì.',
        isOptimal: false,
        feedback: 'Có thể quá vội vàng. Hãy thử thiết lập ranh giới trước; nếu đối phương vẫn tiếp tục công kích thì mới cân nhắc hạn chế tương tác.',
      },
    ],
    psychologicalInsight: 'Kẻ thao túng cảm xúc thường dùng mệnh đề điều kiện "Nếu bạn coi tôi là... thì bạn phải...". Cách hóa giải hiệu quả nhất là giữ vững ranh giới: "Tớ quý cậu, nhưng tớ không thể làm việc này".',
  },
  {
    id: 2,
    contextTag: 'Mối quan hệ tình cảm',
    scenario: 'Người yêu nhắn tin: “Cậu đưa mật khẩu Facebook và Zalo cho tớ quản lý. Không làm gì sai thì có gì mà phải sợ?”',
    question: 'Đâu là bản chất của câu nói này và cách xử lý an toàn?',
    options: [
      {
        text: 'Đó là thể hiện sự gắn kết và tin tưởng tuyệt đối, nên đưa mật khẩu để chứng minh.',
        isOptimal: false,
        feedback: 'Sai. Tin tưởng thực sự là tôn trọng sự riêng tư của nhau, chứ không phải là giám sát toàn diện.',
      },
      {
        text: 'Xâm phạm quyền riêng tư và kiểm soát. Bạn có quyền từ chối vì không gian riêng tư là quyền cơ bản của mỗi cá nhân.',
        isOptimal: true,
        feedback: 'Rất chính xác! Ngụy biện "không làm sai thì không sợ" thường được dùng để tước đoạt quyền riêng tư cá nhân.',
      },
      {
        text: 'Lập một tài khoản ảo để đưa cho đối phương kiểm tra để đối phó qua mắt.',
        isOptimal: false,
        feedback: 'Không khuyến khích. Việc đối phó chỉ duy trì một mối quan hệ độc hại, bạn cần thẳng thắn khẳng định ranh giới cá nhân.',
      },
      {
        text: 'Đòi lại mật khẩu của đối phương để kiểm tra chéo cho công bằng.',
        isOptimal: false,
        feedback: 'Cách này chỉ làm gia tăng sự nghi kỵ và kiểm soát độc hại lẫn nhau.',
      },
    ],
    psychologicalInsight: 'Quyền riêng tư (Privacy) không đồng nghĩa với bí mật xấu xa (Secrecy). Mỗi người đều cần một góc an toàn để tâm sự với gia đình hoặc bạn bè mà không bị giám sát.',
  },
  {
    id: 3,
    contextTag: 'Tình huống nguy cấp',
    scenario: 'Một tài khoản đe dọa sẽ tung ảnh nhạy cảm hoặc tin nhắn riêng tư của bạn lên nhóm trường nếu bạn không chuyển tiền hoặc không gửi thêm ảnh khác.',
    question: 'Hành động ƯU TIÊN HÀNG ĐẦU và quan trọng nhất bạn PHẢI LÀM là gì?',
    options: [
      {
        text: 'Lập tức chuyển số tiền nhỏ để kẻ đó nguôi giận rồi năn nỉ họ xóa ảnh.',
        isOptimal: false,
        feedback: 'CỰC KỲ NGUY HIỂM! Kẻ tống tiền sẽ KHÔNG BAO GIỜ dừng lại mà sẽ liên tục đòi thêm tiền và hình ảnh nhiều hơn.',
      },
      {
        text: 'Xóa toàn bộ cuộc trò chuyện và tắt điện thoại đi ngủ để trốn tránh.',
        isOptimal: false,
        feedback: 'Xóa trò chuyện sẽ làm mất toàn bộ chứng cứ pháp lý quý giá để cơ quan chức năng bảo vệ bạn.',
      },
      {
        text: 'TUYỆT ĐỐI KHÔNG làm theo yêu sách, chụp màn hình bằng chứng, và gọi ngay Tổng đài Quốc gia 111 hoặc báo cho phụ huynh/công an.',
        isOptimal: true,
        feedback: 'TUYỆT VỜI! Đây là hành vi vi phạm pháp luật hình sự (tống tiền/đe dọa). Sự hỗ trợ từ người lớn và cơ quan pháp luật là lá chắn an toàn nhất cho bạn.',
      },
      {
        text: 'Tự mình đăng bài phân bua trên trang cá nhân để thanh minh trước.',
        isOptimal: false,
        feedback: 'Đăng bài công khai khi chưa có tư vấn từ chuyên gia có thể thu hút thêm dư luận tiêu cực và gây tổn thương tâm lý.',
      },
    ],
    psychologicalInsight: 'Kẻ tống tiền mạng (Sextortion / Cyber Blackmail) sống nhờ nỗi sợ bị xấu hổ của nạn nhân. Phá vỡ sự im lặng và tìm sự trợ giúp của pháp luật/người lớn là chìa khóa duy nhất để chấm dứt sự việc.',
  },
  {
    id: 4,
    contextTag: 'Mâu thuẫn nhóm',
    scenario: 'Khi bạn không thể tham gia đi chơi vì phải học bài, người bạn nhắn: “Cả nhóm đang vui vì cậu mà mất hứng. Cậu lúc nào cũng làm hỏng bầu không khí.”',
    question: 'Hành vi này là ví dụ của kiểu thao túng nào?',
    options: [
      {
        text: 'Gây cảm giác tội lỗi (Guilt Tripping) nhằm đổ lỗi cảm xúc của tập thể lên một cá nhân.',
        isOptimal: true,
        feedback: 'Chính xác! Đối phương đang phóng đại cảm xúc và biến lý do cá nhân chính đáng của bạn thành "tội đồ".',
      },
      {
        text: 'Đe dọa vũ lực thể xác.',
        isOptimal: false,
        feedback: 'Không phải. Đây là thao túng cảm xúc tinh vi chứ không có dấu hiệu vũ lực.',
      },
      {
        text: 'Lợi dụng lòng tin mượn tài sản.',
        isOptimal: false,
        feedback: 'Không liên quan đến tài sản hay lòng tin tài chính.',
      },
      {
        text: 'Lời khen ngợi hài hước của bạn bè.',
        isOptimal: false,
        feedback: 'Đây là câu nói châm chọc mang tính gây áp lực tâm lý tiêu cực, không phải lời đùa vô hại.',
      },
    ],
    psychologicalInsight: 'Bạn không có nghĩa vụ phải chịu trách nhiệm về tâm trạng của cả nhóm khi bạn đưa ra lựa chọn hợp lý cho cuộc sống và việc học của mình.',
  },
  {
    id: 5,
    contextTag: 'Bảo mật tài khoản',
    scenario: 'Một người bạn thân trên mạng nhờ bạn đọc mã OTP gửi về máy với lý do: “Tớ mượn số điện thoại cậu nhận mã xác nhận kích hoạt tài khoản game tí thôi.”',
    question: 'Bạn nên phản ứng thế nào?',
    options: [
      {
        text: 'Đọc mã ngay vì bạn bè trên mạng đã quen biết nhau mấy tháng rồi.',
        isOptimal: false,
        feedback: 'Nguy hiểm! Rất nhiều kẻ xấu dùng thủ đoạn này để chiếm đoạt tài khoản Zalo, Facebook hoặc tài khoản thanh toán của bạn.',
      },
      {
        text: 'Tuyệt đối KHÔNG cung cấp mã OTP cho bất kỳ ai, kể cả người quen biết.',
        isOptimal: true,
        feedback: 'Hoàn toàn chính xác! Mã OTP là chìa khóa bảo mật cá nhân cuối cùng, việc chia sẻ có thể dẫn đến mất tài khoản và danh tính số.',
      },
      {
        text: 'Đọc 5 số đầu, giữ lại 1 số cuối.',
        isOptimal: false,
        feedback: 'Mã OTP không bao giờ được phép tiết lộ một phần hay toàn phần.',
      },
      {
        text: 'Đòi tiền công rồi mới gửi mã.',
        isOptimal: false,
        feedback: 'Bạn có thể vô tình trở thành đồng phạm trong các hành vi lừa đảo trực tuyến.',
      },
    ],
    psychologicalInsight: 'Kỹ thuật tấn công phi kỹ thuật (Social Engineering) thường nhắm vào sự cả nể và thiếu cảnh giác của học sinh đối với các loại mã bảo mật.',
  },
  {
    id: 6,
    contextTag: 'Cô lập xã hội',
    scenario: 'Bạn cùng bàn yêu cầu: “Cậu không được nói chuyện hay đi ăn trưa với các bạn lớp bên cạnh nữa. Cậu chỉ được chơi với một mình tớ thôi.”',
    question: 'Dấu hiệu này cảnh báo điều gì trong mối quan hệ?',
    options: [
      {
        text: 'Hành vi kiểm soát và cô lập xã hội (Isolation).',
        isOptimal: true,
        feedback: 'Chính xác! Cắt đứt các mối quan hệ xã hội lành mạnh là bước đầu tiên để khiến nạn nhân hoàn toàn lệ thuộc.',
      },
      {
        text: 'Tình bạn trung thành và đáng trân trọng nhất.',
        isOptimal: false,
        feedback: 'Không đúng. Tình bạn lành mạnh luôn cổ vũ và tôn trọng việc bạn có thêm nhiều bạn bè tốt.',
      },
      {
        text: 'Lời khuyên học tập bình thường.',
        isOptimal: false,
        feedback: 'Đây là sự cấm đoán vô lý ảnh hưởng tiêu cực đến đời sống xã hội của bạn.',
      },
      {
        text: 'Xâm phạm quyền tác giả.',
        isOptimal: false,
        feedback: 'Không liên quan đến quyền tác giả.',
      },
    ],
    psychologicalInsight: 'Khi một người muốn độc chiếm toàn bộ thế giới của bạn, họ đang tước đi hệ thống hỗ trợ xung quanh bạn. Hãy luôn giữ kết nối với nhiều bạn bè và gia đình.',
  },
  {
    id: 7,
    contextTag: 'Nhận diện khách quan',
    scenario: 'Một người bạn nhắn tin: “Hôm nay tớ mệt quá nên muốn ở một mình, mai chúng mình nói chuyện sau nhé!”',
    question: 'Đoạn tin nhắn này có phải là hành vi thao túng tâm lý không?',
    options: [
      {
        text: 'Có, đây là chiến tranh lạnh và thao túng cảm xúc đáng lên án.',
        isOptimal: false,
        feedback: 'Không đúng. Việc thể hiện cảm xúc mệt mỏi và xin phép nghỉ ngơi một cách lịch sự, rõ ràng là giao tiếp lành mạnh.',
      },
      {
        text: 'Không. Đây là sự giao tiếp lành mạnh, tôn trọng ranh giới cảm xúc và thông báo rõ ràng cho đối phương.',
        isOptimal: true,
        feedback: 'Rất chính xác! Cần phân biệt rõ giữa "đặt ranh giới lành mạnh" và "thao túng/im lặng trừng phạt".',
      },
      {
        text: 'Chắc chắn là bạn đó đang nói dối để đi chơi với người khác.',
        isOptimal: false,
        feedback: 'Suy đoán vô căn cứ này sẽ gây tổn hại cho mối quan hệ.',
      },
      {
        text: 'Nên liên tục gọi điện nhắn tin ép bạn ấy phải trả lời ngay.',
        isOptimal: false,
        feedback: 'Làm như vậy chính là bạn đang xâm phạm ranh giới cá nhân của người khác.',
      },
    ],
    psychologicalInsight: 'MINDGUARD luôn nhấn mạnh: Không quy chụp mọi lời từ chối hay khoảng lặng là thao túng. Người có ranh giới lành mạnh biết cách nói ra nhu cầu cá nhân một cách văn minh.',
  },
  {
    id: 8,
    contextTag: 'Kỹ năng phản hồi',
    scenario: 'Khi ai đó liên tục nhắn tin công kích, hạ thấp bạn trên mạng xã hội, quy trình xử lý nào sau đây an toàn và đúng đắn nhất?',
    question: 'Quy tắc 4 bước S.A.F.E nên được thực hiện như thế nào?',
    options: [
      {
        text: 'Nhắn tin chửi lại gay gắt hơn để bảo vệ danh dự, kêu gọi bạn bè vào tấn công lại.',
        isOptimal: false,
        feedback: 'Hành động này làm leo thang bạo lực mạng và có thể biến bạn thành đối tượng vi phạm quy tắc ứng xử.',
      },
      {
        text: 'S (Stop - dừng lại, không tranh cãi) -> A (Archive - chụp bằng chứng) -> F (Firm - chặn hoặc thiết lập ranh giới) -> E (Escalate - báo cáo nền tảng / nhờ người lớn giúp đỡ).',
        isOptimal: true,
        feedback: 'Xuất sắc! Đây chính là quy trình chuẩn S.A.F.E giúp bảo vệ tối đa sức khỏe tâm lý và bằng chứng pháp lý của học sinh.',
      },
      {
        text: 'Im lặng chịu đựng một mình và hi vọng kẻ đó sẽ tự chán rồi bỏ qua.',
        isOptimal: false,
        feedback: 'Im lặng chịu đựng sẽ khiến kẻ công kích lấn tới và gây sang chấn tâm lý kéo dài.',
      },
      {
        text: 'Hẹn gặp trực tiếp kẻ đó ở cổng trường để giải quyết bằng nắm đấm.',
        isOptimal: false,
        feedback: 'Bạo lực thể xác là hành vi nguy hiểm, vi phạm pháp luật và nội quy nhà trường.',
      },
    ],
    psychologicalInsight: 'Quy trình S.A.F.E giúp bạn lấy lại quyền kiểm soát tình huống mà không bị cuốn vào bẫy cảm xúc tiêu cực của kẻ gây hại.',
  },
];
