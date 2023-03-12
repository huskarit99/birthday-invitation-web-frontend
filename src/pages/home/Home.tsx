import axios from "axios";
import { useRef, useState } from "react";
import {
  Button,
  Carousel,
  ConfigProvider,
  Form,
  Input,
  Radio,
  Modal,
} from "antd";

import InstructionImage from "../../assets/images/instruction-image.jpg";
import TimeLineUrl from "../../assets/images/time-line.jpg";
import StorySM from "../../assets/images/story-sm.jpg";
import Statistic from "../../assets/images/statistic.jpg";
import StoryCreation from "../../assets/images/story-creation.jpg";
import Spirit from "../../assets/images/spirit.jpg";
import Journey3Year from "../../assets/images/journey-3-year.jpg";
import Journey7Year from "../../assets/images/journey-7-year.jpg";
import Currently from "../../assets/images/currently.jpg";
import InvitationCard from "../../assets/images/invitation-card.jpg";
import TN1 from "../../assets/images/tn1.jpg";
import TN2 from "../../assets/images/tn2.jpg";
import TN3 from "../../assets/images/tn3.jpg";
import TN4 from "../../assets/images/tn4.jpg";
import TN6 from "../../assets/images/tn6.jpg";
import TN7 from "../../assets/images/tn7.jpg";
import TN8 from "../../assets/images/tn8.jpg";
import TN9 from "../../assets/images/tn9.jpg";

import "./style.css";
import { useProgressiveImage } from "../../hooks";

const URL =
  "https://sheet.best/api/sheets/52f32189-fac3-4a04-adcc-f7f49c0a1c7e";

export const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const myRef: any = useRef(null);
  const [form] = Form.useForm();

  const TNs: any[] = [TN1, TN2, TN3, TN4, TN6, TN7, TN8, TN9];
  const TN_images: any[] = TNs.map((tn) => (
    <div>
      <img src={tn} alt="" style={{ height: "240px", width: "420px" }} />
    </div>
  ));

  const TimeLine = useProgressiveImage(TimeLineUrl);

  const executeScroll = () =>
    myRef?.current?.scrollIntoView({ behavior: "smooth" });

  const onFinish = (values: any) => {
    setIsLoading(true);
    axios
      .post(URL, {
        "Họ và tên": values?.fullName,
        "Quyết định": values?.decision ? "Có nè" : "Bận mất rồi!",
        "Số người đi cùng": values?.people,
      })
      .then((response) => {
        form.resetFields();
        Modal.success({
          title: "Bạn đã xác nhận thành công !!!",
          content:
            "Cảm ơn bạn. Sắc Màu đã nhận được câu trả lời của bạn rồi nhé!",
        });
      })
      .catch((e) => {
        console.log(e);
        Modal.error({
          title: "Bạn chưa xác nhận thành công !!!",
          content:
            "Có thể do ảnh hưởng từ đường truyển mạng. Phiền bạn giúp Sắc Màu kiểm tra và đăng ký lại. Sắc Màu xin cảm ơn nhé!",
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <div className="ladi-wraper">
        <div id="SECTION1" className="ladi-section">
          <div
            className="ladi-section-background"
            style={{ backgroundImage: `url(${InstructionImage})` }}
          ></div>
          <div className="ladi-overlay"></div>
          <div className="ladi-container">
            <div data-action="true" id="HEADLINE13" className="ladi-element">
              <h3 className="ladi-headline">XEM THÊM</h3>
            </div>
            <div
              id="SHAPE14"
              className="ladi-element ladi-animation"
              onClick={executeScroll}
            >
              <div className="ladi-shape">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  preserveAspectRatio="none"
                  viewBox="0 0 1152 1896.0833"
                  className=""
                  fill="rgba(255, 255, 255, 1.0)"
                >
                  <path d="M1075 736q0 13-10 23l-466 466q-10 10-23 10t-23-10L87 759q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div id="SECTION2" className="ladi-section" ref={myRef}>
          <div
            className="ladi-section-background"
            style={{ backgroundImage: `url(${StorySM})` }}
          ></div>
        </div>

        <div id="SECTION3" className="ladi-section">
          <div
            className="ladi-section-background"
            style={{ backgroundImage: `url(${TimeLine ?? ""})` }}
          ></div>
        </div>

        <div id="SECTION4" className="ladi-section">
          <div
            className="ladi-section-background"
            style={{ backgroundImage: `url(${Statistic})` }}
          ></div>
        </div>

        <div id="SECTION5" className="ladi-section">
          <div
            className="ladi-section-background"
            style={{ backgroundImage: `url(${StoryCreation})` }}
          ></div>
        </div>

        <div id="SECTION6" className="ladi-section">
          <div
            className="ladi-section-background"
            style={{ backgroundImage: `url(${Spirit})` }}
          ></div>
        </div>

        <div id="SECTION7" className="ladi-section">
          <div
            className="ladi-section-background"
            style={{ backgroundImage: `url(${Journey3Year})` }}
          ></div>
        </div>

        <div id="SECTION8" className="ladi-section">
          <div
            className="ladi-section-background"
            style={{ backgroundImage: `url(${Journey7Year})` }}
          ></div>
        </div>

        <div id="SECTION9" className="ladi-section">
          <div
            className="ladi-section-background"
            style={{ backgroundImage: `url(${Currently})` }}
          ></div>
        </div>

        <div id="SECTION51" className="ladi-section">
          <div className="ladi-section-background"></div>
          <div className="ladi-container">
            <div id="IMAGE151" className="ladi-element">
              <div className="ladi-image">
                <div className="ladi-image-background"></div>
              </div>
            </div>
            <div id="IMAGE153" className="ladi-element">
              <div className="ladi-image">
                <div className="ladi-image-background"></div>
              </div>
            </div>
            <div
              data-action="true"
              id="IMAGE53"
              className="ladi-element ladi-animation-hidden"
            >
              <div className="ladi-image ladi-transition">
                <div className="ladi-image-background"></div>
              </div>
            </div>
            <div
              data-action="true"
              id="IMAGE42"
              className="ladi-element ladi-animation-hidden"
            >
              <div className="ladi-image ladi-transition">
                <div className="ladi-image-background"></div>
              </div>
            </div>
            <div
              data-action="true"
              id="IMAGE43"
              className="ladi-element ladi-animation-hidden"
            >
              <div className="ladi-image ladi-transition">
                <div className="ladi-image-background"></div>
              </div>
            </div>
            <div
              data-action="true"
              id="IMAGE44"
              className="ladi-element ladi-animation-hidden"
            >
              <div className="ladi-image ladi-transition">
                <div className="ladi-image-background"></div>
              </div>
            </div>
            <div
              data-action="true"
              id="IMAGE45"
              className="ladi-element ladi-animation-hidden"
            >
              <div className="ladi-image ladi-transition">
                <div className="ladi-image-background"></div>
              </div>
            </div>
            <div
              data-action="true"
              id="IMAGE46"
              className="ladi-element ladi-animation-hidden"
            >
              <div className="ladi-image ladi-transition">
                <div className="ladi-image-background"></div>
              </div>
            </div>
            <div
              data-action="true"
              id="IMAGE47"
              className="ladi-element ladi-animation-hidden"
            >
              <div className="ladi-image ladi-transition">
                <div className="ladi-image-background"></div>
              </div>
            </div>
            <div id="BOX50" className="ladi-element">
              <div className="ladi-box"></div>
            </div>
            <div id="GROUP147" className="ladi-element">
              <div className="ladi-group">
                <div id="HEADLINE51" className="ladi-element">
                  <h3
                    className="ladi-headline"
                    style={{
                      textAlign: "center",
                      textJustify: "inter-word",
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    {`NHỮNG KHOẢNH KHẮC TRỌN VẸN\nCỦA CHÚNG MÌNH`}
                  </h3>
                </div>
              </div>
            </div>
            <div id="IMAGE152" className="ladi-element">
              <div className="ladi-image">
                <div className="ladi-image-background"></div>
              </div>
            </div>
            <div
              data-action="true"
              id="IMAGE40"
              className="ladi-element ladi-animation-hidden"
            >
              <div className="ladi-image ladi-transition">
                <div className="ladi-image-background"></div>
              </div>
            </div>

            <div
              id="GALLERY399"
              className="ladi-element"
              data-max-item="15"
              data-runtime-id="FxfIbjviEC"
              data-current="0"
              data-is-next="true"
              data-scrolled="false"
              data-loaded="true"
            >
              <Carousel autoplay effect="fade" dots={{ className: "black" }}>
                {TN_images.map((image) => image)}
              </Carousel>
            </div>
          </div>
        </div>

        <div id="SECTION314" className="ladi-section">
          <div
            className="ladi-section-background"
            style={{ backgroundImage: `url(${InvitationCard})` }}
          ></div>
        </div>

        <div id="SECTION315" className="ladi-section">
          <div className="ladi-section-background"></div>
          <div className="ladi-overlay"></div>
          <div className="">
            <div id="PARAGRAPH309" className="ladi-element">
              <div className="ladi-paragraph">
                SAVE THE DAY
                <br />
              </div>
            </div>
            <div id="PARAGRAPH394" className="ladi-element">
              <div className="ladi-paragraph">
                Chương trình kỉ niệm 10 năm hoạt động là sự kiện để chúng ta
                cùng nhau lắng đọng nhìn lại hành trình sẻ chia trong cuộc sống,
                cùng nhau chứng kiến những thành quả được tạo nên bởi tấm lòng
                nhân ái, những giá trị mà các anh chị đã trao đi cho cộng đồng
                thông qua Sắc Màu.
                <br />
              </div>
            </div>
            <div id="PARAGRAPH395" className="ladi-element">
              <div className="ladi-paragraph">
                Với vai trò là cầu nối và tổ chức, Sắc Màu vô cùng biết ơn
                anh/chị đã hiện diện cùng Sắc Màu trong hành trình 10 năm Sắc
                Màu Yêu Thương. Chính vì vậy, Sắc Màu rất mong được chào đón anh
                chị quay về họp mặt, ôn lại những kỷ niệm đẹp, giao lưu chia sẻ
                về chủ đề thiện nguyện cùng Sắc Màu, đặc biệt là thưởng thức
                những tiết mục văn nghệ do chính các em sinh viên “nhà Sắc Màu”
                biểu diễn.
                <br />
              </div>
            </div>
            <div id="PARAGRAPH3951" className="ladi-element">
              <div className="ladi-paragraph">
                Thông qua đây Sắc Màu cũng xin gửi lời cảm ơn sâu sắc đến các
                chị trong Ban cố vấn/giám sát của Tổ Chức Xã hội Sắc Màu đã tài
                trợ tiệc tea break cũng như toàn bộ chi phí tổ chức chương trình
                kỉ niệm này. Để giúp BTC thực hiện tốt vai trò của mình trong
                công tác tổ chức, anh chị vui lòng xác nhận tham dự trước ngày
                15/03/2023.
                <br />
              </div>
            </div>
            <div
              id="FORM310"
              data-config-id="633bb987298bb4002008b323"
              className="ladi-element"
            >
              <Form
                form={form}
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                className="ladi-form"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <div id="FORM_ITEM396" className="ladi-element">
                  <Form.Item
                    name="fullName"
                    rules={[
                      {
                        required: true,
                        message: "",
                      },
                    ]}
                  >
                    <Input
                      size="large"
                      style={{ width: "387px" }}
                      placeholder="Tên của bạn"
                    />
                  </Form.Item>
                </div>
                <div id="FORM_ITEM397" className="ladi-element">
                  <ConfigProvider
                    theme={{
                      token: {
                        colorPrimary: "#00b96b",
                      },
                    }}
                  >
                    <Form.Item
                      name="decision"
                      initialValue={1}
                      rules={[
                        {
                          required: true,
                          message: "",
                        },
                      ]}
                    >
                      <Radio.Group>
                        <Radio value={1} className="text-white">
                          Đi được nè
                        </Radio>
                        <Radio value={0} className="text-white">
                          Bận mất rồi
                        </Radio>
                      </Radio.Group>
                    </Form.Item>
                  </ConfigProvider>
                </div>
                <div id="FORM_ITEM3970" className="ladi-element">
                  <Form.Item
                    name="people"
                    initialValue={0}
                    rules={[
                      {
                        required: true,
                        message: "",
                      },
                    ]}
                  >
                    <Input
                      type="number"
                      size="large"
                      min={0}
                      style={{ width: "387px" }}
                      placeholder="Số lượng người đi cùng"
                    />
                  </Form.Item>
                </div>
                <div id="FORM_ITEM3971" className="ladi-element">
                  <Form.Item>
                    <Button loading={isLoading} htmlType="submit">
                      Xác nhận{" "}
                    </Button>
                  </Form.Item>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
