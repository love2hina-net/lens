import { Common, Renderer } from "@love2hina-net/k8slens.extensions";

export default class ExampleLensExtension extends Renderer.LensExtension {
  protected onActivate(): void | Promise<void> {
    Common.logger.info("Activating bundled extension example");
  }

  protected onDeactivate(): void | Promise<void> {
    Common.logger.info("Deactivating bundled extension example");
  }
}
