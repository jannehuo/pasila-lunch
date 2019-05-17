import { template } from "lodash"

export function compileTempate(templateStr, data) {
  const compiled = template(templateStr)
  return compiled({ data })
}
