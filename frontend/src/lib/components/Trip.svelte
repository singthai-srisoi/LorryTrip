<script lang="ts">
  import date from 'date-and-time'
  interface Props {
    trip: Model.Trip
  }

  let {
    trip
  }: Props = $props()
</script>




<ul class="timeline">
  {#each trip.trip_points as point, i}
    <li>
      {#if i > 0}
        <hr class={`min-w-[40px] ${point.status === 'completed' ? 'bg-primary' : ''}`} />
      {/if}
      <div class="timeline-start">{
        date.format(
          new Date(point.time),
          'h:mm A'
        )
      }</div>
      <div class="timeline-middle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class={`h-5 w-5 ${point.status === 'completed' ? 'text-primary' : ''}`}
        >
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <div class="timeline-end timeline-box p-2">NPNP ersgsg</div>
      {#if i < trip.trip_points.length - 1}
        <hr class={`min-w-[40px] ${point.status === 'completed' ? 'bg-primary' : ''}`} />
      {/if}
      <!-- <hr class="bg-primary min-w-[40px]" /> -->
    </li>
  {/each}
</ul>

<!-- 
<ul class="timeline">
  <li>
    <div class="timeline-start">9:33 a.m.</div>
    <div class="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="text-primary h-5 w-5"
      >
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
    <div class="timeline-end timeline-box p-2">NPNP ersgsg</div>
    <hr class="bg-primary min-w-[40px]" />
  </li>
  <li>
    <hr class=" min-w-[40px]" />
    <div class="timeline-start">...</div>
    <div class="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="h-5 w-5"
      >
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
    <div class="timeline-end timeline-box p-2">Benta Sawit ERERER</div>

  </li>
</ul>
-->