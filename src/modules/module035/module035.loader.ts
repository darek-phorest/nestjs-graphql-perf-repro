import { Injectable, Scope } from '@nestjs/common';
import DataLoader from 'dataloader';

@Injectable({ scope: Scope.REQUEST })
export class Module035Loader {
  private readonly loader = new DataLoader<string, string>(
    async (ids: readonly string[]) => {
      // Simulate async operation
      return ids.map(id => 'computed-' + id + '-035');
    },
  );

  async load(id: string): Promise<string> {
    return this.loader.load(id);
  }

  async loadMany(ids: string[]): Promise<(string | Error)[]> {
    return this.loader.loadMany(ids);
  }
}
