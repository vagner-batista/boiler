import * as env from 'env-var'

const config = {
  port: env.get('PORT').default('3000').asPortNumber(),
}

export default config
