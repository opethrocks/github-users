<template>
	<div>
		<div class="field">
			<div class="control has-icons-left has-icons-right">
				<input
					class="input is-rounded is-info"
					type="text"
					placeholder="Search for a user by login"
					v-model="login"
					@input="loginSearch"
				/>
				<span class="icon is-left">
					<font-awesome-icon icon="user" />
				</span>
				<span class="icon is-right">
					<a class="delete is-small" @click="resetForm"></a>
				</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'UserSearch',
	data() {
		return {
			login: null
		};
	},

	methods: {
		loginSearch() {
			this.$emit('searchByLogin', {
				inputData: this.login
			});
		},
		resetForm() {
			this.login = '';
			this.$emit('clearForm', {
				login: ''
			});
		}
	}
};
</script>

<style lang="scss">
.input {
	margin-bottom: 3em;
	size: 50;
}

#clear {
	cursor: pointer;
}
</style>
