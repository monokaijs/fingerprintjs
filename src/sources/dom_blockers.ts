import { isAndroid, isWebKit } from '../utils/browser'
import { selectorToElement } from '../utils/dom'
import { countTruthy } from '../utils/data'
import { wait } from '../utils/async'

type Filters = Record<string, string[]>

/**
 * Only single element selector are supported (no operators like space, +, >, etc).
 * `embed` and `position: fixed;` will be considered as blocked anyway because it always has no offsetParent.
 * Avoid `iframe` and anything with `[src=]` because they produce excess HTTP requests.
 *
 * The "inappropriate" selectors are obfuscated. See https://github.com/fingerprintjs/fingerprintjs/issues/734.
 * A function is used instead of a plain object to help tree-shaking.
 *
 * The function code is generated automatically. See docs/content_blockers.md to learn how to make the list.
 */
export function getFilters(): Filters {
  // fromB64 function removed to avoid obfuscation

  return {
    abpIndo: [
      '#Iklan-Melayang',
      '#Kolom-Iklan-728',
      '#SidebarIklan-wrapper',
      '[title="ALIENBOLA" i]',
      '#Box-Banner-ads',
    ],
    abpvn: ['.quangcao', '#mobileCatfish', '.close-ads', '[id^="bn_bottom_fixed_"]', '#pmadv'],
    adBlockFinland: [
      '.mainostila',
      '.sponsorit',
      '.ylamainos',
      'a[href*="/clickthrgh.asp?"]',
      'a[href^="https://app.readpeak.com/ads"]',
    ],
    adBlockPersian: [
      '#navbar_notice_50',
      '.kadr',
      'TABLE[width="140px"]',
      '#divAgahi',
      'a[href^="http://g1.v.fwmrm.net/ad/"]',
    ],
    adBlockWarningRemoval: [
      '#adblock-honeypot',
      '.adblocker-root',
      '.wp_adblock_detect',
      '.header-blocked-ad',
      '#ad_blocker',
    ],
    adGuardAnnoyances: [
      '.hs-sosyal',
      '#cookieconsentdiv',
      'div[class^="app_gdpr"]',
      '.as-oil',
      '[data-cypress="soft-push-notification-modal"]',
    ],
    adGuardBase: [
      '.BetterJsPopOverlay',
      '#ad_300X250',
      '#bannerfloat22',
      '#campaign-banner',
      '#Ad-Content',
    ],
    adGuardChinese: [
      '.Zi_ad_a_H',
      'a[href*=".hthbet34.com"]',
      '#widget-quan',
      'a[href*="/84992020.xyz"]',
      'a[href*=".1956hl.com/"]',
    ],
    adGuardFrench: [
      '#pavePub',
      '.ad-desktop-rectangle',
      '.mobile_adhesion',
      '.widgetadv',
      '.ads_ban',
    ],
    adGuardGerman: ['aside[data-portal-id="leaderboard"]'],
    adGuardJapanese: [
      '#kauli_yad_1',
      'a[href^="http://ad2.trafficgate.net/"]',
      '._popIn_infinite_ad',
      '.adgoogle',
      '.__isboostReturnAd',
    ],
    adGuardMobile: [
      'amp-auto-ads',
      '.amp_ad',
      'amp-embed[type="24smi"]',
      '#mgid_iframe1',
      '#ad_inview_area',
    ],
    adGuardRussian: [
      'a[href^="https://ad.letmeads.com/"]',
      '.reclama',
      'div[id^="smi2adblock"]',
      'div[id^="AdFox_banner_"]',
      '#psyduckpockeball',
    ],
    adGuardSocial: [
      'a[href^="//www.stumbleupon.com/submit?url="]',
      'a[href^="//telegram.me/share/url?"]',
      '.etsy-tweet',
      '#inlineShare',
      '.popup-social',
    ],
    adGuardSpanishPortuguese: ['#barraPublicidade', '#Publicidade', '#publiEspecial', '#queTooltip', '.cnt-publi'],
    adGuardTrackingProtection: [
      '#qoo-counter',
      'a[href^="http://click.hotlog.ru/"]',
      'a[href^="http://hitcounter.ru/top/stat.php"]',
      'a[href^="http://top.mail.ru/jump"]',
      '#top100counter',
    ],
    adGuardTurkish: [
      '#backkapat',
      '#reklami',
      'a[href^="http://adserv.ontek.com.tr/"]',
      'a[href^="http://izlenzi.com/campaign/"]',
      'a[href^="http://www.installads.net/"]',
    ],
    bulgarian: ['td#freenet_table_ads', '#ea_intext_div', '.lapni-pop-over', '#xenium_hot_offers'],
    easyList: [
      '.yb-floorad',
      '.widget_po_ads_widget',
      '.trafficjunky-ad',
      '.textad_headline',
      '.sponsored-text-links',
    ],
    easyListChina: [
      '.appguide-wrap[onclick*="bcebos.com"]',
      '.frontpageAdvM',
      '#taotaole',
      '#aafoot.top_box',
      '.cfa_popup',
    ],
    easyListCookie: [
      '.ezmob-footer',
      '.cc-CookieWarning',
      '[data-cookie-number]',
      '.aw-cookie-banner',
      '.sygnal24-gdpr-modal-wrap',
    ],
    easyListCzechSlovak: [
      '#onlajny-stickers',
      '#reklamni-box',
      '.reklama-megaboard',
      '.sklik',
      '[id^="sklikReklama"]',
    ],
    easyListDutch: [
      '#advertentie',
      '#vipAdmarktBannerBlock',
      '.adstekst',
      'a[href^="https://xltube.nl/click/"]',
      '#semilo-lrectangle',
    ],
    easyListGermany: [
      '#SSpotIMPopSlider',
      '.sponsorlinkgruen',
      '#werbungsky',
      '#reklame-rechts-mitte',
      'a[href^="https://bd742.com/"]',
    ],
    easyListItaly: [
      '.box_adv_annunci',
      '.sb-box-pubbliredazionale',
      'a[href^="http://affiliazioniads.snai.it/"]',
      'a[href^="https://adserver.html.it/"]',
      'a[href^="https://affiliazioniads.snai.it/"]',
    ],
    easyListLithuania: [
      '.reklamos_tarpas',
      '.reklamos_nuorodos',
      'img[alt="Reklaminis skydelis"]',
      'img[alt="Dedikuoti.lt serveriai"]',
      'img[alt="Hostingas Serveriai.lt"]',
    ],
    estonian: ['A[href*="http://pay4results24.eu"]'],
    fanboyAnnoyances: ['#ac-lre-player', '.navigate-to-top', '#subscribe_popup', '.newsletter_holder', '#back-top'],
    fanboyAntiFacebook: ['.util-bar-module-firefly-visible'],
    fanboyEnhancedTrackers: [
      '.open.pushModal',
      '#issuem-leaky-paywall-articles-zero-remaining-nag',
      '#sovrn_container',
      'div[class$="-hide"][zoompage-fontsize][style="display: block;"]',
      '.BlockNag__Card',
    ],
    fanboySocial: ['#FollowUs', '#meteored_share', '#social_follow', '.article-sharer', '.community__social-desc'],
    frellwitSwedish: [
      'a[href*="casinopro.se"][target="_blank"]',
      'a[href*="doktor-se.onelink.me"]',
      'article.category-samarbete',
      'div.holidAds',
      'ul.adsmodern',
    ],
    greekAdBlock: [
      'A[href*="adman.otenet.gr/click?"]',
      'A[href*="http://axiabanners.exodus.gr/"]',
      'A[href*="http://interactive.forthnet.gr/click?"]',
      'DIV.agores300',
      'TABLE.advright',
    ],
    hungarian: [
      '#cemp_doboz',
      '.optimonk-iframe-container',
      '.ad__main',
      '[class*="GoogleAds"]',
      '#hirdetesek_box',
    ],
    iDontCareAboutCookies: [
      '.alert-info[data-block-track*="CookieNotice"]',
      '.ModuleTemplateCookieIndicator',
      '.o--cookies--container',
      '#cookies-policy-sticky',
      '#stickyCookieBar',
    ],
    icelandicAbp: ['A[href^="/framework/resources/forms/ads.aspx"]'],
    latvian: [
      'a[href="http://www.salidzini.lv/"][style="display: block; width: 120px; height: 40px; overflow: hidden; position: relative;"]',
      'a[href="http://www.salidzini.lv/"][style="display: block; width: 88px; height: 31px; overflow: hidden; position: relative;"]',
    ],
    listKr: [
      'a[href*="//ad.planbplus.co.kr/"]',
      '#livereAdWrapper',
      'a[href*="//adv.imadrep.co.kr/"]',
      'ins.fastview-ad',
      '.revenue_unit_item.dable',
    ],
    listeAr: [
      '.geminiLB1Ad',
      '.right-and-left-sponsers',
      'a[href*=".aflam.info"]',
      'a[href*="booraq.org"]',
      'a[href*="dubizzle.com/ar/?utm_source="]',
    ],
    listeFr: [
      'a[href^="http://promo.vador.com/"]',
      '#adcontainer_recherche',
      'a[href*="weborama.fr/fcgi-bin/"]',
      '.site-pub-interstitiel',
      'div[id^="crt-"][data-criteo-id]',
    ],
    officialPolish: [
      '#ceneo-placeholder-ceneo-12',
      '[href^="https://aff.sendhub.pl/"]',
      'a[href^="http://advmanager.techfun.pl/redirect/"]',
      'a[href^="http://www.trizer.pl/?utm_source"]',
      'div#skapiec_ad',
    ],
    ro: [
      'a[href^="//afftrk.altex.ro/Counter/Click"]',
      'a[href^="https://blackfridaysales.ro/trk/shop/"]',
      'a[href^="https://event.2performant.com/events/click"]',
      'a[href^="https://l.profitshare.ro/"]',
      'a[href^="/url/"]',
    ],
    ruAd: [
      'a[href*="//febrare.ru/"]',
      'a[href*="//utimg.ru/"]',
      'a[href*="://chikidiki.ru"]',
      '#pgeldiz',
      '.yandex-rtb-block',
    ],
    thaiAds: [
      'a[href*=macau-uta-popup]',
      '#ads-google-middle_rectangle-group',
      '.ads300s',
      '.bumq',
      '.img-kosana',
    ],
    webAnnoyancesUltralist: [
      '#mod-social-share-2',
      '#social-tools',
      '.ctpl-fullbanner',
      '.zergnet-recommend',
      '.yt.btn-link.btn-md.btn',
    ],
  }
}

type Options = {
  debug?: boolean
}

/**
 * The order of the returned array means nothing (it's always sorted alphabetically).
 *
 * Notice that the source is slightly unstable.
 * Safari provides a 2-taps way to disable all content blockers on a page temporarily.
 * Also content blockers can be disabled permanently for a domain, but it requires 4 taps.
 * So empty array shouldn't be treated as "no blockers", it should be treated as "no signal".
 * If you are a website owner, don't make your visitors want to disable content blockers.
 */
export default async function getDomBlockers({ debug }: Options = {}): Promise<string[] | undefined> {
  if (!isApplicable()) {
    return undefined
  }

  const filters = getFilters()
  const filterNames = Object.keys(filters) as Array<keyof typeof filters>
  const allSelectors = ([] as string[]).concat(...filterNames.map((filterName) => filters[filterName]))
  const blockedSelectors = await getBlockedSelectors(allSelectors)

  if (debug) {
    printDebug(filters, blockedSelectors)
  }

  const activeBlockers = filterNames.filter((filterName) => {
    const selectors = filters[filterName]
    const blockedCount = countTruthy(selectors.map((selector) => blockedSelectors[selector]))
    return blockedCount > selectors.length * 0.6
  })
  activeBlockers.sort()

  return activeBlockers
}

export function isApplicable(): boolean {
  // Safari (desktop and mobile) and all Android browsers keep content blockers in both regular and private mode
  return isWebKit() || isAndroid()
}

export async function getBlockedSelectors<T extends string>(selectors: readonly T[]): Promise<{ [K in T]?: true }> {
  const d = document
  const root = d.createElement('div')
  const elements = new Array<HTMLElement>(selectors.length)
  const blockedSelectors: { [K in T]?: true } = {} // Set() isn't used just in case somebody need older browser support

  forceShow(root)

  // First create all elements that can be blocked. If the DOM steps below are done in a single cycle,
  // browser will alternate tree modification and layout reading, that is very slow.
  for (let i = 0; i < selectors.length; ++i) {
    const element = selectorToElement(selectors[i])
    if (element.tagName === 'DIALOG') {
      ;(element as HTMLDialogElement).show()
    }
    const holder = d.createElement('div') // Protects from unwanted effects of `+` and `~` selectors of filters
    forceShow(holder)
    holder.appendChild(element)
    root.appendChild(holder)
    elements[i] = element
  }

  // document.body can be null while the page is loading
  while (!d.body) {
    await wait(50)
  }
  d.body.appendChild(root)

  try {
    // Then check which of the elements are blocked
    for (let i = 0; i < selectors.length; ++i) {
      if (!elements[i].offsetParent) {
        blockedSelectors[selectors[i]] = true
      }
    }
  } finally {
    // Then remove the elements
    root.parentNode?.removeChild(root)
  }

  return blockedSelectors
}

function forceShow(element: HTMLElement) {
  element.style.setProperty('visibility', 'hidden', 'important')
  element.style.setProperty('display', 'block', 'important')
}

function printDebug(filters: Filters, blockedSelectors: { [K in string]?: true }) {
  let message = 'DOM blockers debug:\n```'
  for (const filterName of Object.keys(filters) as Array<keyof typeof filters>) {
    message += `\n${filterName}:`
    for (const selector of filters[filterName]) {
      message += `\n  ${blockedSelectors[selector] ? '🚫' : '➡️'} ${selector}`
    }
  }
  // console.log is ok here because it's under a debug clause
  // eslint-disable-next-line no-console
  console.log(`${message}\n\`\`\``)
}
