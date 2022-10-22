import React from 'react'

import { Helmet } from 'react-helmet'

import StoreBanner from '../components/store-banner'
import PrimaryButton from '../components/primary-button'
import FeatureCard from '../components/feature-card'
import TestimonialsCard from '../components/testimonials-card'
import StatsCard from '../components/stats-card'
import LinkIconButton from '../components/link-icon-button'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Landify</title>
        <meta property="og:title" content="Landify" />
      </Helmet>
      <div data-role="Header" className="home-header-container">
        <div className="home-container01">
          <img
            alt="image"
            src="/playground_assets/screenshot%202022-10-21%20at%2020.24.03-200h.png"
            className="home-image"
          />
          <header className="home-header">
            <div className="home-logo"></div>
            <div className="home-menu">
              <span className="home-text">About</span>
              <span className="home-text01">Products</span>
              <span className="home-text02">Pricing</span>
              <span className="home-text03">More</span>
              <svg viewBox="0 0 1024 1024" className="home-icon">
                <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
              </svg>
            </div>
            <div className="home-container02">
              <StoreBanner></StoreBanner>
            </div>
            <div data-type="BurgerMenu" className="home-burger-menu">
              <svg viewBox="0 0 1024 1024" className="home-menu1">
                <path d="M810.667 725.333h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
                <path d="M810.667 426.667h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
                <path d="M810.667 128h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              </svg>
            </div>
          </header>
        </div>
        <div data-type="MobileMenu" className="home-mobile-menu">
          <div className="home-top">
            <div className="home-logo1">
              <img
                alt="image"
                src="/playground_assets/logotype-dark.svg"
                className="home-image01"
              />
            </div>
            <div data-type="CloseMobileMenu" className="home-close-menu">
              <svg viewBox="0 0 1024 1024" className="home-icon05">
                <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
              </svg>
            </div>
          </div>
          <div className="home-mid">
            <span className="home-text04">About</span>
            <span className="home-text05">Products</span>
            <span className="home-text06">Pricing</span>
            <span className="home-text07">Blog</span>
            <span className="home-text08">Jobs</span>
            <span className="home-text09">More</span>
          </div>
          <div className="home-bot">
            <div className="home-container03">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link"
              >
                <div className="home-container04">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon07"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </div>
              </a>
              <a
                href="https://dribbble.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link1"
              >
                <div className="home-container05">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon09"
                  >
                    <path d="M585.143 857.143c-5.714-33.143-27.429-147.429-80-284.571-0.571 0-1.714 0.571-2.286 0.571 0 0-222.286 77.714-294.286 234.286-3.429-2.857-8.571-6.286-8.571-6.286 65.143 53.143 148 85.714 238.857 85.714 52 0 101.143-10.857 146.286-29.714zM479.429 510.286c-9.143-21.143-19.429-42.286-30.286-63.429-193.143 57.714-378.286 53.143-384.571 53.143-0.571 4-0.571 8-0.571 12 0 96 36.571 184 96 250.286v0c102.286-182.286 304.571-247.429 304.571-247.429 5.143-1.714 10.286-2.857 14.857-4.571zM418.286 389.143c-65.143-115.429-134.286-209.143-139.429-216-104.571 49.143-182.286 145.714-206.857 261.714 9.714 0 166.286 1.714 346.286-45.714zM809.143 571.429c-8-2.286-112.571-35.429-233.714-16.571 49.143 135.429 69.143 245.714 73.143 268 84-56.571 143.429-146.857 160.571-251.429zM349.143 148c-0.571 0-0.571 0-1.143 0.571 0 0 0.571-0.571 1.143-0.571zM686.286 230.857c-65.714-58.286-152.571-93.714-247.429-93.714-30.286 0-60 4-88.571 10.857 5.714 7.429 76.571 100.571 140.571 218.286 141.143-52.571 194.286-133.714 195.429-135.429zM813.714 508c-1.143-88.571-32.571-170.286-85.143-234.286-1.143 1.143-61.143 88-209.143 148.571 8.571 17.714 17.143 36 25.143 54.286 2.857 6.286 5.143 13.143 8 19.429 129.143-16.571 256.571 11.429 261.143 12zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                </div>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link2"
              >
                <div className="home-container06">
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="home-icon11"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </div>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link3"
              >
                <div className="home-container07">
                  <svg viewBox="0 0 1024 1024" className="home-icon13">
                    <path d="M406.286 644.571l276.571-142.857-276.571-144.571v287.429zM512 152c215.429 0 358.286 10.286 358.286 10.286 20 2.286 64 2.286 102.857 43.429 0 0 31.429 30.857 40.571 101.714 10.857 82.857 10.286 165.714 10.286 165.714v77.714s0.571 82.857-10.286 165.714c-9.143 70.286-40.571 101.714-40.571 101.714-38.857 40.571-82.857 40.571-102.857 42.857 0 0-142.857 10.857-358.286 10.857v0c-266.286-2.286-348-10.286-348-10.286-22.857-4-74.286-2.857-113.143-43.429 0 0-31.429-31.429-40.571-101.714-10.857-82.857-10.286-165.714-10.286-165.714v-77.714s-0.571-82.857 10.286-165.714c9.143-70.857 40.571-101.714 40.571-101.714 38.857-41.143 82.857-41.143 102.857-43.429 0 0 142.857-10.286 358.286-10.286v0z"></path>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="home-main">
        <div className="home-blur-background"></div>
        <div className="home-hero">
          <div className="home-container08">
            <h1 className="home-text10 headline1">
              <span>Optimize your farm.</span>
              <br></br>
              <span>Get more done.</span>
            </h1>
            <PrimaryButton
              button="Get Started"
              rootClassName="primary-button-root-class-name"
            ></PrimaryButton>
          </div>
        </div>
        <img
          alt="image"
          src="/playground_assets/turquoise-circle.svg"
          className="home-turquoise-cirble"
        />
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1525498128493-380d1990a112?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDV8fGdyZWVuJTIwY2lyY2xlfGVufDB8fHx8MTY2NjM3NTk0OA&amp;ixlib=rb-4.0.3&amp;w=400"
          className="home-purple-circle"
        />
        <img
          alt="image"
          src="/playground_assets/left.svg"
          className="home-left"
        />
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1657216328535-e981d223dee3?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxncmVlbiUyMGNpcmNsZXxlbnwwfHx8fDE2NjYzNzU5NDg&amp;ixlib=rb-4.0.3&amp;w=600"
          className="home-right"
        />
      </div>
      <div className="home-clients">
        <div className="home-divider"></div>
        <img
          alt="image"
          src="data:image/png;base64,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"
          className="home-image02"
        />
        <img
          alt="image"
          src="/playground_assets/logo-4.svg"
          className="home-image03"
        />
        <img
          alt="image"
          src="/playground_assets/logo-3.svg"
          className="home-image04"
        />
        <img
          alt="image"
          src="/playground_assets/logo-5.svg"
          className="home-image05"
        />
        <img
          alt="image"
          src="data:image/png;base64,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"
          className="home-image06"
        />
        <div className="home-divider1"></div>
      </div>
      <div className="home-features">
        <h2 className="headline2 home-text14">Tailor-made features</h2>
        <div className="home-features1">
          <FeatureCard
            image_src="/playground_assets/03.svg"
            card_title="User friendly"
          ></FeatureCard>
          <FeatureCard
            text="Well suited for each and every user"
            image_src="/playground_assets/05.svg"
            card_title="Better components"
          ></FeatureCard>
          <FeatureCard
            text="Step-by-step solutions"
            image_src="/playground_assets/06.svg"
            card_title="Well organized"
          ></FeatureCard>
        </div>
      </div>
      <div className="home-testimonials">
        <div className="home-container09">
          <div className="home-container10">
            <img
              alt="image"
              src="/playground_assets/quote-mark.svg"
              className="home-image07"
            />
            <h1 className="home-text15 headline2">
              Real Stories from Real Customers
            </h1>
            <span>Get inspired by these stories.</span>
            <div className="home-container11">
              <TestimonialsCard image_src="/playground_assets/logo-4.svg"></TestimonialsCard>
            </div>
          </div>
          <div className="home-container12">
            <div className="home-container13">
              <TestimonialsCard
                src="/playground_assets/logo-1.svg"
                text="I used "
                text1="Jane Muthoni"
                text2="Manager, Delamere Farms"
                image_src="/playground_assets/logo-1.svg"
              ></TestimonialsCard>
            </div>
            <div className="home-container14">
              <TestimonialsCard
                text="shambaSmart saved our time in optimising our farm and increasing our yields"
                text1="Njoroge Wamatangi"
                text2="Co-Founder, SpringRock Farms"
                image_src="/playground_assets/logo-2.svg"
              ></TestimonialsCard>
            </div>
          </div>
        </div>
      </div>
      <div className="home-achievements">
        <div className="home-container15">
          <h2 className="home-text17">
            <span>
              Our 2 years of
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>achievements</span>
          </h2>
          <span className="home-text21">
            With our super powers we have reached this
          </span>
        </div>
        <div className="home-container16">
          <div className="home-container17">
            <StatsCard
              number="10,000+"
              image_src="/playground_assets/01.svg"
              description="Downloads "
            ></StatsCard>
            <StatsCard
              number="Over 20,000"
              image_src="/playground_assets/04.svg"
              description="Users"
            ></StatsCard>
          </div>
          <div className="home-container18">
            <StatsCard number="500+" description="Clients"></StatsCard>
            <StatsCard
              number="35+"
              image_src="/playground_assets/07.svg"
              description="Counties"
            ></StatsCard>
          </div>
        </div>
      </div>
      <div className="home-feature1">
        <div className="home-container19"></div>
        <div className="home-container20">
          <h3 className="headline3">Headline</h3>
          <span className="home-text23 lead1">
            <span className="home-text24">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Condimentum diam orci pretium a pharetra, feugiat cursus. Dictumst
              risus, sem egestas odio cras adipiscing vulputate. Nisi, risus in
              suscipit non. Non commodo volutpat, pharetra, vel.
            </span>
          </span>
          <LinkIconButton text="Get Started"></LinkIconButton>
        </div>
      </div>
      <div className="home-feature2">
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1510844355160-2fb07bf9af75?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDcxfHxmYXJtfGVufDB8fHx8MTY2NjM3NTQ0Mw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1100"
          className="home-image08"
        />
        <h2 className="headline2 home-text25">
          Discover how smartShamba can help!
        </h2>
        <div className="home-container21">
          <div className="home-container22"></div>
          <span className="home-text26">
            Everyone in the agrifood industry can benefit from agricultural
            digitalization, xFarm offers services and functions dedicated to
            every single part of the process.
          </span>
        </div>
      </div>
      <div className="home-c-t-a">
        <div className="home-container23">
          <div className="home-container24">
            <h2 className="headline2 home-text27">
              Manage your projects from your mobile
            </h2>
            <span className="home-text28 lead1">
              Download the app to manage your farming, keep track of the
              progress and optimize your farm. Stay on track and harvest on
              time!
            </span>
            <span className="home-text29 subtitle2">
              <span className="home-text30">Get the App</span>
            </span>
            <StoreBanner></StoreBanner>
          </div>
          <div className="home-container25"></div>
        </div>
      </div>
      <div className="home-footer">
        <footer className="home-container26">
          <img
            alt="image"
            src="/playground_assets/screenshot%202022-10-21%20at%2020.24.03-200h.png"
            className="home-image09"
          />
          <div className="home-container27">
            <span className="home-text31">About</span>
            <span className="home-text32">Features</span>
            <span className="home-text33">Pricing</span>
            <span className="home-text34">Help</span>
            <span className="home-text35">Privacy Policy</span>
          </div>
          <div className="home-divider2"></div>
          <div className="home-container28">
            <span className="home-text36 body2">
              © 2022 shambaSmart . All rights reserved
            </span>
            <div className="home-container29">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link4"
              >
                <div className="home-container30">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon15"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </div>
              </a>
              <a
                href="https://dribbble.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link5"
              >
                <div className="home-container31">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon17"
                  >
                    <path d="M585.143 857.143c-5.714-33.143-27.429-147.429-80-284.571-0.571 0-1.714 0.571-2.286 0.571 0 0-222.286 77.714-294.286 234.286-3.429-2.857-8.571-6.286-8.571-6.286 65.143 53.143 148 85.714 238.857 85.714 52 0 101.143-10.857 146.286-29.714zM479.429 510.286c-9.143-21.143-19.429-42.286-30.286-63.429-193.143 57.714-378.286 53.143-384.571 53.143-0.571 4-0.571 8-0.571 12 0 96 36.571 184 96 250.286v0c102.286-182.286 304.571-247.429 304.571-247.429 5.143-1.714 10.286-2.857 14.857-4.571zM418.286 389.143c-65.143-115.429-134.286-209.143-139.429-216-104.571 49.143-182.286 145.714-206.857 261.714 9.714 0 166.286 1.714 346.286-45.714zM809.143 571.429c-8-2.286-112.571-35.429-233.714-16.571 49.143 135.429 69.143 245.714 73.143 268 84-56.571 143.429-146.857 160.571-251.429zM349.143 148c-0.571 0-0.571 0-1.143 0.571 0 0 0.571-0.571 1.143-0.571zM686.286 230.857c-65.714-58.286-152.571-93.714-247.429-93.714-30.286 0-60 4-88.571 10.857 5.714 7.429 76.571 100.571 140.571 218.286 141.143-52.571 194.286-133.714 195.429-135.429zM813.714 508c-1.143-88.571-32.571-170.286-85.143-234.286-1.143 1.143-61.143 88-209.143 148.571 8.571 17.714 17.143 36 25.143 54.286 2.857 6.286 5.143 13.143 8 19.429 129.143-16.571 256.571 11.429 261.143 12zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                </div>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link6"
              >
                <div className="home-container32">
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="home-icon19"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </div>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link7"
              >
                <div className="home-container33">
                  <svg viewBox="0 0 1024 1024" className="home-icon21">
                    <path d="M406.286 644.571l276.571-142.857-276.571-144.571v287.429zM512 152c215.429 0 358.286 10.286 358.286 10.286 20 2.286 64 2.286 102.857 43.429 0 0 31.429 30.857 40.571 101.714 10.857 82.857 10.286 165.714 10.286 165.714v77.714s0.571 82.857-10.286 165.714c-9.143 70.286-40.571 101.714-40.571 101.714-38.857 40.571-82.857 40.571-102.857 42.857 0 0-142.857 10.857-358.286 10.857v0c-266.286-2.286-348-10.286-348-10.286-22.857-4-74.286-2.857-113.143-43.429 0 0-31.429-31.429-40.571-101.714-10.857-82.857-10.286-165.714-10.286-165.714v-77.714s-0.571-82.857 10.286-165.714c9.143-70.857 40.571-101.714 40.571-101.714 38.857-41.143 82.857-41.143 102.857-43.429 0 0 142.857-10.286 358.286-10.286v0z"></path>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Home
