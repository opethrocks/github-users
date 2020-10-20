<template>
	<div>
		<div class="item">
			<div
				class="card"
				id="card"
				v-for="user in matchLogin"
				:key="user.id"
				@click="showModal(user)"
			>
				<div class="card-image">
					<figure class="image is-4by3">
						<img :src="user.avatar_url" alt="Placeholder image" />
					</figure>
					<div class="card-content">
						<div class="media">
							<div class="media-content">
								<p class="title is-3">@{{ user.login }}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'GithubUserCard',
	components: {},
	props: {
		matchLogin: {
			type: Array,
			required: true,
			default: () => {
				[];
			}
		}
	},
	methods: {
		showModal(user) {
			this.$emit('activateModal', {
				show: true,
				user: user
			});
		}
	}
};
</script>

<style lang="scss">
.item {
	display: flex;
}

.card:hover {
	box-shadow: 0 8px 16px 0 #7dfbca;
	cursor: pointer;
}

#card {
	margin: 0em 1em 1em 2em;
	width: 25em;
}
</style>
