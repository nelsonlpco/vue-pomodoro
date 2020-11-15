<template>
  <Container>
    <Title
      class="title--absolute"
      :class="timeTitleAnimation">
      {{$t('pomodoro')}}
    </Title>
    <Container class="hidden" :class="timeDisplayAnimation">
      <Time :minutes="onlyMinutes" :seconds="onlySeconds" />
      <Subtitle>{{legend}}</Subtitle>
    </Container>
  </Container>
</template>

<script>
import Container from '@/components/atoms/Container.vue';
import Subtitle from '@/components/atoms/Subtitle.vue';
import Title from '@/components/atoms/Title.vue';
import Time from '@/components/atoms/Time.vue';

export default {
  name: 'TimeDisplay',
  components: {
    Container,
    Subtitle,
    Title,
    Time,
  },
  props: {
    seconds: {
      type: Number,
      default: 0,
    },
    timeTitleAnimation: {
      type: String,
      default: '',
    },
    timeDisplayAnimation: {
      type: String,
      default: '',
    },
    isStarted: {
      type: Boolean,
      default: false,
    },
    legend: {
      type: String,
      default: '',
    },
  },
  computed: {
    onlyMinutes() {
      const minutes = Math.floor(this.$props.seconds / 60);
      return this.getPaddedTime(minutes);
    },
    onlySeconds() {
      const seconds = Math.floor(this.$props.seconds % 60);
      return this.getPaddedTime(seconds);
    },
  },
  methods: {
    getPaddedTime(value) {
      return value.toString().padStart(2, '0');
    },
  },
};
</script>

<style lang="scss" scoped>
  @import '../../theme/theme.scss';

  .hidden {
    opacity: 0;
  }

  .title--absolute {
    position: absolute;
  }

  .upTitle {
    animation: upTitle .5s ease-out forwards;
  }

  .downTitle {
    animation: downTitle .5s ease-out forwards;
  }

  .upDisplay{
    opacity: 0;
    animation: upDisplay .5s ease-out forwards;
  }

  .downDisplay{
    animation: downDisplay .5s ease-out forwards;
  }

  @keyframes upTitle {
    to {
      transform: translateY(-200px);
      font-size: 3rem;
    }
  }

  @keyframes downTitle {
    from {
      transform: translateY(-200px);
      font-size: 3rem;
    }
    to {
      transform: translateY(0px);
      font-size: $font-size-title;
    }
  }

  @keyframes upDisplay {
    from {
      transform: translateY(40px);
      opacity: 0;
    }
    to {
      transform: translateY(0px);
      opacity: 1;
    }
  }

  @keyframes downDisplay {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(40px);
      opacity: 0;
    }
  }
</style>
