import React from "react";
import "./App.css";

// Local assets mapping
import logoImg from "./assets/Logo (6).png";
import heroImg from "./assets/hero.png";
import gergisenbergImg from "./assets/Gergisenberg.png";
import chatgptTricksImg from "./assets/Chatgpttricks  originals series.png";
import evolvingAiImg from "./assets/evolvingAI originals\u00A0.png";
import saasflashImg from "./assets/saasflash.png";
import freeframeImg from "./assets/freeframe.io.png";
import pinImg from "./assets/Pin 1st.png";
import highlightSvg from "./assets/Highlight_03 (2).svg";
import highlight2Svg from "./assets/Highlight_03 (3).svg";
import b2bCompaniesSvg from "./assets/b2b companies.svg";
import serviceArmSvg from "./assets/service arm..svg";
import soWhatSvg from "./assets/so what.svg";
import productMarketingSvg from "./assets/product marketing.svg";
import launchVideosSvg from "./assets/launch videos.svg";
import helpYouSellSvg from "./assets/help you sell.svg";
import seeYouSvg from "./assets/See you.svg";
import lastGroupSvg from "./assets/last group svg.svg";
import brainSvg from "./assets/brain.svg";

// Fallback images for missing launch videos
const work1 =
  "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=340&h=210&fit=crop";
const work2 =
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=340&h=210&fit=crop";
const work3 =
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=340&h=210&fit=crop";
const work4 =
  "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=340&h=210&fit=crop";

const App: React.FC = () => {
  return (
    <div className="main-canvas">
      <div className="center-wrapper">
        {/* Top Header Branding (Logo (6).png) */}
        <div
          className="absolute-node"
          style={{ left: 52, top: 45, width: 156 }}>
          <img src={logoImg} alt="Saasflash Logo" style={{ width: "100%" }} />
        </div>

        {/* Hero Description (Saasflash) */}
        <div
          className="absolute-node column-flex"
          style={{ left: 67, top: 197, width: 350, gap: 7 }}>
          <h1
            className="font-caveat"
            style={{ fontSize: 60, fontWeight: 400, margin: 0 }}>
            Saasflash
          </h1>
          <p
            className="font-space-grotesk"
            style={{ fontSize: 28, fontWeight: 500, margin: 0 }}>
            /sæs.flæʃ/ | noun
          </p>
        </div>

        {/* --- Main Content Intro Section --- */}
        <div
          className="absolute-node"
          style={{ left: 67, top: 340, width: 1108 }}>
          <div
            style={{
              position: "relative",
              width: 862,
              height: 89,
              overflow: "visible",
            }}>
            <p
              className="font-space-mono"
              style={{
                fontSize: 18,
                lineHeight: "normal",
                letterSpacing: "-0.36px",
                margin: 0,
              }}>
              born in pre-opus era as a tech consultancy. turns out we
              understand media just as well. now we make launch videos and
              organic content that influence and help you sell. for b2b
              companies
            </p>
          </div>

          <div
            style={{
              marginTop: 27,
              borderTop: "1px solid #333",
              opacity: 0.1,
              width: 1108,
            }}></div>

          <div className="column-flex" style={{ gap: 18, marginTop: 45 }}>
            <div
              className="flex-node"
              style={{ gap: 40, alignItems: "center" }}>
              <p
                className="font-space-mono"
                style={{
                  fontSize: 18,
                  letterSpacing: "-0.36px",
                  margin: 0,
                  whiteSpace: "nowrap",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                }}>
                launch videos{" "}
                <img
                  src={launchVideosSvg}
                  style={{ height: 18 }}
                  alt="camera"
                />
                have a{" "}
                <span style={{ fontWeight: 700 }}>virality problem.</span>
              </p>
            </div>

            <div style={{ position: "relative", height: 60 }}>
              <div style={{ position: "absolute", left: 298, top: 50 }}>
                <img src={soWhatSvg} alt="squiggle" />
              </div>
              <p
                className="font-space-mono"
                style={{ fontSize: 18, letterSpacing: "-0.36px", margin: 0 }}>
                your content got a million views.{" "}
                <span style={{ fontWeight: 700 }}>so what?</span>
                <br />
                got all the media mentions.{" "}
                <span style={{ fontWeight: 700 }}>so what?</span>
              </p>
            </div>

            <p className="font-space-mono" style={{ fontSize: 18 }}>
              most companies treat{" "}
              <span style={{ fontWeight: 700 }}>
                virality as the finish line.
              </span>
            </p>

            <p className="font-space-mono" style={{ fontSize: 18 }}>
              either to get that CMO{" "}
              <span style={{ fontWeight: 700 }}>promotion</span> or massage the
              founder's ego (atleast i'm famous now)
            </p>

            <p className="font-space-mono" style={{ fontSize: 18 }}>
              such virality is <span style={{ fontWeight: 700 }}>noise</span>,
              and definitely not leverage.
            </p>

            <p className="font-space-mono" style={{ fontSize: 18 }}>
              now don't get me wrong
            </p>

            <div style={{ position: "relative", height: 46 }}>
              <div style={{ position: "absolute", left: 465, top: 28 }}>
                <img src={productMarketingSvg} alt="highlight" />
              </div>
              <p
                className="font-space-mono"
                style={{ fontSize: 18, margin: 0 }}>
                attention matters. which is why we take a{" "}
                <span style={{ fontWeight: 700 }}>product marketing</span>{" "}
                approach to a video.
              </p>
            </div>

            <div style={{ position: "relative" }}>
              <p
                className="font-space-mono"
                style={{ fontSize: 18, margin: 0 }}>
                videos that communicate, influence and{" "}
                <span style={{ fontWeight: 700 }}>help you sell.</span> be it
                your product,
                <br />
                or your brand to future employees.
              </p>
            </div>
          </div>
        </div>

        {/* --- B2B Section --- */}
        <div
          className="absolute-node"
          style={{
            left: 67,
            top: 970,
            width: 1400,
            height: 90,
            opacity: 1,
          }}>
          {/* Divider with 0.1 opacity as per project style */}
          <div
            style={{
              position: "absolute",
              top: -15,
              width: 1108,
              borderTop: "1px solid #333",
              opacity: 0.1,
            }}></div>

          <div style={{ position: "absolute", left: 301, top: 20 }}>
            <img src={b2bCompaniesSvg} alt="divider underline" />
          </div>
          <p
            className="font-space-mono"
            style={{
              fontSize: 18,
              position: "absolute",
              top: 24,
              margin: 0,
              whiteSpace: "nowrap",
            }}>
            we love telling stories for{" "}
            <span style={{ fontWeight: 700 }}>b2b companies.</span> especially
            the ones with complex, <br />
            technical products that are easy to underestimate
          </p>
        </div>

        {/* Portfolio Cards layout */}
        <div
          className="absolute-node shadow-card"
          style={{
            left: 69,
            top: 1208,
            width: 284,
            backgroundColor: "#fff6f0",
            padding: 16,
            borderRadius: 8,
          }}>
          <div
            style={{
              backgroundColor: "#ededed",
              height: 341,
              width: "100%",
              borderRadius: 4,
            }}>
            <img
              src={work1}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              alt="MCP Card"
            />
          </div>
          <div
            className="column-flex text-center"
            style={{ marginTop: 24, gap: 2 }}>
            <p
              className="font-caveat"
              style={{ fontSize: 24, fontWeight: 700, margin: 0 }}>
              MCP
            </p>
            <p className="font-caveat" style={{ fontSize: 25, margin: 0 }}>
              1m+ views
            </p>
          </div>
          <img
            src={pinImg}
            style={{
              position: "absolute",
              left: 240,
              top: 200,
              width: 35,
              transform: "rotate(-93deg)",
            }}
            alt="pin"
          />
        </div>

        <div
          className="absolute-node shadow-card"
          style={{
            left: 384,
            top: 1201,
            width: 284,
            transform: "rotate(3deg)",
            backgroundColor: "#fff6f0",
            padding: 16,
            borderRadius: 8,
          }}>
          <div
            style={{
              backgroundColor: "#ededed",
              height: 341,
              width: "100%",
              borderRadius: 4,
            }}>
            <img
              src={work2}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              alt="Sam Musk"
            />
          </div>
          <div
            className="column-flex text-center"
            style={{ marginTop: 24, gap: 2 }}>
            <p
              className="font-caveat"
              style={{ fontSize: 24, fontWeight: 700, margin: 0 }}>
              Sam vs Elon Musk case
            </p>
            <p className="font-caveat" style={{ fontSize: 25, margin: 0 }}>
              1m+ views
            </p>
          </div>
        </div>

        <div
          className="absolute-node shadow-card"
          style={{
            left: 724,
            top: 1224,
            width: 284,
            transform: "rotate(-6deg)",
            backgroundColor: "#fff6f0",
            padding: 16,
            borderRadius: 8,
          }}>
          <div
            style={{
              backgroundColor: "#ededed",
              height: 341,
              width: "100%",
              borderRadius: 4,
            }}>
            <img
              src={work3}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              alt="Recursive"
            />
          </div>
          <div
            className="column-flex text-center"
            style={{ marginTop: 24, gap: 2 }}>
            <p
              className="font-caveat"
              style={{ fontSize: 24, fontWeight: 700, margin: 0 }}>
              Recursive intelligence
            </p>
            <p className="font-caveat" style={{ fontSize: 25, margin: 0 }}>
              stealth - DM for access
            </p>
          </div>
        </div>

        <div
          className="absolute-node"
          style={{ left: 916, top: 1158, transform: "rotate(-6deg)" }}>
          <img src={pinImg} style={{ width: 40 }} alt="second pin" />
        </div>

        {/* --- Motion Originals Section --- */}
        <div className="absolute-node" style={{ left: 72, top: 1787 }}>
          <p
            className="font-space-mono"
            style={{ fontSize: 18, width: 633, margin: 0 }}>
            we're the brains &nbsp;&nbsp; behind the{" "}
            <span style={{ fontWeight: 700 }}>motion</span> originals you see on
            the biggest pages in tech.
          </p>
          <div style={{ position: "absolute", left: 182, top: -20, width: 33 }}>
            <img src={brainSvg} alt="brain icon" style={{ width: "100%" }} />
          </div>
        </div>

        {/* Circle Grid */}
        <div
          className="absolute-node flex-node"
          style={{ left: 72, top: 1894 }}>
          {[
            { name: "Gergisenberg", img: gergisenbergImg, width: 275 },
            {
              name: `${"Chatgpttricks"} <br /> ${"originals series"}`,
              img: chatgptTricksImg,
              width: 277,
            },
            { name: "evolvingAI originals", img: evolvingAiImg, width: 276 },
            { name: "saasflash", img: saasflashImg, width: 275 },
          ].map((item, idx, arr) => (
            <div
              key={idx}
              style={{
                width: item.width,
                height: 312,
                borderWidth: `0px ${idx === arr.length - 1 ? "0px" : "2px"} 0px 0px`,
                borderStyle: "solid",
                borderImageSource:
                  "linear-gradient(180deg, #F3EFEC 0%, #969696 50%, #F3EFEC 100%)",
                borderImageSlice: 1,
                position: "relative",
              }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: 15,
                }}>
                <div
                  style={{
                    width: 171,
                    height: 171,
                    borderRadius: "50%",
                    overflow: "hidden",
                    border: "1px solid #f3efec",
                  }}>
                  <img
                    src={item.img}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    alt={item.name}
                  />
                </div>
              </div>
              <div
                className="flex-node"
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 8,
                  marginTop: 45,
                }}>
                <img
                  src={highlightSvg}
                  style={{ width: 22, transform: "rotate(165deg) scaleY(-1)" }}
                  alt="star"
                />
                <p
                  className="font-caveat"
                  style={{
                    fontSize: 22,
                    textDecoration: "underline",
                    margin: 0,
                    padding: "0 4px",
                    textAlign: "center",
                    lineHeight: "1.1",
                  }}>
                  {item.name.split("<br />").map((line, i) => (
                    <React.Fragment key={i}>
                      {line.trim()}
                      {i < item.name.split("<br />").length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </p>
                <img
                  src={highlightSvg}
                  style={{ width: 22, transform: "rotate(15deg)" }}
                  alt="star"
                />
              </div>
            </div>
          ))}
        </div>

        {/* --- Launch Videos showcase --- */}
        <div
          className="absolute-node column-flex"
          style={{ left: 72, top: 2253, width: 1368, gap: 36 }}>
          <p
            className="font-space-mono"
            style={{ fontSize: 18, fontWeight: 700 }}>
            And have created sales driven launch videos for
          </p>
          <div className="flex-node" style={{ gap: 8 }}>
            <div
              style={{
                width: 340,
                height: 210,
                overflow: "hidden",
                borderRadius: 4,
              }}>
              <img
                src={work1}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                alt="Client Launch 1"
              />
            </div>
            <div
              style={{
                width: 340,
                height: 210,
                overflow: "hidden",
                borderRadius: 4,
              }}>
              <img
                src={work2}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                alt="Client Launch 2"
              />
            </div>
            <div
              style={{
                width: 340,
                height: 210,
                overflow: "hidden",
                borderRadius: 4,
              }}>
              <img
                src={work3}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                alt="Client Launch 3"
              />
            </div>
            <div
              style={{
                width: 340,
                height: 210,
                overflow: "hidden",
                borderRadius: 4,
              }}>
              <img
                src={work4}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                alt="Client Launch 4"
              />
            </div>
          </div>
        </div>

        {/* Mid Divider */}
        <div
          className="absolute-node"
          style={{
            left: 72,
            top: 2570,
            width: 1108,
            borderTop: "1px solid #333",
            opacity: 0.1,
          }}></div>

        {/* --- Team & Services Section --- */}
        <div
          className="absolute-node column-flex"
          style={{ left: 72, top: 2614, width: 1019, gap: 26 }}>
          <p className="font-space-mono" style={{ fontSize: 18, margin: 0 }}>
            we're a lean team of{" "}
            <span style={{ fontWeight: 700 }}>12 motion designer</span> + and{" "}
            <span style={{ fontWeight: 700 }}>2 developers</span> who love
            creativemaxxing.
          </p>
          <p className="font-space-mono" style={{ fontSize: 18, margin: 0 }}>
            wait, <span style={{ fontWeight: 700 }}>why developers?</span>
          </p>
          <p className="font-space-mono" style={{ fontSize: 18, margin: 0 }}>
            our side quest is taking everything we learn in operations, and
            building tools that optimize our performance
          </p>
          <p className="font-space-mono" style={{ fontSize: 18, margin: 0 }}>
            eventually help other creative teams do the same.
          </p>

          <div
            className="flex-node"
            style={{
              marginTop: 12,
              alignItems: "flex-end",
              position: "relative",
              width: "max-content",
            }}>
            <p
              className="font-caveat"
              style={{ fontSize: 36, fontWeight: 400, margin: 0 }}>
              in short,{" "}
              <span style={{ fontWeight: 700 }}>
                we are building a creative tech service arm.
              </span>
            </p>
            {/* Squiggle moved even further left for exact wrapping */}
            <div
              style={{
                position: "absolute",
                left: 490,
                bottom: -14,
                width: 156,
              }}>
              <img
                src={serviceArmSvg}
                alt="scribble highlight"
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </div>

        {/* --- First Product - Increased top position as requested --- */}
        <div
          className="absolute-node column-flex"
          style={{ left: 72, top: 2960, width: 958 }}>
          <div className="column-flex" style={{ marginBottom: 16 }}>
            <p className="font-caveat" style={{ fontSize: 26, margin: 0 }}>
              First product
            </p>
            <p className="font-space-mono" style={{ fontSize: 18, margin: 0 }}>
              freeframe.io
            </p>
          </div>
          <div className="flex-node" style={{ gap: 38, alignItems: "center" }}>
            <div style={{ width: 140 }}>
              <img
                src={freeframeImg}
                style={{ width: "100%" }}
                alt="freeframe"
              />
            </div>
            <div
              style={{
                height: 135,
                width: 2,
                backgroundColor:
                  "linear-gradient(180deg, #F3EFEC 0%, #121212ff 50%, #F3EFEC 100%)",
                opacity: 0.1,
              }}></div>
            <p
              className="font-space-mono"
              style={{ fontSize: 18, width: 742, margin: 0 }}>
              as the name suggests, we open sourced frame.io. not to save $$
              (slightly yes) but to keep proprietary data within your walls and
              build integrations and features specific to your workflow.
            </p>
          </div>
        </div>

        {/* --- Next Tools --- */}
        <div
          className="absolute-node column-flex"
          style={{ left: 72, top: 3200, width: 673, gap: 24 }}>
          <p
            className="font-space-mono"
            style={{ fontSize: 18, fontWeight: 700, margin: 0 }}>
            next tools we're tinkering with:
          </p>
          <ul
            className="column-flex"
            style={{ gap: 12, paddingLeft: 27, margin: 0 }}>
            <li
              className="font-space-mono"
              style={{ fontSize: 18, listStyleType: "disc" }}>
              AI motion inside after effects.
            </li>
            <li
              className="font-space-mono"
              style={{ fontSize: 18, listStyleType: "disc" }}>
              on-demand idea machine for brands. non-slop. actually good.
            </li>
          </ul>
        </div>

        {/* --- Contact Info --- */}
        <div
          className="absolute-node flex-node"
          style={{ left: 72, top: 3370, gap: 18, alignItems: "flex-end" }}>
          <p className="font-space-mono" style={{ fontSize: 18, margin: 0 }}>
            reach out at{" "}
            <a
              className="accent-link"
              href="mailto:hello@saasflash.ai"
              target="_blank"
              rel="noreferrer"
              style={{ fontWeight: 700, textDecoration: "underline" }}>
              hello@saasflash.ai
            </a>
          </p>
          <p className="font-caveat" style={{ fontSize: 28, margin: 0 }}>
            (chintan or ronak will reply there)
          </p>
        </div>

        {/* --- See you --- */}
        <div
          className="absolute-node flex-node"
          style={{ left: 72, top: 3437, alignItems: "center", gap: 14 }}>
          <p className="font-caveat" style={{ fontSize: 28, margin: 0 }}>
            See you
          </p>
          <img src={seeYouSvg} style={{ width: 41 }} alt="smile" />
        </div>

        {/* --- Open Peeps Mascot - Anchored to absolute bottom of 3690px container --- */}
        <div
          className="absolute-node"
          style={{ right: 80, bottom: "-170px", width: 456 }}>
          <img
            src={lastGroupSvg}
            alt="Peeps mascot"
            style={{ width: "100%", display: "block" }}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
