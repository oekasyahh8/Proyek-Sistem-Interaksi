import{proxyCustomElement,HTMLElement,h,Host}from"@stencil/core/internal/client";import{s as state}from"./watchers.js";import{a as getDiscountedAmount,b as getScratchAmount}from"./getters.js";import{d as defineCustomElement$6}from"./sc-format-number2.js";import{d as defineCustomElement$5}from"./sc-price2.js";import{d as defineCustomElement$4}from"./sc-price-range2.js";import{d as defineCustomElement$3}from"./sc-tag2.js";import{d as defineCustomElement$2}from"./sc-visually-hidden2.js";const scProductPriceCss=":host{display:block}",ScProductPrice$1=proxyCustomElement(class extends HTMLElement{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.prices=void 0,this.saleText=void 0,this.productId=void 0}renderRange(){var e,t,r,s;return 1===(null===(t=null===(e=state[this.productId])||void 0===e?void 0:e.prices)||void 0===t?void 0:t.length)?this.renderPrice(null===(r=state[this.productId])||void 0===r?void 0:r.prices[0]):h("sc-price-range",{prices:null===(s=state[this.productId])||void 0===s?void 0:s.prices})}renderVariantPrice(e){var t,r;const s=null===(r=null===(t=state[this.productId])||void 0===t?void 0:t.variants)||void 0===r?void 0:r.find((t=>(null==t?void 0:t.id)===(null==e?void 0:e.id)));return this.renderPrice(state[this.productId].selectedPrice,null==s?void 0:s.amount)}renderPrice(e,t){var r;const s=null!==(r=null!=t?t:null==e?void 0:e.amount)&&void 0!==r?r:0,i=getDiscountedAmount(s),n=getScratchAmount(null==e?void 0:e.scratch_amount);return h("sc-price",{currency:null==e?void 0:e.currency,amount:i,scratchAmount:n,saleText:this.saleText,adHoc:null==e?void 0:e.ad_hoc,trialDurationDays:null==e?void 0:e.trial_duration_days,setupFeeAmount:(null==e?void 0:e.setup_fee_enabled)?null==e?void 0:e.setup_fee_amount:null,setupFeeName:(null==e?void 0:e.setup_fee_enabled)?null==e?void 0:e.setup_fee_name:null,recurringPeriodCount:null==e?void 0:e.recurring_period_count,recurringInterval:null==e?void 0:e.recurring_interval,recurringIntervalCount:null==e?void 0:e.recurring_interval_count})}render(){return h(Host,{role:"paragraph"},(()=>{var e,t,r,s,i;return(null===(e=state[this.productId])||void 0===e?void 0:e.selectedVariant)?this.renderVariantPrice(null===(t=state[this.productId])||void 0===t?void 0:t.selectedVariant):(null===(r=state[this.productId])||void 0===r?void 0:r.selectedPrice)?this.renderPrice(state[this.productId].selectedPrice):(null===(i=null===(s=state[this.productId])||void 0===s?void 0:s.prices)||void 0===i?void 0:i.length)?this.renderRange():h("slot",null)})())}static get style(){return scProductPriceCss}},[1,"sc-product-price",{prices:[16],saleText:[1,"sale-text"],productId:[1,"product-id"]}]);function defineCustomElement$1(){"undefined"!=typeof customElements&&["sc-product-price","sc-format-number","sc-price","sc-price-range","sc-tag","sc-visually-hidden"].forEach((e=>{switch(e){case"sc-product-price":customElements.get(e)||customElements.define(e,ScProductPrice$1);break;case"sc-format-number":customElements.get(e)||defineCustomElement$6();break;case"sc-price":customElements.get(e)||defineCustomElement$5();break;case"sc-price-range":customElements.get(e)||defineCustomElement$4();break;case"sc-tag":customElements.get(e)||defineCustomElement$3();break;case"sc-visually-hidden":customElements.get(e)||defineCustomElement$2()}}))}const ScProductPrice=ScProductPrice$1,defineCustomElement=defineCustomElement$1;export{ScProductPrice,defineCustomElement};