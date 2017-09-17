import curry from 'ramda/src/curry';

export default function curryDecorator(target, name, descriptor) {
  descriptor.value = curry(descriptor.value);
  return descriptor;
}
