<template>
  <div class="contact">
    <section class='bg-black text-light text-center pt-5 pb-5 mb-5'>
      <h1 class='mb-3 mt-3'>Contact Me</h1>
      <p>
        Interested in working together?
        <br>
        If you do like to chat about a project or my availability please fill in the form below and I will get back as soon as possible
      </p>
    </section>
    <div class='container'>
      <div class='row justify-content-center'>
        <div class='col-sm-10 col-md-6'>
          <div class='card rounded-0 border-2 mb-5'>
            <div class='card-body'>
              <form v-if="!isSubmitted && !isLoading" @submit.prevent="submitForm">
                <div class='mb-3'>
                  <label for="first_name" class="form-label">First Name</label>
                  <input type="text" name="first_name" id="first_name" v-model="firstName" class="form-control rounded-0" required>
                </div>
                <div class='mb-3'>
                  <label for="last_name" class="form-label">Last Name</label>
                  <input type="text" name="last_name" id="last_name" v-model="lastName" class="form-control rounded-0" required>
                </div>
                <div class='mb-3'>
                  <label for="email" class="form-label">Email</label>
                  <input type="email" name="email" id="email" v-model="email" class="form-control rounded-0" required>
                </div>
                <div class='mb-3'>
                  <label for="message" class="form-label">Message</label>
                  <textarea name="message" id="message" rows="5" v-model="message" class="form-control rounded-0" required></textarea>
                </div>
                <div class='mb-3'>
                  <button class='btn btn-dark rounded-0 form-control'>Send</button>
                </div>
              </form>
              <div v-if="!isSubmitted && isLoading" class="text-center p-5">
                <div class="loader-container">
                  <div class="loader mb-4"></div>
                  <br>
                  <h4>Submitting</h4>
                </div>
              </div>
              <div v-if="!isLoading && isSubmitted" class="text-center p-5">
                <div class="submitted">
                  <div class="svg-icon mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-check-square" viewBox="0 0 16 16">
                      <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                      <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z"/>
                    </svg>
                  </div>
                  <h3 class="mb-5">Thank you for your message!</h3>
                  <p>
                    I will get back to you as soon as possible.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="js">
const firstName = ref('')
const lastName = ref('')
const email = ref('')
const message = ref('')
const isSubmitted = ref(false)
const isLoading = ref(false)

useHead({
  title: 'Contact Me | macthodology',
})

async function submitForm() {
  isLoading.value = true

  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      access_key: useRuntimeConfig().public.web3formsAccessKey,
      name: `${firstName.value} ${lastName.value}`,
      email: email.value,
      message: message.value,
    })
  })
  const result = await response.json()
  if (result.success) {
    console.log(result)
    isLoading.value = false
    isSubmitted.value = true
  }
}
</script>

<style lang="scss" scoped>
.loader-container {
  .loader {
    display: inline-flex;
    border: 10px solid #f3f3f3; /* Light grey */
    border-top: 10px solid grey; /* Blue */
    border-radius: 50%;
    width: 80px;
    height: 80px;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
}

.svg-icon {
  width: 50px;
  color: green;
  display: inline-flex;
}
</style>
