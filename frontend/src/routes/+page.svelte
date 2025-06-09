<script lang="ts">
	import Trip from "$lib/components/Trip.svelte";
	import type { PageData } from "./$types";

    interface Props {
		data: {
			trips: Model.Trip[]
		} | PageData
	}

	let {
		data
	}: Props = $props();

	$inspect(data, "data");
</script>

<div class="overflow-x-auto">
  <table class="table">
    <!-- head -->
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Check</th>
      </tr>
    </thead>
    <tbody>
		{#each data.trips as trip, i}
			<tr class="hover:bg-base-300">
				<th>{i + 1}</th>
				<td>{trip.name}</td>
				<td>
					<Trip trip={trip} />
				</td>
				<td>{trip.created_at}</td>
			</tr>
		{/each}

      <!-- row 1
      <tr class="hover:bg-base-300">
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>
			<Trip trip={data.trip} />
		</td>
        <td>Blue</td>
      </tr>
      <tr class="hover:bg-base-300">
        <th>2</th>
        <td>Hart Hagerty</td>
        <td>
			<Trip trip={data.trip} />
		</td>
        <td>Purple</td>
      </tr>
      <tr class="hover:bg-base-300">
        <th>3</th>
        <td>Brice Swyre</td>
        <td>Tax Accountant</td>
        <td>Red</td>
      </tr> -->
    </tbody>
  </table>
</div>