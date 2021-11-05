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
  </main>
</template>

<script>
import SectionImageText from '@/components/ui/SectionImageText.vue'
import SideListWithRightDetails from '@/components/ui/SideListWithRightDetails.vue'
export default {
  components: {
    SectionImageText,
    SideListWithRightDetails,
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
</style>
