<template>
     <div class="button__wrap">
        <button @click="onClick()" class="button" style="--hue: 299.1170092399674">
          ORDER NOW
        </button>
        <div class="button__shadow"></div>
      </div>
</template>

<script>
export default {
  props: {
    onClick: {
      type: Function,
      required: true
    }
  }
}
</script>
<style lang="stylus" scoped>
.button {
  --y: -25;
  --x: 0;
  --rotation: 0;
  --speed: 2;
  --txt: 'ORDER NOW';
  --padding: 1rem 1.25rem;
  cursor: pointer;
  padding: var(--padding);
  color: transparent;
  font-weight: bold;
  font-size: 1.25rem;
  transition: background 0.1s ease;
  background: 'hsl(%s, 100%, 50%)' % var(--hue);
  outline-color: 'hsl(%s, 100%, 80%)' % var(--hue);
  animation-name: flow-and-shake;
  animation-duration: calc(var(--speed) * 1s);
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;

  &:after {
    content: var(--txt);
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    padding: var(--padding);
    color: #fff;
  }

  &:hover {
    background: 'hsl(%s, 100%, 40%)' % var(--hue);
    --speed: 0.1;
    --rotation: -1;
    --y: -1;
    --x: 1;
    --txt: 'Order!';
  }

  &:active {
    --speed: 4;
    --x: 0;
    --y: 5;
    --rotation: 0;
    --txt: 'Ahhhh...';
    background: 'hsl(%s, 100%, 30%)' % var(--hue);
  }

  &__wrap {
    position: relative;
  }

  &__shadow {
    position: absolute;
    border-radius: 100%;
    bottom: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: hsl(0, 10%, 65%);
    animation: shadow 2s infinite ease-in-out;
    z-index: -1;
  }
}

@keyframes shadow {
  0%, 100% {
    transform: scaleX(1);
    opacity: 1;
  }

  50% {
    opacity: 0.2;
    transform: scaleX(0.25);
  }
}

@keyframes flow-and-shake {
  0%, 100% {
    transform: translate(calc(var(--x) * -1%), 0) rotate(calc(var(--rotation) * -1deg));
  }

  50% {
    transform: translate(calc(var(--x) * 1%), calc(var(--y) * 1%)) rotate(calc(var(--rotation) * 1deg));
  }
}
</style>