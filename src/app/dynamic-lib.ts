export class DynamicLib {
  cheers() {
    console.log('cheers');
    const date = (new Date()).toString();
    return `cheers at ${date}`;
  }
}
