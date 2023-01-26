import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';

function TourDetail() {
    return (
        <>
            <Timeline lineColor='#ddd'>
                <TimelineItem
                    key="001"
                    dateText="Day 0. (28/04/2023)"
                    style={{ color: '#e86971' }}
                >
                    <h3>Tân Sơn Nhất – Nội Bài</h3>
                    <h4>Khởi hành</h4>
                    <p>
                        Bay từ Tân Sơn Nhất – Nội Bài chuyến 18h30 tối nhưng do ít chuyến nên chuyến bay đẩy lên lúc 16h30.
                    </p>
                </TimelineItem>
                <TimelineItem
                    key="002"
                    dateText="Day 1. (29/04/2023)"
                    dateInnerStyle={{ background: '#61b8ff', color: '#000' }}
                    bodyContainerStyle={{
                        background: '#ddd',
                        padding: '20px',
                        borderRadius: '8px',
                        boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                    }}
                >
                    <h3 style={{ color: '#61b8ff' }}>HÀ GIANG – QUẢN BẠ – YÊN MINH – ĐỒNG VĂN</h3>
                    <h4 style={{ color: '#61b8ff' }}>Checkin</h4>
                    <p>
                        - 7h dậy vệ sinh cá nhân và làm thủ tục thuê xe máy, bạn nên thuê xe số để đi đường đèo an tòan hơn nha!
                    </p>
                    <p>
                        -  Ăn sáng ở phở gà gần quảng trường, giá 35k/1 bát, khá ngon.
                    </p>
                    <p>
                        - Sau đó check-in cột mốc số 0.
                    </p>
                    <p>
                        - Dọc đường đi hoa đào nở đẹp và nhiều người chụp ảnh nên mình cũng bon chen vào chụp.
                    </p>
                    <p>
                        - Tiếp đó là ghé Quản Bạ uống cà phê, ăn xúc xích nướng và trứng luộc, từ trên cao vừa nhâm nhi cafe, vừa ngắm thung lũng ta nói tuyệt vời khiến người khác mê mẩn luôn.
                    </p>
                </TimelineItem>
                <TimelineItem
                    key="003"
                    dateComponent={(
                        <div
                            style={{
                                display: 'block',
                                float: 'left',
                                padding: '10px',
                                background: 'rgb(150, 150, 150)',
                                color: '#fff',
                            }}
                        >
                            Day 2. (30/04/2023)
                        </div>
                    )}
                >
                    <h3>ĐỒNG VĂN – LŨNG CÚ – MÃ PÌ LÈNG – SÔNG NHO QUẾ</h3>
                    <h4>Subtitle</h4>
                    <p>
                        - Hôm nay mình đi cột cờ Lũng Cú, đến nơi đi xe điện lên trên cột cờ 30k/người/khứ hồi, vé vào cổng 10k/người, leo thêm mấy trăm bậc thang đến nơi, leo thêm 1 khúc cầu thang bộ xoắn ốc thì mới lên chỗ cao nhất ngắm toàn cảnh đẹp Lũng Cú.
                    </p>
                    <p>
                        - Sau đó mình về ghé phố cổ Đồng Văn chụp ảnh, xong về homestay check-out và lên đường.
                    </p>
                    <p>
                        - Trên đường đi mình ghé chỗ Vách Đá Thần, đi Sông Nho Quế, do hôm qua mình có nhờ homestay đặt thuyền cho nên đến là có người đón luôn tại bến (giá vé 1 người là 100k bao gồm cả trèo chèo kayak). Mình đi Tàu Tu Sản Vip1 do không thích đi đông nên mình đi riêng 1 tàu.
                    </p>
                    <p>
                        - Sau đó, mình book phòng tại Mèo Vạc Valley với giá cũng 400k/đêm,ăn tối + ăn sáng mình ăn tại homestay hết. Mình thích khu này nhất luôn vì yên tĩnh nằm trong Làng văn hóa du lịch cộng đồng dân tộc Mông.
                    </p>
                </TimelineItem>
                <TimelineItem
                    key="004"
                    dateText="Day 3. (01/05/2023)"
                    dateInnerStyle={{ background: '#76bb7f' }}
                >
                    <h3>MÈO VẠC – HÀ GIANG</h3>
                    <h4>Subtitle</h4>
                    <p>
                        - 7h dậy vệ sinh cá nhân, soạn đồ, ăn sáng.
                    </p>

                    <p>
                        - Mình đi dạo ra Làng văn hóa du lịch cộng đồng dân tộc Mông trước homestay chơi với các bé và chụp hình.
                    </p>

                    <p>
                        - Sau đó về homestay check-out và lên đường về thành phố.
                    </p>

                    <p>
                        - Trên đường về bọn mình ghé chụp ảnh tại đèo Bắc Sum và ăn tối gần cột mốc số 0, khu này rất nhiều đồ ăn nên tới đây sẽ có nhiều lựa chọn hơn.
                    </p>

                    <p>
                        - Ăn xong mình về trả xe máy, mình đi xe Hà Giang – Hà Nội kết thúc hành trình.
                    </p>

                    <p>
                        - Sức khỏe vì thời tiết đây khá lạnh, dễ bị sốc nhiệt.
                    </p>

                    <p>
                        - Smartphone chụp ảnh tốt hoặc máy ảnh, camera hành trình (nếu có).
                    </p>

                    <p>
                        - Quần áo ấm, bao tay, khăn choàng, giày tốt, thuốc dự phòng để bạn có thể đi bộ và leo núi.
                    </p>

                    <p>
                        - Sạc dự phòng,một số đồ y tế và thuốc thông dụng như cảm, ho, áo mưa và đặc biệt nhớ mang 1 người bạn lái xe tốt làm xế và chụp ảnh có tâm nha.
                    </p>

                </TimelineItem>
            </Timeline>
        </>
    );
}

export default TourDetail;
