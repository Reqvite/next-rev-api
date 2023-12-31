import type { Schema, Attribute } from '@strapi/strapi';

export interface BlocksAuthForm extends Schema.Component {
  collectionName: 'components_blocks_auth_forms';
  info: {
    displayName: 'AuthForm';
    icon: 'code';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.String;
    linkTitle: Attribute.String;
    href: Attribute.String;
    inputs: Attribute.Component<'shared.input', true>;
    forgotPasswordTitle: Attribute.String;
    submitButton: Attribute.Component<'buttons.button'>;
    anotherVariantsTitle: Attribute.String;
  };
}

export interface BlocksBenefits extends Schema.Component {
  collectionName: 'components_blocks_benefits';
  info: {
    displayName: 'Benefits';
    icon: 'connector';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
  };
}

export interface BlocksCategories extends Schema.Component {
  collectionName: 'components_blocks_categories';
  info: {
    displayName: 'Categories';
    icon: 'shoppingCart';
    description: '';
  };
  attributes: {
    categories: Attribute.Relation<
      'blocks.categories',
      'oneToMany',
      'api::category.category'
    >;
    title: Attribute.String;
  };
}

export interface BlocksHero extends Schema.Component {
  collectionName: 'components_blocks_heroes';
  info: {
    displayName: 'Hero';
    icon: 'apps';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    img: Attribute.Media;
    buttons: Attribute.Component<'links.button-link', true>;
  };
}

export interface ButtonsButton extends Schema.Component {
  collectionName: 'components_buttons_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    variant: Attribute.Enumeration<['primary', 'secondary']>;
  };
}

export interface LayoutFooter extends Schema.Component {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'Footer';
    description: '';
  };
  attributes: {
    footerLogo: Attribute.Component<'layout.logo'>;
    footerLinks: Attribute.Component<'links.link', true>;
    legalLinks: Attribute.Component<'links.link', true>;
    socialLinks: Attribute.Component<'links.social-link', true>;
  };
}

export interface LayoutLogo extends Schema.Component {
  collectionName: 'components_layout_logos';
  info: {
    displayName: 'Logo';
    description: '';
  };
  attributes: {
    img: Attribute.Media & Attribute.Required;
    title: Attribute.String;
  };
}

export interface LayoutNavbar extends Schema.Component {
  collectionName: 'components_layout_navbars';
  info: {
    name: 'Navbar';
    displayName: 'Navbar';
    icon: 'map-signs';
    description: '';
  };
  attributes: {
    links: Attribute.Component<'links.link', true>;
    buttons: Attribute.Component<'links.button-link', true>;
    navbarLogo: Attribute.Component<'layout.logo'>;
    inputs: Attribute.Component<'shared.input', true>;
    logoutBtn: Attribute.Component<'buttons.button'>;
  };
}

export interface LinksButtonLink extends Schema.Component {
  collectionName: 'components_links_button_links';
  info: {
    displayName: 'Button link';
    icon: 'stack';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    href: Attribute.String;
    variant: Attribute.Enumeration<['primary', 'secondary', 'link']>;
  };
}

export interface LinksLink extends Schema.Component {
  collectionName: 'components_links_links';
  info: {
    displayName: 'Link';
    icon: 'filter';
    description: '';
  };
  attributes: {
    href: Attribute.String;
    newTab: Attribute.Boolean & Attribute.DefaultTo<false>;
    label: Attribute.String & Attribute.Required;
    children: Attribute.Component<'links.sub-link', true>;
    variant: Attribute.Enumeration<['primary', 'secondary']>;
  };
}

export interface LinksSocialLink extends Schema.Component {
  collectionName: 'components_links_social_links';
  info: {
    displayName: 'Social Link';
    description: '';
  };
  attributes: {
    url: Attribute.String & Attribute.Required;
    newTab: Attribute.Boolean & Attribute.DefaultTo<false>;
    text: Attribute.String & Attribute.Required;
    social: Attribute.Enumeration<['YOUTUBE', 'TWITTER', 'DISCORD', 'WEBSITE']>;
  };
}

export interface LinksSubLink extends Schema.Component {
  collectionName: 'components_links_sub_links';
  info: {
    displayName: 'SubLink';
  };
  attributes: {
    href: Attribute.String;
    label: Attribute.String & Attribute.Required;
  };
}

export interface SharedInput extends Schema.Component {
  collectionName: 'components_shared_inputs';
  info: {
    displayName: 'Input';
    icon: 'collapse';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    type: Attribute.Enumeration<['text', 'email', 'number', 'tel', 'password']>;
    htmlFor: Attribute.String;
    placeHolder: Attribute.String;
    variant: Attribute.Enumeration<
      ['floating', 'primary', 'secondary', 'clear']
    >;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

export interface SharedText extends Schema.Component {
  collectionName: 'components_shared_texts';
  info: {
    displayName: 'Text';
    icon: 'cog';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blocks.auth-form': BlocksAuthForm;
      'blocks.benefits': BlocksBenefits;
      'blocks.categories': BlocksCategories;
      'blocks.hero': BlocksHero;
      'buttons.button': ButtonsButton;
      'layout.footer': LayoutFooter;
      'layout.logo': LayoutLogo;
      'layout.navbar': LayoutNavbar;
      'links.button-link': LinksButtonLink;
      'links.link': LinksLink;
      'links.social-link': LinksSocialLink;
      'links.sub-link': LinksSubLink;
      'shared.input': SharedInput;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
      'shared.text': SharedText;
    }
  }
}
