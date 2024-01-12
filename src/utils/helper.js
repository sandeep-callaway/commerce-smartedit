const jsont = require("json-transforms");
import _ from "lodash";

export const getPageTitleTransformed = (inputJson, modules) => {
  const rules = [
    jsont.pathRule(".page", (d) => {
      return {
        _version: 21,
        locale: "en-us",
        _in_progress: false,
        created_at: "2023-11-10T16:33:15.561Z",
        created_by: "blt78fe312f4dcc2750",
        modular_blocks: modules,
        seo: {
          meta_title: "",
          meta_description: "",
          keywords: "",
          enable_search_indexing: true,
        },
        tags: [],
        title: `${d?.context?.page?.title || "Home Page"}`,
        updated_at: "2023-11-10T17:12:32.016Z",
        updated_by: "blt78fe312f4dcc2750",
        url: "/homepage",
      };
    }),
    jsont.identity,
  ];
  return jsont.transform(inputJson, rules);
};

export const getSectionHeadingTransform = (eachSection) => {
  const rules = [
    jsont.pathRule(".", (d) => {
      return {
        section_heading: {
          heading: `<h1>${
            d?.context?.name || "Section1 Slot for Homepage"
          }</h1>`,
          _metadata: {
            slotId: d?.context?.slotId,
          },
          content: `<p>${
            d?.context?.content ||
            "Lorem Ipsum dirac sit amet consectetur. Enim consectetur odio egestas senectus enim. Eget nam et metus ipsum ut quis ac ut .Eget nam et met."
          }</p>`,
          alignment: 1,
        },
      };
    }),
    jsont.identity,
  ];
  return jsont.transform(eachSection, rules);
};

export const getAllPageTransformedTransform = (eachSection) => {
  const rules = [
    jsont.pathRule(".", (d) => {
      return eachSection.components.component[0];
    }),
    jsont.identity,
  ];
  return jsont.transform(eachSection, rules);
};

export const getFullWidthTransform = (fullWidthComponent) => {
  const rules = [
    jsont.pathRule(".", (d) => {
      return {
        full_width_banner: {
          variation: d?.context?.variation || "block-floating",
          name: d?.context?.name,
          banner_desktop_image_url: {
            href:
              d?.context?.banner_desktop_image_url?.href ||
              d?.context?.media?.desktop?.url ||
              "https://images.contentstack.io/v3/assets/blt00fb8bca61a5c45c/bltde0a770474ceaa68/654e5ab49ca24ae9dd329bbb/0-5000x3333.jpg",
            title:
              d?.context?.banner_desktop_image_url?.title ||
              d?.context?.media?.desktop?.altText ||
              "0-5000x3333.jpg",
            name: d?.context?.heading || d?.context?.name,
          },
          _metadata: {
            uid: d?.context?._metadata?.uid,
          },
          banner_tablet_image_url: {
            href:
              d?.context?.banner_tablet_image_url?.href ||
              d?.context?.media?.tablet?.url ||
              "https://images.contentstack.io/v3/assets/blt00fb8bca61a5c45c/bltde0a770474ceaa68/654e5ab49ca24ae9dd329bbb/0-5000x3333.jpg",
            title: d?.context?.media?.tablet?.altText || "0-5000x3333.jpg",
          },
          banner_smartphone_image_url: {
            href:
              d?.context?.banner_smartphone_image_url?.href ||
              d?.context?.media?.mobile?.url ||
              "https://images.contentstack.io/v3/assets/blt00fb8bca61a5c45c/bltde0a770474ceaa68/654e5ab49ca24ae9dd329bbb/0-5000x3333.jpg",
            title: d?.context?.media?.mobile?.altText || "0-5000x3333.jpg",
          },
          image_height: d?.context?.image_height || 360,
          padding_left: d?.context?.padding_left || 360,
          padding_top: d?.context?.padding_top || 360,
          transparency: d?.context?.transparency || 360,
          floating_box_height: d?.context?.floating_box_height || 360,
          heading:
            d?.context?.heading ||
            "Electronics Homepage Splash Banner Component",
          inner_text: d?.context?.inner_text || 360,
          text_color: d?.context?.text_color || 360,
          position: d?.context?.position || 360,
          block_background_color: d?.context?.block_background_color || 360,
          text_alignment: d?.context?.text_alignment || 360,
          button: [
            {
              title: d?.context?.button?.title || "Button",
              href: d?.context?.button?.href || "www.google.com",
            },
          ],
          button_variants: d?.context?.button_variants || null,
        },
      };
    }),
    jsont.identity,
  ];
  return jsont.transform(fullWidthComponent, rules);
};

export const getHalfWidthTransform = (cmp) => {
  const rules = [
    jsont.pathRule(".", (d) => {
      return {
        half_width_banner: {
          uid: cmp?.uid,
          uuid: cmp?.uuid,
          name: cmp?.name,
          modifiedtime: cmp?.modifiedtime,
          synchronizationBlocked: cmp?.synchronizationBlocked,
          typeCode: cmp?.typeCode,
          headline: cmp?.headline,
          _metadata: {
            uid: cmp?._metadata?.uid,
          },
          alignment: cmp?.alignment,
          banner_detail: cmp?.banner_detail,
          desktop_image: {
            uid: cmp?.desktop_image?.uid,
            url: cmp?.desktop_image?.url,
            ACL: cmp?.desktop_image?.ACL,
            tags: cmp?.desktop_image?.tags,
            title: cmp?.desktop_image?.title,
            is_dir: cmp?.desktop_image?.is_dir,
            filename: cmp?.desktop_image?.filename,
            _version: cmp?.desktop_image?._version,
            file_size: cmp?.desktop_image?.file_size,
            created_at: cmp?.desktop_image?.created_at,
            updated_at: cmp?.desktop_image?.updated_at,
            created_by: cmp?.desktop_image?.created_by,
            updated_by: cmp?.desktop_image?.updated_by,
            parent_uid: cmp?.desktop_image?.parent_uid,
            content_type: cmp?.desktop_image?.content_type,
          },
          desktop_alt_tag: cmp?.desktop_alt_tag,
          tablet_image: {
            uid: cmp?.tablet_image?.uid,
            created_at: cmp?.tablet_image?.created_at,
            updated_at: cmp?.tablet_image?.updated_at,
            created_by: cmp?.tablet_image?.created_by,
            updated_by: cmp?.tablet_image?.updated_by,
            content_type: cmp?.tablet_image?.content_type,
            file_size: cmp?.tablet_image?.file_size,
            tags: cmp?.tablet_image?.tags,
            filename: cmp?.tablet_image?.filename,
            url: cmp?.tablet_image?.url,
            ACL: cmp?.tablet_image?.ACL,
            is_dir: cmp?.tablet_image?.is_dir,
            parent_uid: cmp?.tablet_image?.parent_uid,
            _version: cmp?.tablet_image?._version,
            title: cmp?.tablet_image?.title,
            description: cmp?.tablet_image?.description,
          },
          tablet_alt_tag: cmp?.tablet_alt_tag,
          mobile_image: {
            uid: cmp?.mobile_image?.uid,
            created_at: cmp?.mobile_image?.created_at,
            updated_at: cmp?.mobile_image?.updated_at,
            created_by: cmp?.mobile_image?.created_by,
            updated_by: cmp?.mobile_image?.updated_by,
            content_type: cmp?.mobile_image?.content_type,
            file_size: cmp?.mobile_image?.file_size,
            tags: cmp?.mobile_image?.tags,
            filename: cmp?.mobile_image?.filename,
            url: cmp?.mobile_image?.url,
            ACL: cmp?.mobile_image?.ACL,
            is_dir: cmp?.mobile_image?.is_dir,
            parent_uid: cmp?.mobile_image?.parent_uid,
            _version: cmp?.mobile_image?._version,
            title: cmp?.mobile_image?.title,
            description: cmp?.mobile_image?.description,
          },
          mobile_alt_tag: cmp?.mobile_alt_tag,
          component_height: cmp?.component_height,
          button: {
            title: cmp?.button?.title,
            href: cmp?.button?.href,
          },
          button_type: cmp?.button_type,
        },
      };
    }),
    jsont.identity,
  ];
  return jsont.transform(cmp, rules);
};

export const getSubscriptionBannerTransform = (cmp) => {
  const rules = [
    jsont.pathRule(".", (d) => {
      return {
        subscription_banner: {
          uid: cmp?.uid,
          uuid: cmp?.uuid,
          name: cmp?.name,
          typeCode: cmp?.typeCode,
          modifiedtime: cmp?.modifiedtime,
          synchronizationBlocked: cmp?.synchronizationBlocked,
          _metadata: {
            uid: cmp?._metadata?.uid,
          },
          heading: cmp?.heading || "<h2>GET 20% OFF YOUR ORDER vgvg34</h2>",
          main_content:
            cmp?.main_content ||
            "<span>Stay updated from TravisMathew on exclusive online and in-store offers, new product alerts, store events in your area and more. tgvttbnntt88999</span>",
          email_field_label: cmp?.email_field_label || "Capgemini",
          button: {
            title: cmp?.button?.title || "Join later",
            href: cmp?.button?.href || "/",
          },
          disclaimer:
            cmp?.disclaimer ||
            "<span>*For new customers only. Not valid on Member Exclusive product, luggage or sale items. Cannot be combined with additional offers.</span>",
          submission_success_message:
            cmp?.submission_success_message ||
            '<h2>THANK YOU. YOU\'RE IN!</h2> <p class="p-sm">Keep an eye out! If you’re a new email subscriber, your promo code will be sent via email.</p>',
          submission_failure_message: cmp?.submission_failure_message || "",
        },
      };
    }),
    jsont.identity,
  ];
  return jsont.transform(cmp, rules);
};

export const getShortBannerTransform = (cmp) => {
  const rules = [
    jsont.pathRule(".", (d) => {
      return {
        short_banner: {
          uid: cmp?.uid,
          uuid: cmp?.uuid,
          name: cmp?.name,
          typeCode: cmp?.typeCode,
          modifiedtime: cmp?.modifiedtime,
          synchronizationBlocked: cmp?.synchronizationBlocked,
          _metadata: {
            uid: cmp?._metadata?.uid,
          },
          promo_icon: {
            uid: cmp?.promo_icon?.uid || "blta7fa8e825531b58b",
            created_at:
              cmp?.promo_icon?.created_at || "2023-11-08T16:02:46.901Z",
            updated_at:
              cmp?.promo_icon?.updated_at || "2024-01-09T05:28:45.802Z",
            created_by: cmp?.promo_icon?.created_by || "blt78fe312f4dcc2750",
            updated_by: cmp?.promo_icon?.updated_by || "blt5a61aa7aeee6f9ff",
            content_type: cmp?.promo_icon?.content_type || "image/svg+xml",
            file_size: cmp?.promo_icon?.file_size || "4387",
            tags: cmp?.promo_icon?.tags || [],
            filename: cmp?.promo_icon?.filename || "logo.svg",
            url:
              cmp?.promo_icon?.url ||
              "https://images.contentstack.io/v3/assets/blt00fb8bca61a5c45c/blta7fa8e825531b58b/659cd98db6f924c364be379f/logo.svg",
            ACL: cmp?.promo_icon?.ACL || [],
            is_dir: cmp?.promo_icon?.is_dir || false,
            parent_uid: cmp?.promo_icon?.parent_uid || null,
            _version: cmp?.promo_icon?._version || 2,
            title: cmp?.promo_icon?.title || "CG_Rewards_2.png",
            description: cmp?.promo_icon?.description || "",
          },
          banner_title:
            cmp?.banner_title || "<h5>Earn Points on Every Purchase!</h5>",
          banner_description:
            cmp?.banner_description ||
            "<p>Plus get free shipping and returns on every order, just for signing up.</p>",
          cta: {
            title: cmp?.cta?.title || "Join Now",
            href: cmp?.cta?.title || "/",
          },
          cta_style: cmp?.cta_style || "primary-black",
          alt_tag: cmp?.alt_tag || "Short Banner Image",
          block_background_color:
            cmp?.block_background_color || "cg_neutral_400",
          text_color: cmp?.text_color || "white",
          min_height: cmp?.min_height || 180,
        },
      };
    }),
    jsont.identity,
  ];
  return jsont.transform(cmp, rules);
};

export const getLandscapeCardTransform = (cmp) => {
  const rules = [
    jsont.pathRule(".", (d) => {
      return {
        landscape_card: {
          columns: "4",
          image_heights: cmp.image_heights || 270,
          _metadata: {
            uid: cmp?._metadata?.uid,
          },
          wraps: cmp?.wraps,
          card: cmp?.card.map((el) => {
            return {
              image: {
                uid: el?.image?.uid,
                created_at: el?.image?.created_at,
                updated_at: el?.image?.updated_at,
                created_by: el?.image?.created_by,
                updated_by: el?.image?.updated_by,
                content_type: el?.image?.content_type,
                file_size: el?.image?.file_size,
                tags: el?.image?.tags,
                filename: el?.image?.filename,
                url: el?.image?.url,
                ACL: el?.image?.ACL,
                is_dir: el?.image?.is_dir,
                parent_uid: el?.image?.parent_uid,
                _version: el?.image?._version,
                title: el?.image?.title,
                description: el?.image?.description,
              },
              _metadata: {
                uid: el?._metadata?.uid,
              },
              alt_tag: el?.alt_tag,
              title: el?.title,
              description: el?.description,
              cta: el?.cta.map((dl) => {
                return {
                  title: dl?.title,
                  href: dl?.href,
                };
              }),
            };
          }),
        },
      };
    }),
    jsont.identity,
  ];
  return jsont.transform(cmp, rules);
};

export const getAccordionTransform = (cmp) => {
  const rules = [
    jsont.pathRule(".", (d) => {
      return {
        accordion: {
          uid: cmp?.uid || "accordion",
          container: cmp?.container || false,
          name: cmp?.name || "Accordion",
          uuid: cmp?.uuid || "j878778788=",
          typeCode: cmp?.typeCode || "accordion",
          synchronizationBlocked: cmp?.synchronizationBlocked || false,
          modifiedtime: cmp?.modifiedtime || "2023-10-03T23:03:18.575Z",
          title: cmp?.title || "Questions? We Got You",
          _metadata: {
            uid: cmp?._metadata?.uid,
          },
          accordion: cmp?.accordion.map((el) => {
            return {
              title:
                el?.title ||
                "<h4><span>If my event is outside of California, can I still rent a TravisMathew bus?</span></h4>",
              _metadata: {
                uid: "cs29514e8701a4400a",
              },
              description:
                el?.description ||
                "<p>You can! Our fleet of 10 vehicles travels coast to coast, executing over 300 events each year. Location is not a problem.</p>",
            };
          }),
        },
      };
    }),
    jsont.identity,
  ];
  return jsont.transform(cmp, rules);
};

export const getBlogCarouselTransform = (cmp) => {
  const rules = [
    jsont.pathRule(".", (d) => {
      return {
        blog_carousel: {
          uid: cmp?.uid || "blog_carousel",
          container: cmp?.container || false,
          name: cmp?.name || "Blog Carousel",
          uuid: cmp?.uuid || "j878778788=",
          typeCode: cmp?.typeCode || "blog_carousel",
          synchronizationBlocked: cmp?.synchronizationBlocked || false,
          modifiedtime: cmp?.modifiedtime || "2023-10-03T23:03:18.575Z",
          wrap: cmp?.wrap || false,
          _metadata: {
            uid: cmp?._metadata?.uid,
          },
          blog_carousel_cards: cmp?.blog_carousel_cards.map((el) => {
            return {
              _metadata: {
                uid: el?._metadata?.uid || "cs29514e8701a4400a",
              },
              link: {
                title: el?.link?.title || "Link1",
                href: el?.link?.href || "/",
              },
              thumbnail_image: {
                uid: el?.thumbnail_image?.uid || "blt55895ba6c08d6573",
                created_at:
                  el?.thumbnail_image?.created_at || "2023-11-08T16:02:44.202Z",
                updated_at:
                  el?.thumbnail_image?.updated_at || "2023-11-14T12:18:33.278Z",
                created_by:
                  el?.thumbnail_image?.created_by || "blt78fe312f4dcc2750",
                updated_by:
                  el?.thumbnail_image?.updated_by || "blt5a61aa7aeee6f9ff",
                content_type: el?.thumbnail_image?.content_type || "image/jpeg",
                file_size: el?.thumbnail_image?.file_size || "36526",
                tags: el?.thumbnail_image?.tags || [],
                filename: el?.thumbnail_image?.filename || "flower.jpg",
                url:
                  el?.thumbnail_image?.url ||
                  "https://images.contentstack.io/v3/assets/blt00fb8bca61a5c45c/blt55895ba6c08d6573/65536599cf923773311b97ed/flower.jpg",
                ACL: el?.thumbnail_image?.ACL || [],
                is_dir: el?.thumbnail_image?.is_dir || false,
                parent_uid: el?.thumbnail_image?.parent_uid || null,
                _version: el?.thumbnail_image?._version || 2,
                title: el?.thumbnail_image?.title || "Blogimage",
                description: el?.thumbnail_image?.description || "",
              },
              alt_tag: el?.alt_tag || "",
              blog_category: el?.blog_category || "Blog",
              post_title:
                el?.post_title ||
                "Nam tincidunt ut tortor in dapibus. Donec et rutrum diam tortor in dapibus.",
              date: el?.post_title || "2022-01-12",
            };
          }),
        },
      };
    }),
    jsont.identity,
  ];
  return jsont.transform(cmp, rules);
};

export const getBannerCarouselTransform = (cmp) => {
  const rules = [
    jsont.pathRule(".", (d) => {
      return {
        banner_carousel: {
          uid: cmp?.uid || "banner_carousel",
          container: cmp?.container || false,
          name: cmp?.name || "Banner Carousel",
          uuid: cmp?.uuid || "j878778788=",
          typeCode: cmp?.typeCode || "banner_carousel",
          synchronizationBlocked: cmp?.synchronizationBlocked || false,
          modifiedtime: cmp?.modifiedtime || "2023-10-03T23:03:18.575Z",
          _metadata: {
            uid: cmp?._metadata?.uid,
          },
          slide: cmp?.slide.map((el) => {
            return {
              _metadata: {
                uid: el?._metadata?.uid || "cs29514e8701a4400a",
              },
              image: {
                uid: el?.image?.uid || "blta1ac4f3893ccd528",
                created_at: el?.image?.created_at || "2023-11-08T16:03:42.913Z",
                updated_at: el?.image?.updated_at || "2023-11-14T12:20:55.284Z",
                created_by: el?.image?.created_by || "blt78fe312f4dcc2750",
                updated_by: el?.image?.updated_by || "blt5a61aa7aeee6f9ff",
                content_type: el?.image?.content_type || "image/jpeg",
                file_size: el?.image?.file_size || "25376",
                tags: el?.image?.tags || [],
                filename: el?.image?.filename || "hill.jpg",
                url:
                  el?.image?.url ||
                  "https://images.contentstack.io/v3/assets/blt00fb8bca61a5c45c/blta1ac4f3893ccd528/65536627f8f77763f428fe41/hill.jpg",
                ACL: el?.image?.ACL || [],
                is_dir: el?.image?.is_dir || false,
                parent_uid: el?.image?.parent_uid || "blt7803e1acfc1ec996",
                _version: el?.image?._version || 2,
                title: el?.image?.title || "ListingPageBanner_Shorts_(1).png",
                description: el?.image?.description || "",
              },
              alt_tag: el?.alt_tag || "Image 1",
            };
          }),
        },
      };
    }),
    jsont.identity,
  ];
  return jsont.transform(cmp, rules);
};

export const getRewardBannerTransform = (cmp) => {
  const rules = [
    jsont.pathRule(".", (d) => {
      return {
        reward_banner: {
          uid: cmp?.uid,
          uuid: cmp?.uuid,
          name: cmp?.name,
          modifiedtime: cmp?.modifiedtime,
          synchronizationBlocked: cmp?.synchronizationBlocked,
          typeCode: cmp?.typeCode,
          _metadata: {
            uid: cmp?._metadata?.uid,
          },
          reward_icon: {
            uid: cmp?.reward_icon?.uid || "bltbb67b00c5b5296bf",
            created_at:
              cmp?.reward_icon?.created_at || "2023-11-08T16:02:49.452Z",
            updated_at:
              cmp?.reward_icon?.updated_at || "2023-11-08T16:02:49.452Z",
            created_by: cmp?.reward_icon?.created_by || "blt78fe312f4dcc2750",
            updated_by: cmp?.reward_icon?.updated_by || "blt78fe312f4dcc2750",
            content_type: cmp?.reward_icon?.content_type || "image/png",
            file_size: cmp?.reward_icon?.file_size || "942",
            tags: cmp?.reward_icon?.tags || [],
            filename: cmp?.reward_icon?.filename || "TM_Rewards.png",
            url:
              cmp?.reward_icon?.url ||
              "https://images.contentstack.io/v3/assets/blt00fb8bca61a5c45c/bltbb67b00c5b5296bf/654bb129ccca81040a850563/TM_Rewards.png",
            ACL: cmp?.reward_icon?.ACL || [],
            is_dir: cmp?.reward_icon?.is_dir || false,
            parent_uid: cmp?.reward_icon?.parent_uid || "blt13972d023b781290",
            _version: cmp?.reward_icon?._version || 1,
            title: cmp?.reward_icon?.title || "TM_Rewards.png",
          },
          reward_details:
            cmp?.reward_details ||
            "<h3>Earn 159 points with this purchase</h3><p></p><p>TM Rewards Members get free shipping and free return on all purchases</p>",
          reward_signin: {
            title: cmp?.reward_signin?.title || "Sign In",
            href: cmp?.reward_signin?.title || "/",
          },
          reward_signout: {
            title: cmp?.reward_signout?.title || "Sign Up",
            href: cmp?.reward_signout?.title || "/",
          },
          cta_style: cmp?.cta_style || "Primary Black",
        },
      };
    }),
    jsont.identity,
  ];
  return jsont.transform(cmp, rules);
};

export const getVideoAndTextBannerTransform = (cmp) => {
  const rules = [
    jsont.pathRule(".", (d) => {
      return {
        video_and_text_banner: {
          uid: cmp?.uid,
          uuid: cmp?.uuid,
          name: cmp?.name,
          modifiedtime: cmp?.modifiedtime,
          synchronizationBlocked: cmp?.synchronizationBlocked,
          typeCode: cmp?.typeCode,
          _metadata: {
            uid: cmp?._metadata?.uid,
          },
          desktop_position: cmp?.cta_style || "left",
          video_poster_desktop: {
            uid: cmp?.video_poster_desktop?.uid || "bltbbcc9dd76e3b5f63",
            created_at:
              cmp?.video_poster_desktop?.created_at ||
              "2023-11-08T16:02:50.625Z",
            updated_at:
              cmp?.video_poster_desktop?.updated_at ||
              "2024-01-10T05:53:21.289Z",
            created_by:
              cmp?.video_poster_desktop?.created_by || "blt78fe312f4dcc2750",
            updated_by:
              cmp?.video_poster_desktop?.updated_by || "bltb9c8458b6555a02c",
            content_type:
              cmp?.video_poster_desktop?.content_type || "image/png",
            file_size: cmp?.video_poster_desktop?.file_size || "1390",
            tags: cmp?.video_poster_desktop?.tags || [],
            filename: cmp?.video_poster_desktop?.filename || "img.png",
            url:
              cmp?.video_poster_desktop?.url ||
              "https://images.contentstack.io/v3/assets/blt00fb8bca61a5c45c/bltbbcc9dd76e3b5f63/659e30d15a14f26d98181e6b/img.png",
            ACL: cmp?.video_poster_desktop?.ACL || [],
            is_dir: cmp?.video_poster_desktop?.is_dir || false,
            parent_uid:
              cmp?.video_poster_desktop?.parent_uid || "bltb1a51f52ec6adf11",
            _version: cmp?.video_poster_desktop?._version || 2,
            title: cmp?.video_poster_desktop?.title || "VideoTextBanner.png",
            description: cmp?.video_poster_desktop?.description || "",
          },
          video_desktop: {
            uid: cmp?.video_desktop?.uid || "bltaa1df17a0f480ee2",
            created_at:
              cmp?.video_desktop?.created_at || "2023-11-08T16:03:04.060Z",
            updated_at:
              cmp?.video_desktop?.updated_at || "2024-01-10T06:30:05.821Z",
            created_by: cmp?.video_desktop?.created_by || "blt78fe312f4dcc2750",
            updated_by: cmp?.video_desktop?.updated_by || "blt5a61aa7aeee6f9ff",
            content_type: cmp?.video_desktop?.content_type || "image/jpeg",
            file_size: cmp?.video_desktop?.file_size || "53813",
            tags: cmp?.video_desktop?.tags || [],
            filename: cmp?.video_desktop?.filename || "Mountain.jpg",
            url:
              cmp?.video_desktop?.url ||
              "https://images.contentstack.io/v3/assets/blt00fb8bca61a5c45c/bltaa1df17a0f480ee2/659e396d57b479085eb07984/Mountain.jpg",
            ACL: cmp?.video_desktop?.ACL || [],
            is_dir: cmp?.video_desktop?.is_dir || false,
            parent_uid: cmp?.video_desktop?.parent_uid || "bltb1a51f52ec6adf11",
            _version: cmp?.video_desktop?._version || 2,
            title: cmp?.video_desktop?.title || "videoBannerDesktop.mp4",
            description: cmp?.video_desktop?.description || "",
          },
          video_poster_mobile: {
            uid: cmp?.video_poster_mobile?.uid || "blt0a37799857237477",
            created_at:
              cmp?.video_poster_mobile?.created_at ||
              "2023-11-08T16:03:10.084Z",
            updated_at:
              cmp?.video_poster_mobile?.updated_at ||
              "2023-11-08T16:03:10.084Z",
            created_by:
              cmp?.video_poster_mobile?.created_by || "blt78fe312f4dcc2750",
            updated_by:
              cmp?.video_poster_mobile?.updated_by || "blt78fe312f4dcc2750",
            content_type:
              cmp?.video_poster_mobile?.content_type || "image/jpeg",
            file_size: cmp?.video_poster_mobile?.file_size || "135547",
            tags: cmp?.video_poster_mobile?.tags || [],
            filename: cmp?.video_poster_mobile?.filename || "PosterMobile.jpg",
            url:
              cmp?.video_poster_mobile?.url ||
              "https://images.contentstack.io/v3/assets/blt00fb8bca61a5c45c/blt0a37799857237477/654bb13e05ff78040761dc55/PosterMobile.jpg",
            ACL: cmp?.video_poster_mobile?.ACL || [],
            is_dir: cmp?.video_poster_mobile?.is_dir || false,
            parent_uid:
              cmp?.video_poster_mobile?.parent_uid || "bltb1a51f52ec6adf11",
            _version: cmp?.video_poster_mobile?._version || 1,
            title: cmp?.video_poster_mobile?.title || "PosterMobile.jpg",
          },
          video_mobile: {
            uid: cmp?.video_mobile?.uid || "bltec3744d934787c75",
            created_at:
              cmp?.video_mobile?.created_at || "2023-11-08T16:03:09.273Z",
            updated_at:
              cmp?.video_mobile?.updated_at || "2023-11-08T16:03:09.273Z",
            created_by: cmp?.video_mobile?.created_by || "blt78fe312f4dcc2750",
            updated_by: cmp?.video_mobile?.updated_by || "blt78fe312f4dcc2750",
            content_type: cmp?.video_mobile?.content_type || "video/mp4",
            file_size: cmp?.video_mobile?.file_size || "18470168",
            tags: cmp?.video_mobile?.tags || [],
            filename: cmp?.video_mobile?.filename || "videoBannerMobile.mp4",
            url:
              cmp?.video_mobile?.url ||
              "https://assets.contentstack.io/v3/assets/blt00fb8bca61a5c45c/bltec3744d934787c75/654bb13d45aab4040a60d9c2/videoBannerMobile.mp4",
            ACL: cmp?.video_mobile?.ACL || [],
            is_dir: cmp?.video_mobile?.is_dir || false,
            parent_uid: cmp?.video_mobile?.parent_uid || "bltb1a51f52ec6adf11",
            _version: cmp?.video_mobile?._version || 1,
            title: cmp?.video_mobile?.title || "videoBannerMobile.mp4",
          },
          video_transcript: cmp?.video_transcript || null,
          video_closed_captions: cmp?.video_closed_captions || null,
          text_input:
            cmp?.text_input ||
            "<h2>Lorem ipsum dolor sit amet consectetur dui sapien leo</h2>",
          button: {
            title: "Shop Now",
            href: "/",
          },
          button_variants: cmp?.button_variants || "primary-black",
        },
      };
    }),
    jsont.identity,
  ];
  return jsont.transform(cmp, rules);
};

export const getPortraitCardTransform = (cmp) => {
  const rules = [
    jsont.pathRule(".", (d) => {
      return {
        portrait_card: {
          _metadata: {
            uid: cmp?._metadata?.uid,
          },
          wrap_cards: cmp?.wrap_cards,
          image_heights: cmp?.image_heights,
          card_box_shadow: cmp?.card_box_shadow,
          background_color: cmp?.background_color,
          card_count_per_row: cmp?.card_count_per_row,
          card_body_font_size: cmp?.card_body_font_size,
          cards: cmp?.cards.map((el) => {
            return {
              image: {
                uid: el?.featured_image?.uid,
                created_at: el?.featured_image?.created_at,
                updated_at: el?.featured_image?.updated_at,
                created_by: el?.featured_image?.created_by,
                updated_by: el?.featured_image?.updated_by,
                content_type: el?.featured_image?.content_type,
                file_size: el?.featured_image?.file_size,
                tags: el?.featured_image?.tags,
                filename: el?.featured_image?.filename,
                url: el?.featured_image?.url,
                ACL: el?.featured_image?.ACL,
                is_dir: el?.featured_image?.is_dir,
                parent_uid: el?.featured_image?.parent_uid,
                _version: el?.featured_image?._version,
                title: el?.featured_image?.title,
                description: el?.featured_image?.description,
              },
              _metadata: {
                uid: el?._metadata?.uid,
              },
              alt_tag: el?.alt_tag,
              title: el?.title,
              description: el?.description,
              cta_link: el?.cta_link.map((dl) => {
                return {
                  title: dl?.title,
                  href: dl?.href,
                };
              }),
            };
          }),
          //   cards: cmp?.cards.map((el) => {
          //     return {
          //       _metadata: {
          //         uid: el?._metadata?.uid,
          //       },
          //       alt_tag: el?.alt_tag,
          //       title: el?.title,
          //       description: el?.description,
          //       cta: el?.cta.map((dl) => {
          //         return {
          //           title: dl?.title,
          //           href: dl?.href,
          //         };
          //       }),
          //     };
          //   }),
        },
      };
    }),
    jsont.identity,
  ];
  return jsont.transform(cmp, rules);
};

export const getProductIdsTransform = (productIds) => {
  const productIdsData = productIds?.split(" ");
  const productIdsJSON = { products: productIdsData };
  const rules = [
    jsont.pathRule(".products{.}", (d) => {
      return {
        data: d.runner(),
      };
    }),
    jsont.pathRule(".", (d) => {
      return {
        product_id: d?.context,
        _metadata: {},
      };
    }),
    jsont.identity,
  ];
  return jsont.transform(productIdsJSON, rules);
};

export const getProductCarasolTransform = (productCaroselComponent) => {
  const productIds = getProductIdsTransform(
    productCaroselComponent?.productCodes
  );
  const rules = [
    jsont.pathRule(".", (d) => {
      return {
        product_carousel: {
          heading: `<span>${d?.context?.name || "Product Carousel"}</span>`,
          _metadata: {},
          description: "",
          product_picker_sample: productIds?.data,
          product_picker: {
            data: [],
            type: "sapcommercecloud_product",
          },
          cta: {
            title: "",
            href: "",
          },
        },
      };
    }),
    jsont.identity,
  ];
  return jsont.transform(productCaroselComponent, rules);
};

export const isFullWidthBanner = (uid) => {
  if ((uid || "").toLowerCase().includes("full_width_banner")) {
    return true;
  }
  return false;
};

export const isProductCarosel = (uid) => {
  if ((uid || "").toLowerCase().includes("productcarousel")) {
    return true;
  }
  return false;
};

export const isIncludeComponent = (uid, cmp) => {
  if ((uid || "").toLowerCase().includes(cmp)) {
    return true;
  }
  return false;
};
