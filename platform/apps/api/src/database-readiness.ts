import { Injectable, type OnApplicationShutdown } from "@nestjs/common";
import { createDatabase, pingDatabase } from "@konkur/database";

@Injectable()
export class DatabaseReadiness implements OnApplicationShutdown {
  readonly #database;

  public constructor() {
    const connectionString = process.env.DATABASE_URL;
    if (connectionString === undefined) {
      throw new Error("DATABASE_URL is required");
    }
    this.#database = createDatabase(connectionString);
  }

  public async check(): Promise<void> {
    await pingDatabase(this.#database);
  }

  public async onApplicationShutdown(): Promise<void> {
    await this.#database.destroy();
  }
}
