import { SampleConversation } from '../types';

export const SAMPLE_CONVERSATIONS: SampleConversation[] = [
  {
    id: 'sample-guilt-pressure',
    title: 'Ép chép bài thi & Đổ lỗi tình bạn',
    tag: 'Áp lực tình cảm & Tội lỗi',
    badgeColor: 'bg-rose-100 text-rose-700 border-rose-200',
    description: 'Một bạn cùng lớp dùng danh nghĩa bạn thân để ép bạn đưa bài thi và đổ lỗi nếu bạn từ chối.',
    content: `[10:15] Nam: Chiều nay thi kiểm tra 1 tiết Lý, cậu ngồi bàn trên thì nhớ để giấy nháp nghiêng sang bên trái cho tớ chép nhé.
[10:16] Bạn: Giám thị hôm nay là thầy Hải nghiêm lắm cậu ơi, bị bắt là hủy kết quả cả hai đứa đấy. Cậu tự ôn lại mấy công thức cơ bản đi.
[10:17] Nam: Cậu nói thế mà coi được à? Tớ coi cậu là bạn thân nhất mà lúc khó khăn cậu tính toán vậy hả?
[10:18] Nam: Đợt trước tớ cũng chở cậu đi học mấy lần, giờ nhờ có chút xíu mà cậu so đo. Nếu chiều nay tớ bị điểm dưới trung bình là hoàn toàn do cậu ích kỷ đấy nhé.
[10:19] Nam: Nếu cậu thật lòng coi tớ là bạn thì đừng có từ chối.`,
  },
  {
    id: 'sample-control-privacy',
    title: 'Kiểm soát bạn bè & Đòi mật khẩu Zalo',
    tag: 'Kiểm soát & Xâm phạm riêng tư',
    badgeColor: 'bg-purple-100 text-purple-700 border-purple-200',
    description: 'Tình huống đòi kiểm tra tin nhắn và cấm bạn tham gia câu lạc bộ vì ghen tuông vô cớ.',
    content: `[20:30] Tuấn: Tối nay cậu đi họp ban Văn nghệ với những ai? Có thằng lớp A3 đi cùng không?
[20:32] Bạn: Cả ban có mười mấy bạn lận, bạn ấy là trưởng ban nên phải có mặt chứ.
[20:33] Tuấn: Tớ không thích cậu nói chuyện hay đứng gần nó. Rút khỏi ban Văn nghệ ngay ngày mai đi.
[20:34] Bạn: Nhưng tớ thích hoạt động này, sắp tới ngày 20/11 rồi, tớ không bỏ ngang được.
[20:35] Tuấn: Cậu cãi tớ à? Cậu chỉ cần tập trung vào tớ thôi là chưa đủ à? Đưa pass Zalo với Facebook đây tớ kiểm tra xem cậu nhắn gì với nó.
[20:36] Tuấn: Yêu nhau mà không dám đưa mật khẩu chứng tỏ có tật giật mình, đang léng phéng sau lưng tớ đúng không?`,
  },
  {
    id: 'sample-threat-emergency',
    title: 'Đe dọa bóc phốt & Đòi tiền (Báo động khẩn cấp)',
    tag: 'Đe dọa & Tống tiền',
    badgeColor: 'bg-red-100 text-red-700 border-red-200',
    description: 'Tình huống bị kẻ xấu dùng ảnh cá nhân và tin nhắn tâm sự để đe dọa tung lên mạng nhằm tống tiền.',
    content: `[22:15] Nick ẩn danh: Chào em, anh đang có trong tay toàn bộ đoạn chat tâm sự chuyện gia đình em với mấy cái ảnh riêng tư hôm trước em lỡ gửi trong nhóm kín.
[22:16] Bạn: Anh là ai vậy? Sao anh lại có được những thứ đó? Em xin anh đừng phát tán!
[22:17] Nick ẩn danh: Biết sợ là tốt đấy. Giờ nghe cho rõ đây: Chuyển 1 triệu vào ví MoMo này trước 8h sáng mai.
[22:18] Nick ẩn danh: Bằng không thì toàn bộ ảnh và tin nhắn này sẽ được đăng lên diễn đàn trường và gửi thẳng vào Facebook của mẹ em.
[22:19] Nick ẩn danh: Dám báo ai hay chặn tin nhắn thì đừng trách anh làm em hết đường đi học.`,
  },
  {
    id: 'sample-trust-exploitation',
    title: 'Lợi dụng lòng tin mượn tài khoản mạng',
    tag: 'Lợi dụng lòng tin',
    badgeColor: 'bg-teal-100 text-teal-700 border-teal-200',
    description: 'Lợi dụng sự cả nể để mượn tài khoản cá nhân và hỏi mã xác thực nhạy cảm.',
    content: `[14:20] Hoàng: Cậu ơi, điện thoại tớ đang bị bố giữ rồi. Cậu cho tớ mượn tài khoản Facebook của cậu 15 phút để tớ nhắn tin nhờ bạn lấy hộ cuốn sách với.
[14:22] Bạn: Tài khoản tớ nhiều tin nhắn cá nhân lắm, cậu mượn máy bạn khác xem sao.
[14:23] Hoàng: Trời đất, bạn bè chơi với nhau từ hồi cấp 2 mà cậu nghi ngờ tớ vậy à? Tớ là đứa thế nào cậu còn không biết sao?
[14:24] Hoàng: Tớ vừa ấn nút quên mật khẩu bên máy này rồi, tin nhắn có mã 6 số gửi về số điện thoại của cậu ấy, cậu đọc mã đó cho tớ nhanh lên không hết hạn bây giờ. Đừng có nghi ngờ vớ vẩn nữa.`,
  },
  {
    id: 'sample-healthy-communication',
    title: 'Giao tiếp học đường lành mạnh & Tôn trọng',
    tag: 'Giao tiếp lành mạnh',
    badgeColor: 'bg-emerald-100 text-emerald-700 border-emerald-200',
    description: 'Ví dụ về cuộc trò chuyện tôn trọng ranh giới, dù có lời từ chối nhưng đôi bên vẫn thấu hiểu và lịch sự.',
    content: `[09:00] Mai: Chiều nay tan học cậu có rảnh không, qua nhà tớ chỉ giúp tớ bài tập Hóa với, phần este tớ chưa hiểu lắm.
[09:05] Bạn: Chiều nay tớ lại có lịch học thêm Tiếng Anh lúc 4h rồi Mai ơi, nên tớ không qua được.
[09:07] Mai: Ồ thế à, tiếc nhỉ. Vậy thôi để tớ tự xem lại sách giáo khoa với hỏi thêm bạn Hùng xem sao.
[09:08] Mai: Cậu học Tiếng Anh vui nhé, khi nào rảnh chúng mình ôn tập sau cũng được! Cảm ơn cậu nha.`,
  },
];
