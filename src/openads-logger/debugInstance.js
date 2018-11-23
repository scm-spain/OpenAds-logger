const debugInstanceFactory = ({log}) => ({instance}) =>
    new Proxy(instance, debugHandler({log}))

const debugHandler = ({log}) => ({
  get: (target, propKey) => {
    const propertyType = typeof target[propKey]
    switch (propertyType) {
      case 'function':
        return (...args) => {
          log.debug(
            `Called ${target.constructor.name}.${propKey} with args:`,
            Object.entries(args)
          )
          return target[propKey].apply(target, args)
        }
      default:
        log.debug(
          `Reading property "${propKey}" type of ${typeof target[
            propKey
          ]} from class ${target.constructor.name}`
        )
    }
    return target[propKey]
  }
})

export {debugInstanceFactory}
