<template>
  <section class="myStack">
    <div class="myStack__title">
      <h3>Tecnologias</h3>
    </div>

    <div class="stack">
      <PxFigmaIcon class="icon tooltip tooltiptext" size="40px" />
      <PxHtmlIcon class="icon" size="40px" />
      <PxCssIcon class="icon" size="40px" />
      <PxJavascriptIcon class="icon" size="40px" />
      <PxGitIcon class="icon" size="40px" />
      <PxSassIcon class="icon" size="40px" />
      <PxVueIcon class="icon" size="40px" />
      <PxNuxtjsIcon class="icon" size="40px" />
      <PxReactIcon class="icon" size="40px" />
      <PxNextjsIcon class="icon" size="40px" />
      <PxFirebaseIcon class="icon" size="40px" />
      <PxVercelIcon class="icon" size="40px" />
    </div>
  </section>
</template>

<script>
import PxJavascriptIcon from '~/assets/icons/PxJavascriptIcon';
import PxVueIcon from '~/assets/icons/PxVueIcon';
import PxReactIcon from '~/assets/icons/PxReactIcon';
import PxFirebaseIcon from '~/assets/icons/PxFirebaseIcon';
import PxSassIcon from '~/assets/icons/PxSassIcon';
import PxGitIcon from '~/assets/icons/PxGitIcon';
import PxVercelIcon from '~/assets/icons/PxVercelIcon';
import PxFigmaIcon from '~/assets/icons/PxFigmaIcon';
import PxHtmlIcon from '~/assets/icons/PxHtmlIcon';
import PxCssIcon from '~/assets/icons/PxCssIcon';
import PxNextjsIcon from '~/assets/icons/PxNextjsIcon';
import PxNuxtjsIcon from '~/assets/icons/PxNuxtjsIcon';

export default {
  name: 'PxStack',
  components: {
    PxJavascriptIcon,
    PxVueIcon,
    PxReactIcon,
    PxFirebaseIcon,
    PxSassIcon,
    PxGitIcon,
    PxVercelIcon,
    PxFigmaIcon,
    PxHtmlIcon,
    PxCssIcon,
    PxNuxtjsIcon,
    PxNextjsIcon,
  },
}
</script>
