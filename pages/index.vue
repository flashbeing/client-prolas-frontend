<template>
  <main>
    <div class="container">
      <SectionImageText
        title="CIAO"
        text="Konzeption und 3D-Konstruktion Wir stehen für Dynamik und Professionalität. Auf Kundenwunsch entwickeln wir optimale Lösungen: CAD-unterstützte Konstruktionen von Bauteilen und Fertigprodukten sowie Optimierung und Anpassungen von bereits existenten Bauteilen und Geometrien sind unser Steckenpferd. Wir leben Innovation."
        image="https://picsum.photos/624/433"
      />
      <SectionImageText
        title="CIAO"
        text="Konzeption und 3D-Konstruktion Wir stehen für Dynamik und Professionalität. Auf Kundenwunsch entwickeln wir optimale Lösungen: CAD-unterstützte Konstruktionen von Bauteilen und Fertigprodukten sowie Optimierung und Anpassungen von bereits existenten Bauteilen und Geometrien sind unser Steckenpferd. Wir leben Innovation."
        image="https://picsum.photos/624/433"
        right
      />
    </div>
    <SideListWithRightDetails />
    <div class="container container-small-gap">
      <ImagesWall />
      <Location />
    </div>
  </main>
</template>

<script>
import SectionImageText from '@/components/ui/SectionImageText.vue'
import SideListWithRightDetails from '@/components/ui/SideListWithRightDetails.vue'
import ImagesWall from '@/components/ui/ImagesWall.vue'
import Location from '@/components/ui/Location.vue'
export default {
  components: {
    SectionImageText,
    SideListWithRightDetails,
    ImagesWall,
    Location,
  },
}
</script>

<style lang="postcss" scoped>
main {
  margin-top: 60px;
}

.container {
  @apply flex flex-col gap-32 items-center m-auto;
}

.container-small-gap {
  @apply gap-12;
}
</style>
