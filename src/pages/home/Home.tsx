import { useRef } from "react";
import { Carousel, Form, Input, Radio } from "antd";

import InstructionImage from "../../assets/images/instruction-image.jpg";
import TimeLineUrl from "../../assets/images/time-line.jpg";
import StorySM from "../../assets/images/story-sm.jpg";
import Statistic from "../../assets/images/statistic.jpg";
import StoryCreation from "../../assets/images/story-creation.jpg";
import Spirit from "../../assets/images/spirit.jpg";
import Journey3Year from "../../assets/images/journey-3-year.jpg";
import Journey7Year from "../../assets/images/journey-7-year.jpg";
import Currently from "../../assets/images/currently.jpg";
import TN1 from "../../assets/images/tn1.jpg";
import TN2 from "../../assets/images/tn2.jpg";
import TN3 from "../../assets/images/tn3.jpg";
import TN4 from "../../assets/images/tn4.jpg";
import TN6 from "../../assets/images/tn6.jpg";
import TN7 from "../../assets/images/tn7.jpg";
import TN8 from "../../assets/images/tn8.jpg";
import TN9 from "../../assets/images/tn9.jpg";
import TN11 from "../../assets/images/tn10.jpg";
import TN12 from "../../assets/images/tn11.jpg";
import TN13 from "../../assets/images/tn12.jpg";
import TN14 from "../../assets/images/tn13.jpg";
import axios from "axios";

import "./style.css";
import { useProgressiveImage } from "../../hooks";

const URL = "http://localhost:5001/api/user-controller/user";

export const Home = () => {
  const myRef: any = useRef(null);
  const TNs: any[] = [TN1, TN2, TN3, TN4, TN6];
  const TN_images: any[] = TNs.map((tn) => (
    <div>
      <img src={tn} alt="" style={{ height: "240px", width: "420px" }} />
    </div>
  ));

  const TimeLine = useProgressiveImage(TimeLineUrl);

  const executeScroll = () =>
    myRef?.current?.scrollIntoView({ behavior: "smooth" });

  const contentStyle: React.CSSProperties = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };

  const handleSubmit = (data: any) => {
    axios.post(URL, data);
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

        <div id="SECTION3" className="ladi-section ladi-animation-hidden">
          <div
            className="ladi-section-background"
            style={{ backgroundImage: `url(${TimeLine ?? ""})` }}
          ></div>
        </div>

        <div id="SECTION4" className="ladi-section ladi-animation-hidden">
          <div
            className="ladi-section-background"
            style={{ backgroundImage: `url(${Statistic})` }}
          ></div>
        </div>

        <div id="SECTION5" className="ladi-section ladi-animation-hidden">
          <div
            className="ladi-section-background"
            style={{ backgroundImage: `url(${StoryCreation})` }}
          ></div>
        </div>

        <div id="SECTION6" className="ladi-section ladi-animation-hidden">
          <div
            className="ladi-section-background"
            style={{ backgroundImage: `url(${Spirit})` }}
          ></div>
        </div>

        <div id="SECTION7" className="ladi-section ladi-animation-hidden">
          <div
            className="ladi-section-background"
            style={{ backgroundImage: `url(${Journey3Year})` }}
          ></div>
        </div>

        <div id="SECTION8" className="ladi-section ladi-animation-hidden">
          <div
            className="ladi-section-background"
            style={{ backgroundImage: `url(${Journey7Year})` }}
          ></div>
        </div>

        <div id="SECTION9" className="ladi-section ladi-animation-hidden">
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
                    }}
                  >
                    ẢNH TÌNH NGUYỆN CỦA BỌN MÌNH
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
                Hãy sắp xếp thời gian trở về cùng Sắc Màu thưởng thức tiệc
                teabreak nho nhỏ, mình cùng chuyện trò và ôn lại kỷ niệm nhé.
                <br />
              </div>
            </div>
            <div id="PARAGRAPH395" className="ladi-element">
              <div className="ladi-paragraph">
                Buổi họp mặt sẽ trọn vẹn và ý nghĩa hơn khi có sự tham gia của
                Bạn.
                <br />
              </div>
            </div>
            <div id="PARAGRAPH3951" className="ladi-element">
              <div className="ladi-paragraph">
                Hãy xác nhận tham gia để Sắc Màu chuẩn bị cho “Ngày trở về” thật
                chu đáo nhé!
                <br />
              </div>
            </div>
            <div
              id="FORM310"
              data-config-id="633bb987298bb4002008b323"
              className="ladi-element"
            >
              <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                className="ladi-form"
                initialValues={{ remember: true }}
                onFinish={handleSubmit}
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
                  <Form.Item
                    name="phoneNumber"
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
                      style={{ width: "387px" }}
                      placeholder="Số điện thoại"
                    />
                  </Form.Item>
                </div>
                <div id="FORM_ITEM3970" className="ladi-element">
                  <Form.Item
                    name="email"
                    rules={[
                      {
                        type: "email",
                        required: true,
                        message: "",
                      },
                    ]}
                  >
                    <Input
                      type="email"
                      size="large"
                      style={{ width: "387px" }}
                      placeholder="Đại chỉ email "
                    />
                  </Form.Item>
                </div>
                <div id="FORM_ITEM3971" className="ladi-element">
                  <Form.Item
                    name="decision"
                    rules={[
                      {
                        required: true,
                        message: "",
                      },
                    ]}
                  >
                    <Radio.Group>
                      <Radio checked value={1} className="text-white">
                        Đi được nè
                      </Radio>
                      <Radio value={0} className="text-white">
                        Bận mất rồi
                      </Radio>
                    </Radio.Group>
                  </Form.Item>
                </div>
                <div id="FORM_ITEM398" className="ladi-element">
                  <Form.Item
                    name="people"
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
                      style={{ width: "387px" }}
                      placeholder="Số lượng người đi cùng"
                    />
                  </Form.Item>
                </div>
                <div id="FORM_ITEM399" className="ladi-element">
                  <div className="ladi-form-item-container">
                    <button className="bg-green-600 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded">
                      Xác nhận
                    </button>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
