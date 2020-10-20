<template>
	<div class="modal is-active" v-if="show">
		<div class="modal-background" @click="closeModal"></div>

		<div class="modal-content">
			<!-- Any other Bulma elements you want -->
			<div class="box">
				<div class="columns">
					<div class="column">
						<slot name="image">
							<p class="image is-128x128 ">
								<img
									class="is-rounded"
									:src="selectedUser.avatar_url"
									alt="Placeholder image"
								/>
							</p>
						</slot>
					</div>

					<div class="column">
						<p class="modal-card-title pb-5"><slot name="header"></slot></p>
						<p><slot name="followers"></slot></p>
						<p>
							<slot name="location"></slot>
						</p>
						<p><slot name="link"></slot></p>
					</div>
				</div>
			</div>
		</div>
		<button
			class="modal-close is-large"
			aria-label="close"
			@click="closeModal"
		></button>
	</div>
</template>

<script>
export default {
	name: 'Modal',
	props: {
		show: {
			type: Boolean,
			default: () => {
				false;
			}
		},
		selectedUser: {
			type: Object,
			default: () => {
				{
					('');
				}
			}
		}
	},
	methods: {
		closeModal() {
			this.$emit('closeButton', {
				show: false
			});
		}
	}
};
</script>

<style lang="scss"></style>
