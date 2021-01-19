import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Copyright from "../src/Copyright";
import Address from "../src/Address";
import Image from "next/image";
import { withStyles } from "@material-ui/core/styles";
import AccountBalanceWalletOutlinedIcon from "@material-ui/icons/AccountBalanceWalletOutlined";
import PropTypes from "prop-types";
import clsx from "clsx";
import Link from "../src/Link";
import { signIn, signOut, useSession } from "next-auth/client";
import Button from "@material-ui/core/Button";
import Head from "next/head";

const styles = {
  animatedItem: {
    animation: `$myEffect 750ms ease`,
    color: "#FF9900",
  },
  animatedItemExiting: {
    color: "#FF9900",
    transition: "all .7s ease",
    animation: `$myEffectExit 1000ms ease`,
  },
  "@keyframes myEffect": {
    "0%": {
      opacity: 0,
    },
    "100%": {
      opacity: 1,
      transform: "rotate(1440deg)",
    },
  },
  "@keyframes myEffectExit": {
    "0%": {
      opacity: 1,
    },
    "50%": {
      opacity: 1, //0.33,
    },
    "100%": {
      opacity: 1,
    },
  }, //
};

export const config = { amp: true };

function About(props) {
  const [session, loading] = useSession();

  const { classes } = props;

  return (
    <>
      <Head>
        <title>Example AMP Story in Next.js</title>
        <script
          async
          key="amp-story"
          custom-element="amp-story"
          src="https://cdn.ampproject.org/v0/amp-story-1.0.js"
        />
        <script
          async
          key="amp-video"
          custom-element="amp-video"
          src="https://cdn.ampproject.org/v0/amp-video-0.1.js"
        />
      </Head>

      <Container maxWidth="sm">
        <Box my={4}>
          <Link color="inherit" href="/">
            <Typography
              style={{ opacity: 1 }}
              align="left"
              variant="h1"
              component="h1"
              gutterBottom
            >
              <AccountBalanceWalletOutlinedIcon
                className={clsx(classes.animatedItem, {
                  [classes.animatedItemExiting]: false,
                })}
                fontSize="inherit"
              />
              {"acceptBTC"}
            </Typography>
          </Link>

          <div>&nbsp;</div>

          {!session && (
            <>
              <Typography>
                Please sign in with your email address. We'll send you a{" "}
                <i>magic link</i> to access the Member's Area: <br />
                <br />
                <Button
                  style={{ color: "white", backgroundColor: "#FF9900" }}
                  onClick={signIn}
                >
                  Access Members Area
                </Button>
              </Typography>
            </>
          )}

          {session && (
            <>
              <Typography>
                <p>Welcome to the Member's Area</p>

                <p>Last updated December 30th, 2020</p>

                <p>Exclusive Content</p>

                <p>We are awesome.</p>

                <p>And so are you.</p>

                <p>
                  But together, we're both <i>more</i> awesome!
                </p>

                <p>OTHER STUFF...</p>

                <p>Blah blah blah...</p>
              </Typography>
              <amp-story
                standalone=""
                title="Stories in AMP - Hello World"
                publisher="AMP Project"
                publisher-logo-src="https://amp.dev/favicons/coast-228x228.png"
                poster-portrait-src="https://amp.dev/static/samples/img/story_dog2_portrait.jpg"
                poster-square-src="https://amp.dev/static/samples/img/story_dog2_square.jpg"
                poster-landscape-src="https://amp.dev/static/samples/img/story_dog2_landscape.jpg"
              >
                {/* <!-- A story consists of one or more pages. Each page is declared by an `amp-story-page` element. Pages are designed by layering videos, images and text. Here we have a page that uses two layers. One layer filling the available space with an image and one text layer that shows a heading. --> */}
                <amp-story-page id="page-1">
                  <amp-story-grid-layer template="fill">
                    <amp-img
                      src="https://amp.dev/static/samples/img/story_dog2.jpg"
                      width="720"
                      height="1280"
                      layout="responsive"
                    />
                  </amp-story-grid-layer>
                  <amp-story-grid-layer template="vertical">
                    <h1>Hello World</h1>
                    <p>This is an AMP Story.</p>
                  </amp-story-grid-layer>
                </amp-story-page>

                {/* <!-- Here we have a page consisting of a video which autoplays and loops. --> */}
                <amp-story-page id="page-2">
                  <amp-story-grid-layer template="fill">
                    <amp-video
                      autoplay=""
                      loop=""
                      width="720"
                      height="960"
                      poster="https://amp.dev/static/samples/img/story_video_dog_cover.jpg"
                      layout="responsive"
                    >
                      <source
                        src="https://amp.dev/static/samples/video/story_video_dog.mp4"
                        type="video/mp4"
                      />
                    </amp-video>
                  </amp-story-grid-layer>
                </amp-story-page>

                {/* <!-- Pre-defined entry animations make it possible to create dynamic pages without videos. The length and initial delay can be customized using the `animate-in-duration` and `animate-in-delay` properties. The [animations sample](/documentation/examples/visual-effects/amp_story_animations/) shows all available animantions in action. --> */}
                <amp-story-page id="animation-demo">
                  <amp-story-grid-layer template="fill">
                    <amp-img
                      src="https://amp.dev/static/samples/img/story_dog4.jpg"
                      animate-in="fly-in-top"
                      width="720"
                      height="1280"
                      layout="responsive"
                    />
                  </amp-story-grid-layer>
                  <amp-story-grid-layer template="thirds">
                    <h2
                      animate-in="fly-in-bottom"
                      grid-area="lower-third"
                      animate-in-delay="0.4s"
                    >
                      Best walk ever!
                    </h2>
                  </amp-story-grid-layer>
                </amp-story-page>

                {/* <!-- Stories can use predefined layouts to style the page. Here we're using the `thirds` template. For an overview about the available layouts take a look at the [layouts sample](/documentation/examples/style-layout/amp_story_layouts/). --> */}
                <amp-story-page id="layout-demo">
                  <amp-story-grid-layer template="thirds">
                    <amp-img
                      grid-area="upper-third"
                      src="https://amp.dev/static/samples/img/story_thirds_1.jpg"
                      width="560"
                      height="420"
                      layout="responsive"
                    />
                    <amp-img
                      grid-area="middle-third"
                      src="https://amp.dev/static/samples/img/story_thirds_2.jpg"
                      width="560"
                      height="420"
                      layout="responsive"
                    />
                    <amp-img
                      grid-area="lower-third"
                      src="https://amp.dev/static/samples/img/story_thirds_3.jpg"
                      width="560"
                      height="420"
                      layout="responsive"
                    />
                  </amp-story-grid-layer>
                </amp-story-page>

                {/* <!-- A "bookend" panel containing links to other resources will appear on the last page of your story if you include an `amp-story-bookend` that references a [bookend JSON config](/static/samples/json/bookend.json). --> */}
                <amp-story-bookend
                  src="https://amp.dev/static/samples/json/bookend.json"
                  layout="nodisplay"
                />
              </amp-story>
            </>
          )}

          <div>&nbsp;</div>
          <div>&nbsp;</div>

          <div
            style={{
              display: "flex",
              justifyContent: "left",
              marginBottom: "-8px",
            }}
          >
            <span
              style={{
                marginTop: "12px",
              }}
            >
              Get your&nbsp;
            </span>

            <Image
              style={{ textAlign: "center" }}
              src="/external/Bitcoin_accepted_here_printable.png"
              alt="Add a 'Bitcoin Accepted Here' badge to your website"
              width={135}
              height={50}
            />

            <span
              style={{
                marginTop: "12px",
              }}
            >
              &nbsp;badge today!
            </span>
          </div>
        </Box>

        <Address />

        <div>&nbsp;</div>

        <Typography style={{ fontSize: "12px", textAlign: "center" }}>
          <Copyright />
        </Typography>

        <div>&nbsp;</div>
      </Container>
    </>
  );
}

About.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);
