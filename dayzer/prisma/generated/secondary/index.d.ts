
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model caiso_bess_fleet_data
 * 
 */
export type caiso_bess_fleet_data = $Result.DefaultSelection<Prisma.$caiso_bess_fleet_dataPayload>
/**
 * Model eox_forwards
 * 
 */
export type eox_forwards = $Result.DefaultSelection<Prisma.$eox_forwardsPayload>
/**
 * Model eox_tags
 * 
 */
export type eox_tags = $Result.DefaultSelection<Prisma.$eox_tagsPayload>
/**
 * Model goleta_ascend_data
 * 
 */
export type goleta_ascend_data = $Result.DefaultSelection<Prisma.$goleta_ascend_dataPayload>
/**
 * Model goleta_budgets
 * 
 */
export type goleta_budgets = $Result.DefaultSelection<Prisma.$goleta_budgetsPayload>
/**
 * Model goleta_charging_constraints
 * 
 */
export type goleta_charging_constraints = $Result.DefaultSelection<Prisma.$goleta_charging_constraintsPayload>
/**
 * Model goleta_operational_data
 * 
 */
export type goleta_operational_data = $Result.DefaultSelection<Prisma.$goleta_operational_dataPayload>
/**
 * Model goleta_revenue_metrics
 * 
 */
export type goleta_revenue_metrics = $Result.DefaultSelection<Prisma.$goleta_revenue_metricsPayload>
/**
 * Model goleta_scheduling_data
 * 
 */
export type goleta_scheduling_data = $Result.DefaultSelection<Prisma.$goleta_scheduling_dataPayload>
/**
 * Model internal_forecasts
 * 
 */
export type internal_forecasts = $Result.DefaultSelection<Prisma.$internal_forecastsPayload>
/**
 * Model monthly_revenue_forecasts
 * 
 */
export type monthly_revenue_forecasts = $Result.DefaultSelection<Prisma.$monthly_revenue_forecastsPayload>
/**
 * Model yes_fundamentals
 * 
 */
export type yes_fundamentals = $Result.DefaultSelection<Prisma.$yes_fundamentalsPayload>
/**
 * Model yes_ids
 * 
 */
export type yes_ids = $Result.DefaultSelection<Prisma.$yes_idsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Caiso_bess_fleet_data
 * const caiso_bess_fleet_data = await prisma.caiso_bess_fleet_data.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Caiso_bess_fleet_data
   * const caiso_bess_fleet_data = await prisma.caiso_bess_fleet_data.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.caiso_bess_fleet_data`: Exposes CRUD operations for the **caiso_bess_fleet_data** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Caiso_bess_fleet_data
    * const caiso_bess_fleet_data = await prisma.caiso_bess_fleet_data.findMany()
    * ```
    */
  get caiso_bess_fleet_data(): Prisma.caiso_bess_fleet_dataDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.eox_forwards`: Exposes CRUD operations for the **eox_forwards** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Eox_forwards
    * const eox_forwards = await prisma.eox_forwards.findMany()
    * ```
    */
  get eox_forwards(): Prisma.eox_forwardsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.eox_tags`: Exposes CRUD operations for the **eox_tags** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Eox_tags
    * const eox_tags = await prisma.eox_tags.findMany()
    * ```
    */
  get eox_tags(): Prisma.eox_tagsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.goleta_ascend_data`: Exposes CRUD operations for the **goleta_ascend_data** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Goleta_ascend_data
    * const goleta_ascend_data = await prisma.goleta_ascend_data.findMany()
    * ```
    */
  get goleta_ascend_data(): Prisma.goleta_ascend_dataDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.goleta_budgets`: Exposes CRUD operations for the **goleta_budgets** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Goleta_budgets
    * const goleta_budgets = await prisma.goleta_budgets.findMany()
    * ```
    */
  get goleta_budgets(): Prisma.goleta_budgetsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.goleta_charging_constraints`: Exposes CRUD operations for the **goleta_charging_constraints** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Goleta_charging_constraints
    * const goleta_charging_constraints = await prisma.goleta_charging_constraints.findMany()
    * ```
    */
  get goleta_charging_constraints(): Prisma.goleta_charging_constraintsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.goleta_operational_data`: Exposes CRUD operations for the **goleta_operational_data** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Goleta_operational_data
    * const goleta_operational_data = await prisma.goleta_operational_data.findMany()
    * ```
    */
  get goleta_operational_data(): Prisma.goleta_operational_dataDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.goleta_revenue_metrics`: Exposes CRUD operations for the **goleta_revenue_metrics** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Goleta_revenue_metrics
    * const goleta_revenue_metrics = await prisma.goleta_revenue_metrics.findMany()
    * ```
    */
  get goleta_revenue_metrics(): Prisma.goleta_revenue_metricsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.goleta_scheduling_data`: Exposes CRUD operations for the **goleta_scheduling_data** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Goleta_scheduling_data
    * const goleta_scheduling_data = await prisma.goleta_scheduling_data.findMany()
    * ```
    */
  get goleta_scheduling_data(): Prisma.goleta_scheduling_dataDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.internal_forecasts`: Exposes CRUD operations for the **internal_forecasts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Internal_forecasts
    * const internal_forecasts = await prisma.internal_forecasts.findMany()
    * ```
    */
  get internal_forecasts(): Prisma.internal_forecastsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.monthly_revenue_forecasts`: Exposes CRUD operations for the **monthly_revenue_forecasts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Monthly_revenue_forecasts
    * const monthly_revenue_forecasts = await prisma.monthly_revenue_forecasts.findMany()
    * ```
    */
  get monthly_revenue_forecasts(): Prisma.monthly_revenue_forecastsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.yes_fundamentals`: Exposes CRUD operations for the **yes_fundamentals** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Yes_fundamentals
    * const yes_fundamentals = await prisma.yes_fundamentals.findMany()
    * ```
    */
  get yes_fundamentals(): Prisma.yes_fundamentalsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.yes_ids`: Exposes CRUD operations for the **yes_ids** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Yes_ids
    * const yes_ids = await prisma.yes_ids.findMany()
    * ```
    */
  get yes_ids(): Prisma.yes_idsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.10.1
   * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    caiso_bess_fleet_data: 'caiso_bess_fleet_data',
    eox_forwards: 'eox_forwards',
    eox_tags: 'eox_tags',
    goleta_ascend_data: 'goleta_ascend_data',
    goleta_budgets: 'goleta_budgets',
    goleta_charging_constraints: 'goleta_charging_constraints',
    goleta_operational_data: 'goleta_operational_data',
    goleta_revenue_metrics: 'goleta_revenue_metrics',
    goleta_scheduling_data: 'goleta_scheduling_data',
    internal_forecasts: 'internal_forecasts',
    monthly_revenue_forecasts: 'monthly_revenue_forecasts',
    yes_fundamentals: 'yes_fundamentals',
    yes_ids: 'yes_ids'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "caiso_bess_fleet_data" | "eox_forwards" | "eox_tags" | "goleta_ascend_data" | "goleta_budgets" | "goleta_charging_constraints" | "goleta_operational_data" | "goleta_revenue_metrics" | "goleta_scheduling_data" | "internal_forecasts" | "monthly_revenue_forecasts" | "yes_fundamentals" | "yes_ids"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      caiso_bess_fleet_data: {
        payload: Prisma.$caiso_bess_fleet_dataPayload<ExtArgs>
        fields: Prisma.caiso_bess_fleet_dataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.caiso_bess_fleet_dataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$caiso_bess_fleet_dataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.caiso_bess_fleet_dataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$caiso_bess_fleet_dataPayload>
          }
          findFirst: {
            args: Prisma.caiso_bess_fleet_dataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$caiso_bess_fleet_dataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.caiso_bess_fleet_dataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$caiso_bess_fleet_dataPayload>
          }
          findMany: {
            args: Prisma.caiso_bess_fleet_dataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$caiso_bess_fleet_dataPayload>[]
          }
          create: {
            args: Prisma.caiso_bess_fleet_dataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$caiso_bess_fleet_dataPayload>
          }
          createMany: {
            args: Prisma.caiso_bess_fleet_dataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.caiso_bess_fleet_dataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$caiso_bess_fleet_dataPayload>[]
          }
          delete: {
            args: Prisma.caiso_bess_fleet_dataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$caiso_bess_fleet_dataPayload>
          }
          update: {
            args: Prisma.caiso_bess_fleet_dataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$caiso_bess_fleet_dataPayload>
          }
          deleteMany: {
            args: Prisma.caiso_bess_fleet_dataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.caiso_bess_fleet_dataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.caiso_bess_fleet_dataUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$caiso_bess_fleet_dataPayload>[]
          }
          upsert: {
            args: Prisma.caiso_bess_fleet_dataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$caiso_bess_fleet_dataPayload>
          }
          aggregate: {
            args: Prisma.Caiso_bess_fleet_dataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCaiso_bess_fleet_data>
          }
          groupBy: {
            args: Prisma.caiso_bess_fleet_dataGroupByArgs<ExtArgs>
            result: $Utils.Optional<Caiso_bess_fleet_dataGroupByOutputType>[]
          }
          count: {
            args: Prisma.caiso_bess_fleet_dataCountArgs<ExtArgs>
            result: $Utils.Optional<Caiso_bess_fleet_dataCountAggregateOutputType> | number
          }
        }
      }
      eox_forwards: {
        payload: Prisma.$eox_forwardsPayload<ExtArgs>
        fields: Prisma.eox_forwardsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.eox_forwardsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eox_forwardsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.eox_forwardsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eox_forwardsPayload>
          }
          findFirst: {
            args: Prisma.eox_forwardsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eox_forwardsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.eox_forwardsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eox_forwardsPayload>
          }
          findMany: {
            args: Prisma.eox_forwardsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eox_forwardsPayload>[]
          }
          create: {
            args: Prisma.eox_forwardsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eox_forwardsPayload>
          }
          createMany: {
            args: Prisma.eox_forwardsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.eox_forwardsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eox_forwardsPayload>[]
          }
          delete: {
            args: Prisma.eox_forwardsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eox_forwardsPayload>
          }
          update: {
            args: Prisma.eox_forwardsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eox_forwardsPayload>
          }
          deleteMany: {
            args: Prisma.eox_forwardsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.eox_forwardsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.eox_forwardsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eox_forwardsPayload>[]
          }
          upsert: {
            args: Prisma.eox_forwardsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eox_forwardsPayload>
          }
          aggregate: {
            args: Prisma.Eox_forwardsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEox_forwards>
          }
          groupBy: {
            args: Prisma.eox_forwardsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Eox_forwardsGroupByOutputType>[]
          }
          count: {
            args: Prisma.eox_forwardsCountArgs<ExtArgs>
            result: $Utils.Optional<Eox_forwardsCountAggregateOutputType> | number
          }
        }
      }
      eox_tags: {
        payload: Prisma.$eox_tagsPayload<ExtArgs>
        fields: Prisma.eox_tagsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.eox_tagsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eox_tagsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.eox_tagsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eox_tagsPayload>
          }
          findFirst: {
            args: Prisma.eox_tagsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eox_tagsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.eox_tagsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eox_tagsPayload>
          }
          findMany: {
            args: Prisma.eox_tagsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eox_tagsPayload>[]
          }
          create: {
            args: Prisma.eox_tagsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eox_tagsPayload>
          }
          createMany: {
            args: Prisma.eox_tagsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.eox_tagsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eox_tagsPayload>[]
          }
          delete: {
            args: Prisma.eox_tagsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eox_tagsPayload>
          }
          update: {
            args: Prisma.eox_tagsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eox_tagsPayload>
          }
          deleteMany: {
            args: Prisma.eox_tagsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.eox_tagsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.eox_tagsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eox_tagsPayload>[]
          }
          upsert: {
            args: Prisma.eox_tagsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eox_tagsPayload>
          }
          aggregate: {
            args: Prisma.Eox_tagsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEox_tags>
          }
          groupBy: {
            args: Prisma.eox_tagsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Eox_tagsGroupByOutputType>[]
          }
          count: {
            args: Prisma.eox_tagsCountArgs<ExtArgs>
            result: $Utils.Optional<Eox_tagsCountAggregateOutputType> | number
          }
        }
      }
      goleta_ascend_data: {
        payload: Prisma.$goleta_ascend_dataPayload<ExtArgs>
        fields: Prisma.goleta_ascend_dataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.goleta_ascend_dataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$goleta_ascend_dataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.goleta_ascend_dataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$goleta_ascend_dataPayload>
          }
          findFirst: {
            args: Prisma.goleta_ascend_dataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$goleta_ascend_dataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.goleta_ascend_dataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$goleta_ascend_dataPayload>
          }
          findMany: {
            args: Prisma.goleta_ascend_dataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$goleta_ascend_dataPayload>[]
          }
          create: {
            args: Prisma.goleta_ascend_dataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$goleta_ascend_dataPayload>
          }
          createMany: {
            args: Prisma.goleta_ascend_dataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.goleta_ascend_dataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$goleta_ascend_dataPayload>[]
          }
          delete: {
            args: Prisma.goleta_ascend_dataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$goleta_ascend_dataPayload>
          }
          update: {
            args: Prisma.goleta_ascend_dataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$goleta_ascend_dataPayload>
          }
          deleteMany: {
            args: Prisma.goleta_ascend_dataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.goleta_ascend_dataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.goleta_ascend_dataUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$goleta_ascend_dataPayload>[]
          }
          upsert: {
            args: Prisma.goleta_ascend_dataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$goleta_ascend_dataPayload>
          }
          aggregate: {
            args: Prisma.Goleta_ascend_dataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGoleta_ascend_data>
          }
          groupBy: {
            args: Prisma.goleta_ascend_dataGroupByArgs<ExtArgs>
            result: $Utils.Optional<Goleta_ascend_dataGroupByOutputType>[]
          }
          count: {
            args: Prisma.goleta_ascend_dataCountArgs<ExtArgs>
            result: $Utils.Optional<Goleta_ascend_dataCountAggregateOutputType> | number
          }
        }
      }
      goleta_budgets: {
        payload: Prisma.$goleta_budgetsPayload<ExtArgs>
        fields: Prisma.goleta_budgetsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.goleta_budgetsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$goleta_budgetsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.goleta_budgetsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$goleta_budgetsPayload>
          }
          findFirst: {
            args: Prisma.goleta_budgetsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$goleta_budgetsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.goleta_budgetsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$goleta_budgetsPayload>
          }
          findMany: {
            args: Prisma.goleta_budgetsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$goleta_budgetsPayload>[]
          }
          create: {
            args: Prisma.goleta_budgetsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$goleta_budgetsPayload>
          }
          createMany: {
            args: Prisma.goleta_budgetsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.goleta_budgetsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$goleta_budgetsPayload>[]
          }
          delete: {
            args: Prisma.goleta_budgetsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$goleta_budgetsPayload>
          }
          update: {
            args: Prisma.goleta_budgetsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$goleta_budgetsPayload>
          }
          deleteMany: {
            args: Prisma.goleta_budgetsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.goleta_budgetsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.goleta_budgetsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$goleta_budgetsPayload>[]
          }
          upsert: {
            args: Prisma.goleta_budgetsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$goleta_budgetsPayload>
          }
          aggregate: {
            args: Prisma.Goleta_budgetsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGoleta_budgets>
          }
          groupBy: {
            args: Prisma.goleta_budgetsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Goleta_budgetsGroupByOutputType>[]
          }
          count: {
            args: Prisma.goleta_budgetsCountArgs<ExtArgs>
            result: $Utils.Optional<Goleta_budgetsCountAggregateOutputType> | number
          }
        }
      }
      goleta_charging_constraints: {
        payload: Prisma.$goleta_charging_constraintsPayload<ExtArgs>
        fields: Prisma.goleta_charging_constraintsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.goleta_charging_constraintsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$goleta_charging_constraintsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.goleta_charging_constraintsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$goleta_charging_constraintsPayload>
          }
          findFirst: {
            args: Prisma.goleta_charging_constraintsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$goleta_charging_constraintsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.goleta_charging_constraintsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$goleta_charging_constraintsPayload>
          }
          findMany: {
            args: Prisma.goleta_charging_constraintsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$goleta_charging_constraintsPayload>[]
          }
          create: {
            args: Prisma.goleta_charging_constraintsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$goleta_charging_constraintsPayload>
          }
          createMany: {
            args: Prisma.goleta_charging_constraintsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.goleta_charging_constraintsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$goleta_charging_constraintsPayload>[]
          }
          delete: {
            args: Prisma.goleta_charging_constraintsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$goleta_charging_constraintsPayload>
          }
          update: {
            args: Prisma.goleta_charging_constraintsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$goleta_charging_constraintsPayload>
          }
          deleteMany: {
            args: Prisma.goleta_charging_constraintsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.goleta_charging_constraintsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.goleta_charging_constraintsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$goleta_charging_constraintsPayload>[]
          }
          upsert: {
            args: Prisma.goleta_charging_constraintsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$goleta_charging_constraintsPayload>
          }
          aggregate: {
            args: Prisma.Goleta_charging_constraintsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGoleta_charging_constraints>
          }
          groupBy: {
            args: Prisma.goleta_charging_constraintsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Goleta_charging_constraintsGroupByOutputType>[]
          }
          count: {
            args: Prisma.goleta_charging_constraintsCountArgs<ExtArgs>
            result: $Utils.Optional<Goleta_charging_constraintsCountAggregateOutputType> | number
          }
        }
      }
      goleta_operational_data: {
        payload: Prisma.$goleta_operational_dataPayload<ExtArgs>
        fields: Prisma.goleta_operational_dataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.goleta_operational_dataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$goleta_operational_dataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.goleta_operational_dataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$goleta_operational_dataPayload>
          }
          findFirst: {
            args: Prisma.goleta_operational_dataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$goleta_operational_dataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.goleta_operational_dataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$goleta_operational_dataPayload>
          }
          findMany: {
            args: Prisma.goleta_operational_dataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$goleta_operational_dataPayload>[]
          }
          create: {
            args: Prisma.goleta_operational_dataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$goleta_operational_dataPayload>
          }
          createMany: {
            args: Prisma.goleta_operational_dataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.goleta_operational_dataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$goleta_operational_dataPayload>[]
          }
          delete: {
            args: Prisma.goleta_operational_dataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$goleta_operational_dataPayload>
          }
          update: {
            args: Prisma.goleta_operational_dataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$goleta_operational_dataPayload>
          }
          deleteMany: {
            args: Prisma.goleta_operational_dataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.goleta_operational_dataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.goleta_operational_dataUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$goleta_operational_dataPayload>[]
          }
          upsert: {
            args: Prisma.goleta_operational_dataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$goleta_operational_dataPayload>
          }
          aggregate: {
            args: Prisma.Goleta_operational_dataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGoleta_operational_data>
          }
          groupBy: {
            args: Prisma.goleta_operational_dataGroupByArgs<ExtArgs>
            result: $Utils.Optional<Goleta_operational_dataGroupByOutputType>[]
          }
          count: {
            args: Prisma.goleta_operational_dataCountArgs<ExtArgs>
            result: $Utils.Optional<Goleta_operational_dataCountAggregateOutputType> | number
          }
        }
      }
      goleta_revenue_metrics: {
        payload: Prisma.$goleta_revenue_metricsPayload<ExtArgs>
        fields: Prisma.goleta_revenue_metricsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.goleta_revenue_metricsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$goleta_revenue_metricsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.goleta_revenue_metricsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$goleta_revenue_metricsPayload>
          }
          findFirst: {
            args: Prisma.goleta_revenue_metricsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$goleta_revenue_metricsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.goleta_revenue_metricsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$goleta_revenue_metricsPayload>
          }
          findMany: {
            args: Prisma.goleta_revenue_metricsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$goleta_revenue_metricsPayload>[]
          }
          create: {
            args: Prisma.goleta_revenue_metricsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$goleta_revenue_metricsPayload>
          }
          createMany: {
            args: Prisma.goleta_revenue_metricsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.goleta_revenue_metricsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$goleta_revenue_metricsPayload>[]
          }
          delete: {
            args: Prisma.goleta_revenue_metricsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$goleta_revenue_metricsPayload>
          }
          update: {
            args: Prisma.goleta_revenue_metricsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$goleta_revenue_metricsPayload>
          }
          deleteMany: {
            args: Prisma.goleta_revenue_metricsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.goleta_revenue_metricsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.goleta_revenue_metricsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$goleta_revenue_metricsPayload>[]
          }
          upsert: {
            args: Prisma.goleta_revenue_metricsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$goleta_revenue_metricsPayload>
          }
          aggregate: {
            args: Prisma.Goleta_revenue_metricsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGoleta_revenue_metrics>
          }
          groupBy: {
            args: Prisma.goleta_revenue_metricsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Goleta_revenue_metricsGroupByOutputType>[]
          }
          count: {
            args: Prisma.goleta_revenue_metricsCountArgs<ExtArgs>
            result: $Utils.Optional<Goleta_revenue_metricsCountAggregateOutputType> | number
          }
        }
      }
      goleta_scheduling_data: {
        payload: Prisma.$goleta_scheduling_dataPayload<ExtArgs>
        fields: Prisma.goleta_scheduling_dataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.goleta_scheduling_dataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$goleta_scheduling_dataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.goleta_scheduling_dataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$goleta_scheduling_dataPayload>
          }
          findFirst: {
            args: Prisma.goleta_scheduling_dataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$goleta_scheduling_dataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.goleta_scheduling_dataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$goleta_scheduling_dataPayload>
          }
          findMany: {
            args: Prisma.goleta_scheduling_dataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$goleta_scheduling_dataPayload>[]
          }
          create: {
            args: Prisma.goleta_scheduling_dataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$goleta_scheduling_dataPayload>
          }
          createMany: {
            args: Prisma.goleta_scheduling_dataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.goleta_scheduling_dataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$goleta_scheduling_dataPayload>[]
          }
          delete: {
            args: Prisma.goleta_scheduling_dataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$goleta_scheduling_dataPayload>
          }
          update: {
            args: Prisma.goleta_scheduling_dataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$goleta_scheduling_dataPayload>
          }
          deleteMany: {
            args: Prisma.goleta_scheduling_dataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.goleta_scheduling_dataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.goleta_scheduling_dataUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$goleta_scheduling_dataPayload>[]
          }
          upsert: {
            args: Prisma.goleta_scheduling_dataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$goleta_scheduling_dataPayload>
          }
          aggregate: {
            args: Prisma.Goleta_scheduling_dataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGoleta_scheduling_data>
          }
          groupBy: {
            args: Prisma.goleta_scheduling_dataGroupByArgs<ExtArgs>
            result: $Utils.Optional<Goleta_scheduling_dataGroupByOutputType>[]
          }
          count: {
            args: Prisma.goleta_scheduling_dataCountArgs<ExtArgs>
            result: $Utils.Optional<Goleta_scheduling_dataCountAggregateOutputType> | number
          }
        }
      }
      internal_forecasts: {
        payload: Prisma.$internal_forecastsPayload<ExtArgs>
        fields: Prisma.internal_forecastsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.internal_forecastsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$internal_forecastsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.internal_forecastsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$internal_forecastsPayload>
          }
          findFirst: {
            args: Prisma.internal_forecastsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$internal_forecastsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.internal_forecastsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$internal_forecastsPayload>
          }
          findMany: {
            args: Prisma.internal_forecastsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$internal_forecastsPayload>[]
          }
          create: {
            args: Prisma.internal_forecastsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$internal_forecastsPayload>
          }
          createMany: {
            args: Prisma.internal_forecastsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.internal_forecastsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$internal_forecastsPayload>[]
          }
          delete: {
            args: Prisma.internal_forecastsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$internal_forecastsPayload>
          }
          update: {
            args: Prisma.internal_forecastsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$internal_forecastsPayload>
          }
          deleteMany: {
            args: Prisma.internal_forecastsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.internal_forecastsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.internal_forecastsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$internal_forecastsPayload>[]
          }
          upsert: {
            args: Prisma.internal_forecastsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$internal_forecastsPayload>
          }
          aggregate: {
            args: Prisma.Internal_forecastsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInternal_forecasts>
          }
          groupBy: {
            args: Prisma.internal_forecastsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Internal_forecastsGroupByOutputType>[]
          }
          count: {
            args: Prisma.internal_forecastsCountArgs<ExtArgs>
            result: $Utils.Optional<Internal_forecastsCountAggregateOutputType> | number
          }
        }
      }
      monthly_revenue_forecasts: {
        payload: Prisma.$monthly_revenue_forecastsPayload<ExtArgs>
        fields: Prisma.monthly_revenue_forecastsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.monthly_revenue_forecastsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$monthly_revenue_forecastsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.monthly_revenue_forecastsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$monthly_revenue_forecastsPayload>
          }
          findFirst: {
            args: Prisma.monthly_revenue_forecastsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$monthly_revenue_forecastsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.monthly_revenue_forecastsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$monthly_revenue_forecastsPayload>
          }
          findMany: {
            args: Prisma.monthly_revenue_forecastsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$monthly_revenue_forecastsPayload>[]
          }
          create: {
            args: Prisma.monthly_revenue_forecastsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$monthly_revenue_forecastsPayload>
          }
          createMany: {
            args: Prisma.monthly_revenue_forecastsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.monthly_revenue_forecastsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$monthly_revenue_forecastsPayload>[]
          }
          delete: {
            args: Prisma.monthly_revenue_forecastsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$monthly_revenue_forecastsPayload>
          }
          update: {
            args: Prisma.monthly_revenue_forecastsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$monthly_revenue_forecastsPayload>
          }
          deleteMany: {
            args: Prisma.monthly_revenue_forecastsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.monthly_revenue_forecastsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.monthly_revenue_forecastsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$monthly_revenue_forecastsPayload>[]
          }
          upsert: {
            args: Prisma.monthly_revenue_forecastsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$monthly_revenue_forecastsPayload>
          }
          aggregate: {
            args: Prisma.Monthly_revenue_forecastsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMonthly_revenue_forecasts>
          }
          groupBy: {
            args: Prisma.monthly_revenue_forecastsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Monthly_revenue_forecastsGroupByOutputType>[]
          }
          count: {
            args: Prisma.monthly_revenue_forecastsCountArgs<ExtArgs>
            result: $Utils.Optional<Monthly_revenue_forecastsCountAggregateOutputType> | number
          }
        }
      }
      yes_fundamentals: {
        payload: Prisma.$yes_fundamentalsPayload<ExtArgs>
        fields: Prisma.yes_fundamentalsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.yes_fundamentalsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$yes_fundamentalsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.yes_fundamentalsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$yes_fundamentalsPayload>
          }
          findFirst: {
            args: Prisma.yes_fundamentalsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$yes_fundamentalsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.yes_fundamentalsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$yes_fundamentalsPayload>
          }
          findMany: {
            args: Prisma.yes_fundamentalsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$yes_fundamentalsPayload>[]
          }
          create: {
            args: Prisma.yes_fundamentalsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$yes_fundamentalsPayload>
          }
          createMany: {
            args: Prisma.yes_fundamentalsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.yes_fundamentalsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$yes_fundamentalsPayload>[]
          }
          delete: {
            args: Prisma.yes_fundamentalsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$yes_fundamentalsPayload>
          }
          update: {
            args: Prisma.yes_fundamentalsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$yes_fundamentalsPayload>
          }
          deleteMany: {
            args: Prisma.yes_fundamentalsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.yes_fundamentalsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.yes_fundamentalsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$yes_fundamentalsPayload>[]
          }
          upsert: {
            args: Prisma.yes_fundamentalsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$yes_fundamentalsPayload>
          }
          aggregate: {
            args: Prisma.Yes_fundamentalsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateYes_fundamentals>
          }
          groupBy: {
            args: Prisma.yes_fundamentalsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Yes_fundamentalsGroupByOutputType>[]
          }
          count: {
            args: Prisma.yes_fundamentalsCountArgs<ExtArgs>
            result: $Utils.Optional<Yes_fundamentalsCountAggregateOutputType> | number
          }
        }
      }
      yes_ids: {
        payload: Prisma.$yes_idsPayload<ExtArgs>
        fields: Prisma.yes_idsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.yes_idsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$yes_idsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.yes_idsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$yes_idsPayload>
          }
          findFirst: {
            args: Prisma.yes_idsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$yes_idsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.yes_idsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$yes_idsPayload>
          }
          findMany: {
            args: Prisma.yes_idsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$yes_idsPayload>[]
          }
          create: {
            args: Prisma.yes_idsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$yes_idsPayload>
          }
          createMany: {
            args: Prisma.yes_idsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.yes_idsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$yes_idsPayload>[]
          }
          delete: {
            args: Prisma.yes_idsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$yes_idsPayload>
          }
          update: {
            args: Prisma.yes_idsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$yes_idsPayload>
          }
          deleteMany: {
            args: Prisma.yes_idsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.yes_idsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.yes_idsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$yes_idsPayload>[]
          }
          upsert: {
            args: Prisma.yes_idsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$yes_idsPayload>
          }
          aggregate: {
            args: Prisma.Yes_idsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateYes_ids>
          }
          groupBy: {
            args: Prisma.yes_idsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Yes_idsGroupByOutputType>[]
          }
          count: {
            args: Prisma.yes_idsCountArgs<ExtArgs>
            result: $Utils.Optional<Yes_idsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    caiso_bess_fleet_data?: caiso_bess_fleet_dataOmit
    eox_forwards?: eox_forwardsOmit
    eox_tags?: eox_tagsOmit
    goleta_ascend_data?: goleta_ascend_dataOmit
    goleta_budgets?: goleta_budgetsOmit
    goleta_charging_constraints?: goleta_charging_constraintsOmit
    goleta_operational_data?: goleta_operational_dataOmit
    goleta_revenue_metrics?: goleta_revenue_metricsOmit
    goleta_scheduling_data?: goleta_scheduling_dataOmit
    internal_forecasts?: internal_forecastsOmit
    monthly_revenue_forecasts?: monthly_revenue_forecastsOmit
    yes_fundamentals?: yes_fundamentalsOmit
    yes_ids?: yes_idsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model caiso_bess_fleet_data
   */

  export type AggregateCaiso_bess_fleet_data = {
    _count: Caiso_bess_fleet_dataCountAggregateOutputType | null
    _avg: Caiso_bess_fleet_dataAvgAggregateOutputType | null
    _sum: Caiso_bess_fleet_dataSumAggregateOutputType | null
    _min: Caiso_bess_fleet_dataMinAggregateOutputType | null
    _max: Caiso_bess_fleet_dataMaxAggregateOutputType | null
  }

  export type Caiso_bess_fleet_dataAvgAggregateOutputType = {
    value: Decimal | null
  }

  export type Caiso_bess_fleet_dataSumAggregateOutputType = {
    value: Decimal | null
  }

  export type Caiso_bess_fleet_dataMinAggregateOutputType = {
    utc_datetime_ib: Date | null
    local_datetime_ib: Date | null
    entity: string | null
    attribute: string | null
    value: Decimal | null
  }

  export type Caiso_bess_fleet_dataMaxAggregateOutputType = {
    utc_datetime_ib: Date | null
    local_datetime_ib: Date | null
    entity: string | null
    attribute: string | null
    value: Decimal | null
  }

  export type Caiso_bess_fleet_dataCountAggregateOutputType = {
    utc_datetime_ib: number
    local_datetime_ib: number
    entity: number
    attribute: number
    value: number
    _all: number
  }


  export type Caiso_bess_fleet_dataAvgAggregateInputType = {
    value?: true
  }

  export type Caiso_bess_fleet_dataSumAggregateInputType = {
    value?: true
  }

  export type Caiso_bess_fleet_dataMinAggregateInputType = {
    utc_datetime_ib?: true
    local_datetime_ib?: true
    entity?: true
    attribute?: true
    value?: true
  }

  export type Caiso_bess_fleet_dataMaxAggregateInputType = {
    utc_datetime_ib?: true
    local_datetime_ib?: true
    entity?: true
    attribute?: true
    value?: true
  }

  export type Caiso_bess_fleet_dataCountAggregateInputType = {
    utc_datetime_ib?: true
    local_datetime_ib?: true
    entity?: true
    attribute?: true
    value?: true
    _all?: true
  }

  export type Caiso_bess_fleet_dataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which caiso_bess_fleet_data to aggregate.
     */
    where?: caiso_bess_fleet_dataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of caiso_bess_fleet_data to fetch.
     */
    orderBy?: caiso_bess_fleet_dataOrderByWithRelationInput | caiso_bess_fleet_dataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: caiso_bess_fleet_dataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` caiso_bess_fleet_data from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` caiso_bess_fleet_data.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned caiso_bess_fleet_data
    **/
    _count?: true | Caiso_bess_fleet_dataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Caiso_bess_fleet_dataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Caiso_bess_fleet_dataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Caiso_bess_fleet_dataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Caiso_bess_fleet_dataMaxAggregateInputType
  }

  export type GetCaiso_bess_fleet_dataAggregateType<T extends Caiso_bess_fleet_dataAggregateArgs> = {
        [P in keyof T & keyof AggregateCaiso_bess_fleet_data]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCaiso_bess_fleet_data[P]>
      : GetScalarType<T[P], AggregateCaiso_bess_fleet_data[P]>
  }




  export type caiso_bess_fleet_dataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: caiso_bess_fleet_dataWhereInput
    orderBy?: caiso_bess_fleet_dataOrderByWithAggregationInput | caiso_bess_fleet_dataOrderByWithAggregationInput[]
    by: Caiso_bess_fleet_dataScalarFieldEnum[] | Caiso_bess_fleet_dataScalarFieldEnum
    having?: caiso_bess_fleet_dataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Caiso_bess_fleet_dataCountAggregateInputType | true
    _avg?: Caiso_bess_fleet_dataAvgAggregateInputType
    _sum?: Caiso_bess_fleet_dataSumAggregateInputType
    _min?: Caiso_bess_fleet_dataMinAggregateInputType
    _max?: Caiso_bess_fleet_dataMaxAggregateInputType
  }

  export type Caiso_bess_fleet_dataGroupByOutputType = {
    utc_datetime_ib: Date
    local_datetime_ib: Date
    entity: string
    attribute: string
    value: Decimal | null
    _count: Caiso_bess_fleet_dataCountAggregateOutputType | null
    _avg: Caiso_bess_fleet_dataAvgAggregateOutputType | null
    _sum: Caiso_bess_fleet_dataSumAggregateOutputType | null
    _min: Caiso_bess_fleet_dataMinAggregateOutputType | null
    _max: Caiso_bess_fleet_dataMaxAggregateOutputType | null
  }

  type GetCaiso_bess_fleet_dataGroupByPayload<T extends caiso_bess_fleet_dataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Caiso_bess_fleet_dataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Caiso_bess_fleet_dataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Caiso_bess_fleet_dataGroupByOutputType[P]>
            : GetScalarType<T[P], Caiso_bess_fleet_dataGroupByOutputType[P]>
        }
      >
    >


  export type caiso_bess_fleet_dataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    utc_datetime_ib?: boolean
    local_datetime_ib?: boolean
    entity?: boolean
    attribute?: boolean
    value?: boolean
  }, ExtArgs["result"]["caiso_bess_fleet_data"]>

  export type caiso_bess_fleet_dataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    utc_datetime_ib?: boolean
    local_datetime_ib?: boolean
    entity?: boolean
    attribute?: boolean
    value?: boolean
  }, ExtArgs["result"]["caiso_bess_fleet_data"]>

  export type caiso_bess_fleet_dataSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    utc_datetime_ib?: boolean
    local_datetime_ib?: boolean
    entity?: boolean
    attribute?: boolean
    value?: boolean
  }, ExtArgs["result"]["caiso_bess_fleet_data"]>

  export type caiso_bess_fleet_dataSelectScalar = {
    utc_datetime_ib?: boolean
    local_datetime_ib?: boolean
    entity?: boolean
    attribute?: boolean
    value?: boolean
  }

  export type caiso_bess_fleet_dataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"utc_datetime_ib" | "local_datetime_ib" | "entity" | "attribute" | "value", ExtArgs["result"]["caiso_bess_fleet_data"]>

  export type $caiso_bess_fleet_dataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "caiso_bess_fleet_data"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      utc_datetime_ib: Date
      local_datetime_ib: Date
      entity: string
      attribute: string
      value: Prisma.Decimal | null
    }, ExtArgs["result"]["caiso_bess_fleet_data"]>
    composites: {}
  }

  type caiso_bess_fleet_dataGetPayload<S extends boolean | null | undefined | caiso_bess_fleet_dataDefaultArgs> = $Result.GetResult<Prisma.$caiso_bess_fleet_dataPayload, S>

  type caiso_bess_fleet_dataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<caiso_bess_fleet_dataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Caiso_bess_fleet_dataCountAggregateInputType | true
    }

  export interface caiso_bess_fleet_dataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['caiso_bess_fleet_data'], meta: { name: 'caiso_bess_fleet_data' } }
    /**
     * Find zero or one Caiso_bess_fleet_data that matches the filter.
     * @param {caiso_bess_fleet_dataFindUniqueArgs} args - Arguments to find a Caiso_bess_fleet_data
     * @example
     * // Get one Caiso_bess_fleet_data
     * const caiso_bess_fleet_data = await prisma.caiso_bess_fleet_data.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends caiso_bess_fleet_dataFindUniqueArgs>(args: SelectSubset<T, caiso_bess_fleet_dataFindUniqueArgs<ExtArgs>>): Prisma__caiso_bess_fleet_dataClient<$Result.GetResult<Prisma.$caiso_bess_fleet_dataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Caiso_bess_fleet_data that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {caiso_bess_fleet_dataFindUniqueOrThrowArgs} args - Arguments to find a Caiso_bess_fleet_data
     * @example
     * // Get one Caiso_bess_fleet_data
     * const caiso_bess_fleet_data = await prisma.caiso_bess_fleet_data.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends caiso_bess_fleet_dataFindUniqueOrThrowArgs>(args: SelectSubset<T, caiso_bess_fleet_dataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__caiso_bess_fleet_dataClient<$Result.GetResult<Prisma.$caiso_bess_fleet_dataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Caiso_bess_fleet_data that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {caiso_bess_fleet_dataFindFirstArgs} args - Arguments to find a Caiso_bess_fleet_data
     * @example
     * // Get one Caiso_bess_fleet_data
     * const caiso_bess_fleet_data = await prisma.caiso_bess_fleet_data.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends caiso_bess_fleet_dataFindFirstArgs>(args?: SelectSubset<T, caiso_bess_fleet_dataFindFirstArgs<ExtArgs>>): Prisma__caiso_bess_fleet_dataClient<$Result.GetResult<Prisma.$caiso_bess_fleet_dataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Caiso_bess_fleet_data that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {caiso_bess_fleet_dataFindFirstOrThrowArgs} args - Arguments to find a Caiso_bess_fleet_data
     * @example
     * // Get one Caiso_bess_fleet_data
     * const caiso_bess_fleet_data = await prisma.caiso_bess_fleet_data.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends caiso_bess_fleet_dataFindFirstOrThrowArgs>(args?: SelectSubset<T, caiso_bess_fleet_dataFindFirstOrThrowArgs<ExtArgs>>): Prisma__caiso_bess_fleet_dataClient<$Result.GetResult<Prisma.$caiso_bess_fleet_dataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Caiso_bess_fleet_data that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {caiso_bess_fleet_dataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Caiso_bess_fleet_data
     * const caiso_bess_fleet_data = await prisma.caiso_bess_fleet_data.findMany()
     * 
     * // Get first 10 Caiso_bess_fleet_data
     * const caiso_bess_fleet_data = await prisma.caiso_bess_fleet_data.findMany({ take: 10 })
     * 
     * // Only select the `utc_datetime_ib`
     * const caiso_bess_fleet_dataWithUtc_datetime_ibOnly = await prisma.caiso_bess_fleet_data.findMany({ select: { utc_datetime_ib: true } })
     * 
     */
    findMany<T extends caiso_bess_fleet_dataFindManyArgs>(args?: SelectSubset<T, caiso_bess_fleet_dataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$caiso_bess_fleet_dataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Caiso_bess_fleet_data.
     * @param {caiso_bess_fleet_dataCreateArgs} args - Arguments to create a Caiso_bess_fleet_data.
     * @example
     * // Create one Caiso_bess_fleet_data
     * const Caiso_bess_fleet_data = await prisma.caiso_bess_fleet_data.create({
     *   data: {
     *     // ... data to create a Caiso_bess_fleet_data
     *   }
     * })
     * 
     */
    create<T extends caiso_bess_fleet_dataCreateArgs>(args: SelectSubset<T, caiso_bess_fleet_dataCreateArgs<ExtArgs>>): Prisma__caiso_bess_fleet_dataClient<$Result.GetResult<Prisma.$caiso_bess_fleet_dataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Caiso_bess_fleet_data.
     * @param {caiso_bess_fleet_dataCreateManyArgs} args - Arguments to create many Caiso_bess_fleet_data.
     * @example
     * // Create many Caiso_bess_fleet_data
     * const caiso_bess_fleet_data = await prisma.caiso_bess_fleet_data.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends caiso_bess_fleet_dataCreateManyArgs>(args?: SelectSubset<T, caiso_bess_fleet_dataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Caiso_bess_fleet_data and returns the data saved in the database.
     * @param {caiso_bess_fleet_dataCreateManyAndReturnArgs} args - Arguments to create many Caiso_bess_fleet_data.
     * @example
     * // Create many Caiso_bess_fleet_data
     * const caiso_bess_fleet_data = await prisma.caiso_bess_fleet_data.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Caiso_bess_fleet_data and only return the `utc_datetime_ib`
     * const caiso_bess_fleet_dataWithUtc_datetime_ibOnly = await prisma.caiso_bess_fleet_data.createManyAndReturn({
     *   select: { utc_datetime_ib: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends caiso_bess_fleet_dataCreateManyAndReturnArgs>(args?: SelectSubset<T, caiso_bess_fleet_dataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$caiso_bess_fleet_dataPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Caiso_bess_fleet_data.
     * @param {caiso_bess_fleet_dataDeleteArgs} args - Arguments to delete one Caiso_bess_fleet_data.
     * @example
     * // Delete one Caiso_bess_fleet_data
     * const Caiso_bess_fleet_data = await prisma.caiso_bess_fleet_data.delete({
     *   where: {
     *     // ... filter to delete one Caiso_bess_fleet_data
     *   }
     * })
     * 
     */
    delete<T extends caiso_bess_fleet_dataDeleteArgs>(args: SelectSubset<T, caiso_bess_fleet_dataDeleteArgs<ExtArgs>>): Prisma__caiso_bess_fleet_dataClient<$Result.GetResult<Prisma.$caiso_bess_fleet_dataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Caiso_bess_fleet_data.
     * @param {caiso_bess_fleet_dataUpdateArgs} args - Arguments to update one Caiso_bess_fleet_data.
     * @example
     * // Update one Caiso_bess_fleet_data
     * const caiso_bess_fleet_data = await prisma.caiso_bess_fleet_data.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends caiso_bess_fleet_dataUpdateArgs>(args: SelectSubset<T, caiso_bess_fleet_dataUpdateArgs<ExtArgs>>): Prisma__caiso_bess_fleet_dataClient<$Result.GetResult<Prisma.$caiso_bess_fleet_dataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Caiso_bess_fleet_data.
     * @param {caiso_bess_fleet_dataDeleteManyArgs} args - Arguments to filter Caiso_bess_fleet_data to delete.
     * @example
     * // Delete a few Caiso_bess_fleet_data
     * const { count } = await prisma.caiso_bess_fleet_data.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends caiso_bess_fleet_dataDeleteManyArgs>(args?: SelectSubset<T, caiso_bess_fleet_dataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Caiso_bess_fleet_data.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {caiso_bess_fleet_dataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Caiso_bess_fleet_data
     * const caiso_bess_fleet_data = await prisma.caiso_bess_fleet_data.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends caiso_bess_fleet_dataUpdateManyArgs>(args: SelectSubset<T, caiso_bess_fleet_dataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Caiso_bess_fleet_data and returns the data updated in the database.
     * @param {caiso_bess_fleet_dataUpdateManyAndReturnArgs} args - Arguments to update many Caiso_bess_fleet_data.
     * @example
     * // Update many Caiso_bess_fleet_data
     * const caiso_bess_fleet_data = await prisma.caiso_bess_fleet_data.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Caiso_bess_fleet_data and only return the `utc_datetime_ib`
     * const caiso_bess_fleet_dataWithUtc_datetime_ibOnly = await prisma.caiso_bess_fleet_data.updateManyAndReturn({
     *   select: { utc_datetime_ib: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends caiso_bess_fleet_dataUpdateManyAndReturnArgs>(args: SelectSubset<T, caiso_bess_fleet_dataUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$caiso_bess_fleet_dataPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Caiso_bess_fleet_data.
     * @param {caiso_bess_fleet_dataUpsertArgs} args - Arguments to update or create a Caiso_bess_fleet_data.
     * @example
     * // Update or create a Caiso_bess_fleet_data
     * const caiso_bess_fleet_data = await prisma.caiso_bess_fleet_data.upsert({
     *   create: {
     *     // ... data to create a Caiso_bess_fleet_data
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Caiso_bess_fleet_data we want to update
     *   }
     * })
     */
    upsert<T extends caiso_bess_fleet_dataUpsertArgs>(args: SelectSubset<T, caiso_bess_fleet_dataUpsertArgs<ExtArgs>>): Prisma__caiso_bess_fleet_dataClient<$Result.GetResult<Prisma.$caiso_bess_fleet_dataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Caiso_bess_fleet_data.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {caiso_bess_fleet_dataCountArgs} args - Arguments to filter Caiso_bess_fleet_data to count.
     * @example
     * // Count the number of Caiso_bess_fleet_data
     * const count = await prisma.caiso_bess_fleet_data.count({
     *   where: {
     *     // ... the filter for the Caiso_bess_fleet_data we want to count
     *   }
     * })
    **/
    count<T extends caiso_bess_fleet_dataCountArgs>(
      args?: Subset<T, caiso_bess_fleet_dataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Caiso_bess_fleet_dataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Caiso_bess_fleet_data.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Caiso_bess_fleet_dataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Caiso_bess_fleet_dataAggregateArgs>(args: Subset<T, Caiso_bess_fleet_dataAggregateArgs>): Prisma.PrismaPromise<GetCaiso_bess_fleet_dataAggregateType<T>>

    /**
     * Group by Caiso_bess_fleet_data.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {caiso_bess_fleet_dataGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends caiso_bess_fleet_dataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: caiso_bess_fleet_dataGroupByArgs['orderBy'] }
        : { orderBy?: caiso_bess_fleet_dataGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, caiso_bess_fleet_dataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCaiso_bess_fleet_dataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the caiso_bess_fleet_data model
   */
  readonly fields: caiso_bess_fleet_dataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for caiso_bess_fleet_data.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__caiso_bess_fleet_dataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the caiso_bess_fleet_data model
   */
  interface caiso_bess_fleet_dataFieldRefs {
    readonly utc_datetime_ib: FieldRef<"caiso_bess_fleet_data", 'DateTime'>
    readonly local_datetime_ib: FieldRef<"caiso_bess_fleet_data", 'DateTime'>
    readonly entity: FieldRef<"caiso_bess_fleet_data", 'String'>
    readonly attribute: FieldRef<"caiso_bess_fleet_data", 'String'>
    readonly value: FieldRef<"caiso_bess_fleet_data", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * caiso_bess_fleet_data findUnique
   */
  export type caiso_bess_fleet_dataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the caiso_bess_fleet_data
     */
    select?: caiso_bess_fleet_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the caiso_bess_fleet_data
     */
    omit?: caiso_bess_fleet_dataOmit<ExtArgs> | null
    /**
     * Filter, which caiso_bess_fleet_data to fetch.
     */
    where: caiso_bess_fleet_dataWhereUniqueInput
  }

  /**
   * caiso_bess_fleet_data findUniqueOrThrow
   */
  export type caiso_bess_fleet_dataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the caiso_bess_fleet_data
     */
    select?: caiso_bess_fleet_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the caiso_bess_fleet_data
     */
    omit?: caiso_bess_fleet_dataOmit<ExtArgs> | null
    /**
     * Filter, which caiso_bess_fleet_data to fetch.
     */
    where: caiso_bess_fleet_dataWhereUniqueInput
  }

  /**
   * caiso_bess_fleet_data findFirst
   */
  export type caiso_bess_fleet_dataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the caiso_bess_fleet_data
     */
    select?: caiso_bess_fleet_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the caiso_bess_fleet_data
     */
    omit?: caiso_bess_fleet_dataOmit<ExtArgs> | null
    /**
     * Filter, which caiso_bess_fleet_data to fetch.
     */
    where?: caiso_bess_fleet_dataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of caiso_bess_fleet_data to fetch.
     */
    orderBy?: caiso_bess_fleet_dataOrderByWithRelationInput | caiso_bess_fleet_dataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for caiso_bess_fleet_data.
     */
    cursor?: caiso_bess_fleet_dataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` caiso_bess_fleet_data from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` caiso_bess_fleet_data.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of caiso_bess_fleet_data.
     */
    distinct?: Caiso_bess_fleet_dataScalarFieldEnum | Caiso_bess_fleet_dataScalarFieldEnum[]
  }

  /**
   * caiso_bess_fleet_data findFirstOrThrow
   */
  export type caiso_bess_fleet_dataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the caiso_bess_fleet_data
     */
    select?: caiso_bess_fleet_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the caiso_bess_fleet_data
     */
    omit?: caiso_bess_fleet_dataOmit<ExtArgs> | null
    /**
     * Filter, which caiso_bess_fleet_data to fetch.
     */
    where?: caiso_bess_fleet_dataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of caiso_bess_fleet_data to fetch.
     */
    orderBy?: caiso_bess_fleet_dataOrderByWithRelationInput | caiso_bess_fleet_dataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for caiso_bess_fleet_data.
     */
    cursor?: caiso_bess_fleet_dataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` caiso_bess_fleet_data from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` caiso_bess_fleet_data.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of caiso_bess_fleet_data.
     */
    distinct?: Caiso_bess_fleet_dataScalarFieldEnum | Caiso_bess_fleet_dataScalarFieldEnum[]
  }

  /**
   * caiso_bess_fleet_data findMany
   */
  export type caiso_bess_fleet_dataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the caiso_bess_fleet_data
     */
    select?: caiso_bess_fleet_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the caiso_bess_fleet_data
     */
    omit?: caiso_bess_fleet_dataOmit<ExtArgs> | null
    /**
     * Filter, which caiso_bess_fleet_data to fetch.
     */
    where?: caiso_bess_fleet_dataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of caiso_bess_fleet_data to fetch.
     */
    orderBy?: caiso_bess_fleet_dataOrderByWithRelationInput | caiso_bess_fleet_dataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing caiso_bess_fleet_data.
     */
    cursor?: caiso_bess_fleet_dataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` caiso_bess_fleet_data from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` caiso_bess_fleet_data.
     */
    skip?: number
    distinct?: Caiso_bess_fleet_dataScalarFieldEnum | Caiso_bess_fleet_dataScalarFieldEnum[]
  }

  /**
   * caiso_bess_fleet_data create
   */
  export type caiso_bess_fleet_dataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the caiso_bess_fleet_data
     */
    select?: caiso_bess_fleet_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the caiso_bess_fleet_data
     */
    omit?: caiso_bess_fleet_dataOmit<ExtArgs> | null
    /**
     * The data needed to create a caiso_bess_fleet_data.
     */
    data: XOR<caiso_bess_fleet_dataCreateInput, caiso_bess_fleet_dataUncheckedCreateInput>
  }

  /**
   * caiso_bess_fleet_data createMany
   */
  export type caiso_bess_fleet_dataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many caiso_bess_fleet_data.
     */
    data: caiso_bess_fleet_dataCreateManyInput | caiso_bess_fleet_dataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * caiso_bess_fleet_data createManyAndReturn
   */
  export type caiso_bess_fleet_dataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the caiso_bess_fleet_data
     */
    select?: caiso_bess_fleet_dataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the caiso_bess_fleet_data
     */
    omit?: caiso_bess_fleet_dataOmit<ExtArgs> | null
    /**
     * The data used to create many caiso_bess_fleet_data.
     */
    data: caiso_bess_fleet_dataCreateManyInput | caiso_bess_fleet_dataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * caiso_bess_fleet_data update
   */
  export type caiso_bess_fleet_dataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the caiso_bess_fleet_data
     */
    select?: caiso_bess_fleet_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the caiso_bess_fleet_data
     */
    omit?: caiso_bess_fleet_dataOmit<ExtArgs> | null
    /**
     * The data needed to update a caiso_bess_fleet_data.
     */
    data: XOR<caiso_bess_fleet_dataUpdateInput, caiso_bess_fleet_dataUncheckedUpdateInput>
    /**
     * Choose, which caiso_bess_fleet_data to update.
     */
    where: caiso_bess_fleet_dataWhereUniqueInput
  }

  /**
   * caiso_bess_fleet_data updateMany
   */
  export type caiso_bess_fleet_dataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update caiso_bess_fleet_data.
     */
    data: XOR<caiso_bess_fleet_dataUpdateManyMutationInput, caiso_bess_fleet_dataUncheckedUpdateManyInput>
    /**
     * Filter which caiso_bess_fleet_data to update
     */
    where?: caiso_bess_fleet_dataWhereInput
    /**
     * Limit how many caiso_bess_fleet_data to update.
     */
    limit?: number
  }

  /**
   * caiso_bess_fleet_data updateManyAndReturn
   */
  export type caiso_bess_fleet_dataUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the caiso_bess_fleet_data
     */
    select?: caiso_bess_fleet_dataSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the caiso_bess_fleet_data
     */
    omit?: caiso_bess_fleet_dataOmit<ExtArgs> | null
    /**
     * The data used to update caiso_bess_fleet_data.
     */
    data: XOR<caiso_bess_fleet_dataUpdateManyMutationInput, caiso_bess_fleet_dataUncheckedUpdateManyInput>
    /**
     * Filter which caiso_bess_fleet_data to update
     */
    where?: caiso_bess_fleet_dataWhereInput
    /**
     * Limit how many caiso_bess_fleet_data to update.
     */
    limit?: number
  }

  /**
   * caiso_bess_fleet_data upsert
   */
  export type caiso_bess_fleet_dataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the caiso_bess_fleet_data
     */
    select?: caiso_bess_fleet_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the caiso_bess_fleet_data
     */
    omit?: caiso_bess_fleet_dataOmit<ExtArgs> | null
    /**
     * The filter to search for the caiso_bess_fleet_data to update in case it exists.
     */
    where: caiso_bess_fleet_dataWhereUniqueInput
    /**
     * In case the caiso_bess_fleet_data found by the `where` argument doesn't exist, create a new caiso_bess_fleet_data with this data.
     */
    create: XOR<caiso_bess_fleet_dataCreateInput, caiso_bess_fleet_dataUncheckedCreateInput>
    /**
     * In case the caiso_bess_fleet_data was found with the provided `where` argument, update it with this data.
     */
    update: XOR<caiso_bess_fleet_dataUpdateInput, caiso_bess_fleet_dataUncheckedUpdateInput>
  }

  /**
   * caiso_bess_fleet_data delete
   */
  export type caiso_bess_fleet_dataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the caiso_bess_fleet_data
     */
    select?: caiso_bess_fleet_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the caiso_bess_fleet_data
     */
    omit?: caiso_bess_fleet_dataOmit<ExtArgs> | null
    /**
     * Filter which caiso_bess_fleet_data to delete.
     */
    where: caiso_bess_fleet_dataWhereUniqueInput
  }

  /**
   * caiso_bess_fleet_data deleteMany
   */
  export type caiso_bess_fleet_dataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which caiso_bess_fleet_data to delete
     */
    where?: caiso_bess_fleet_dataWhereInput
    /**
     * Limit how many caiso_bess_fleet_data to delete.
     */
    limit?: number
  }

  /**
   * caiso_bess_fleet_data without action
   */
  export type caiso_bess_fleet_dataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the caiso_bess_fleet_data
     */
    select?: caiso_bess_fleet_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the caiso_bess_fleet_data
     */
    omit?: caiso_bess_fleet_dataOmit<ExtArgs> | null
  }


  /**
   * Model eox_forwards
   */

  export type AggregateEox_forwards = {
    _count: Eox_forwardsCountAggregateOutputType | null
    _avg: Eox_forwardsAvgAggregateOutputType | null
    _sum: Eox_forwardsSumAggregateOutputType | null
    _min: Eox_forwardsMinAggregateOutputType | null
    _max: Eox_forwardsMaxAggregateOutputType | null
  }

  export type Eox_forwardsAvgAggregateOutputType = {
    mid: Decimal | null
    bid: Decimal | null
    ask: Decimal | null
    atc: Decimal | null
    hr: Decimal | null
  }

  export type Eox_forwardsSumAggregateOutputType = {
    mid: Decimal | null
    bid: Decimal | null
    ask: Decimal | null
    atc: Decimal | null
    hr: Decimal | null
  }

  export type Eox_forwardsMinAggregateOutputType = {
    curve_date: Date | null
    iso: string | null
    market: string | null
    peak_hour: string | null
    contract_begin: Date | null
    mid: Decimal | null
    bid: Decimal | null
    ask: Decimal | null
    atc: Decimal | null
    hr: Decimal | null
  }

  export type Eox_forwardsMaxAggregateOutputType = {
    curve_date: Date | null
    iso: string | null
    market: string | null
    peak_hour: string | null
    contract_begin: Date | null
    mid: Decimal | null
    bid: Decimal | null
    ask: Decimal | null
    atc: Decimal | null
    hr: Decimal | null
  }

  export type Eox_forwardsCountAggregateOutputType = {
    curve_date: number
    iso: number
    market: number
    peak_hour: number
    contract_begin: number
    mid: number
    bid: number
    ask: number
    atc: number
    hr: number
    _all: number
  }


  export type Eox_forwardsAvgAggregateInputType = {
    mid?: true
    bid?: true
    ask?: true
    atc?: true
    hr?: true
  }

  export type Eox_forwardsSumAggregateInputType = {
    mid?: true
    bid?: true
    ask?: true
    atc?: true
    hr?: true
  }

  export type Eox_forwardsMinAggregateInputType = {
    curve_date?: true
    iso?: true
    market?: true
    peak_hour?: true
    contract_begin?: true
    mid?: true
    bid?: true
    ask?: true
    atc?: true
    hr?: true
  }

  export type Eox_forwardsMaxAggregateInputType = {
    curve_date?: true
    iso?: true
    market?: true
    peak_hour?: true
    contract_begin?: true
    mid?: true
    bid?: true
    ask?: true
    atc?: true
    hr?: true
  }

  export type Eox_forwardsCountAggregateInputType = {
    curve_date?: true
    iso?: true
    market?: true
    peak_hour?: true
    contract_begin?: true
    mid?: true
    bid?: true
    ask?: true
    atc?: true
    hr?: true
    _all?: true
  }

  export type Eox_forwardsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which eox_forwards to aggregate.
     */
    where?: eox_forwardsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of eox_forwards to fetch.
     */
    orderBy?: eox_forwardsOrderByWithRelationInput | eox_forwardsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: eox_forwardsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` eox_forwards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` eox_forwards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned eox_forwards
    **/
    _count?: true | Eox_forwardsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Eox_forwardsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Eox_forwardsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Eox_forwardsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Eox_forwardsMaxAggregateInputType
  }

  export type GetEox_forwardsAggregateType<T extends Eox_forwardsAggregateArgs> = {
        [P in keyof T & keyof AggregateEox_forwards]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEox_forwards[P]>
      : GetScalarType<T[P], AggregateEox_forwards[P]>
  }




  export type eox_forwardsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: eox_forwardsWhereInput
    orderBy?: eox_forwardsOrderByWithAggregationInput | eox_forwardsOrderByWithAggregationInput[]
    by: Eox_forwardsScalarFieldEnum[] | Eox_forwardsScalarFieldEnum
    having?: eox_forwardsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Eox_forwardsCountAggregateInputType | true
    _avg?: Eox_forwardsAvgAggregateInputType
    _sum?: Eox_forwardsSumAggregateInputType
    _min?: Eox_forwardsMinAggregateInputType
    _max?: Eox_forwardsMaxAggregateInputType
  }

  export type Eox_forwardsGroupByOutputType = {
    curve_date: Date
    iso: string
    market: string
    peak_hour: string
    contract_begin: Date
    mid: Decimal | null
    bid: Decimal | null
    ask: Decimal | null
    atc: Decimal | null
    hr: Decimal | null
    _count: Eox_forwardsCountAggregateOutputType | null
    _avg: Eox_forwardsAvgAggregateOutputType | null
    _sum: Eox_forwardsSumAggregateOutputType | null
    _min: Eox_forwardsMinAggregateOutputType | null
    _max: Eox_forwardsMaxAggregateOutputType | null
  }

  type GetEox_forwardsGroupByPayload<T extends eox_forwardsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Eox_forwardsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Eox_forwardsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Eox_forwardsGroupByOutputType[P]>
            : GetScalarType<T[P], Eox_forwardsGroupByOutputType[P]>
        }
      >
    >


  export type eox_forwardsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    curve_date?: boolean
    iso?: boolean
    market?: boolean
    peak_hour?: boolean
    contract_begin?: boolean
    mid?: boolean
    bid?: boolean
    ask?: boolean
    atc?: boolean
    hr?: boolean
  }, ExtArgs["result"]["eox_forwards"]>

  export type eox_forwardsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    curve_date?: boolean
    iso?: boolean
    market?: boolean
    peak_hour?: boolean
    contract_begin?: boolean
    mid?: boolean
    bid?: boolean
    ask?: boolean
    atc?: boolean
    hr?: boolean
  }, ExtArgs["result"]["eox_forwards"]>

  export type eox_forwardsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    curve_date?: boolean
    iso?: boolean
    market?: boolean
    peak_hour?: boolean
    contract_begin?: boolean
    mid?: boolean
    bid?: boolean
    ask?: boolean
    atc?: boolean
    hr?: boolean
  }, ExtArgs["result"]["eox_forwards"]>

  export type eox_forwardsSelectScalar = {
    curve_date?: boolean
    iso?: boolean
    market?: boolean
    peak_hour?: boolean
    contract_begin?: boolean
    mid?: boolean
    bid?: boolean
    ask?: boolean
    atc?: boolean
    hr?: boolean
  }

  export type eox_forwardsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"curve_date" | "iso" | "market" | "peak_hour" | "contract_begin" | "mid" | "bid" | "ask" | "atc" | "hr", ExtArgs["result"]["eox_forwards"]>

  export type $eox_forwardsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "eox_forwards"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      curve_date: Date
      iso: string
      market: string
      peak_hour: string
      contract_begin: Date
      mid: Prisma.Decimal | null
      bid: Prisma.Decimal | null
      ask: Prisma.Decimal | null
      atc: Prisma.Decimal | null
      hr: Prisma.Decimal | null
    }, ExtArgs["result"]["eox_forwards"]>
    composites: {}
  }

  type eox_forwardsGetPayload<S extends boolean | null | undefined | eox_forwardsDefaultArgs> = $Result.GetResult<Prisma.$eox_forwardsPayload, S>

  type eox_forwardsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<eox_forwardsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Eox_forwardsCountAggregateInputType | true
    }

  export interface eox_forwardsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['eox_forwards'], meta: { name: 'eox_forwards' } }
    /**
     * Find zero or one Eox_forwards that matches the filter.
     * @param {eox_forwardsFindUniqueArgs} args - Arguments to find a Eox_forwards
     * @example
     * // Get one Eox_forwards
     * const eox_forwards = await prisma.eox_forwards.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends eox_forwardsFindUniqueArgs>(args: SelectSubset<T, eox_forwardsFindUniqueArgs<ExtArgs>>): Prisma__eox_forwardsClient<$Result.GetResult<Prisma.$eox_forwardsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Eox_forwards that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {eox_forwardsFindUniqueOrThrowArgs} args - Arguments to find a Eox_forwards
     * @example
     * // Get one Eox_forwards
     * const eox_forwards = await prisma.eox_forwards.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends eox_forwardsFindUniqueOrThrowArgs>(args: SelectSubset<T, eox_forwardsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__eox_forwardsClient<$Result.GetResult<Prisma.$eox_forwardsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Eox_forwards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eox_forwardsFindFirstArgs} args - Arguments to find a Eox_forwards
     * @example
     * // Get one Eox_forwards
     * const eox_forwards = await prisma.eox_forwards.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends eox_forwardsFindFirstArgs>(args?: SelectSubset<T, eox_forwardsFindFirstArgs<ExtArgs>>): Prisma__eox_forwardsClient<$Result.GetResult<Prisma.$eox_forwardsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Eox_forwards that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eox_forwardsFindFirstOrThrowArgs} args - Arguments to find a Eox_forwards
     * @example
     * // Get one Eox_forwards
     * const eox_forwards = await prisma.eox_forwards.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends eox_forwardsFindFirstOrThrowArgs>(args?: SelectSubset<T, eox_forwardsFindFirstOrThrowArgs<ExtArgs>>): Prisma__eox_forwardsClient<$Result.GetResult<Prisma.$eox_forwardsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Eox_forwards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eox_forwardsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Eox_forwards
     * const eox_forwards = await prisma.eox_forwards.findMany()
     * 
     * // Get first 10 Eox_forwards
     * const eox_forwards = await prisma.eox_forwards.findMany({ take: 10 })
     * 
     * // Only select the `curve_date`
     * const eox_forwardsWithCurve_dateOnly = await prisma.eox_forwards.findMany({ select: { curve_date: true } })
     * 
     */
    findMany<T extends eox_forwardsFindManyArgs>(args?: SelectSubset<T, eox_forwardsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eox_forwardsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Eox_forwards.
     * @param {eox_forwardsCreateArgs} args - Arguments to create a Eox_forwards.
     * @example
     * // Create one Eox_forwards
     * const Eox_forwards = await prisma.eox_forwards.create({
     *   data: {
     *     // ... data to create a Eox_forwards
     *   }
     * })
     * 
     */
    create<T extends eox_forwardsCreateArgs>(args: SelectSubset<T, eox_forwardsCreateArgs<ExtArgs>>): Prisma__eox_forwardsClient<$Result.GetResult<Prisma.$eox_forwardsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Eox_forwards.
     * @param {eox_forwardsCreateManyArgs} args - Arguments to create many Eox_forwards.
     * @example
     * // Create many Eox_forwards
     * const eox_forwards = await prisma.eox_forwards.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends eox_forwardsCreateManyArgs>(args?: SelectSubset<T, eox_forwardsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Eox_forwards and returns the data saved in the database.
     * @param {eox_forwardsCreateManyAndReturnArgs} args - Arguments to create many Eox_forwards.
     * @example
     * // Create many Eox_forwards
     * const eox_forwards = await prisma.eox_forwards.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Eox_forwards and only return the `curve_date`
     * const eox_forwardsWithCurve_dateOnly = await prisma.eox_forwards.createManyAndReturn({
     *   select: { curve_date: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends eox_forwardsCreateManyAndReturnArgs>(args?: SelectSubset<T, eox_forwardsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eox_forwardsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Eox_forwards.
     * @param {eox_forwardsDeleteArgs} args - Arguments to delete one Eox_forwards.
     * @example
     * // Delete one Eox_forwards
     * const Eox_forwards = await prisma.eox_forwards.delete({
     *   where: {
     *     // ... filter to delete one Eox_forwards
     *   }
     * })
     * 
     */
    delete<T extends eox_forwardsDeleteArgs>(args: SelectSubset<T, eox_forwardsDeleteArgs<ExtArgs>>): Prisma__eox_forwardsClient<$Result.GetResult<Prisma.$eox_forwardsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Eox_forwards.
     * @param {eox_forwardsUpdateArgs} args - Arguments to update one Eox_forwards.
     * @example
     * // Update one Eox_forwards
     * const eox_forwards = await prisma.eox_forwards.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends eox_forwardsUpdateArgs>(args: SelectSubset<T, eox_forwardsUpdateArgs<ExtArgs>>): Prisma__eox_forwardsClient<$Result.GetResult<Prisma.$eox_forwardsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Eox_forwards.
     * @param {eox_forwardsDeleteManyArgs} args - Arguments to filter Eox_forwards to delete.
     * @example
     * // Delete a few Eox_forwards
     * const { count } = await prisma.eox_forwards.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends eox_forwardsDeleteManyArgs>(args?: SelectSubset<T, eox_forwardsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Eox_forwards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eox_forwardsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Eox_forwards
     * const eox_forwards = await prisma.eox_forwards.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends eox_forwardsUpdateManyArgs>(args: SelectSubset<T, eox_forwardsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Eox_forwards and returns the data updated in the database.
     * @param {eox_forwardsUpdateManyAndReturnArgs} args - Arguments to update many Eox_forwards.
     * @example
     * // Update many Eox_forwards
     * const eox_forwards = await prisma.eox_forwards.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Eox_forwards and only return the `curve_date`
     * const eox_forwardsWithCurve_dateOnly = await prisma.eox_forwards.updateManyAndReturn({
     *   select: { curve_date: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends eox_forwardsUpdateManyAndReturnArgs>(args: SelectSubset<T, eox_forwardsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eox_forwardsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Eox_forwards.
     * @param {eox_forwardsUpsertArgs} args - Arguments to update or create a Eox_forwards.
     * @example
     * // Update or create a Eox_forwards
     * const eox_forwards = await prisma.eox_forwards.upsert({
     *   create: {
     *     // ... data to create a Eox_forwards
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Eox_forwards we want to update
     *   }
     * })
     */
    upsert<T extends eox_forwardsUpsertArgs>(args: SelectSubset<T, eox_forwardsUpsertArgs<ExtArgs>>): Prisma__eox_forwardsClient<$Result.GetResult<Prisma.$eox_forwardsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Eox_forwards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eox_forwardsCountArgs} args - Arguments to filter Eox_forwards to count.
     * @example
     * // Count the number of Eox_forwards
     * const count = await prisma.eox_forwards.count({
     *   where: {
     *     // ... the filter for the Eox_forwards we want to count
     *   }
     * })
    **/
    count<T extends eox_forwardsCountArgs>(
      args?: Subset<T, eox_forwardsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Eox_forwardsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Eox_forwards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Eox_forwardsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Eox_forwardsAggregateArgs>(args: Subset<T, Eox_forwardsAggregateArgs>): Prisma.PrismaPromise<GetEox_forwardsAggregateType<T>>

    /**
     * Group by Eox_forwards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eox_forwardsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends eox_forwardsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: eox_forwardsGroupByArgs['orderBy'] }
        : { orderBy?: eox_forwardsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, eox_forwardsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEox_forwardsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the eox_forwards model
   */
  readonly fields: eox_forwardsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for eox_forwards.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__eox_forwardsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the eox_forwards model
   */
  interface eox_forwardsFieldRefs {
    readonly curve_date: FieldRef<"eox_forwards", 'DateTime'>
    readonly iso: FieldRef<"eox_forwards", 'String'>
    readonly market: FieldRef<"eox_forwards", 'String'>
    readonly peak_hour: FieldRef<"eox_forwards", 'String'>
    readonly contract_begin: FieldRef<"eox_forwards", 'DateTime'>
    readonly mid: FieldRef<"eox_forwards", 'Decimal'>
    readonly bid: FieldRef<"eox_forwards", 'Decimal'>
    readonly ask: FieldRef<"eox_forwards", 'Decimal'>
    readonly atc: FieldRef<"eox_forwards", 'Decimal'>
    readonly hr: FieldRef<"eox_forwards", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * eox_forwards findUnique
   */
  export type eox_forwardsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eox_forwards
     */
    select?: eox_forwardsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eox_forwards
     */
    omit?: eox_forwardsOmit<ExtArgs> | null
    /**
     * Filter, which eox_forwards to fetch.
     */
    where: eox_forwardsWhereUniqueInput
  }

  /**
   * eox_forwards findUniqueOrThrow
   */
  export type eox_forwardsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eox_forwards
     */
    select?: eox_forwardsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eox_forwards
     */
    omit?: eox_forwardsOmit<ExtArgs> | null
    /**
     * Filter, which eox_forwards to fetch.
     */
    where: eox_forwardsWhereUniqueInput
  }

  /**
   * eox_forwards findFirst
   */
  export type eox_forwardsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eox_forwards
     */
    select?: eox_forwardsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eox_forwards
     */
    omit?: eox_forwardsOmit<ExtArgs> | null
    /**
     * Filter, which eox_forwards to fetch.
     */
    where?: eox_forwardsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of eox_forwards to fetch.
     */
    orderBy?: eox_forwardsOrderByWithRelationInput | eox_forwardsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for eox_forwards.
     */
    cursor?: eox_forwardsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` eox_forwards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` eox_forwards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of eox_forwards.
     */
    distinct?: Eox_forwardsScalarFieldEnum | Eox_forwardsScalarFieldEnum[]
  }

  /**
   * eox_forwards findFirstOrThrow
   */
  export type eox_forwardsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eox_forwards
     */
    select?: eox_forwardsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eox_forwards
     */
    omit?: eox_forwardsOmit<ExtArgs> | null
    /**
     * Filter, which eox_forwards to fetch.
     */
    where?: eox_forwardsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of eox_forwards to fetch.
     */
    orderBy?: eox_forwardsOrderByWithRelationInput | eox_forwardsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for eox_forwards.
     */
    cursor?: eox_forwardsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` eox_forwards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` eox_forwards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of eox_forwards.
     */
    distinct?: Eox_forwardsScalarFieldEnum | Eox_forwardsScalarFieldEnum[]
  }

  /**
   * eox_forwards findMany
   */
  export type eox_forwardsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eox_forwards
     */
    select?: eox_forwardsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eox_forwards
     */
    omit?: eox_forwardsOmit<ExtArgs> | null
    /**
     * Filter, which eox_forwards to fetch.
     */
    where?: eox_forwardsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of eox_forwards to fetch.
     */
    orderBy?: eox_forwardsOrderByWithRelationInput | eox_forwardsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing eox_forwards.
     */
    cursor?: eox_forwardsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` eox_forwards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` eox_forwards.
     */
    skip?: number
    distinct?: Eox_forwardsScalarFieldEnum | Eox_forwardsScalarFieldEnum[]
  }

  /**
   * eox_forwards create
   */
  export type eox_forwardsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eox_forwards
     */
    select?: eox_forwardsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eox_forwards
     */
    omit?: eox_forwardsOmit<ExtArgs> | null
    /**
     * The data needed to create a eox_forwards.
     */
    data: XOR<eox_forwardsCreateInput, eox_forwardsUncheckedCreateInput>
  }

  /**
   * eox_forwards createMany
   */
  export type eox_forwardsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many eox_forwards.
     */
    data: eox_forwardsCreateManyInput | eox_forwardsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * eox_forwards createManyAndReturn
   */
  export type eox_forwardsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eox_forwards
     */
    select?: eox_forwardsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the eox_forwards
     */
    omit?: eox_forwardsOmit<ExtArgs> | null
    /**
     * The data used to create many eox_forwards.
     */
    data: eox_forwardsCreateManyInput | eox_forwardsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * eox_forwards update
   */
  export type eox_forwardsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eox_forwards
     */
    select?: eox_forwardsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eox_forwards
     */
    omit?: eox_forwardsOmit<ExtArgs> | null
    /**
     * The data needed to update a eox_forwards.
     */
    data: XOR<eox_forwardsUpdateInput, eox_forwardsUncheckedUpdateInput>
    /**
     * Choose, which eox_forwards to update.
     */
    where: eox_forwardsWhereUniqueInput
  }

  /**
   * eox_forwards updateMany
   */
  export type eox_forwardsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update eox_forwards.
     */
    data: XOR<eox_forwardsUpdateManyMutationInput, eox_forwardsUncheckedUpdateManyInput>
    /**
     * Filter which eox_forwards to update
     */
    where?: eox_forwardsWhereInput
    /**
     * Limit how many eox_forwards to update.
     */
    limit?: number
  }

  /**
   * eox_forwards updateManyAndReturn
   */
  export type eox_forwardsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eox_forwards
     */
    select?: eox_forwardsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the eox_forwards
     */
    omit?: eox_forwardsOmit<ExtArgs> | null
    /**
     * The data used to update eox_forwards.
     */
    data: XOR<eox_forwardsUpdateManyMutationInput, eox_forwardsUncheckedUpdateManyInput>
    /**
     * Filter which eox_forwards to update
     */
    where?: eox_forwardsWhereInput
    /**
     * Limit how many eox_forwards to update.
     */
    limit?: number
  }

  /**
   * eox_forwards upsert
   */
  export type eox_forwardsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eox_forwards
     */
    select?: eox_forwardsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eox_forwards
     */
    omit?: eox_forwardsOmit<ExtArgs> | null
    /**
     * The filter to search for the eox_forwards to update in case it exists.
     */
    where: eox_forwardsWhereUniqueInput
    /**
     * In case the eox_forwards found by the `where` argument doesn't exist, create a new eox_forwards with this data.
     */
    create: XOR<eox_forwardsCreateInput, eox_forwardsUncheckedCreateInput>
    /**
     * In case the eox_forwards was found with the provided `where` argument, update it with this data.
     */
    update: XOR<eox_forwardsUpdateInput, eox_forwardsUncheckedUpdateInput>
  }

  /**
   * eox_forwards delete
   */
  export type eox_forwardsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eox_forwards
     */
    select?: eox_forwardsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eox_forwards
     */
    omit?: eox_forwardsOmit<ExtArgs> | null
    /**
     * Filter which eox_forwards to delete.
     */
    where: eox_forwardsWhereUniqueInput
  }

  /**
   * eox_forwards deleteMany
   */
  export type eox_forwardsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which eox_forwards to delete
     */
    where?: eox_forwardsWhereInput
    /**
     * Limit how many eox_forwards to delete.
     */
    limit?: number
  }

  /**
   * eox_forwards without action
   */
  export type eox_forwardsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eox_forwards
     */
    select?: eox_forwardsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eox_forwards
     */
    omit?: eox_forwardsOmit<ExtArgs> | null
  }


  /**
   * Model eox_tags
   */

  export type AggregateEox_tags = {
    _count: Eox_tagsCountAggregateOutputType | null
    _min: Eox_tagsMinAggregateOutputType | null
    _max: Eox_tagsMaxAggregateOutputType | null
  }

  export type Eox_tagsMinAggregateOutputType = {
    iso: string | null
    market: string | null
    peak_hour: string | null
  }

  export type Eox_tagsMaxAggregateOutputType = {
    iso: string | null
    market: string | null
    peak_hour: string | null
  }

  export type Eox_tagsCountAggregateOutputType = {
    iso: number
    market: number
    peak_hour: number
    _all: number
  }


  export type Eox_tagsMinAggregateInputType = {
    iso?: true
    market?: true
    peak_hour?: true
  }

  export type Eox_tagsMaxAggregateInputType = {
    iso?: true
    market?: true
    peak_hour?: true
  }

  export type Eox_tagsCountAggregateInputType = {
    iso?: true
    market?: true
    peak_hour?: true
    _all?: true
  }

  export type Eox_tagsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which eox_tags to aggregate.
     */
    where?: eox_tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of eox_tags to fetch.
     */
    orderBy?: eox_tagsOrderByWithRelationInput | eox_tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: eox_tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` eox_tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` eox_tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned eox_tags
    **/
    _count?: true | Eox_tagsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Eox_tagsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Eox_tagsMaxAggregateInputType
  }

  export type GetEox_tagsAggregateType<T extends Eox_tagsAggregateArgs> = {
        [P in keyof T & keyof AggregateEox_tags]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEox_tags[P]>
      : GetScalarType<T[P], AggregateEox_tags[P]>
  }




  export type eox_tagsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: eox_tagsWhereInput
    orderBy?: eox_tagsOrderByWithAggregationInput | eox_tagsOrderByWithAggregationInput[]
    by: Eox_tagsScalarFieldEnum[] | Eox_tagsScalarFieldEnum
    having?: eox_tagsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Eox_tagsCountAggregateInputType | true
    _min?: Eox_tagsMinAggregateInputType
    _max?: Eox_tagsMaxAggregateInputType
  }

  export type Eox_tagsGroupByOutputType = {
    iso: string
    market: string
    peak_hour: string
    _count: Eox_tagsCountAggregateOutputType | null
    _min: Eox_tagsMinAggregateOutputType | null
    _max: Eox_tagsMaxAggregateOutputType | null
  }

  type GetEox_tagsGroupByPayload<T extends eox_tagsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Eox_tagsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Eox_tagsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Eox_tagsGroupByOutputType[P]>
            : GetScalarType<T[P], Eox_tagsGroupByOutputType[P]>
        }
      >
    >


  export type eox_tagsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    iso?: boolean
    market?: boolean
    peak_hour?: boolean
  }, ExtArgs["result"]["eox_tags"]>

  export type eox_tagsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    iso?: boolean
    market?: boolean
    peak_hour?: boolean
  }, ExtArgs["result"]["eox_tags"]>

  export type eox_tagsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    iso?: boolean
    market?: boolean
    peak_hour?: boolean
  }, ExtArgs["result"]["eox_tags"]>

  export type eox_tagsSelectScalar = {
    iso?: boolean
    market?: boolean
    peak_hour?: boolean
  }

  export type eox_tagsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"iso" | "market" | "peak_hour", ExtArgs["result"]["eox_tags"]>

  export type $eox_tagsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "eox_tags"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      iso: string
      market: string
      peak_hour: string
    }, ExtArgs["result"]["eox_tags"]>
    composites: {}
  }

  type eox_tagsGetPayload<S extends boolean | null | undefined | eox_tagsDefaultArgs> = $Result.GetResult<Prisma.$eox_tagsPayload, S>

  type eox_tagsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<eox_tagsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Eox_tagsCountAggregateInputType | true
    }

  export interface eox_tagsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['eox_tags'], meta: { name: 'eox_tags' } }
    /**
     * Find zero or one Eox_tags that matches the filter.
     * @param {eox_tagsFindUniqueArgs} args - Arguments to find a Eox_tags
     * @example
     * // Get one Eox_tags
     * const eox_tags = await prisma.eox_tags.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends eox_tagsFindUniqueArgs>(args: SelectSubset<T, eox_tagsFindUniqueArgs<ExtArgs>>): Prisma__eox_tagsClient<$Result.GetResult<Prisma.$eox_tagsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Eox_tags that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {eox_tagsFindUniqueOrThrowArgs} args - Arguments to find a Eox_tags
     * @example
     * // Get one Eox_tags
     * const eox_tags = await prisma.eox_tags.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends eox_tagsFindUniqueOrThrowArgs>(args: SelectSubset<T, eox_tagsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__eox_tagsClient<$Result.GetResult<Prisma.$eox_tagsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Eox_tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eox_tagsFindFirstArgs} args - Arguments to find a Eox_tags
     * @example
     * // Get one Eox_tags
     * const eox_tags = await prisma.eox_tags.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends eox_tagsFindFirstArgs>(args?: SelectSubset<T, eox_tagsFindFirstArgs<ExtArgs>>): Prisma__eox_tagsClient<$Result.GetResult<Prisma.$eox_tagsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Eox_tags that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eox_tagsFindFirstOrThrowArgs} args - Arguments to find a Eox_tags
     * @example
     * // Get one Eox_tags
     * const eox_tags = await prisma.eox_tags.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends eox_tagsFindFirstOrThrowArgs>(args?: SelectSubset<T, eox_tagsFindFirstOrThrowArgs<ExtArgs>>): Prisma__eox_tagsClient<$Result.GetResult<Prisma.$eox_tagsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Eox_tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eox_tagsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Eox_tags
     * const eox_tags = await prisma.eox_tags.findMany()
     * 
     * // Get first 10 Eox_tags
     * const eox_tags = await prisma.eox_tags.findMany({ take: 10 })
     * 
     * // Only select the `iso`
     * const eox_tagsWithIsoOnly = await prisma.eox_tags.findMany({ select: { iso: true } })
     * 
     */
    findMany<T extends eox_tagsFindManyArgs>(args?: SelectSubset<T, eox_tagsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eox_tagsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Eox_tags.
     * @param {eox_tagsCreateArgs} args - Arguments to create a Eox_tags.
     * @example
     * // Create one Eox_tags
     * const Eox_tags = await prisma.eox_tags.create({
     *   data: {
     *     // ... data to create a Eox_tags
     *   }
     * })
     * 
     */
    create<T extends eox_tagsCreateArgs>(args: SelectSubset<T, eox_tagsCreateArgs<ExtArgs>>): Prisma__eox_tagsClient<$Result.GetResult<Prisma.$eox_tagsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Eox_tags.
     * @param {eox_tagsCreateManyArgs} args - Arguments to create many Eox_tags.
     * @example
     * // Create many Eox_tags
     * const eox_tags = await prisma.eox_tags.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends eox_tagsCreateManyArgs>(args?: SelectSubset<T, eox_tagsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Eox_tags and returns the data saved in the database.
     * @param {eox_tagsCreateManyAndReturnArgs} args - Arguments to create many Eox_tags.
     * @example
     * // Create many Eox_tags
     * const eox_tags = await prisma.eox_tags.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Eox_tags and only return the `iso`
     * const eox_tagsWithIsoOnly = await prisma.eox_tags.createManyAndReturn({
     *   select: { iso: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends eox_tagsCreateManyAndReturnArgs>(args?: SelectSubset<T, eox_tagsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eox_tagsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Eox_tags.
     * @param {eox_tagsDeleteArgs} args - Arguments to delete one Eox_tags.
     * @example
     * // Delete one Eox_tags
     * const Eox_tags = await prisma.eox_tags.delete({
     *   where: {
     *     // ... filter to delete one Eox_tags
     *   }
     * })
     * 
     */
    delete<T extends eox_tagsDeleteArgs>(args: SelectSubset<T, eox_tagsDeleteArgs<ExtArgs>>): Prisma__eox_tagsClient<$Result.GetResult<Prisma.$eox_tagsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Eox_tags.
     * @param {eox_tagsUpdateArgs} args - Arguments to update one Eox_tags.
     * @example
     * // Update one Eox_tags
     * const eox_tags = await prisma.eox_tags.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends eox_tagsUpdateArgs>(args: SelectSubset<T, eox_tagsUpdateArgs<ExtArgs>>): Prisma__eox_tagsClient<$Result.GetResult<Prisma.$eox_tagsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Eox_tags.
     * @param {eox_tagsDeleteManyArgs} args - Arguments to filter Eox_tags to delete.
     * @example
     * // Delete a few Eox_tags
     * const { count } = await prisma.eox_tags.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends eox_tagsDeleteManyArgs>(args?: SelectSubset<T, eox_tagsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Eox_tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eox_tagsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Eox_tags
     * const eox_tags = await prisma.eox_tags.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends eox_tagsUpdateManyArgs>(args: SelectSubset<T, eox_tagsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Eox_tags and returns the data updated in the database.
     * @param {eox_tagsUpdateManyAndReturnArgs} args - Arguments to update many Eox_tags.
     * @example
     * // Update many Eox_tags
     * const eox_tags = await prisma.eox_tags.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Eox_tags and only return the `iso`
     * const eox_tagsWithIsoOnly = await prisma.eox_tags.updateManyAndReturn({
     *   select: { iso: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends eox_tagsUpdateManyAndReturnArgs>(args: SelectSubset<T, eox_tagsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eox_tagsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Eox_tags.
     * @param {eox_tagsUpsertArgs} args - Arguments to update or create a Eox_tags.
     * @example
     * // Update or create a Eox_tags
     * const eox_tags = await prisma.eox_tags.upsert({
     *   create: {
     *     // ... data to create a Eox_tags
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Eox_tags we want to update
     *   }
     * })
     */
    upsert<T extends eox_tagsUpsertArgs>(args: SelectSubset<T, eox_tagsUpsertArgs<ExtArgs>>): Prisma__eox_tagsClient<$Result.GetResult<Prisma.$eox_tagsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Eox_tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eox_tagsCountArgs} args - Arguments to filter Eox_tags to count.
     * @example
     * // Count the number of Eox_tags
     * const count = await prisma.eox_tags.count({
     *   where: {
     *     // ... the filter for the Eox_tags we want to count
     *   }
     * })
    **/
    count<T extends eox_tagsCountArgs>(
      args?: Subset<T, eox_tagsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Eox_tagsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Eox_tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Eox_tagsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Eox_tagsAggregateArgs>(args: Subset<T, Eox_tagsAggregateArgs>): Prisma.PrismaPromise<GetEox_tagsAggregateType<T>>

    /**
     * Group by Eox_tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eox_tagsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends eox_tagsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: eox_tagsGroupByArgs['orderBy'] }
        : { orderBy?: eox_tagsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, eox_tagsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEox_tagsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the eox_tags model
   */
  readonly fields: eox_tagsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for eox_tags.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__eox_tagsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the eox_tags model
   */
  interface eox_tagsFieldRefs {
    readonly iso: FieldRef<"eox_tags", 'String'>
    readonly market: FieldRef<"eox_tags", 'String'>
    readonly peak_hour: FieldRef<"eox_tags", 'String'>
  }
    

  // Custom InputTypes
  /**
   * eox_tags findUnique
   */
  export type eox_tagsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eox_tags
     */
    select?: eox_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eox_tags
     */
    omit?: eox_tagsOmit<ExtArgs> | null
    /**
     * Filter, which eox_tags to fetch.
     */
    where: eox_tagsWhereUniqueInput
  }

  /**
   * eox_tags findUniqueOrThrow
   */
  export type eox_tagsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eox_tags
     */
    select?: eox_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eox_tags
     */
    omit?: eox_tagsOmit<ExtArgs> | null
    /**
     * Filter, which eox_tags to fetch.
     */
    where: eox_tagsWhereUniqueInput
  }

  /**
   * eox_tags findFirst
   */
  export type eox_tagsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eox_tags
     */
    select?: eox_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eox_tags
     */
    omit?: eox_tagsOmit<ExtArgs> | null
    /**
     * Filter, which eox_tags to fetch.
     */
    where?: eox_tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of eox_tags to fetch.
     */
    orderBy?: eox_tagsOrderByWithRelationInput | eox_tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for eox_tags.
     */
    cursor?: eox_tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` eox_tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` eox_tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of eox_tags.
     */
    distinct?: Eox_tagsScalarFieldEnum | Eox_tagsScalarFieldEnum[]
  }

  /**
   * eox_tags findFirstOrThrow
   */
  export type eox_tagsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eox_tags
     */
    select?: eox_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eox_tags
     */
    omit?: eox_tagsOmit<ExtArgs> | null
    /**
     * Filter, which eox_tags to fetch.
     */
    where?: eox_tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of eox_tags to fetch.
     */
    orderBy?: eox_tagsOrderByWithRelationInput | eox_tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for eox_tags.
     */
    cursor?: eox_tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` eox_tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` eox_tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of eox_tags.
     */
    distinct?: Eox_tagsScalarFieldEnum | Eox_tagsScalarFieldEnum[]
  }

  /**
   * eox_tags findMany
   */
  export type eox_tagsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eox_tags
     */
    select?: eox_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eox_tags
     */
    omit?: eox_tagsOmit<ExtArgs> | null
    /**
     * Filter, which eox_tags to fetch.
     */
    where?: eox_tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of eox_tags to fetch.
     */
    orderBy?: eox_tagsOrderByWithRelationInput | eox_tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing eox_tags.
     */
    cursor?: eox_tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` eox_tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` eox_tags.
     */
    skip?: number
    distinct?: Eox_tagsScalarFieldEnum | Eox_tagsScalarFieldEnum[]
  }

  /**
   * eox_tags create
   */
  export type eox_tagsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eox_tags
     */
    select?: eox_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eox_tags
     */
    omit?: eox_tagsOmit<ExtArgs> | null
    /**
     * The data needed to create a eox_tags.
     */
    data: XOR<eox_tagsCreateInput, eox_tagsUncheckedCreateInput>
  }

  /**
   * eox_tags createMany
   */
  export type eox_tagsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many eox_tags.
     */
    data: eox_tagsCreateManyInput | eox_tagsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * eox_tags createManyAndReturn
   */
  export type eox_tagsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eox_tags
     */
    select?: eox_tagsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the eox_tags
     */
    omit?: eox_tagsOmit<ExtArgs> | null
    /**
     * The data used to create many eox_tags.
     */
    data: eox_tagsCreateManyInput | eox_tagsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * eox_tags update
   */
  export type eox_tagsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eox_tags
     */
    select?: eox_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eox_tags
     */
    omit?: eox_tagsOmit<ExtArgs> | null
    /**
     * The data needed to update a eox_tags.
     */
    data: XOR<eox_tagsUpdateInput, eox_tagsUncheckedUpdateInput>
    /**
     * Choose, which eox_tags to update.
     */
    where: eox_tagsWhereUniqueInput
  }

  /**
   * eox_tags updateMany
   */
  export type eox_tagsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update eox_tags.
     */
    data: XOR<eox_tagsUpdateManyMutationInput, eox_tagsUncheckedUpdateManyInput>
    /**
     * Filter which eox_tags to update
     */
    where?: eox_tagsWhereInput
    /**
     * Limit how many eox_tags to update.
     */
    limit?: number
  }

  /**
   * eox_tags updateManyAndReturn
   */
  export type eox_tagsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eox_tags
     */
    select?: eox_tagsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the eox_tags
     */
    omit?: eox_tagsOmit<ExtArgs> | null
    /**
     * The data used to update eox_tags.
     */
    data: XOR<eox_tagsUpdateManyMutationInput, eox_tagsUncheckedUpdateManyInput>
    /**
     * Filter which eox_tags to update
     */
    where?: eox_tagsWhereInput
    /**
     * Limit how many eox_tags to update.
     */
    limit?: number
  }

  /**
   * eox_tags upsert
   */
  export type eox_tagsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eox_tags
     */
    select?: eox_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eox_tags
     */
    omit?: eox_tagsOmit<ExtArgs> | null
    /**
     * The filter to search for the eox_tags to update in case it exists.
     */
    where: eox_tagsWhereUniqueInput
    /**
     * In case the eox_tags found by the `where` argument doesn't exist, create a new eox_tags with this data.
     */
    create: XOR<eox_tagsCreateInput, eox_tagsUncheckedCreateInput>
    /**
     * In case the eox_tags was found with the provided `where` argument, update it with this data.
     */
    update: XOR<eox_tagsUpdateInput, eox_tagsUncheckedUpdateInput>
  }

  /**
   * eox_tags delete
   */
  export type eox_tagsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eox_tags
     */
    select?: eox_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eox_tags
     */
    omit?: eox_tagsOmit<ExtArgs> | null
    /**
     * Filter which eox_tags to delete.
     */
    where: eox_tagsWhereUniqueInput
  }

  /**
   * eox_tags deleteMany
   */
  export type eox_tagsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which eox_tags to delete
     */
    where?: eox_tagsWhereInput
    /**
     * Limit how many eox_tags to delete.
     */
    limit?: number
  }

  /**
   * eox_tags without action
   */
  export type eox_tagsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eox_tags
     */
    select?: eox_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eox_tags
     */
    omit?: eox_tagsOmit<ExtArgs> | null
  }


  /**
   * Model goleta_ascend_data
   */

  export type AggregateGoleta_ascend_data = {
    _count: Goleta_ascend_dataCountAggregateOutputType | null
    _avg: Goleta_ascend_dataAvgAggregateOutputType | null
    _sum: Goleta_ascend_dataSumAggregateOutputType | null
    _min: Goleta_ascend_dataMinAggregateOutputType | null
    _max: Goleta_ascend_dataMaxAggregateOutputType | null
  }

  export type Goleta_ascend_dataAvgAggregateOutputType = {
    value: number | null
  }

  export type Goleta_ascend_dataSumAggregateOutputType = {
    value: number | null
  }

  export type Goleta_ascend_dataMinAggregateOutputType = {
    utc_datetime_ib: Date | null
    local_datetime_ib: Date | null
    strategy: string | null
    attribute: string | null
    value: number | null
  }

  export type Goleta_ascend_dataMaxAggregateOutputType = {
    utc_datetime_ib: Date | null
    local_datetime_ib: Date | null
    strategy: string | null
    attribute: string | null
    value: number | null
  }

  export type Goleta_ascend_dataCountAggregateOutputType = {
    utc_datetime_ib: number
    local_datetime_ib: number
    strategy: number
    attribute: number
    value: number
    _all: number
  }


  export type Goleta_ascend_dataAvgAggregateInputType = {
    value?: true
  }

  export type Goleta_ascend_dataSumAggregateInputType = {
    value?: true
  }

  export type Goleta_ascend_dataMinAggregateInputType = {
    utc_datetime_ib?: true
    local_datetime_ib?: true
    strategy?: true
    attribute?: true
    value?: true
  }

  export type Goleta_ascend_dataMaxAggregateInputType = {
    utc_datetime_ib?: true
    local_datetime_ib?: true
    strategy?: true
    attribute?: true
    value?: true
  }

  export type Goleta_ascend_dataCountAggregateInputType = {
    utc_datetime_ib?: true
    local_datetime_ib?: true
    strategy?: true
    attribute?: true
    value?: true
    _all?: true
  }

  export type Goleta_ascend_dataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which goleta_ascend_data to aggregate.
     */
    where?: goleta_ascend_dataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of goleta_ascend_data to fetch.
     */
    orderBy?: goleta_ascend_dataOrderByWithRelationInput | goleta_ascend_dataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: goleta_ascend_dataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` goleta_ascend_data from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` goleta_ascend_data.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned goleta_ascend_data
    **/
    _count?: true | Goleta_ascend_dataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Goleta_ascend_dataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Goleta_ascend_dataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Goleta_ascend_dataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Goleta_ascend_dataMaxAggregateInputType
  }

  export type GetGoleta_ascend_dataAggregateType<T extends Goleta_ascend_dataAggregateArgs> = {
        [P in keyof T & keyof AggregateGoleta_ascend_data]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGoleta_ascend_data[P]>
      : GetScalarType<T[P], AggregateGoleta_ascend_data[P]>
  }




  export type goleta_ascend_dataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: goleta_ascend_dataWhereInput
    orderBy?: goleta_ascend_dataOrderByWithAggregationInput | goleta_ascend_dataOrderByWithAggregationInput[]
    by: Goleta_ascend_dataScalarFieldEnum[] | Goleta_ascend_dataScalarFieldEnum
    having?: goleta_ascend_dataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Goleta_ascend_dataCountAggregateInputType | true
    _avg?: Goleta_ascend_dataAvgAggregateInputType
    _sum?: Goleta_ascend_dataSumAggregateInputType
    _min?: Goleta_ascend_dataMinAggregateInputType
    _max?: Goleta_ascend_dataMaxAggregateInputType
  }

  export type Goleta_ascend_dataGroupByOutputType = {
    utc_datetime_ib: Date
    local_datetime_ib: Date
    strategy: string
    attribute: string
    value: number | null
    _count: Goleta_ascend_dataCountAggregateOutputType | null
    _avg: Goleta_ascend_dataAvgAggregateOutputType | null
    _sum: Goleta_ascend_dataSumAggregateOutputType | null
    _min: Goleta_ascend_dataMinAggregateOutputType | null
    _max: Goleta_ascend_dataMaxAggregateOutputType | null
  }

  type GetGoleta_ascend_dataGroupByPayload<T extends goleta_ascend_dataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Goleta_ascend_dataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Goleta_ascend_dataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Goleta_ascend_dataGroupByOutputType[P]>
            : GetScalarType<T[P], Goleta_ascend_dataGroupByOutputType[P]>
        }
      >
    >


  export type goleta_ascend_dataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    utc_datetime_ib?: boolean
    local_datetime_ib?: boolean
    strategy?: boolean
    attribute?: boolean
    value?: boolean
  }, ExtArgs["result"]["goleta_ascend_data"]>

  export type goleta_ascend_dataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    utc_datetime_ib?: boolean
    local_datetime_ib?: boolean
    strategy?: boolean
    attribute?: boolean
    value?: boolean
  }, ExtArgs["result"]["goleta_ascend_data"]>

  export type goleta_ascend_dataSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    utc_datetime_ib?: boolean
    local_datetime_ib?: boolean
    strategy?: boolean
    attribute?: boolean
    value?: boolean
  }, ExtArgs["result"]["goleta_ascend_data"]>

  export type goleta_ascend_dataSelectScalar = {
    utc_datetime_ib?: boolean
    local_datetime_ib?: boolean
    strategy?: boolean
    attribute?: boolean
    value?: boolean
  }

  export type goleta_ascend_dataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"utc_datetime_ib" | "local_datetime_ib" | "strategy" | "attribute" | "value", ExtArgs["result"]["goleta_ascend_data"]>

  export type $goleta_ascend_dataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "goleta_ascend_data"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      utc_datetime_ib: Date
      local_datetime_ib: Date
      strategy: string
      attribute: string
      value: number | null
    }, ExtArgs["result"]["goleta_ascend_data"]>
    composites: {}
  }

  type goleta_ascend_dataGetPayload<S extends boolean | null | undefined | goleta_ascend_dataDefaultArgs> = $Result.GetResult<Prisma.$goleta_ascend_dataPayload, S>

  type goleta_ascend_dataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<goleta_ascend_dataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Goleta_ascend_dataCountAggregateInputType | true
    }

  export interface goleta_ascend_dataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['goleta_ascend_data'], meta: { name: 'goleta_ascend_data' } }
    /**
     * Find zero or one Goleta_ascend_data that matches the filter.
     * @param {goleta_ascend_dataFindUniqueArgs} args - Arguments to find a Goleta_ascend_data
     * @example
     * // Get one Goleta_ascend_data
     * const goleta_ascend_data = await prisma.goleta_ascend_data.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends goleta_ascend_dataFindUniqueArgs>(args: SelectSubset<T, goleta_ascend_dataFindUniqueArgs<ExtArgs>>): Prisma__goleta_ascend_dataClient<$Result.GetResult<Prisma.$goleta_ascend_dataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Goleta_ascend_data that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {goleta_ascend_dataFindUniqueOrThrowArgs} args - Arguments to find a Goleta_ascend_data
     * @example
     * // Get one Goleta_ascend_data
     * const goleta_ascend_data = await prisma.goleta_ascend_data.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends goleta_ascend_dataFindUniqueOrThrowArgs>(args: SelectSubset<T, goleta_ascend_dataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__goleta_ascend_dataClient<$Result.GetResult<Prisma.$goleta_ascend_dataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Goleta_ascend_data that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {goleta_ascend_dataFindFirstArgs} args - Arguments to find a Goleta_ascend_data
     * @example
     * // Get one Goleta_ascend_data
     * const goleta_ascend_data = await prisma.goleta_ascend_data.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends goleta_ascend_dataFindFirstArgs>(args?: SelectSubset<T, goleta_ascend_dataFindFirstArgs<ExtArgs>>): Prisma__goleta_ascend_dataClient<$Result.GetResult<Prisma.$goleta_ascend_dataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Goleta_ascend_data that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {goleta_ascend_dataFindFirstOrThrowArgs} args - Arguments to find a Goleta_ascend_data
     * @example
     * // Get one Goleta_ascend_data
     * const goleta_ascend_data = await prisma.goleta_ascend_data.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends goleta_ascend_dataFindFirstOrThrowArgs>(args?: SelectSubset<T, goleta_ascend_dataFindFirstOrThrowArgs<ExtArgs>>): Prisma__goleta_ascend_dataClient<$Result.GetResult<Prisma.$goleta_ascend_dataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Goleta_ascend_data that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {goleta_ascend_dataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Goleta_ascend_data
     * const goleta_ascend_data = await prisma.goleta_ascend_data.findMany()
     * 
     * // Get first 10 Goleta_ascend_data
     * const goleta_ascend_data = await prisma.goleta_ascend_data.findMany({ take: 10 })
     * 
     * // Only select the `utc_datetime_ib`
     * const goleta_ascend_dataWithUtc_datetime_ibOnly = await prisma.goleta_ascend_data.findMany({ select: { utc_datetime_ib: true } })
     * 
     */
    findMany<T extends goleta_ascend_dataFindManyArgs>(args?: SelectSubset<T, goleta_ascend_dataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$goleta_ascend_dataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Goleta_ascend_data.
     * @param {goleta_ascend_dataCreateArgs} args - Arguments to create a Goleta_ascend_data.
     * @example
     * // Create one Goleta_ascend_data
     * const Goleta_ascend_data = await prisma.goleta_ascend_data.create({
     *   data: {
     *     // ... data to create a Goleta_ascend_data
     *   }
     * })
     * 
     */
    create<T extends goleta_ascend_dataCreateArgs>(args: SelectSubset<T, goleta_ascend_dataCreateArgs<ExtArgs>>): Prisma__goleta_ascend_dataClient<$Result.GetResult<Prisma.$goleta_ascend_dataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Goleta_ascend_data.
     * @param {goleta_ascend_dataCreateManyArgs} args - Arguments to create many Goleta_ascend_data.
     * @example
     * // Create many Goleta_ascend_data
     * const goleta_ascend_data = await prisma.goleta_ascend_data.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends goleta_ascend_dataCreateManyArgs>(args?: SelectSubset<T, goleta_ascend_dataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Goleta_ascend_data and returns the data saved in the database.
     * @param {goleta_ascend_dataCreateManyAndReturnArgs} args - Arguments to create many Goleta_ascend_data.
     * @example
     * // Create many Goleta_ascend_data
     * const goleta_ascend_data = await prisma.goleta_ascend_data.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Goleta_ascend_data and only return the `utc_datetime_ib`
     * const goleta_ascend_dataWithUtc_datetime_ibOnly = await prisma.goleta_ascend_data.createManyAndReturn({
     *   select: { utc_datetime_ib: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends goleta_ascend_dataCreateManyAndReturnArgs>(args?: SelectSubset<T, goleta_ascend_dataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$goleta_ascend_dataPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Goleta_ascend_data.
     * @param {goleta_ascend_dataDeleteArgs} args - Arguments to delete one Goleta_ascend_data.
     * @example
     * // Delete one Goleta_ascend_data
     * const Goleta_ascend_data = await prisma.goleta_ascend_data.delete({
     *   where: {
     *     // ... filter to delete one Goleta_ascend_data
     *   }
     * })
     * 
     */
    delete<T extends goleta_ascend_dataDeleteArgs>(args: SelectSubset<T, goleta_ascend_dataDeleteArgs<ExtArgs>>): Prisma__goleta_ascend_dataClient<$Result.GetResult<Prisma.$goleta_ascend_dataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Goleta_ascend_data.
     * @param {goleta_ascend_dataUpdateArgs} args - Arguments to update one Goleta_ascend_data.
     * @example
     * // Update one Goleta_ascend_data
     * const goleta_ascend_data = await prisma.goleta_ascend_data.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends goleta_ascend_dataUpdateArgs>(args: SelectSubset<T, goleta_ascend_dataUpdateArgs<ExtArgs>>): Prisma__goleta_ascend_dataClient<$Result.GetResult<Prisma.$goleta_ascend_dataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Goleta_ascend_data.
     * @param {goleta_ascend_dataDeleteManyArgs} args - Arguments to filter Goleta_ascend_data to delete.
     * @example
     * // Delete a few Goleta_ascend_data
     * const { count } = await prisma.goleta_ascend_data.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends goleta_ascend_dataDeleteManyArgs>(args?: SelectSubset<T, goleta_ascend_dataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Goleta_ascend_data.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {goleta_ascend_dataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Goleta_ascend_data
     * const goleta_ascend_data = await prisma.goleta_ascend_data.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends goleta_ascend_dataUpdateManyArgs>(args: SelectSubset<T, goleta_ascend_dataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Goleta_ascend_data and returns the data updated in the database.
     * @param {goleta_ascend_dataUpdateManyAndReturnArgs} args - Arguments to update many Goleta_ascend_data.
     * @example
     * // Update many Goleta_ascend_data
     * const goleta_ascend_data = await prisma.goleta_ascend_data.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Goleta_ascend_data and only return the `utc_datetime_ib`
     * const goleta_ascend_dataWithUtc_datetime_ibOnly = await prisma.goleta_ascend_data.updateManyAndReturn({
     *   select: { utc_datetime_ib: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends goleta_ascend_dataUpdateManyAndReturnArgs>(args: SelectSubset<T, goleta_ascend_dataUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$goleta_ascend_dataPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Goleta_ascend_data.
     * @param {goleta_ascend_dataUpsertArgs} args - Arguments to update or create a Goleta_ascend_data.
     * @example
     * // Update or create a Goleta_ascend_data
     * const goleta_ascend_data = await prisma.goleta_ascend_data.upsert({
     *   create: {
     *     // ... data to create a Goleta_ascend_data
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Goleta_ascend_data we want to update
     *   }
     * })
     */
    upsert<T extends goleta_ascend_dataUpsertArgs>(args: SelectSubset<T, goleta_ascend_dataUpsertArgs<ExtArgs>>): Prisma__goleta_ascend_dataClient<$Result.GetResult<Prisma.$goleta_ascend_dataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Goleta_ascend_data.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {goleta_ascend_dataCountArgs} args - Arguments to filter Goleta_ascend_data to count.
     * @example
     * // Count the number of Goleta_ascend_data
     * const count = await prisma.goleta_ascend_data.count({
     *   where: {
     *     // ... the filter for the Goleta_ascend_data we want to count
     *   }
     * })
    **/
    count<T extends goleta_ascend_dataCountArgs>(
      args?: Subset<T, goleta_ascend_dataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Goleta_ascend_dataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Goleta_ascend_data.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Goleta_ascend_dataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Goleta_ascend_dataAggregateArgs>(args: Subset<T, Goleta_ascend_dataAggregateArgs>): Prisma.PrismaPromise<GetGoleta_ascend_dataAggregateType<T>>

    /**
     * Group by Goleta_ascend_data.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {goleta_ascend_dataGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends goleta_ascend_dataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: goleta_ascend_dataGroupByArgs['orderBy'] }
        : { orderBy?: goleta_ascend_dataGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, goleta_ascend_dataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGoleta_ascend_dataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the goleta_ascend_data model
   */
  readonly fields: goleta_ascend_dataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for goleta_ascend_data.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__goleta_ascend_dataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the goleta_ascend_data model
   */
  interface goleta_ascend_dataFieldRefs {
    readonly utc_datetime_ib: FieldRef<"goleta_ascend_data", 'DateTime'>
    readonly local_datetime_ib: FieldRef<"goleta_ascend_data", 'DateTime'>
    readonly strategy: FieldRef<"goleta_ascend_data", 'String'>
    readonly attribute: FieldRef<"goleta_ascend_data", 'String'>
    readonly value: FieldRef<"goleta_ascend_data", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * goleta_ascend_data findUnique
   */
  export type goleta_ascend_dataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goleta_ascend_data
     */
    select?: goleta_ascend_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the goleta_ascend_data
     */
    omit?: goleta_ascend_dataOmit<ExtArgs> | null
    /**
     * Filter, which goleta_ascend_data to fetch.
     */
    where: goleta_ascend_dataWhereUniqueInput
  }

  /**
   * goleta_ascend_data findUniqueOrThrow
   */
  export type goleta_ascend_dataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goleta_ascend_data
     */
    select?: goleta_ascend_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the goleta_ascend_data
     */
    omit?: goleta_ascend_dataOmit<ExtArgs> | null
    /**
     * Filter, which goleta_ascend_data to fetch.
     */
    where: goleta_ascend_dataWhereUniqueInput
  }

  /**
   * goleta_ascend_data findFirst
   */
  export type goleta_ascend_dataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goleta_ascend_data
     */
    select?: goleta_ascend_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the goleta_ascend_data
     */
    omit?: goleta_ascend_dataOmit<ExtArgs> | null
    /**
     * Filter, which goleta_ascend_data to fetch.
     */
    where?: goleta_ascend_dataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of goleta_ascend_data to fetch.
     */
    orderBy?: goleta_ascend_dataOrderByWithRelationInput | goleta_ascend_dataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for goleta_ascend_data.
     */
    cursor?: goleta_ascend_dataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` goleta_ascend_data from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` goleta_ascend_data.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of goleta_ascend_data.
     */
    distinct?: Goleta_ascend_dataScalarFieldEnum | Goleta_ascend_dataScalarFieldEnum[]
  }

  /**
   * goleta_ascend_data findFirstOrThrow
   */
  export type goleta_ascend_dataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goleta_ascend_data
     */
    select?: goleta_ascend_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the goleta_ascend_data
     */
    omit?: goleta_ascend_dataOmit<ExtArgs> | null
    /**
     * Filter, which goleta_ascend_data to fetch.
     */
    where?: goleta_ascend_dataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of goleta_ascend_data to fetch.
     */
    orderBy?: goleta_ascend_dataOrderByWithRelationInput | goleta_ascend_dataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for goleta_ascend_data.
     */
    cursor?: goleta_ascend_dataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` goleta_ascend_data from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` goleta_ascend_data.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of goleta_ascend_data.
     */
    distinct?: Goleta_ascend_dataScalarFieldEnum | Goleta_ascend_dataScalarFieldEnum[]
  }

  /**
   * goleta_ascend_data findMany
   */
  export type goleta_ascend_dataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goleta_ascend_data
     */
    select?: goleta_ascend_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the goleta_ascend_data
     */
    omit?: goleta_ascend_dataOmit<ExtArgs> | null
    /**
     * Filter, which goleta_ascend_data to fetch.
     */
    where?: goleta_ascend_dataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of goleta_ascend_data to fetch.
     */
    orderBy?: goleta_ascend_dataOrderByWithRelationInput | goleta_ascend_dataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing goleta_ascend_data.
     */
    cursor?: goleta_ascend_dataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` goleta_ascend_data from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` goleta_ascend_data.
     */
    skip?: number
    distinct?: Goleta_ascend_dataScalarFieldEnum | Goleta_ascend_dataScalarFieldEnum[]
  }

  /**
   * goleta_ascend_data create
   */
  export type goleta_ascend_dataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goleta_ascend_data
     */
    select?: goleta_ascend_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the goleta_ascend_data
     */
    omit?: goleta_ascend_dataOmit<ExtArgs> | null
    /**
     * The data needed to create a goleta_ascend_data.
     */
    data: XOR<goleta_ascend_dataCreateInput, goleta_ascend_dataUncheckedCreateInput>
  }

  /**
   * goleta_ascend_data createMany
   */
  export type goleta_ascend_dataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many goleta_ascend_data.
     */
    data: goleta_ascend_dataCreateManyInput | goleta_ascend_dataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * goleta_ascend_data createManyAndReturn
   */
  export type goleta_ascend_dataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goleta_ascend_data
     */
    select?: goleta_ascend_dataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the goleta_ascend_data
     */
    omit?: goleta_ascend_dataOmit<ExtArgs> | null
    /**
     * The data used to create many goleta_ascend_data.
     */
    data: goleta_ascend_dataCreateManyInput | goleta_ascend_dataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * goleta_ascend_data update
   */
  export type goleta_ascend_dataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goleta_ascend_data
     */
    select?: goleta_ascend_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the goleta_ascend_data
     */
    omit?: goleta_ascend_dataOmit<ExtArgs> | null
    /**
     * The data needed to update a goleta_ascend_data.
     */
    data: XOR<goleta_ascend_dataUpdateInput, goleta_ascend_dataUncheckedUpdateInput>
    /**
     * Choose, which goleta_ascend_data to update.
     */
    where: goleta_ascend_dataWhereUniqueInput
  }

  /**
   * goleta_ascend_data updateMany
   */
  export type goleta_ascend_dataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update goleta_ascend_data.
     */
    data: XOR<goleta_ascend_dataUpdateManyMutationInput, goleta_ascend_dataUncheckedUpdateManyInput>
    /**
     * Filter which goleta_ascend_data to update
     */
    where?: goleta_ascend_dataWhereInput
    /**
     * Limit how many goleta_ascend_data to update.
     */
    limit?: number
  }

  /**
   * goleta_ascend_data updateManyAndReturn
   */
  export type goleta_ascend_dataUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goleta_ascend_data
     */
    select?: goleta_ascend_dataSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the goleta_ascend_data
     */
    omit?: goleta_ascend_dataOmit<ExtArgs> | null
    /**
     * The data used to update goleta_ascend_data.
     */
    data: XOR<goleta_ascend_dataUpdateManyMutationInput, goleta_ascend_dataUncheckedUpdateManyInput>
    /**
     * Filter which goleta_ascend_data to update
     */
    where?: goleta_ascend_dataWhereInput
    /**
     * Limit how many goleta_ascend_data to update.
     */
    limit?: number
  }

  /**
   * goleta_ascend_data upsert
   */
  export type goleta_ascend_dataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goleta_ascend_data
     */
    select?: goleta_ascend_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the goleta_ascend_data
     */
    omit?: goleta_ascend_dataOmit<ExtArgs> | null
    /**
     * The filter to search for the goleta_ascend_data to update in case it exists.
     */
    where: goleta_ascend_dataWhereUniqueInput
    /**
     * In case the goleta_ascend_data found by the `where` argument doesn't exist, create a new goleta_ascend_data with this data.
     */
    create: XOR<goleta_ascend_dataCreateInput, goleta_ascend_dataUncheckedCreateInput>
    /**
     * In case the goleta_ascend_data was found with the provided `where` argument, update it with this data.
     */
    update: XOR<goleta_ascend_dataUpdateInput, goleta_ascend_dataUncheckedUpdateInput>
  }

  /**
   * goleta_ascend_data delete
   */
  export type goleta_ascend_dataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goleta_ascend_data
     */
    select?: goleta_ascend_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the goleta_ascend_data
     */
    omit?: goleta_ascend_dataOmit<ExtArgs> | null
    /**
     * Filter which goleta_ascend_data to delete.
     */
    where: goleta_ascend_dataWhereUniqueInput
  }

  /**
   * goleta_ascend_data deleteMany
   */
  export type goleta_ascend_dataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which goleta_ascend_data to delete
     */
    where?: goleta_ascend_dataWhereInput
    /**
     * Limit how many goleta_ascend_data to delete.
     */
    limit?: number
  }

  /**
   * goleta_ascend_data without action
   */
  export type goleta_ascend_dataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goleta_ascend_data
     */
    select?: goleta_ascend_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the goleta_ascend_data
     */
    omit?: goleta_ascend_dataOmit<ExtArgs> | null
  }


  /**
   * Model goleta_budgets
   */

  export type AggregateGoleta_budgets = {
    _count: Goleta_budgetsCountAggregateOutputType | null
    _avg: Goleta_budgetsAvgAggregateOutputType | null
    _sum: Goleta_budgetsSumAggregateOutputType | null
    _min: Goleta_budgetsMinAggregateOutputType | null
    _max: Goleta_budgetsMaxAggregateOutputType | null
  }

  export type Goleta_budgetsAvgAggregateOutputType = {
    value: Decimal | null
  }

  export type Goleta_budgetsSumAggregateOutputType = {
    value: Decimal | null
  }

  export type Goleta_budgetsMinAggregateOutputType = {
    utc_datetime_ib: Date | null
    local_datetime_ib: Date | null
    entity: string | null
    attribute: string | null
    value: Decimal | null
  }

  export type Goleta_budgetsMaxAggregateOutputType = {
    utc_datetime_ib: Date | null
    local_datetime_ib: Date | null
    entity: string | null
    attribute: string | null
    value: Decimal | null
  }

  export type Goleta_budgetsCountAggregateOutputType = {
    utc_datetime_ib: number
    local_datetime_ib: number
    entity: number
    attribute: number
    value: number
    _all: number
  }


  export type Goleta_budgetsAvgAggregateInputType = {
    value?: true
  }

  export type Goleta_budgetsSumAggregateInputType = {
    value?: true
  }

  export type Goleta_budgetsMinAggregateInputType = {
    utc_datetime_ib?: true
    local_datetime_ib?: true
    entity?: true
    attribute?: true
    value?: true
  }

  export type Goleta_budgetsMaxAggregateInputType = {
    utc_datetime_ib?: true
    local_datetime_ib?: true
    entity?: true
    attribute?: true
    value?: true
  }

  export type Goleta_budgetsCountAggregateInputType = {
    utc_datetime_ib?: true
    local_datetime_ib?: true
    entity?: true
    attribute?: true
    value?: true
    _all?: true
  }

  export type Goleta_budgetsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which goleta_budgets to aggregate.
     */
    where?: goleta_budgetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of goleta_budgets to fetch.
     */
    orderBy?: goleta_budgetsOrderByWithRelationInput | goleta_budgetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: goleta_budgetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` goleta_budgets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` goleta_budgets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned goleta_budgets
    **/
    _count?: true | Goleta_budgetsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Goleta_budgetsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Goleta_budgetsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Goleta_budgetsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Goleta_budgetsMaxAggregateInputType
  }

  export type GetGoleta_budgetsAggregateType<T extends Goleta_budgetsAggregateArgs> = {
        [P in keyof T & keyof AggregateGoleta_budgets]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGoleta_budgets[P]>
      : GetScalarType<T[P], AggregateGoleta_budgets[P]>
  }




  export type goleta_budgetsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: goleta_budgetsWhereInput
    orderBy?: goleta_budgetsOrderByWithAggregationInput | goleta_budgetsOrderByWithAggregationInput[]
    by: Goleta_budgetsScalarFieldEnum[] | Goleta_budgetsScalarFieldEnum
    having?: goleta_budgetsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Goleta_budgetsCountAggregateInputType | true
    _avg?: Goleta_budgetsAvgAggregateInputType
    _sum?: Goleta_budgetsSumAggregateInputType
    _min?: Goleta_budgetsMinAggregateInputType
    _max?: Goleta_budgetsMaxAggregateInputType
  }

  export type Goleta_budgetsGroupByOutputType = {
    utc_datetime_ib: Date
    local_datetime_ib: Date
    entity: string
    attribute: string
    value: Decimal | null
    _count: Goleta_budgetsCountAggregateOutputType | null
    _avg: Goleta_budgetsAvgAggregateOutputType | null
    _sum: Goleta_budgetsSumAggregateOutputType | null
    _min: Goleta_budgetsMinAggregateOutputType | null
    _max: Goleta_budgetsMaxAggregateOutputType | null
  }

  type GetGoleta_budgetsGroupByPayload<T extends goleta_budgetsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Goleta_budgetsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Goleta_budgetsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Goleta_budgetsGroupByOutputType[P]>
            : GetScalarType<T[P], Goleta_budgetsGroupByOutputType[P]>
        }
      >
    >


  export type goleta_budgetsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    utc_datetime_ib?: boolean
    local_datetime_ib?: boolean
    entity?: boolean
    attribute?: boolean
    value?: boolean
  }, ExtArgs["result"]["goleta_budgets"]>

  export type goleta_budgetsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    utc_datetime_ib?: boolean
    local_datetime_ib?: boolean
    entity?: boolean
    attribute?: boolean
    value?: boolean
  }, ExtArgs["result"]["goleta_budgets"]>

  export type goleta_budgetsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    utc_datetime_ib?: boolean
    local_datetime_ib?: boolean
    entity?: boolean
    attribute?: boolean
    value?: boolean
  }, ExtArgs["result"]["goleta_budgets"]>

  export type goleta_budgetsSelectScalar = {
    utc_datetime_ib?: boolean
    local_datetime_ib?: boolean
    entity?: boolean
    attribute?: boolean
    value?: boolean
  }

  export type goleta_budgetsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"utc_datetime_ib" | "local_datetime_ib" | "entity" | "attribute" | "value", ExtArgs["result"]["goleta_budgets"]>

  export type $goleta_budgetsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "goleta_budgets"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      utc_datetime_ib: Date
      local_datetime_ib: Date
      entity: string
      attribute: string
      value: Prisma.Decimal | null
    }, ExtArgs["result"]["goleta_budgets"]>
    composites: {}
  }

  type goleta_budgetsGetPayload<S extends boolean | null | undefined | goleta_budgetsDefaultArgs> = $Result.GetResult<Prisma.$goleta_budgetsPayload, S>

  type goleta_budgetsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<goleta_budgetsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Goleta_budgetsCountAggregateInputType | true
    }

  export interface goleta_budgetsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['goleta_budgets'], meta: { name: 'goleta_budgets' } }
    /**
     * Find zero or one Goleta_budgets that matches the filter.
     * @param {goleta_budgetsFindUniqueArgs} args - Arguments to find a Goleta_budgets
     * @example
     * // Get one Goleta_budgets
     * const goleta_budgets = await prisma.goleta_budgets.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends goleta_budgetsFindUniqueArgs>(args: SelectSubset<T, goleta_budgetsFindUniqueArgs<ExtArgs>>): Prisma__goleta_budgetsClient<$Result.GetResult<Prisma.$goleta_budgetsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Goleta_budgets that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {goleta_budgetsFindUniqueOrThrowArgs} args - Arguments to find a Goleta_budgets
     * @example
     * // Get one Goleta_budgets
     * const goleta_budgets = await prisma.goleta_budgets.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends goleta_budgetsFindUniqueOrThrowArgs>(args: SelectSubset<T, goleta_budgetsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__goleta_budgetsClient<$Result.GetResult<Prisma.$goleta_budgetsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Goleta_budgets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {goleta_budgetsFindFirstArgs} args - Arguments to find a Goleta_budgets
     * @example
     * // Get one Goleta_budgets
     * const goleta_budgets = await prisma.goleta_budgets.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends goleta_budgetsFindFirstArgs>(args?: SelectSubset<T, goleta_budgetsFindFirstArgs<ExtArgs>>): Prisma__goleta_budgetsClient<$Result.GetResult<Prisma.$goleta_budgetsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Goleta_budgets that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {goleta_budgetsFindFirstOrThrowArgs} args - Arguments to find a Goleta_budgets
     * @example
     * // Get one Goleta_budgets
     * const goleta_budgets = await prisma.goleta_budgets.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends goleta_budgetsFindFirstOrThrowArgs>(args?: SelectSubset<T, goleta_budgetsFindFirstOrThrowArgs<ExtArgs>>): Prisma__goleta_budgetsClient<$Result.GetResult<Prisma.$goleta_budgetsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Goleta_budgets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {goleta_budgetsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Goleta_budgets
     * const goleta_budgets = await prisma.goleta_budgets.findMany()
     * 
     * // Get first 10 Goleta_budgets
     * const goleta_budgets = await prisma.goleta_budgets.findMany({ take: 10 })
     * 
     * // Only select the `utc_datetime_ib`
     * const goleta_budgetsWithUtc_datetime_ibOnly = await prisma.goleta_budgets.findMany({ select: { utc_datetime_ib: true } })
     * 
     */
    findMany<T extends goleta_budgetsFindManyArgs>(args?: SelectSubset<T, goleta_budgetsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$goleta_budgetsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Goleta_budgets.
     * @param {goleta_budgetsCreateArgs} args - Arguments to create a Goleta_budgets.
     * @example
     * // Create one Goleta_budgets
     * const Goleta_budgets = await prisma.goleta_budgets.create({
     *   data: {
     *     // ... data to create a Goleta_budgets
     *   }
     * })
     * 
     */
    create<T extends goleta_budgetsCreateArgs>(args: SelectSubset<T, goleta_budgetsCreateArgs<ExtArgs>>): Prisma__goleta_budgetsClient<$Result.GetResult<Prisma.$goleta_budgetsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Goleta_budgets.
     * @param {goleta_budgetsCreateManyArgs} args - Arguments to create many Goleta_budgets.
     * @example
     * // Create many Goleta_budgets
     * const goleta_budgets = await prisma.goleta_budgets.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends goleta_budgetsCreateManyArgs>(args?: SelectSubset<T, goleta_budgetsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Goleta_budgets and returns the data saved in the database.
     * @param {goleta_budgetsCreateManyAndReturnArgs} args - Arguments to create many Goleta_budgets.
     * @example
     * // Create many Goleta_budgets
     * const goleta_budgets = await prisma.goleta_budgets.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Goleta_budgets and only return the `utc_datetime_ib`
     * const goleta_budgetsWithUtc_datetime_ibOnly = await prisma.goleta_budgets.createManyAndReturn({
     *   select: { utc_datetime_ib: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends goleta_budgetsCreateManyAndReturnArgs>(args?: SelectSubset<T, goleta_budgetsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$goleta_budgetsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Goleta_budgets.
     * @param {goleta_budgetsDeleteArgs} args - Arguments to delete one Goleta_budgets.
     * @example
     * // Delete one Goleta_budgets
     * const Goleta_budgets = await prisma.goleta_budgets.delete({
     *   where: {
     *     // ... filter to delete one Goleta_budgets
     *   }
     * })
     * 
     */
    delete<T extends goleta_budgetsDeleteArgs>(args: SelectSubset<T, goleta_budgetsDeleteArgs<ExtArgs>>): Prisma__goleta_budgetsClient<$Result.GetResult<Prisma.$goleta_budgetsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Goleta_budgets.
     * @param {goleta_budgetsUpdateArgs} args - Arguments to update one Goleta_budgets.
     * @example
     * // Update one Goleta_budgets
     * const goleta_budgets = await prisma.goleta_budgets.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends goleta_budgetsUpdateArgs>(args: SelectSubset<T, goleta_budgetsUpdateArgs<ExtArgs>>): Prisma__goleta_budgetsClient<$Result.GetResult<Prisma.$goleta_budgetsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Goleta_budgets.
     * @param {goleta_budgetsDeleteManyArgs} args - Arguments to filter Goleta_budgets to delete.
     * @example
     * // Delete a few Goleta_budgets
     * const { count } = await prisma.goleta_budgets.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends goleta_budgetsDeleteManyArgs>(args?: SelectSubset<T, goleta_budgetsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Goleta_budgets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {goleta_budgetsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Goleta_budgets
     * const goleta_budgets = await prisma.goleta_budgets.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends goleta_budgetsUpdateManyArgs>(args: SelectSubset<T, goleta_budgetsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Goleta_budgets and returns the data updated in the database.
     * @param {goleta_budgetsUpdateManyAndReturnArgs} args - Arguments to update many Goleta_budgets.
     * @example
     * // Update many Goleta_budgets
     * const goleta_budgets = await prisma.goleta_budgets.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Goleta_budgets and only return the `utc_datetime_ib`
     * const goleta_budgetsWithUtc_datetime_ibOnly = await prisma.goleta_budgets.updateManyAndReturn({
     *   select: { utc_datetime_ib: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends goleta_budgetsUpdateManyAndReturnArgs>(args: SelectSubset<T, goleta_budgetsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$goleta_budgetsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Goleta_budgets.
     * @param {goleta_budgetsUpsertArgs} args - Arguments to update or create a Goleta_budgets.
     * @example
     * // Update or create a Goleta_budgets
     * const goleta_budgets = await prisma.goleta_budgets.upsert({
     *   create: {
     *     // ... data to create a Goleta_budgets
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Goleta_budgets we want to update
     *   }
     * })
     */
    upsert<T extends goleta_budgetsUpsertArgs>(args: SelectSubset<T, goleta_budgetsUpsertArgs<ExtArgs>>): Prisma__goleta_budgetsClient<$Result.GetResult<Prisma.$goleta_budgetsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Goleta_budgets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {goleta_budgetsCountArgs} args - Arguments to filter Goleta_budgets to count.
     * @example
     * // Count the number of Goleta_budgets
     * const count = await prisma.goleta_budgets.count({
     *   where: {
     *     // ... the filter for the Goleta_budgets we want to count
     *   }
     * })
    **/
    count<T extends goleta_budgetsCountArgs>(
      args?: Subset<T, goleta_budgetsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Goleta_budgetsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Goleta_budgets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Goleta_budgetsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Goleta_budgetsAggregateArgs>(args: Subset<T, Goleta_budgetsAggregateArgs>): Prisma.PrismaPromise<GetGoleta_budgetsAggregateType<T>>

    /**
     * Group by Goleta_budgets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {goleta_budgetsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends goleta_budgetsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: goleta_budgetsGroupByArgs['orderBy'] }
        : { orderBy?: goleta_budgetsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, goleta_budgetsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGoleta_budgetsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the goleta_budgets model
   */
  readonly fields: goleta_budgetsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for goleta_budgets.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__goleta_budgetsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the goleta_budgets model
   */
  interface goleta_budgetsFieldRefs {
    readonly utc_datetime_ib: FieldRef<"goleta_budgets", 'DateTime'>
    readonly local_datetime_ib: FieldRef<"goleta_budgets", 'DateTime'>
    readonly entity: FieldRef<"goleta_budgets", 'String'>
    readonly attribute: FieldRef<"goleta_budgets", 'String'>
    readonly value: FieldRef<"goleta_budgets", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * goleta_budgets findUnique
   */
  export type goleta_budgetsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goleta_budgets
     */
    select?: goleta_budgetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the goleta_budgets
     */
    omit?: goleta_budgetsOmit<ExtArgs> | null
    /**
     * Filter, which goleta_budgets to fetch.
     */
    where: goleta_budgetsWhereUniqueInput
  }

  /**
   * goleta_budgets findUniqueOrThrow
   */
  export type goleta_budgetsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goleta_budgets
     */
    select?: goleta_budgetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the goleta_budgets
     */
    omit?: goleta_budgetsOmit<ExtArgs> | null
    /**
     * Filter, which goleta_budgets to fetch.
     */
    where: goleta_budgetsWhereUniqueInput
  }

  /**
   * goleta_budgets findFirst
   */
  export type goleta_budgetsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goleta_budgets
     */
    select?: goleta_budgetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the goleta_budgets
     */
    omit?: goleta_budgetsOmit<ExtArgs> | null
    /**
     * Filter, which goleta_budgets to fetch.
     */
    where?: goleta_budgetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of goleta_budgets to fetch.
     */
    orderBy?: goleta_budgetsOrderByWithRelationInput | goleta_budgetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for goleta_budgets.
     */
    cursor?: goleta_budgetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` goleta_budgets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` goleta_budgets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of goleta_budgets.
     */
    distinct?: Goleta_budgetsScalarFieldEnum | Goleta_budgetsScalarFieldEnum[]
  }

  /**
   * goleta_budgets findFirstOrThrow
   */
  export type goleta_budgetsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goleta_budgets
     */
    select?: goleta_budgetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the goleta_budgets
     */
    omit?: goleta_budgetsOmit<ExtArgs> | null
    /**
     * Filter, which goleta_budgets to fetch.
     */
    where?: goleta_budgetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of goleta_budgets to fetch.
     */
    orderBy?: goleta_budgetsOrderByWithRelationInput | goleta_budgetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for goleta_budgets.
     */
    cursor?: goleta_budgetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` goleta_budgets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` goleta_budgets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of goleta_budgets.
     */
    distinct?: Goleta_budgetsScalarFieldEnum | Goleta_budgetsScalarFieldEnum[]
  }

  /**
   * goleta_budgets findMany
   */
  export type goleta_budgetsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goleta_budgets
     */
    select?: goleta_budgetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the goleta_budgets
     */
    omit?: goleta_budgetsOmit<ExtArgs> | null
    /**
     * Filter, which goleta_budgets to fetch.
     */
    where?: goleta_budgetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of goleta_budgets to fetch.
     */
    orderBy?: goleta_budgetsOrderByWithRelationInput | goleta_budgetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing goleta_budgets.
     */
    cursor?: goleta_budgetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` goleta_budgets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` goleta_budgets.
     */
    skip?: number
    distinct?: Goleta_budgetsScalarFieldEnum | Goleta_budgetsScalarFieldEnum[]
  }

  /**
   * goleta_budgets create
   */
  export type goleta_budgetsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goleta_budgets
     */
    select?: goleta_budgetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the goleta_budgets
     */
    omit?: goleta_budgetsOmit<ExtArgs> | null
    /**
     * The data needed to create a goleta_budgets.
     */
    data: XOR<goleta_budgetsCreateInput, goleta_budgetsUncheckedCreateInput>
  }

  /**
   * goleta_budgets createMany
   */
  export type goleta_budgetsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many goleta_budgets.
     */
    data: goleta_budgetsCreateManyInput | goleta_budgetsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * goleta_budgets createManyAndReturn
   */
  export type goleta_budgetsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goleta_budgets
     */
    select?: goleta_budgetsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the goleta_budgets
     */
    omit?: goleta_budgetsOmit<ExtArgs> | null
    /**
     * The data used to create many goleta_budgets.
     */
    data: goleta_budgetsCreateManyInput | goleta_budgetsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * goleta_budgets update
   */
  export type goleta_budgetsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goleta_budgets
     */
    select?: goleta_budgetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the goleta_budgets
     */
    omit?: goleta_budgetsOmit<ExtArgs> | null
    /**
     * The data needed to update a goleta_budgets.
     */
    data: XOR<goleta_budgetsUpdateInput, goleta_budgetsUncheckedUpdateInput>
    /**
     * Choose, which goleta_budgets to update.
     */
    where: goleta_budgetsWhereUniqueInput
  }

  /**
   * goleta_budgets updateMany
   */
  export type goleta_budgetsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update goleta_budgets.
     */
    data: XOR<goleta_budgetsUpdateManyMutationInput, goleta_budgetsUncheckedUpdateManyInput>
    /**
     * Filter which goleta_budgets to update
     */
    where?: goleta_budgetsWhereInput
    /**
     * Limit how many goleta_budgets to update.
     */
    limit?: number
  }

  /**
   * goleta_budgets updateManyAndReturn
   */
  export type goleta_budgetsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goleta_budgets
     */
    select?: goleta_budgetsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the goleta_budgets
     */
    omit?: goleta_budgetsOmit<ExtArgs> | null
    /**
     * The data used to update goleta_budgets.
     */
    data: XOR<goleta_budgetsUpdateManyMutationInput, goleta_budgetsUncheckedUpdateManyInput>
    /**
     * Filter which goleta_budgets to update
     */
    where?: goleta_budgetsWhereInput
    /**
     * Limit how many goleta_budgets to update.
     */
    limit?: number
  }

  /**
   * goleta_budgets upsert
   */
  export type goleta_budgetsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goleta_budgets
     */
    select?: goleta_budgetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the goleta_budgets
     */
    omit?: goleta_budgetsOmit<ExtArgs> | null
    /**
     * The filter to search for the goleta_budgets to update in case it exists.
     */
    where: goleta_budgetsWhereUniqueInput
    /**
     * In case the goleta_budgets found by the `where` argument doesn't exist, create a new goleta_budgets with this data.
     */
    create: XOR<goleta_budgetsCreateInput, goleta_budgetsUncheckedCreateInput>
    /**
     * In case the goleta_budgets was found with the provided `where` argument, update it with this data.
     */
    update: XOR<goleta_budgetsUpdateInput, goleta_budgetsUncheckedUpdateInput>
  }

  /**
   * goleta_budgets delete
   */
  export type goleta_budgetsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goleta_budgets
     */
    select?: goleta_budgetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the goleta_budgets
     */
    omit?: goleta_budgetsOmit<ExtArgs> | null
    /**
     * Filter which goleta_budgets to delete.
     */
    where: goleta_budgetsWhereUniqueInput
  }

  /**
   * goleta_budgets deleteMany
   */
  export type goleta_budgetsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which goleta_budgets to delete
     */
    where?: goleta_budgetsWhereInput
    /**
     * Limit how many goleta_budgets to delete.
     */
    limit?: number
  }

  /**
   * goleta_budgets without action
   */
  export type goleta_budgetsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goleta_budgets
     */
    select?: goleta_budgetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the goleta_budgets
     */
    omit?: goleta_budgetsOmit<ExtArgs> | null
  }


  /**
   * Model goleta_charging_constraints
   */

  export type AggregateGoleta_charging_constraints = {
    _count: Goleta_charging_constraintsCountAggregateOutputType | null
    _avg: Goleta_charging_constraintsAvgAggregateOutputType | null
    _sum: Goleta_charging_constraintsSumAggregateOutputType | null
    _min: Goleta_charging_constraintsMinAggregateOutputType | null
    _max: Goleta_charging_constraintsMaxAggregateOutputType | null
  }

  export type Goleta_charging_constraintsAvgAggregateOutputType = {
    year: number | null
    month: number | null
    hour: number | null
    value: Decimal | null
  }

  export type Goleta_charging_constraintsSumAggregateOutputType = {
    year: number | null
    month: number | null
    hour: number | null
    value: Decimal | null
  }

  export type Goleta_charging_constraintsMinAggregateOutputType = {
    year: number | null
    month: number | null
    hour: number | null
    value: Decimal | null
  }

  export type Goleta_charging_constraintsMaxAggregateOutputType = {
    year: number | null
    month: number | null
    hour: number | null
    value: Decimal | null
  }

  export type Goleta_charging_constraintsCountAggregateOutputType = {
    year: number
    month: number
    hour: number
    value: number
    _all: number
  }


  export type Goleta_charging_constraintsAvgAggregateInputType = {
    year?: true
    month?: true
    hour?: true
    value?: true
  }

  export type Goleta_charging_constraintsSumAggregateInputType = {
    year?: true
    month?: true
    hour?: true
    value?: true
  }

  export type Goleta_charging_constraintsMinAggregateInputType = {
    year?: true
    month?: true
    hour?: true
    value?: true
  }

  export type Goleta_charging_constraintsMaxAggregateInputType = {
    year?: true
    month?: true
    hour?: true
    value?: true
  }

  export type Goleta_charging_constraintsCountAggregateInputType = {
    year?: true
    month?: true
    hour?: true
    value?: true
    _all?: true
  }

  export type Goleta_charging_constraintsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which goleta_charging_constraints to aggregate.
     */
    where?: goleta_charging_constraintsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of goleta_charging_constraints to fetch.
     */
    orderBy?: goleta_charging_constraintsOrderByWithRelationInput | goleta_charging_constraintsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: goleta_charging_constraintsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` goleta_charging_constraints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` goleta_charging_constraints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned goleta_charging_constraints
    **/
    _count?: true | Goleta_charging_constraintsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Goleta_charging_constraintsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Goleta_charging_constraintsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Goleta_charging_constraintsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Goleta_charging_constraintsMaxAggregateInputType
  }

  export type GetGoleta_charging_constraintsAggregateType<T extends Goleta_charging_constraintsAggregateArgs> = {
        [P in keyof T & keyof AggregateGoleta_charging_constraints]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGoleta_charging_constraints[P]>
      : GetScalarType<T[P], AggregateGoleta_charging_constraints[P]>
  }




  export type goleta_charging_constraintsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: goleta_charging_constraintsWhereInput
    orderBy?: goleta_charging_constraintsOrderByWithAggregationInput | goleta_charging_constraintsOrderByWithAggregationInput[]
    by: Goleta_charging_constraintsScalarFieldEnum[] | Goleta_charging_constraintsScalarFieldEnum
    having?: goleta_charging_constraintsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Goleta_charging_constraintsCountAggregateInputType | true
    _avg?: Goleta_charging_constraintsAvgAggregateInputType
    _sum?: Goleta_charging_constraintsSumAggregateInputType
    _min?: Goleta_charging_constraintsMinAggregateInputType
    _max?: Goleta_charging_constraintsMaxAggregateInputType
  }

  export type Goleta_charging_constraintsGroupByOutputType = {
    year: number
    month: number
    hour: number
    value: Decimal | null
    _count: Goleta_charging_constraintsCountAggregateOutputType | null
    _avg: Goleta_charging_constraintsAvgAggregateOutputType | null
    _sum: Goleta_charging_constraintsSumAggregateOutputType | null
    _min: Goleta_charging_constraintsMinAggregateOutputType | null
    _max: Goleta_charging_constraintsMaxAggregateOutputType | null
  }

  type GetGoleta_charging_constraintsGroupByPayload<T extends goleta_charging_constraintsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Goleta_charging_constraintsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Goleta_charging_constraintsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Goleta_charging_constraintsGroupByOutputType[P]>
            : GetScalarType<T[P], Goleta_charging_constraintsGroupByOutputType[P]>
        }
      >
    >


  export type goleta_charging_constraintsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    year?: boolean
    month?: boolean
    hour?: boolean
    value?: boolean
  }, ExtArgs["result"]["goleta_charging_constraints"]>

  export type goleta_charging_constraintsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    year?: boolean
    month?: boolean
    hour?: boolean
    value?: boolean
  }, ExtArgs["result"]["goleta_charging_constraints"]>

  export type goleta_charging_constraintsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    year?: boolean
    month?: boolean
    hour?: boolean
    value?: boolean
  }, ExtArgs["result"]["goleta_charging_constraints"]>

  export type goleta_charging_constraintsSelectScalar = {
    year?: boolean
    month?: boolean
    hour?: boolean
    value?: boolean
  }

  export type goleta_charging_constraintsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"year" | "month" | "hour" | "value", ExtArgs["result"]["goleta_charging_constraints"]>

  export type $goleta_charging_constraintsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "goleta_charging_constraints"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      year: number
      month: number
      hour: number
      value: Prisma.Decimal | null
    }, ExtArgs["result"]["goleta_charging_constraints"]>
    composites: {}
  }

  type goleta_charging_constraintsGetPayload<S extends boolean | null | undefined | goleta_charging_constraintsDefaultArgs> = $Result.GetResult<Prisma.$goleta_charging_constraintsPayload, S>

  type goleta_charging_constraintsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<goleta_charging_constraintsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Goleta_charging_constraintsCountAggregateInputType | true
    }

  export interface goleta_charging_constraintsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['goleta_charging_constraints'], meta: { name: 'goleta_charging_constraints' } }
    /**
     * Find zero or one Goleta_charging_constraints that matches the filter.
     * @param {goleta_charging_constraintsFindUniqueArgs} args - Arguments to find a Goleta_charging_constraints
     * @example
     * // Get one Goleta_charging_constraints
     * const goleta_charging_constraints = await prisma.goleta_charging_constraints.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends goleta_charging_constraintsFindUniqueArgs>(args: SelectSubset<T, goleta_charging_constraintsFindUniqueArgs<ExtArgs>>): Prisma__goleta_charging_constraintsClient<$Result.GetResult<Prisma.$goleta_charging_constraintsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Goleta_charging_constraints that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {goleta_charging_constraintsFindUniqueOrThrowArgs} args - Arguments to find a Goleta_charging_constraints
     * @example
     * // Get one Goleta_charging_constraints
     * const goleta_charging_constraints = await prisma.goleta_charging_constraints.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends goleta_charging_constraintsFindUniqueOrThrowArgs>(args: SelectSubset<T, goleta_charging_constraintsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__goleta_charging_constraintsClient<$Result.GetResult<Prisma.$goleta_charging_constraintsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Goleta_charging_constraints that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {goleta_charging_constraintsFindFirstArgs} args - Arguments to find a Goleta_charging_constraints
     * @example
     * // Get one Goleta_charging_constraints
     * const goleta_charging_constraints = await prisma.goleta_charging_constraints.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends goleta_charging_constraintsFindFirstArgs>(args?: SelectSubset<T, goleta_charging_constraintsFindFirstArgs<ExtArgs>>): Prisma__goleta_charging_constraintsClient<$Result.GetResult<Prisma.$goleta_charging_constraintsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Goleta_charging_constraints that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {goleta_charging_constraintsFindFirstOrThrowArgs} args - Arguments to find a Goleta_charging_constraints
     * @example
     * // Get one Goleta_charging_constraints
     * const goleta_charging_constraints = await prisma.goleta_charging_constraints.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends goleta_charging_constraintsFindFirstOrThrowArgs>(args?: SelectSubset<T, goleta_charging_constraintsFindFirstOrThrowArgs<ExtArgs>>): Prisma__goleta_charging_constraintsClient<$Result.GetResult<Prisma.$goleta_charging_constraintsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Goleta_charging_constraints that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {goleta_charging_constraintsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Goleta_charging_constraints
     * const goleta_charging_constraints = await prisma.goleta_charging_constraints.findMany()
     * 
     * // Get first 10 Goleta_charging_constraints
     * const goleta_charging_constraints = await prisma.goleta_charging_constraints.findMany({ take: 10 })
     * 
     * // Only select the `year`
     * const goleta_charging_constraintsWithYearOnly = await prisma.goleta_charging_constraints.findMany({ select: { year: true } })
     * 
     */
    findMany<T extends goleta_charging_constraintsFindManyArgs>(args?: SelectSubset<T, goleta_charging_constraintsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$goleta_charging_constraintsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Goleta_charging_constraints.
     * @param {goleta_charging_constraintsCreateArgs} args - Arguments to create a Goleta_charging_constraints.
     * @example
     * // Create one Goleta_charging_constraints
     * const Goleta_charging_constraints = await prisma.goleta_charging_constraints.create({
     *   data: {
     *     // ... data to create a Goleta_charging_constraints
     *   }
     * })
     * 
     */
    create<T extends goleta_charging_constraintsCreateArgs>(args: SelectSubset<T, goleta_charging_constraintsCreateArgs<ExtArgs>>): Prisma__goleta_charging_constraintsClient<$Result.GetResult<Prisma.$goleta_charging_constraintsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Goleta_charging_constraints.
     * @param {goleta_charging_constraintsCreateManyArgs} args - Arguments to create many Goleta_charging_constraints.
     * @example
     * // Create many Goleta_charging_constraints
     * const goleta_charging_constraints = await prisma.goleta_charging_constraints.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends goleta_charging_constraintsCreateManyArgs>(args?: SelectSubset<T, goleta_charging_constraintsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Goleta_charging_constraints and returns the data saved in the database.
     * @param {goleta_charging_constraintsCreateManyAndReturnArgs} args - Arguments to create many Goleta_charging_constraints.
     * @example
     * // Create many Goleta_charging_constraints
     * const goleta_charging_constraints = await prisma.goleta_charging_constraints.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Goleta_charging_constraints and only return the `year`
     * const goleta_charging_constraintsWithYearOnly = await prisma.goleta_charging_constraints.createManyAndReturn({
     *   select: { year: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends goleta_charging_constraintsCreateManyAndReturnArgs>(args?: SelectSubset<T, goleta_charging_constraintsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$goleta_charging_constraintsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Goleta_charging_constraints.
     * @param {goleta_charging_constraintsDeleteArgs} args - Arguments to delete one Goleta_charging_constraints.
     * @example
     * // Delete one Goleta_charging_constraints
     * const Goleta_charging_constraints = await prisma.goleta_charging_constraints.delete({
     *   where: {
     *     // ... filter to delete one Goleta_charging_constraints
     *   }
     * })
     * 
     */
    delete<T extends goleta_charging_constraintsDeleteArgs>(args: SelectSubset<T, goleta_charging_constraintsDeleteArgs<ExtArgs>>): Prisma__goleta_charging_constraintsClient<$Result.GetResult<Prisma.$goleta_charging_constraintsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Goleta_charging_constraints.
     * @param {goleta_charging_constraintsUpdateArgs} args - Arguments to update one Goleta_charging_constraints.
     * @example
     * // Update one Goleta_charging_constraints
     * const goleta_charging_constraints = await prisma.goleta_charging_constraints.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends goleta_charging_constraintsUpdateArgs>(args: SelectSubset<T, goleta_charging_constraintsUpdateArgs<ExtArgs>>): Prisma__goleta_charging_constraintsClient<$Result.GetResult<Prisma.$goleta_charging_constraintsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Goleta_charging_constraints.
     * @param {goleta_charging_constraintsDeleteManyArgs} args - Arguments to filter Goleta_charging_constraints to delete.
     * @example
     * // Delete a few Goleta_charging_constraints
     * const { count } = await prisma.goleta_charging_constraints.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends goleta_charging_constraintsDeleteManyArgs>(args?: SelectSubset<T, goleta_charging_constraintsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Goleta_charging_constraints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {goleta_charging_constraintsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Goleta_charging_constraints
     * const goleta_charging_constraints = await prisma.goleta_charging_constraints.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends goleta_charging_constraintsUpdateManyArgs>(args: SelectSubset<T, goleta_charging_constraintsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Goleta_charging_constraints and returns the data updated in the database.
     * @param {goleta_charging_constraintsUpdateManyAndReturnArgs} args - Arguments to update many Goleta_charging_constraints.
     * @example
     * // Update many Goleta_charging_constraints
     * const goleta_charging_constraints = await prisma.goleta_charging_constraints.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Goleta_charging_constraints and only return the `year`
     * const goleta_charging_constraintsWithYearOnly = await prisma.goleta_charging_constraints.updateManyAndReturn({
     *   select: { year: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends goleta_charging_constraintsUpdateManyAndReturnArgs>(args: SelectSubset<T, goleta_charging_constraintsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$goleta_charging_constraintsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Goleta_charging_constraints.
     * @param {goleta_charging_constraintsUpsertArgs} args - Arguments to update or create a Goleta_charging_constraints.
     * @example
     * // Update or create a Goleta_charging_constraints
     * const goleta_charging_constraints = await prisma.goleta_charging_constraints.upsert({
     *   create: {
     *     // ... data to create a Goleta_charging_constraints
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Goleta_charging_constraints we want to update
     *   }
     * })
     */
    upsert<T extends goleta_charging_constraintsUpsertArgs>(args: SelectSubset<T, goleta_charging_constraintsUpsertArgs<ExtArgs>>): Prisma__goleta_charging_constraintsClient<$Result.GetResult<Prisma.$goleta_charging_constraintsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Goleta_charging_constraints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {goleta_charging_constraintsCountArgs} args - Arguments to filter Goleta_charging_constraints to count.
     * @example
     * // Count the number of Goleta_charging_constraints
     * const count = await prisma.goleta_charging_constraints.count({
     *   where: {
     *     // ... the filter for the Goleta_charging_constraints we want to count
     *   }
     * })
    **/
    count<T extends goleta_charging_constraintsCountArgs>(
      args?: Subset<T, goleta_charging_constraintsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Goleta_charging_constraintsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Goleta_charging_constraints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Goleta_charging_constraintsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Goleta_charging_constraintsAggregateArgs>(args: Subset<T, Goleta_charging_constraintsAggregateArgs>): Prisma.PrismaPromise<GetGoleta_charging_constraintsAggregateType<T>>

    /**
     * Group by Goleta_charging_constraints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {goleta_charging_constraintsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends goleta_charging_constraintsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: goleta_charging_constraintsGroupByArgs['orderBy'] }
        : { orderBy?: goleta_charging_constraintsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, goleta_charging_constraintsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGoleta_charging_constraintsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the goleta_charging_constraints model
   */
  readonly fields: goleta_charging_constraintsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for goleta_charging_constraints.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__goleta_charging_constraintsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the goleta_charging_constraints model
   */
  interface goleta_charging_constraintsFieldRefs {
    readonly year: FieldRef<"goleta_charging_constraints", 'Int'>
    readonly month: FieldRef<"goleta_charging_constraints", 'Int'>
    readonly hour: FieldRef<"goleta_charging_constraints", 'Int'>
    readonly value: FieldRef<"goleta_charging_constraints", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * goleta_charging_constraints findUnique
   */
  export type goleta_charging_constraintsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goleta_charging_constraints
     */
    select?: goleta_charging_constraintsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the goleta_charging_constraints
     */
    omit?: goleta_charging_constraintsOmit<ExtArgs> | null
    /**
     * Filter, which goleta_charging_constraints to fetch.
     */
    where: goleta_charging_constraintsWhereUniqueInput
  }

  /**
   * goleta_charging_constraints findUniqueOrThrow
   */
  export type goleta_charging_constraintsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goleta_charging_constraints
     */
    select?: goleta_charging_constraintsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the goleta_charging_constraints
     */
    omit?: goleta_charging_constraintsOmit<ExtArgs> | null
    /**
     * Filter, which goleta_charging_constraints to fetch.
     */
    where: goleta_charging_constraintsWhereUniqueInput
  }

  /**
   * goleta_charging_constraints findFirst
   */
  export type goleta_charging_constraintsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goleta_charging_constraints
     */
    select?: goleta_charging_constraintsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the goleta_charging_constraints
     */
    omit?: goleta_charging_constraintsOmit<ExtArgs> | null
    /**
     * Filter, which goleta_charging_constraints to fetch.
     */
    where?: goleta_charging_constraintsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of goleta_charging_constraints to fetch.
     */
    orderBy?: goleta_charging_constraintsOrderByWithRelationInput | goleta_charging_constraintsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for goleta_charging_constraints.
     */
    cursor?: goleta_charging_constraintsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` goleta_charging_constraints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` goleta_charging_constraints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of goleta_charging_constraints.
     */
    distinct?: Goleta_charging_constraintsScalarFieldEnum | Goleta_charging_constraintsScalarFieldEnum[]
  }

  /**
   * goleta_charging_constraints findFirstOrThrow
   */
  export type goleta_charging_constraintsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goleta_charging_constraints
     */
    select?: goleta_charging_constraintsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the goleta_charging_constraints
     */
    omit?: goleta_charging_constraintsOmit<ExtArgs> | null
    /**
     * Filter, which goleta_charging_constraints to fetch.
     */
    where?: goleta_charging_constraintsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of goleta_charging_constraints to fetch.
     */
    orderBy?: goleta_charging_constraintsOrderByWithRelationInput | goleta_charging_constraintsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for goleta_charging_constraints.
     */
    cursor?: goleta_charging_constraintsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` goleta_charging_constraints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` goleta_charging_constraints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of goleta_charging_constraints.
     */
    distinct?: Goleta_charging_constraintsScalarFieldEnum | Goleta_charging_constraintsScalarFieldEnum[]
  }

  /**
   * goleta_charging_constraints findMany
   */
  export type goleta_charging_constraintsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goleta_charging_constraints
     */
    select?: goleta_charging_constraintsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the goleta_charging_constraints
     */
    omit?: goleta_charging_constraintsOmit<ExtArgs> | null
    /**
     * Filter, which goleta_charging_constraints to fetch.
     */
    where?: goleta_charging_constraintsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of goleta_charging_constraints to fetch.
     */
    orderBy?: goleta_charging_constraintsOrderByWithRelationInput | goleta_charging_constraintsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing goleta_charging_constraints.
     */
    cursor?: goleta_charging_constraintsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` goleta_charging_constraints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` goleta_charging_constraints.
     */
    skip?: number
    distinct?: Goleta_charging_constraintsScalarFieldEnum | Goleta_charging_constraintsScalarFieldEnum[]
  }

  /**
   * goleta_charging_constraints create
   */
  export type goleta_charging_constraintsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goleta_charging_constraints
     */
    select?: goleta_charging_constraintsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the goleta_charging_constraints
     */
    omit?: goleta_charging_constraintsOmit<ExtArgs> | null
    /**
     * The data needed to create a goleta_charging_constraints.
     */
    data: XOR<goleta_charging_constraintsCreateInput, goleta_charging_constraintsUncheckedCreateInput>
  }

  /**
   * goleta_charging_constraints createMany
   */
  export type goleta_charging_constraintsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many goleta_charging_constraints.
     */
    data: goleta_charging_constraintsCreateManyInput | goleta_charging_constraintsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * goleta_charging_constraints createManyAndReturn
   */
  export type goleta_charging_constraintsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goleta_charging_constraints
     */
    select?: goleta_charging_constraintsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the goleta_charging_constraints
     */
    omit?: goleta_charging_constraintsOmit<ExtArgs> | null
    /**
     * The data used to create many goleta_charging_constraints.
     */
    data: goleta_charging_constraintsCreateManyInput | goleta_charging_constraintsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * goleta_charging_constraints update
   */
  export type goleta_charging_constraintsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goleta_charging_constraints
     */
    select?: goleta_charging_constraintsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the goleta_charging_constraints
     */
    omit?: goleta_charging_constraintsOmit<ExtArgs> | null
    /**
     * The data needed to update a goleta_charging_constraints.
     */
    data: XOR<goleta_charging_constraintsUpdateInput, goleta_charging_constraintsUncheckedUpdateInput>
    /**
     * Choose, which goleta_charging_constraints to update.
     */
    where: goleta_charging_constraintsWhereUniqueInput
  }

  /**
   * goleta_charging_constraints updateMany
   */
  export type goleta_charging_constraintsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update goleta_charging_constraints.
     */
    data: XOR<goleta_charging_constraintsUpdateManyMutationInput, goleta_charging_constraintsUncheckedUpdateManyInput>
    /**
     * Filter which goleta_charging_constraints to update
     */
    where?: goleta_charging_constraintsWhereInput
    /**
     * Limit how many goleta_charging_constraints to update.
     */
    limit?: number
  }

  /**
   * goleta_charging_constraints updateManyAndReturn
   */
  export type goleta_charging_constraintsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goleta_charging_constraints
     */
    select?: goleta_charging_constraintsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the goleta_charging_constraints
     */
    omit?: goleta_charging_constraintsOmit<ExtArgs> | null
    /**
     * The data used to update goleta_charging_constraints.
     */
    data: XOR<goleta_charging_constraintsUpdateManyMutationInput, goleta_charging_constraintsUncheckedUpdateManyInput>
    /**
     * Filter which goleta_charging_constraints to update
     */
    where?: goleta_charging_constraintsWhereInput
    /**
     * Limit how many goleta_charging_constraints to update.
     */
    limit?: number
  }

  /**
   * goleta_charging_constraints upsert
   */
  export type goleta_charging_constraintsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goleta_charging_constraints
     */
    select?: goleta_charging_constraintsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the goleta_charging_constraints
     */
    omit?: goleta_charging_constraintsOmit<ExtArgs> | null
    /**
     * The filter to search for the goleta_charging_constraints to update in case it exists.
     */
    where: goleta_charging_constraintsWhereUniqueInput
    /**
     * In case the goleta_charging_constraints found by the `where` argument doesn't exist, create a new goleta_charging_constraints with this data.
     */
    create: XOR<goleta_charging_constraintsCreateInput, goleta_charging_constraintsUncheckedCreateInput>
    /**
     * In case the goleta_charging_constraints was found with the provided `where` argument, update it with this data.
     */
    update: XOR<goleta_charging_constraintsUpdateInput, goleta_charging_constraintsUncheckedUpdateInput>
  }

  /**
   * goleta_charging_constraints delete
   */
  export type goleta_charging_constraintsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goleta_charging_constraints
     */
    select?: goleta_charging_constraintsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the goleta_charging_constraints
     */
    omit?: goleta_charging_constraintsOmit<ExtArgs> | null
    /**
     * Filter which goleta_charging_constraints to delete.
     */
    where: goleta_charging_constraintsWhereUniqueInput
  }

  /**
   * goleta_charging_constraints deleteMany
   */
  export type goleta_charging_constraintsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which goleta_charging_constraints to delete
     */
    where?: goleta_charging_constraintsWhereInput
    /**
     * Limit how many goleta_charging_constraints to delete.
     */
    limit?: number
  }

  /**
   * goleta_charging_constraints without action
   */
  export type goleta_charging_constraintsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goleta_charging_constraints
     */
    select?: goleta_charging_constraintsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the goleta_charging_constraints
     */
    omit?: goleta_charging_constraintsOmit<ExtArgs> | null
  }


  /**
   * Model goleta_operational_data
   */

  export type AggregateGoleta_operational_data = {
    _count: Goleta_operational_dataCountAggregateOutputType | null
    _avg: Goleta_operational_dataAvgAggregateOutputType | null
    _sum: Goleta_operational_dataSumAggregateOutputType | null
    _min: Goleta_operational_dataMinAggregateOutputType | null
    _max: Goleta_operational_dataMaxAggregateOutputType | null
  }

  export type Goleta_operational_dataAvgAggregateOutputType = {
    value: number | null
  }

  export type Goleta_operational_dataSumAggregateOutputType = {
    value: number | null
  }

  export type Goleta_operational_dataMinAggregateOutputType = {
    utc_datetime_ib: Date | null
    local_datetime_ib: Date | null
    entity: string | null
    attribute: string | null
    value: number | null
  }

  export type Goleta_operational_dataMaxAggregateOutputType = {
    utc_datetime_ib: Date | null
    local_datetime_ib: Date | null
    entity: string | null
    attribute: string | null
    value: number | null
  }

  export type Goleta_operational_dataCountAggregateOutputType = {
    utc_datetime_ib: number
    local_datetime_ib: number
    entity: number
    attribute: number
    value: number
    _all: number
  }


  export type Goleta_operational_dataAvgAggregateInputType = {
    value?: true
  }

  export type Goleta_operational_dataSumAggregateInputType = {
    value?: true
  }

  export type Goleta_operational_dataMinAggregateInputType = {
    utc_datetime_ib?: true
    local_datetime_ib?: true
    entity?: true
    attribute?: true
    value?: true
  }

  export type Goleta_operational_dataMaxAggregateInputType = {
    utc_datetime_ib?: true
    local_datetime_ib?: true
    entity?: true
    attribute?: true
    value?: true
  }

  export type Goleta_operational_dataCountAggregateInputType = {
    utc_datetime_ib?: true
    local_datetime_ib?: true
    entity?: true
    attribute?: true
    value?: true
    _all?: true
  }

  export type Goleta_operational_dataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which goleta_operational_data to aggregate.
     */
    where?: goleta_operational_dataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of goleta_operational_data to fetch.
     */
    orderBy?: goleta_operational_dataOrderByWithRelationInput | goleta_operational_dataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: goleta_operational_dataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` goleta_operational_data from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` goleta_operational_data.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned goleta_operational_data
    **/
    _count?: true | Goleta_operational_dataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Goleta_operational_dataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Goleta_operational_dataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Goleta_operational_dataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Goleta_operational_dataMaxAggregateInputType
  }

  export type GetGoleta_operational_dataAggregateType<T extends Goleta_operational_dataAggregateArgs> = {
        [P in keyof T & keyof AggregateGoleta_operational_data]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGoleta_operational_data[P]>
      : GetScalarType<T[P], AggregateGoleta_operational_data[P]>
  }




  export type goleta_operational_dataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: goleta_operational_dataWhereInput
    orderBy?: goleta_operational_dataOrderByWithAggregationInput | goleta_operational_dataOrderByWithAggregationInput[]
    by: Goleta_operational_dataScalarFieldEnum[] | Goleta_operational_dataScalarFieldEnum
    having?: goleta_operational_dataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Goleta_operational_dataCountAggregateInputType | true
    _avg?: Goleta_operational_dataAvgAggregateInputType
    _sum?: Goleta_operational_dataSumAggregateInputType
    _min?: Goleta_operational_dataMinAggregateInputType
    _max?: Goleta_operational_dataMaxAggregateInputType
  }

  export type Goleta_operational_dataGroupByOutputType = {
    utc_datetime_ib: Date
    local_datetime_ib: Date
    entity: string
    attribute: string
    value: number | null
    _count: Goleta_operational_dataCountAggregateOutputType | null
    _avg: Goleta_operational_dataAvgAggregateOutputType | null
    _sum: Goleta_operational_dataSumAggregateOutputType | null
    _min: Goleta_operational_dataMinAggregateOutputType | null
    _max: Goleta_operational_dataMaxAggregateOutputType | null
  }

  type GetGoleta_operational_dataGroupByPayload<T extends goleta_operational_dataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Goleta_operational_dataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Goleta_operational_dataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Goleta_operational_dataGroupByOutputType[P]>
            : GetScalarType<T[P], Goleta_operational_dataGroupByOutputType[P]>
        }
      >
    >


  export type goleta_operational_dataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    utc_datetime_ib?: boolean
    local_datetime_ib?: boolean
    entity?: boolean
    attribute?: boolean
    value?: boolean
  }, ExtArgs["result"]["goleta_operational_data"]>

  export type goleta_operational_dataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    utc_datetime_ib?: boolean
    local_datetime_ib?: boolean
    entity?: boolean
    attribute?: boolean
    value?: boolean
  }, ExtArgs["result"]["goleta_operational_data"]>

  export type goleta_operational_dataSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    utc_datetime_ib?: boolean
    local_datetime_ib?: boolean
    entity?: boolean
    attribute?: boolean
    value?: boolean
  }, ExtArgs["result"]["goleta_operational_data"]>

  export type goleta_operational_dataSelectScalar = {
    utc_datetime_ib?: boolean
    local_datetime_ib?: boolean
    entity?: boolean
    attribute?: boolean
    value?: boolean
  }

  export type goleta_operational_dataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"utc_datetime_ib" | "local_datetime_ib" | "entity" | "attribute" | "value", ExtArgs["result"]["goleta_operational_data"]>

  export type $goleta_operational_dataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "goleta_operational_data"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      utc_datetime_ib: Date
      local_datetime_ib: Date
      entity: string
      attribute: string
      value: number | null
    }, ExtArgs["result"]["goleta_operational_data"]>
    composites: {}
  }

  type goleta_operational_dataGetPayload<S extends boolean | null | undefined | goleta_operational_dataDefaultArgs> = $Result.GetResult<Prisma.$goleta_operational_dataPayload, S>

  type goleta_operational_dataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<goleta_operational_dataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Goleta_operational_dataCountAggregateInputType | true
    }

  export interface goleta_operational_dataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['goleta_operational_data'], meta: { name: 'goleta_operational_data' } }
    /**
     * Find zero or one Goleta_operational_data that matches the filter.
     * @param {goleta_operational_dataFindUniqueArgs} args - Arguments to find a Goleta_operational_data
     * @example
     * // Get one Goleta_operational_data
     * const goleta_operational_data = await prisma.goleta_operational_data.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends goleta_operational_dataFindUniqueArgs>(args: SelectSubset<T, goleta_operational_dataFindUniqueArgs<ExtArgs>>): Prisma__goleta_operational_dataClient<$Result.GetResult<Prisma.$goleta_operational_dataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Goleta_operational_data that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {goleta_operational_dataFindUniqueOrThrowArgs} args - Arguments to find a Goleta_operational_data
     * @example
     * // Get one Goleta_operational_data
     * const goleta_operational_data = await prisma.goleta_operational_data.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends goleta_operational_dataFindUniqueOrThrowArgs>(args: SelectSubset<T, goleta_operational_dataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__goleta_operational_dataClient<$Result.GetResult<Prisma.$goleta_operational_dataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Goleta_operational_data that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {goleta_operational_dataFindFirstArgs} args - Arguments to find a Goleta_operational_data
     * @example
     * // Get one Goleta_operational_data
     * const goleta_operational_data = await prisma.goleta_operational_data.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends goleta_operational_dataFindFirstArgs>(args?: SelectSubset<T, goleta_operational_dataFindFirstArgs<ExtArgs>>): Prisma__goleta_operational_dataClient<$Result.GetResult<Prisma.$goleta_operational_dataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Goleta_operational_data that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {goleta_operational_dataFindFirstOrThrowArgs} args - Arguments to find a Goleta_operational_data
     * @example
     * // Get one Goleta_operational_data
     * const goleta_operational_data = await prisma.goleta_operational_data.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends goleta_operational_dataFindFirstOrThrowArgs>(args?: SelectSubset<T, goleta_operational_dataFindFirstOrThrowArgs<ExtArgs>>): Prisma__goleta_operational_dataClient<$Result.GetResult<Prisma.$goleta_operational_dataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Goleta_operational_data that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {goleta_operational_dataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Goleta_operational_data
     * const goleta_operational_data = await prisma.goleta_operational_data.findMany()
     * 
     * // Get first 10 Goleta_operational_data
     * const goleta_operational_data = await prisma.goleta_operational_data.findMany({ take: 10 })
     * 
     * // Only select the `utc_datetime_ib`
     * const goleta_operational_dataWithUtc_datetime_ibOnly = await prisma.goleta_operational_data.findMany({ select: { utc_datetime_ib: true } })
     * 
     */
    findMany<T extends goleta_operational_dataFindManyArgs>(args?: SelectSubset<T, goleta_operational_dataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$goleta_operational_dataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Goleta_operational_data.
     * @param {goleta_operational_dataCreateArgs} args - Arguments to create a Goleta_operational_data.
     * @example
     * // Create one Goleta_operational_data
     * const Goleta_operational_data = await prisma.goleta_operational_data.create({
     *   data: {
     *     // ... data to create a Goleta_operational_data
     *   }
     * })
     * 
     */
    create<T extends goleta_operational_dataCreateArgs>(args: SelectSubset<T, goleta_operational_dataCreateArgs<ExtArgs>>): Prisma__goleta_operational_dataClient<$Result.GetResult<Prisma.$goleta_operational_dataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Goleta_operational_data.
     * @param {goleta_operational_dataCreateManyArgs} args - Arguments to create many Goleta_operational_data.
     * @example
     * // Create many Goleta_operational_data
     * const goleta_operational_data = await prisma.goleta_operational_data.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends goleta_operational_dataCreateManyArgs>(args?: SelectSubset<T, goleta_operational_dataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Goleta_operational_data and returns the data saved in the database.
     * @param {goleta_operational_dataCreateManyAndReturnArgs} args - Arguments to create many Goleta_operational_data.
     * @example
     * // Create many Goleta_operational_data
     * const goleta_operational_data = await prisma.goleta_operational_data.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Goleta_operational_data and only return the `utc_datetime_ib`
     * const goleta_operational_dataWithUtc_datetime_ibOnly = await prisma.goleta_operational_data.createManyAndReturn({
     *   select: { utc_datetime_ib: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends goleta_operational_dataCreateManyAndReturnArgs>(args?: SelectSubset<T, goleta_operational_dataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$goleta_operational_dataPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Goleta_operational_data.
     * @param {goleta_operational_dataDeleteArgs} args - Arguments to delete one Goleta_operational_data.
     * @example
     * // Delete one Goleta_operational_data
     * const Goleta_operational_data = await prisma.goleta_operational_data.delete({
     *   where: {
     *     // ... filter to delete one Goleta_operational_data
     *   }
     * })
     * 
     */
    delete<T extends goleta_operational_dataDeleteArgs>(args: SelectSubset<T, goleta_operational_dataDeleteArgs<ExtArgs>>): Prisma__goleta_operational_dataClient<$Result.GetResult<Prisma.$goleta_operational_dataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Goleta_operational_data.
     * @param {goleta_operational_dataUpdateArgs} args - Arguments to update one Goleta_operational_data.
     * @example
     * // Update one Goleta_operational_data
     * const goleta_operational_data = await prisma.goleta_operational_data.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends goleta_operational_dataUpdateArgs>(args: SelectSubset<T, goleta_operational_dataUpdateArgs<ExtArgs>>): Prisma__goleta_operational_dataClient<$Result.GetResult<Prisma.$goleta_operational_dataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Goleta_operational_data.
     * @param {goleta_operational_dataDeleteManyArgs} args - Arguments to filter Goleta_operational_data to delete.
     * @example
     * // Delete a few Goleta_operational_data
     * const { count } = await prisma.goleta_operational_data.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends goleta_operational_dataDeleteManyArgs>(args?: SelectSubset<T, goleta_operational_dataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Goleta_operational_data.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {goleta_operational_dataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Goleta_operational_data
     * const goleta_operational_data = await prisma.goleta_operational_data.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends goleta_operational_dataUpdateManyArgs>(args: SelectSubset<T, goleta_operational_dataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Goleta_operational_data and returns the data updated in the database.
     * @param {goleta_operational_dataUpdateManyAndReturnArgs} args - Arguments to update many Goleta_operational_data.
     * @example
     * // Update many Goleta_operational_data
     * const goleta_operational_data = await prisma.goleta_operational_data.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Goleta_operational_data and only return the `utc_datetime_ib`
     * const goleta_operational_dataWithUtc_datetime_ibOnly = await prisma.goleta_operational_data.updateManyAndReturn({
     *   select: { utc_datetime_ib: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends goleta_operational_dataUpdateManyAndReturnArgs>(args: SelectSubset<T, goleta_operational_dataUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$goleta_operational_dataPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Goleta_operational_data.
     * @param {goleta_operational_dataUpsertArgs} args - Arguments to update or create a Goleta_operational_data.
     * @example
     * // Update or create a Goleta_operational_data
     * const goleta_operational_data = await prisma.goleta_operational_data.upsert({
     *   create: {
     *     // ... data to create a Goleta_operational_data
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Goleta_operational_data we want to update
     *   }
     * })
     */
    upsert<T extends goleta_operational_dataUpsertArgs>(args: SelectSubset<T, goleta_operational_dataUpsertArgs<ExtArgs>>): Prisma__goleta_operational_dataClient<$Result.GetResult<Prisma.$goleta_operational_dataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Goleta_operational_data.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {goleta_operational_dataCountArgs} args - Arguments to filter Goleta_operational_data to count.
     * @example
     * // Count the number of Goleta_operational_data
     * const count = await prisma.goleta_operational_data.count({
     *   where: {
     *     // ... the filter for the Goleta_operational_data we want to count
     *   }
     * })
    **/
    count<T extends goleta_operational_dataCountArgs>(
      args?: Subset<T, goleta_operational_dataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Goleta_operational_dataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Goleta_operational_data.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Goleta_operational_dataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Goleta_operational_dataAggregateArgs>(args: Subset<T, Goleta_operational_dataAggregateArgs>): Prisma.PrismaPromise<GetGoleta_operational_dataAggregateType<T>>

    /**
     * Group by Goleta_operational_data.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {goleta_operational_dataGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends goleta_operational_dataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: goleta_operational_dataGroupByArgs['orderBy'] }
        : { orderBy?: goleta_operational_dataGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, goleta_operational_dataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGoleta_operational_dataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the goleta_operational_data model
   */
  readonly fields: goleta_operational_dataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for goleta_operational_data.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__goleta_operational_dataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the goleta_operational_data model
   */
  interface goleta_operational_dataFieldRefs {
    readonly utc_datetime_ib: FieldRef<"goleta_operational_data", 'DateTime'>
    readonly local_datetime_ib: FieldRef<"goleta_operational_data", 'DateTime'>
    readonly entity: FieldRef<"goleta_operational_data", 'String'>
    readonly attribute: FieldRef<"goleta_operational_data", 'String'>
    readonly value: FieldRef<"goleta_operational_data", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * goleta_operational_data findUnique
   */
  export type goleta_operational_dataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goleta_operational_data
     */
    select?: goleta_operational_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the goleta_operational_data
     */
    omit?: goleta_operational_dataOmit<ExtArgs> | null
    /**
     * Filter, which goleta_operational_data to fetch.
     */
    where: goleta_operational_dataWhereUniqueInput
  }

  /**
   * goleta_operational_data findUniqueOrThrow
   */
  export type goleta_operational_dataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goleta_operational_data
     */
    select?: goleta_operational_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the goleta_operational_data
     */
    omit?: goleta_operational_dataOmit<ExtArgs> | null
    /**
     * Filter, which goleta_operational_data to fetch.
     */
    where: goleta_operational_dataWhereUniqueInput
  }

  /**
   * goleta_operational_data findFirst
   */
  export type goleta_operational_dataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goleta_operational_data
     */
    select?: goleta_operational_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the goleta_operational_data
     */
    omit?: goleta_operational_dataOmit<ExtArgs> | null
    /**
     * Filter, which goleta_operational_data to fetch.
     */
    where?: goleta_operational_dataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of goleta_operational_data to fetch.
     */
    orderBy?: goleta_operational_dataOrderByWithRelationInput | goleta_operational_dataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for goleta_operational_data.
     */
    cursor?: goleta_operational_dataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` goleta_operational_data from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` goleta_operational_data.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of goleta_operational_data.
     */
    distinct?: Goleta_operational_dataScalarFieldEnum | Goleta_operational_dataScalarFieldEnum[]
  }

  /**
   * goleta_operational_data findFirstOrThrow
   */
  export type goleta_operational_dataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goleta_operational_data
     */
    select?: goleta_operational_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the goleta_operational_data
     */
    omit?: goleta_operational_dataOmit<ExtArgs> | null
    /**
     * Filter, which goleta_operational_data to fetch.
     */
    where?: goleta_operational_dataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of goleta_operational_data to fetch.
     */
    orderBy?: goleta_operational_dataOrderByWithRelationInput | goleta_operational_dataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for goleta_operational_data.
     */
    cursor?: goleta_operational_dataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` goleta_operational_data from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` goleta_operational_data.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of goleta_operational_data.
     */
    distinct?: Goleta_operational_dataScalarFieldEnum | Goleta_operational_dataScalarFieldEnum[]
  }

  /**
   * goleta_operational_data findMany
   */
  export type goleta_operational_dataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goleta_operational_data
     */
    select?: goleta_operational_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the goleta_operational_data
     */
    omit?: goleta_operational_dataOmit<ExtArgs> | null
    /**
     * Filter, which goleta_operational_data to fetch.
     */
    where?: goleta_operational_dataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of goleta_operational_data to fetch.
     */
    orderBy?: goleta_operational_dataOrderByWithRelationInput | goleta_operational_dataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing goleta_operational_data.
     */
    cursor?: goleta_operational_dataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` goleta_operational_data from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` goleta_operational_data.
     */
    skip?: number
    distinct?: Goleta_operational_dataScalarFieldEnum | Goleta_operational_dataScalarFieldEnum[]
  }

  /**
   * goleta_operational_data create
   */
  export type goleta_operational_dataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goleta_operational_data
     */
    select?: goleta_operational_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the goleta_operational_data
     */
    omit?: goleta_operational_dataOmit<ExtArgs> | null
    /**
     * The data needed to create a goleta_operational_data.
     */
    data: XOR<goleta_operational_dataCreateInput, goleta_operational_dataUncheckedCreateInput>
  }

  /**
   * goleta_operational_data createMany
   */
  export type goleta_operational_dataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many goleta_operational_data.
     */
    data: goleta_operational_dataCreateManyInput | goleta_operational_dataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * goleta_operational_data createManyAndReturn
   */
  export type goleta_operational_dataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goleta_operational_data
     */
    select?: goleta_operational_dataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the goleta_operational_data
     */
    omit?: goleta_operational_dataOmit<ExtArgs> | null
    /**
     * The data used to create many goleta_operational_data.
     */
    data: goleta_operational_dataCreateManyInput | goleta_operational_dataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * goleta_operational_data update
   */
  export type goleta_operational_dataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goleta_operational_data
     */
    select?: goleta_operational_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the goleta_operational_data
     */
    omit?: goleta_operational_dataOmit<ExtArgs> | null
    /**
     * The data needed to update a goleta_operational_data.
     */
    data: XOR<goleta_operational_dataUpdateInput, goleta_operational_dataUncheckedUpdateInput>
    /**
     * Choose, which goleta_operational_data to update.
     */
    where: goleta_operational_dataWhereUniqueInput
  }

  /**
   * goleta_operational_data updateMany
   */
  export type goleta_operational_dataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update goleta_operational_data.
     */
    data: XOR<goleta_operational_dataUpdateManyMutationInput, goleta_operational_dataUncheckedUpdateManyInput>
    /**
     * Filter which goleta_operational_data to update
     */
    where?: goleta_operational_dataWhereInput
    /**
     * Limit how many goleta_operational_data to update.
     */
    limit?: number
  }

  /**
   * goleta_operational_data updateManyAndReturn
   */
  export type goleta_operational_dataUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goleta_operational_data
     */
    select?: goleta_operational_dataSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the goleta_operational_data
     */
    omit?: goleta_operational_dataOmit<ExtArgs> | null
    /**
     * The data used to update goleta_operational_data.
     */
    data: XOR<goleta_operational_dataUpdateManyMutationInput, goleta_operational_dataUncheckedUpdateManyInput>
    /**
     * Filter which goleta_operational_data to update
     */
    where?: goleta_operational_dataWhereInput
    /**
     * Limit how many goleta_operational_data to update.
     */
    limit?: number
  }

  /**
   * goleta_operational_data upsert
   */
  export type goleta_operational_dataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goleta_operational_data
     */
    select?: goleta_operational_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the goleta_operational_data
     */
    omit?: goleta_operational_dataOmit<ExtArgs> | null
    /**
     * The filter to search for the goleta_operational_data to update in case it exists.
     */
    where: goleta_operational_dataWhereUniqueInput
    /**
     * In case the goleta_operational_data found by the `where` argument doesn't exist, create a new goleta_operational_data with this data.
     */
    create: XOR<goleta_operational_dataCreateInput, goleta_operational_dataUncheckedCreateInput>
    /**
     * In case the goleta_operational_data was found with the provided `where` argument, update it with this data.
     */
    update: XOR<goleta_operational_dataUpdateInput, goleta_operational_dataUncheckedUpdateInput>
  }

  /**
   * goleta_operational_data delete
   */
  export type goleta_operational_dataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goleta_operational_data
     */
    select?: goleta_operational_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the goleta_operational_data
     */
    omit?: goleta_operational_dataOmit<ExtArgs> | null
    /**
     * Filter which goleta_operational_data to delete.
     */
    where: goleta_operational_dataWhereUniqueInput
  }

  /**
   * goleta_operational_data deleteMany
   */
  export type goleta_operational_dataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which goleta_operational_data to delete
     */
    where?: goleta_operational_dataWhereInput
    /**
     * Limit how many goleta_operational_data to delete.
     */
    limit?: number
  }

  /**
   * goleta_operational_data without action
   */
  export type goleta_operational_dataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goleta_operational_data
     */
    select?: goleta_operational_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the goleta_operational_data
     */
    omit?: goleta_operational_dataOmit<ExtArgs> | null
  }


  /**
   * Model goleta_revenue_metrics
   */

  export type AggregateGoleta_revenue_metrics = {
    _count: Goleta_revenue_metricsCountAggregateOutputType | null
    _avg: Goleta_revenue_metricsAvgAggregateOutputType | null
    _sum: Goleta_revenue_metricsSumAggregateOutputType | null
    _min: Goleta_revenue_metricsMinAggregateOutputType | null
    _max: Goleta_revenue_metricsMaxAggregateOutputType | null
  }

  export type Goleta_revenue_metricsAvgAggregateOutputType = {
    value: number | null
  }

  export type Goleta_revenue_metricsSumAggregateOutputType = {
    value: number | null
  }

  export type Goleta_revenue_metricsMinAggregateOutputType = {
    utc_datetime_ib: Date | null
    local_datetime_ib: Date | null
    entity: string | null
    attribute: string | null
    value: number | null
  }

  export type Goleta_revenue_metricsMaxAggregateOutputType = {
    utc_datetime_ib: Date | null
    local_datetime_ib: Date | null
    entity: string | null
    attribute: string | null
    value: number | null
  }

  export type Goleta_revenue_metricsCountAggregateOutputType = {
    utc_datetime_ib: number
    local_datetime_ib: number
    entity: number
    attribute: number
    value: number
    _all: number
  }


  export type Goleta_revenue_metricsAvgAggregateInputType = {
    value?: true
  }

  export type Goleta_revenue_metricsSumAggregateInputType = {
    value?: true
  }

  export type Goleta_revenue_metricsMinAggregateInputType = {
    utc_datetime_ib?: true
    local_datetime_ib?: true
    entity?: true
    attribute?: true
    value?: true
  }

  export type Goleta_revenue_metricsMaxAggregateInputType = {
    utc_datetime_ib?: true
    local_datetime_ib?: true
    entity?: true
    attribute?: true
    value?: true
  }

  export type Goleta_revenue_metricsCountAggregateInputType = {
    utc_datetime_ib?: true
    local_datetime_ib?: true
    entity?: true
    attribute?: true
    value?: true
    _all?: true
  }

  export type Goleta_revenue_metricsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which goleta_revenue_metrics to aggregate.
     */
    where?: goleta_revenue_metricsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of goleta_revenue_metrics to fetch.
     */
    orderBy?: goleta_revenue_metricsOrderByWithRelationInput | goleta_revenue_metricsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: goleta_revenue_metricsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` goleta_revenue_metrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` goleta_revenue_metrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned goleta_revenue_metrics
    **/
    _count?: true | Goleta_revenue_metricsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Goleta_revenue_metricsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Goleta_revenue_metricsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Goleta_revenue_metricsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Goleta_revenue_metricsMaxAggregateInputType
  }

  export type GetGoleta_revenue_metricsAggregateType<T extends Goleta_revenue_metricsAggregateArgs> = {
        [P in keyof T & keyof AggregateGoleta_revenue_metrics]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGoleta_revenue_metrics[P]>
      : GetScalarType<T[P], AggregateGoleta_revenue_metrics[P]>
  }




  export type goleta_revenue_metricsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: goleta_revenue_metricsWhereInput
    orderBy?: goleta_revenue_metricsOrderByWithAggregationInput | goleta_revenue_metricsOrderByWithAggregationInput[]
    by: Goleta_revenue_metricsScalarFieldEnum[] | Goleta_revenue_metricsScalarFieldEnum
    having?: goleta_revenue_metricsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Goleta_revenue_metricsCountAggregateInputType | true
    _avg?: Goleta_revenue_metricsAvgAggregateInputType
    _sum?: Goleta_revenue_metricsSumAggregateInputType
    _min?: Goleta_revenue_metricsMinAggregateInputType
    _max?: Goleta_revenue_metricsMaxAggregateInputType
  }

  export type Goleta_revenue_metricsGroupByOutputType = {
    utc_datetime_ib: Date
    local_datetime_ib: Date
    entity: string
    attribute: string
    value: number | null
    _count: Goleta_revenue_metricsCountAggregateOutputType | null
    _avg: Goleta_revenue_metricsAvgAggregateOutputType | null
    _sum: Goleta_revenue_metricsSumAggregateOutputType | null
    _min: Goleta_revenue_metricsMinAggregateOutputType | null
    _max: Goleta_revenue_metricsMaxAggregateOutputType | null
  }

  type GetGoleta_revenue_metricsGroupByPayload<T extends goleta_revenue_metricsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Goleta_revenue_metricsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Goleta_revenue_metricsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Goleta_revenue_metricsGroupByOutputType[P]>
            : GetScalarType<T[P], Goleta_revenue_metricsGroupByOutputType[P]>
        }
      >
    >


  export type goleta_revenue_metricsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    utc_datetime_ib?: boolean
    local_datetime_ib?: boolean
    entity?: boolean
    attribute?: boolean
    value?: boolean
  }, ExtArgs["result"]["goleta_revenue_metrics"]>

  export type goleta_revenue_metricsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    utc_datetime_ib?: boolean
    local_datetime_ib?: boolean
    entity?: boolean
    attribute?: boolean
    value?: boolean
  }, ExtArgs["result"]["goleta_revenue_metrics"]>

  export type goleta_revenue_metricsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    utc_datetime_ib?: boolean
    local_datetime_ib?: boolean
    entity?: boolean
    attribute?: boolean
    value?: boolean
  }, ExtArgs["result"]["goleta_revenue_metrics"]>

  export type goleta_revenue_metricsSelectScalar = {
    utc_datetime_ib?: boolean
    local_datetime_ib?: boolean
    entity?: boolean
    attribute?: boolean
    value?: boolean
  }

  export type goleta_revenue_metricsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"utc_datetime_ib" | "local_datetime_ib" | "entity" | "attribute" | "value", ExtArgs["result"]["goleta_revenue_metrics"]>

  export type $goleta_revenue_metricsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "goleta_revenue_metrics"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      utc_datetime_ib: Date
      local_datetime_ib: Date
      entity: string
      attribute: string
      value: number | null
    }, ExtArgs["result"]["goleta_revenue_metrics"]>
    composites: {}
  }

  type goleta_revenue_metricsGetPayload<S extends boolean | null | undefined | goleta_revenue_metricsDefaultArgs> = $Result.GetResult<Prisma.$goleta_revenue_metricsPayload, S>

  type goleta_revenue_metricsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<goleta_revenue_metricsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Goleta_revenue_metricsCountAggregateInputType | true
    }

  export interface goleta_revenue_metricsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['goleta_revenue_metrics'], meta: { name: 'goleta_revenue_metrics' } }
    /**
     * Find zero or one Goleta_revenue_metrics that matches the filter.
     * @param {goleta_revenue_metricsFindUniqueArgs} args - Arguments to find a Goleta_revenue_metrics
     * @example
     * // Get one Goleta_revenue_metrics
     * const goleta_revenue_metrics = await prisma.goleta_revenue_metrics.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends goleta_revenue_metricsFindUniqueArgs>(args: SelectSubset<T, goleta_revenue_metricsFindUniqueArgs<ExtArgs>>): Prisma__goleta_revenue_metricsClient<$Result.GetResult<Prisma.$goleta_revenue_metricsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Goleta_revenue_metrics that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {goleta_revenue_metricsFindUniqueOrThrowArgs} args - Arguments to find a Goleta_revenue_metrics
     * @example
     * // Get one Goleta_revenue_metrics
     * const goleta_revenue_metrics = await prisma.goleta_revenue_metrics.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends goleta_revenue_metricsFindUniqueOrThrowArgs>(args: SelectSubset<T, goleta_revenue_metricsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__goleta_revenue_metricsClient<$Result.GetResult<Prisma.$goleta_revenue_metricsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Goleta_revenue_metrics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {goleta_revenue_metricsFindFirstArgs} args - Arguments to find a Goleta_revenue_metrics
     * @example
     * // Get one Goleta_revenue_metrics
     * const goleta_revenue_metrics = await prisma.goleta_revenue_metrics.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends goleta_revenue_metricsFindFirstArgs>(args?: SelectSubset<T, goleta_revenue_metricsFindFirstArgs<ExtArgs>>): Prisma__goleta_revenue_metricsClient<$Result.GetResult<Prisma.$goleta_revenue_metricsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Goleta_revenue_metrics that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {goleta_revenue_metricsFindFirstOrThrowArgs} args - Arguments to find a Goleta_revenue_metrics
     * @example
     * // Get one Goleta_revenue_metrics
     * const goleta_revenue_metrics = await prisma.goleta_revenue_metrics.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends goleta_revenue_metricsFindFirstOrThrowArgs>(args?: SelectSubset<T, goleta_revenue_metricsFindFirstOrThrowArgs<ExtArgs>>): Prisma__goleta_revenue_metricsClient<$Result.GetResult<Prisma.$goleta_revenue_metricsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Goleta_revenue_metrics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {goleta_revenue_metricsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Goleta_revenue_metrics
     * const goleta_revenue_metrics = await prisma.goleta_revenue_metrics.findMany()
     * 
     * // Get first 10 Goleta_revenue_metrics
     * const goleta_revenue_metrics = await prisma.goleta_revenue_metrics.findMany({ take: 10 })
     * 
     * // Only select the `utc_datetime_ib`
     * const goleta_revenue_metricsWithUtc_datetime_ibOnly = await prisma.goleta_revenue_metrics.findMany({ select: { utc_datetime_ib: true } })
     * 
     */
    findMany<T extends goleta_revenue_metricsFindManyArgs>(args?: SelectSubset<T, goleta_revenue_metricsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$goleta_revenue_metricsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Goleta_revenue_metrics.
     * @param {goleta_revenue_metricsCreateArgs} args - Arguments to create a Goleta_revenue_metrics.
     * @example
     * // Create one Goleta_revenue_metrics
     * const Goleta_revenue_metrics = await prisma.goleta_revenue_metrics.create({
     *   data: {
     *     // ... data to create a Goleta_revenue_metrics
     *   }
     * })
     * 
     */
    create<T extends goleta_revenue_metricsCreateArgs>(args: SelectSubset<T, goleta_revenue_metricsCreateArgs<ExtArgs>>): Prisma__goleta_revenue_metricsClient<$Result.GetResult<Prisma.$goleta_revenue_metricsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Goleta_revenue_metrics.
     * @param {goleta_revenue_metricsCreateManyArgs} args - Arguments to create many Goleta_revenue_metrics.
     * @example
     * // Create many Goleta_revenue_metrics
     * const goleta_revenue_metrics = await prisma.goleta_revenue_metrics.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends goleta_revenue_metricsCreateManyArgs>(args?: SelectSubset<T, goleta_revenue_metricsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Goleta_revenue_metrics and returns the data saved in the database.
     * @param {goleta_revenue_metricsCreateManyAndReturnArgs} args - Arguments to create many Goleta_revenue_metrics.
     * @example
     * // Create many Goleta_revenue_metrics
     * const goleta_revenue_metrics = await prisma.goleta_revenue_metrics.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Goleta_revenue_metrics and only return the `utc_datetime_ib`
     * const goleta_revenue_metricsWithUtc_datetime_ibOnly = await prisma.goleta_revenue_metrics.createManyAndReturn({
     *   select: { utc_datetime_ib: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends goleta_revenue_metricsCreateManyAndReturnArgs>(args?: SelectSubset<T, goleta_revenue_metricsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$goleta_revenue_metricsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Goleta_revenue_metrics.
     * @param {goleta_revenue_metricsDeleteArgs} args - Arguments to delete one Goleta_revenue_metrics.
     * @example
     * // Delete one Goleta_revenue_metrics
     * const Goleta_revenue_metrics = await prisma.goleta_revenue_metrics.delete({
     *   where: {
     *     // ... filter to delete one Goleta_revenue_metrics
     *   }
     * })
     * 
     */
    delete<T extends goleta_revenue_metricsDeleteArgs>(args: SelectSubset<T, goleta_revenue_metricsDeleteArgs<ExtArgs>>): Prisma__goleta_revenue_metricsClient<$Result.GetResult<Prisma.$goleta_revenue_metricsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Goleta_revenue_metrics.
     * @param {goleta_revenue_metricsUpdateArgs} args - Arguments to update one Goleta_revenue_metrics.
     * @example
     * // Update one Goleta_revenue_metrics
     * const goleta_revenue_metrics = await prisma.goleta_revenue_metrics.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends goleta_revenue_metricsUpdateArgs>(args: SelectSubset<T, goleta_revenue_metricsUpdateArgs<ExtArgs>>): Prisma__goleta_revenue_metricsClient<$Result.GetResult<Prisma.$goleta_revenue_metricsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Goleta_revenue_metrics.
     * @param {goleta_revenue_metricsDeleteManyArgs} args - Arguments to filter Goleta_revenue_metrics to delete.
     * @example
     * // Delete a few Goleta_revenue_metrics
     * const { count } = await prisma.goleta_revenue_metrics.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends goleta_revenue_metricsDeleteManyArgs>(args?: SelectSubset<T, goleta_revenue_metricsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Goleta_revenue_metrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {goleta_revenue_metricsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Goleta_revenue_metrics
     * const goleta_revenue_metrics = await prisma.goleta_revenue_metrics.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends goleta_revenue_metricsUpdateManyArgs>(args: SelectSubset<T, goleta_revenue_metricsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Goleta_revenue_metrics and returns the data updated in the database.
     * @param {goleta_revenue_metricsUpdateManyAndReturnArgs} args - Arguments to update many Goleta_revenue_metrics.
     * @example
     * // Update many Goleta_revenue_metrics
     * const goleta_revenue_metrics = await prisma.goleta_revenue_metrics.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Goleta_revenue_metrics and only return the `utc_datetime_ib`
     * const goleta_revenue_metricsWithUtc_datetime_ibOnly = await prisma.goleta_revenue_metrics.updateManyAndReturn({
     *   select: { utc_datetime_ib: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends goleta_revenue_metricsUpdateManyAndReturnArgs>(args: SelectSubset<T, goleta_revenue_metricsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$goleta_revenue_metricsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Goleta_revenue_metrics.
     * @param {goleta_revenue_metricsUpsertArgs} args - Arguments to update or create a Goleta_revenue_metrics.
     * @example
     * // Update or create a Goleta_revenue_metrics
     * const goleta_revenue_metrics = await prisma.goleta_revenue_metrics.upsert({
     *   create: {
     *     // ... data to create a Goleta_revenue_metrics
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Goleta_revenue_metrics we want to update
     *   }
     * })
     */
    upsert<T extends goleta_revenue_metricsUpsertArgs>(args: SelectSubset<T, goleta_revenue_metricsUpsertArgs<ExtArgs>>): Prisma__goleta_revenue_metricsClient<$Result.GetResult<Prisma.$goleta_revenue_metricsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Goleta_revenue_metrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {goleta_revenue_metricsCountArgs} args - Arguments to filter Goleta_revenue_metrics to count.
     * @example
     * // Count the number of Goleta_revenue_metrics
     * const count = await prisma.goleta_revenue_metrics.count({
     *   where: {
     *     // ... the filter for the Goleta_revenue_metrics we want to count
     *   }
     * })
    **/
    count<T extends goleta_revenue_metricsCountArgs>(
      args?: Subset<T, goleta_revenue_metricsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Goleta_revenue_metricsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Goleta_revenue_metrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Goleta_revenue_metricsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Goleta_revenue_metricsAggregateArgs>(args: Subset<T, Goleta_revenue_metricsAggregateArgs>): Prisma.PrismaPromise<GetGoleta_revenue_metricsAggregateType<T>>

    /**
     * Group by Goleta_revenue_metrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {goleta_revenue_metricsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends goleta_revenue_metricsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: goleta_revenue_metricsGroupByArgs['orderBy'] }
        : { orderBy?: goleta_revenue_metricsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, goleta_revenue_metricsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGoleta_revenue_metricsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the goleta_revenue_metrics model
   */
  readonly fields: goleta_revenue_metricsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for goleta_revenue_metrics.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__goleta_revenue_metricsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the goleta_revenue_metrics model
   */
  interface goleta_revenue_metricsFieldRefs {
    readonly utc_datetime_ib: FieldRef<"goleta_revenue_metrics", 'DateTime'>
    readonly local_datetime_ib: FieldRef<"goleta_revenue_metrics", 'DateTime'>
    readonly entity: FieldRef<"goleta_revenue_metrics", 'String'>
    readonly attribute: FieldRef<"goleta_revenue_metrics", 'String'>
    readonly value: FieldRef<"goleta_revenue_metrics", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * goleta_revenue_metrics findUnique
   */
  export type goleta_revenue_metricsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goleta_revenue_metrics
     */
    select?: goleta_revenue_metricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the goleta_revenue_metrics
     */
    omit?: goleta_revenue_metricsOmit<ExtArgs> | null
    /**
     * Filter, which goleta_revenue_metrics to fetch.
     */
    where: goleta_revenue_metricsWhereUniqueInput
  }

  /**
   * goleta_revenue_metrics findUniqueOrThrow
   */
  export type goleta_revenue_metricsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goleta_revenue_metrics
     */
    select?: goleta_revenue_metricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the goleta_revenue_metrics
     */
    omit?: goleta_revenue_metricsOmit<ExtArgs> | null
    /**
     * Filter, which goleta_revenue_metrics to fetch.
     */
    where: goleta_revenue_metricsWhereUniqueInput
  }

  /**
   * goleta_revenue_metrics findFirst
   */
  export type goleta_revenue_metricsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goleta_revenue_metrics
     */
    select?: goleta_revenue_metricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the goleta_revenue_metrics
     */
    omit?: goleta_revenue_metricsOmit<ExtArgs> | null
    /**
     * Filter, which goleta_revenue_metrics to fetch.
     */
    where?: goleta_revenue_metricsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of goleta_revenue_metrics to fetch.
     */
    orderBy?: goleta_revenue_metricsOrderByWithRelationInput | goleta_revenue_metricsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for goleta_revenue_metrics.
     */
    cursor?: goleta_revenue_metricsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` goleta_revenue_metrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` goleta_revenue_metrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of goleta_revenue_metrics.
     */
    distinct?: Goleta_revenue_metricsScalarFieldEnum | Goleta_revenue_metricsScalarFieldEnum[]
  }

  /**
   * goleta_revenue_metrics findFirstOrThrow
   */
  export type goleta_revenue_metricsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goleta_revenue_metrics
     */
    select?: goleta_revenue_metricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the goleta_revenue_metrics
     */
    omit?: goleta_revenue_metricsOmit<ExtArgs> | null
    /**
     * Filter, which goleta_revenue_metrics to fetch.
     */
    where?: goleta_revenue_metricsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of goleta_revenue_metrics to fetch.
     */
    orderBy?: goleta_revenue_metricsOrderByWithRelationInput | goleta_revenue_metricsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for goleta_revenue_metrics.
     */
    cursor?: goleta_revenue_metricsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` goleta_revenue_metrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` goleta_revenue_metrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of goleta_revenue_metrics.
     */
    distinct?: Goleta_revenue_metricsScalarFieldEnum | Goleta_revenue_metricsScalarFieldEnum[]
  }

  /**
   * goleta_revenue_metrics findMany
   */
  export type goleta_revenue_metricsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goleta_revenue_metrics
     */
    select?: goleta_revenue_metricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the goleta_revenue_metrics
     */
    omit?: goleta_revenue_metricsOmit<ExtArgs> | null
    /**
     * Filter, which goleta_revenue_metrics to fetch.
     */
    where?: goleta_revenue_metricsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of goleta_revenue_metrics to fetch.
     */
    orderBy?: goleta_revenue_metricsOrderByWithRelationInput | goleta_revenue_metricsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing goleta_revenue_metrics.
     */
    cursor?: goleta_revenue_metricsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` goleta_revenue_metrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` goleta_revenue_metrics.
     */
    skip?: number
    distinct?: Goleta_revenue_metricsScalarFieldEnum | Goleta_revenue_metricsScalarFieldEnum[]
  }

  /**
   * goleta_revenue_metrics create
   */
  export type goleta_revenue_metricsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goleta_revenue_metrics
     */
    select?: goleta_revenue_metricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the goleta_revenue_metrics
     */
    omit?: goleta_revenue_metricsOmit<ExtArgs> | null
    /**
     * The data needed to create a goleta_revenue_metrics.
     */
    data: XOR<goleta_revenue_metricsCreateInput, goleta_revenue_metricsUncheckedCreateInput>
  }

  /**
   * goleta_revenue_metrics createMany
   */
  export type goleta_revenue_metricsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many goleta_revenue_metrics.
     */
    data: goleta_revenue_metricsCreateManyInput | goleta_revenue_metricsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * goleta_revenue_metrics createManyAndReturn
   */
  export type goleta_revenue_metricsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goleta_revenue_metrics
     */
    select?: goleta_revenue_metricsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the goleta_revenue_metrics
     */
    omit?: goleta_revenue_metricsOmit<ExtArgs> | null
    /**
     * The data used to create many goleta_revenue_metrics.
     */
    data: goleta_revenue_metricsCreateManyInput | goleta_revenue_metricsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * goleta_revenue_metrics update
   */
  export type goleta_revenue_metricsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goleta_revenue_metrics
     */
    select?: goleta_revenue_metricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the goleta_revenue_metrics
     */
    omit?: goleta_revenue_metricsOmit<ExtArgs> | null
    /**
     * The data needed to update a goleta_revenue_metrics.
     */
    data: XOR<goleta_revenue_metricsUpdateInput, goleta_revenue_metricsUncheckedUpdateInput>
    /**
     * Choose, which goleta_revenue_metrics to update.
     */
    where: goleta_revenue_metricsWhereUniqueInput
  }

  /**
   * goleta_revenue_metrics updateMany
   */
  export type goleta_revenue_metricsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update goleta_revenue_metrics.
     */
    data: XOR<goleta_revenue_metricsUpdateManyMutationInput, goleta_revenue_metricsUncheckedUpdateManyInput>
    /**
     * Filter which goleta_revenue_metrics to update
     */
    where?: goleta_revenue_metricsWhereInput
    /**
     * Limit how many goleta_revenue_metrics to update.
     */
    limit?: number
  }

  /**
   * goleta_revenue_metrics updateManyAndReturn
   */
  export type goleta_revenue_metricsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goleta_revenue_metrics
     */
    select?: goleta_revenue_metricsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the goleta_revenue_metrics
     */
    omit?: goleta_revenue_metricsOmit<ExtArgs> | null
    /**
     * The data used to update goleta_revenue_metrics.
     */
    data: XOR<goleta_revenue_metricsUpdateManyMutationInput, goleta_revenue_metricsUncheckedUpdateManyInput>
    /**
     * Filter which goleta_revenue_metrics to update
     */
    where?: goleta_revenue_metricsWhereInput
    /**
     * Limit how many goleta_revenue_metrics to update.
     */
    limit?: number
  }

  /**
   * goleta_revenue_metrics upsert
   */
  export type goleta_revenue_metricsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goleta_revenue_metrics
     */
    select?: goleta_revenue_metricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the goleta_revenue_metrics
     */
    omit?: goleta_revenue_metricsOmit<ExtArgs> | null
    /**
     * The filter to search for the goleta_revenue_metrics to update in case it exists.
     */
    where: goleta_revenue_metricsWhereUniqueInput
    /**
     * In case the goleta_revenue_metrics found by the `where` argument doesn't exist, create a new goleta_revenue_metrics with this data.
     */
    create: XOR<goleta_revenue_metricsCreateInput, goleta_revenue_metricsUncheckedCreateInput>
    /**
     * In case the goleta_revenue_metrics was found with the provided `where` argument, update it with this data.
     */
    update: XOR<goleta_revenue_metricsUpdateInput, goleta_revenue_metricsUncheckedUpdateInput>
  }

  /**
   * goleta_revenue_metrics delete
   */
  export type goleta_revenue_metricsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goleta_revenue_metrics
     */
    select?: goleta_revenue_metricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the goleta_revenue_metrics
     */
    omit?: goleta_revenue_metricsOmit<ExtArgs> | null
    /**
     * Filter which goleta_revenue_metrics to delete.
     */
    where: goleta_revenue_metricsWhereUniqueInput
  }

  /**
   * goleta_revenue_metrics deleteMany
   */
  export type goleta_revenue_metricsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which goleta_revenue_metrics to delete
     */
    where?: goleta_revenue_metricsWhereInput
    /**
     * Limit how many goleta_revenue_metrics to delete.
     */
    limit?: number
  }

  /**
   * goleta_revenue_metrics without action
   */
  export type goleta_revenue_metricsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goleta_revenue_metrics
     */
    select?: goleta_revenue_metricsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the goleta_revenue_metrics
     */
    omit?: goleta_revenue_metricsOmit<ExtArgs> | null
  }


  /**
   * Model goleta_scheduling_data
   */

  export type AggregateGoleta_scheduling_data = {
    _count: Goleta_scheduling_dataCountAggregateOutputType | null
    _avg: Goleta_scheduling_dataAvgAggregateOutputType | null
    _sum: Goleta_scheduling_dataSumAggregateOutputType | null
    _min: Goleta_scheduling_dataMinAggregateOutputType | null
    _max: Goleta_scheduling_dataMaxAggregateOutputType | null
  }

  export type Goleta_scheduling_dataAvgAggregateOutputType = {
    value: number | null
  }

  export type Goleta_scheduling_dataSumAggregateOutputType = {
    value: number | null
  }

  export type Goleta_scheduling_dataMinAggregateOutputType = {
    utc_datetime_ib: Date | null
    local_datetime_ib: Date | null
    entity: string | null
    attribute: string | null
    value: number | null
  }

  export type Goleta_scheduling_dataMaxAggregateOutputType = {
    utc_datetime_ib: Date | null
    local_datetime_ib: Date | null
    entity: string | null
    attribute: string | null
    value: number | null
  }

  export type Goleta_scheduling_dataCountAggregateOutputType = {
    utc_datetime_ib: number
    local_datetime_ib: number
    entity: number
    attribute: number
    value: number
    _all: number
  }


  export type Goleta_scheduling_dataAvgAggregateInputType = {
    value?: true
  }

  export type Goleta_scheduling_dataSumAggregateInputType = {
    value?: true
  }

  export type Goleta_scheduling_dataMinAggregateInputType = {
    utc_datetime_ib?: true
    local_datetime_ib?: true
    entity?: true
    attribute?: true
    value?: true
  }

  export type Goleta_scheduling_dataMaxAggregateInputType = {
    utc_datetime_ib?: true
    local_datetime_ib?: true
    entity?: true
    attribute?: true
    value?: true
  }

  export type Goleta_scheduling_dataCountAggregateInputType = {
    utc_datetime_ib?: true
    local_datetime_ib?: true
    entity?: true
    attribute?: true
    value?: true
    _all?: true
  }

  export type Goleta_scheduling_dataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which goleta_scheduling_data to aggregate.
     */
    where?: goleta_scheduling_dataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of goleta_scheduling_data to fetch.
     */
    orderBy?: goleta_scheduling_dataOrderByWithRelationInput | goleta_scheduling_dataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: goleta_scheduling_dataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` goleta_scheduling_data from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` goleta_scheduling_data.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned goleta_scheduling_data
    **/
    _count?: true | Goleta_scheduling_dataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Goleta_scheduling_dataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Goleta_scheduling_dataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Goleta_scheduling_dataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Goleta_scheduling_dataMaxAggregateInputType
  }

  export type GetGoleta_scheduling_dataAggregateType<T extends Goleta_scheduling_dataAggregateArgs> = {
        [P in keyof T & keyof AggregateGoleta_scheduling_data]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGoleta_scheduling_data[P]>
      : GetScalarType<T[P], AggregateGoleta_scheduling_data[P]>
  }




  export type goleta_scheduling_dataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: goleta_scheduling_dataWhereInput
    orderBy?: goleta_scheduling_dataOrderByWithAggregationInput | goleta_scheduling_dataOrderByWithAggregationInput[]
    by: Goleta_scheduling_dataScalarFieldEnum[] | Goleta_scheduling_dataScalarFieldEnum
    having?: goleta_scheduling_dataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Goleta_scheduling_dataCountAggregateInputType | true
    _avg?: Goleta_scheduling_dataAvgAggregateInputType
    _sum?: Goleta_scheduling_dataSumAggregateInputType
    _min?: Goleta_scheduling_dataMinAggregateInputType
    _max?: Goleta_scheduling_dataMaxAggregateInputType
  }

  export type Goleta_scheduling_dataGroupByOutputType = {
    utc_datetime_ib: Date
    local_datetime_ib: Date
    entity: string
    attribute: string
    value: number | null
    _count: Goleta_scheduling_dataCountAggregateOutputType | null
    _avg: Goleta_scheduling_dataAvgAggregateOutputType | null
    _sum: Goleta_scheduling_dataSumAggregateOutputType | null
    _min: Goleta_scheduling_dataMinAggregateOutputType | null
    _max: Goleta_scheduling_dataMaxAggregateOutputType | null
  }

  type GetGoleta_scheduling_dataGroupByPayload<T extends goleta_scheduling_dataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Goleta_scheduling_dataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Goleta_scheduling_dataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Goleta_scheduling_dataGroupByOutputType[P]>
            : GetScalarType<T[P], Goleta_scheduling_dataGroupByOutputType[P]>
        }
      >
    >


  export type goleta_scheduling_dataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    utc_datetime_ib?: boolean
    local_datetime_ib?: boolean
    entity?: boolean
    attribute?: boolean
    value?: boolean
  }, ExtArgs["result"]["goleta_scheduling_data"]>

  export type goleta_scheduling_dataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    utc_datetime_ib?: boolean
    local_datetime_ib?: boolean
    entity?: boolean
    attribute?: boolean
    value?: boolean
  }, ExtArgs["result"]["goleta_scheduling_data"]>

  export type goleta_scheduling_dataSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    utc_datetime_ib?: boolean
    local_datetime_ib?: boolean
    entity?: boolean
    attribute?: boolean
    value?: boolean
  }, ExtArgs["result"]["goleta_scheduling_data"]>

  export type goleta_scheduling_dataSelectScalar = {
    utc_datetime_ib?: boolean
    local_datetime_ib?: boolean
    entity?: boolean
    attribute?: boolean
    value?: boolean
  }

  export type goleta_scheduling_dataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"utc_datetime_ib" | "local_datetime_ib" | "entity" | "attribute" | "value", ExtArgs["result"]["goleta_scheduling_data"]>

  export type $goleta_scheduling_dataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "goleta_scheduling_data"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      utc_datetime_ib: Date
      local_datetime_ib: Date
      entity: string
      attribute: string
      value: number | null
    }, ExtArgs["result"]["goleta_scheduling_data"]>
    composites: {}
  }

  type goleta_scheduling_dataGetPayload<S extends boolean | null | undefined | goleta_scheduling_dataDefaultArgs> = $Result.GetResult<Prisma.$goleta_scheduling_dataPayload, S>

  type goleta_scheduling_dataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<goleta_scheduling_dataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Goleta_scheduling_dataCountAggregateInputType | true
    }

  export interface goleta_scheduling_dataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['goleta_scheduling_data'], meta: { name: 'goleta_scheduling_data' } }
    /**
     * Find zero or one Goleta_scheduling_data that matches the filter.
     * @param {goleta_scheduling_dataFindUniqueArgs} args - Arguments to find a Goleta_scheduling_data
     * @example
     * // Get one Goleta_scheduling_data
     * const goleta_scheduling_data = await prisma.goleta_scheduling_data.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends goleta_scheduling_dataFindUniqueArgs>(args: SelectSubset<T, goleta_scheduling_dataFindUniqueArgs<ExtArgs>>): Prisma__goleta_scheduling_dataClient<$Result.GetResult<Prisma.$goleta_scheduling_dataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Goleta_scheduling_data that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {goleta_scheduling_dataFindUniqueOrThrowArgs} args - Arguments to find a Goleta_scheduling_data
     * @example
     * // Get one Goleta_scheduling_data
     * const goleta_scheduling_data = await prisma.goleta_scheduling_data.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends goleta_scheduling_dataFindUniqueOrThrowArgs>(args: SelectSubset<T, goleta_scheduling_dataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__goleta_scheduling_dataClient<$Result.GetResult<Prisma.$goleta_scheduling_dataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Goleta_scheduling_data that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {goleta_scheduling_dataFindFirstArgs} args - Arguments to find a Goleta_scheduling_data
     * @example
     * // Get one Goleta_scheduling_data
     * const goleta_scheduling_data = await prisma.goleta_scheduling_data.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends goleta_scheduling_dataFindFirstArgs>(args?: SelectSubset<T, goleta_scheduling_dataFindFirstArgs<ExtArgs>>): Prisma__goleta_scheduling_dataClient<$Result.GetResult<Prisma.$goleta_scheduling_dataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Goleta_scheduling_data that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {goleta_scheduling_dataFindFirstOrThrowArgs} args - Arguments to find a Goleta_scheduling_data
     * @example
     * // Get one Goleta_scheduling_data
     * const goleta_scheduling_data = await prisma.goleta_scheduling_data.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends goleta_scheduling_dataFindFirstOrThrowArgs>(args?: SelectSubset<T, goleta_scheduling_dataFindFirstOrThrowArgs<ExtArgs>>): Prisma__goleta_scheduling_dataClient<$Result.GetResult<Prisma.$goleta_scheduling_dataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Goleta_scheduling_data that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {goleta_scheduling_dataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Goleta_scheduling_data
     * const goleta_scheduling_data = await prisma.goleta_scheduling_data.findMany()
     * 
     * // Get first 10 Goleta_scheduling_data
     * const goleta_scheduling_data = await prisma.goleta_scheduling_data.findMany({ take: 10 })
     * 
     * // Only select the `utc_datetime_ib`
     * const goleta_scheduling_dataWithUtc_datetime_ibOnly = await prisma.goleta_scheduling_data.findMany({ select: { utc_datetime_ib: true } })
     * 
     */
    findMany<T extends goleta_scheduling_dataFindManyArgs>(args?: SelectSubset<T, goleta_scheduling_dataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$goleta_scheduling_dataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Goleta_scheduling_data.
     * @param {goleta_scheduling_dataCreateArgs} args - Arguments to create a Goleta_scheduling_data.
     * @example
     * // Create one Goleta_scheduling_data
     * const Goleta_scheduling_data = await prisma.goleta_scheduling_data.create({
     *   data: {
     *     // ... data to create a Goleta_scheduling_data
     *   }
     * })
     * 
     */
    create<T extends goleta_scheduling_dataCreateArgs>(args: SelectSubset<T, goleta_scheduling_dataCreateArgs<ExtArgs>>): Prisma__goleta_scheduling_dataClient<$Result.GetResult<Prisma.$goleta_scheduling_dataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Goleta_scheduling_data.
     * @param {goleta_scheduling_dataCreateManyArgs} args - Arguments to create many Goleta_scheduling_data.
     * @example
     * // Create many Goleta_scheduling_data
     * const goleta_scheduling_data = await prisma.goleta_scheduling_data.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends goleta_scheduling_dataCreateManyArgs>(args?: SelectSubset<T, goleta_scheduling_dataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Goleta_scheduling_data and returns the data saved in the database.
     * @param {goleta_scheduling_dataCreateManyAndReturnArgs} args - Arguments to create many Goleta_scheduling_data.
     * @example
     * // Create many Goleta_scheduling_data
     * const goleta_scheduling_data = await prisma.goleta_scheduling_data.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Goleta_scheduling_data and only return the `utc_datetime_ib`
     * const goleta_scheduling_dataWithUtc_datetime_ibOnly = await prisma.goleta_scheduling_data.createManyAndReturn({
     *   select: { utc_datetime_ib: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends goleta_scheduling_dataCreateManyAndReturnArgs>(args?: SelectSubset<T, goleta_scheduling_dataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$goleta_scheduling_dataPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Goleta_scheduling_data.
     * @param {goleta_scheduling_dataDeleteArgs} args - Arguments to delete one Goleta_scheduling_data.
     * @example
     * // Delete one Goleta_scheduling_data
     * const Goleta_scheduling_data = await prisma.goleta_scheduling_data.delete({
     *   where: {
     *     // ... filter to delete one Goleta_scheduling_data
     *   }
     * })
     * 
     */
    delete<T extends goleta_scheduling_dataDeleteArgs>(args: SelectSubset<T, goleta_scheduling_dataDeleteArgs<ExtArgs>>): Prisma__goleta_scheduling_dataClient<$Result.GetResult<Prisma.$goleta_scheduling_dataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Goleta_scheduling_data.
     * @param {goleta_scheduling_dataUpdateArgs} args - Arguments to update one Goleta_scheduling_data.
     * @example
     * // Update one Goleta_scheduling_data
     * const goleta_scheduling_data = await prisma.goleta_scheduling_data.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends goleta_scheduling_dataUpdateArgs>(args: SelectSubset<T, goleta_scheduling_dataUpdateArgs<ExtArgs>>): Prisma__goleta_scheduling_dataClient<$Result.GetResult<Prisma.$goleta_scheduling_dataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Goleta_scheduling_data.
     * @param {goleta_scheduling_dataDeleteManyArgs} args - Arguments to filter Goleta_scheduling_data to delete.
     * @example
     * // Delete a few Goleta_scheduling_data
     * const { count } = await prisma.goleta_scheduling_data.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends goleta_scheduling_dataDeleteManyArgs>(args?: SelectSubset<T, goleta_scheduling_dataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Goleta_scheduling_data.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {goleta_scheduling_dataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Goleta_scheduling_data
     * const goleta_scheduling_data = await prisma.goleta_scheduling_data.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends goleta_scheduling_dataUpdateManyArgs>(args: SelectSubset<T, goleta_scheduling_dataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Goleta_scheduling_data and returns the data updated in the database.
     * @param {goleta_scheduling_dataUpdateManyAndReturnArgs} args - Arguments to update many Goleta_scheduling_data.
     * @example
     * // Update many Goleta_scheduling_data
     * const goleta_scheduling_data = await prisma.goleta_scheduling_data.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Goleta_scheduling_data and only return the `utc_datetime_ib`
     * const goleta_scheduling_dataWithUtc_datetime_ibOnly = await prisma.goleta_scheduling_data.updateManyAndReturn({
     *   select: { utc_datetime_ib: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends goleta_scheduling_dataUpdateManyAndReturnArgs>(args: SelectSubset<T, goleta_scheduling_dataUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$goleta_scheduling_dataPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Goleta_scheduling_data.
     * @param {goleta_scheduling_dataUpsertArgs} args - Arguments to update or create a Goleta_scheduling_data.
     * @example
     * // Update or create a Goleta_scheduling_data
     * const goleta_scheduling_data = await prisma.goleta_scheduling_data.upsert({
     *   create: {
     *     // ... data to create a Goleta_scheduling_data
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Goleta_scheduling_data we want to update
     *   }
     * })
     */
    upsert<T extends goleta_scheduling_dataUpsertArgs>(args: SelectSubset<T, goleta_scheduling_dataUpsertArgs<ExtArgs>>): Prisma__goleta_scheduling_dataClient<$Result.GetResult<Prisma.$goleta_scheduling_dataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Goleta_scheduling_data.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {goleta_scheduling_dataCountArgs} args - Arguments to filter Goleta_scheduling_data to count.
     * @example
     * // Count the number of Goleta_scheduling_data
     * const count = await prisma.goleta_scheduling_data.count({
     *   where: {
     *     // ... the filter for the Goleta_scheduling_data we want to count
     *   }
     * })
    **/
    count<T extends goleta_scheduling_dataCountArgs>(
      args?: Subset<T, goleta_scheduling_dataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Goleta_scheduling_dataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Goleta_scheduling_data.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Goleta_scheduling_dataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Goleta_scheduling_dataAggregateArgs>(args: Subset<T, Goleta_scheduling_dataAggregateArgs>): Prisma.PrismaPromise<GetGoleta_scheduling_dataAggregateType<T>>

    /**
     * Group by Goleta_scheduling_data.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {goleta_scheduling_dataGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends goleta_scheduling_dataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: goleta_scheduling_dataGroupByArgs['orderBy'] }
        : { orderBy?: goleta_scheduling_dataGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, goleta_scheduling_dataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGoleta_scheduling_dataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the goleta_scheduling_data model
   */
  readonly fields: goleta_scheduling_dataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for goleta_scheduling_data.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__goleta_scheduling_dataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the goleta_scheduling_data model
   */
  interface goleta_scheduling_dataFieldRefs {
    readonly utc_datetime_ib: FieldRef<"goleta_scheduling_data", 'DateTime'>
    readonly local_datetime_ib: FieldRef<"goleta_scheduling_data", 'DateTime'>
    readonly entity: FieldRef<"goleta_scheduling_data", 'String'>
    readonly attribute: FieldRef<"goleta_scheduling_data", 'String'>
    readonly value: FieldRef<"goleta_scheduling_data", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * goleta_scheduling_data findUnique
   */
  export type goleta_scheduling_dataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goleta_scheduling_data
     */
    select?: goleta_scheduling_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the goleta_scheduling_data
     */
    omit?: goleta_scheduling_dataOmit<ExtArgs> | null
    /**
     * Filter, which goleta_scheduling_data to fetch.
     */
    where: goleta_scheduling_dataWhereUniqueInput
  }

  /**
   * goleta_scheduling_data findUniqueOrThrow
   */
  export type goleta_scheduling_dataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goleta_scheduling_data
     */
    select?: goleta_scheduling_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the goleta_scheduling_data
     */
    omit?: goleta_scheduling_dataOmit<ExtArgs> | null
    /**
     * Filter, which goleta_scheduling_data to fetch.
     */
    where: goleta_scheduling_dataWhereUniqueInput
  }

  /**
   * goleta_scheduling_data findFirst
   */
  export type goleta_scheduling_dataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goleta_scheduling_data
     */
    select?: goleta_scheduling_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the goleta_scheduling_data
     */
    omit?: goleta_scheduling_dataOmit<ExtArgs> | null
    /**
     * Filter, which goleta_scheduling_data to fetch.
     */
    where?: goleta_scheduling_dataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of goleta_scheduling_data to fetch.
     */
    orderBy?: goleta_scheduling_dataOrderByWithRelationInput | goleta_scheduling_dataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for goleta_scheduling_data.
     */
    cursor?: goleta_scheduling_dataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` goleta_scheduling_data from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` goleta_scheduling_data.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of goleta_scheduling_data.
     */
    distinct?: Goleta_scheduling_dataScalarFieldEnum | Goleta_scheduling_dataScalarFieldEnum[]
  }

  /**
   * goleta_scheduling_data findFirstOrThrow
   */
  export type goleta_scheduling_dataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goleta_scheduling_data
     */
    select?: goleta_scheduling_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the goleta_scheduling_data
     */
    omit?: goleta_scheduling_dataOmit<ExtArgs> | null
    /**
     * Filter, which goleta_scheduling_data to fetch.
     */
    where?: goleta_scheduling_dataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of goleta_scheduling_data to fetch.
     */
    orderBy?: goleta_scheduling_dataOrderByWithRelationInput | goleta_scheduling_dataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for goleta_scheduling_data.
     */
    cursor?: goleta_scheduling_dataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` goleta_scheduling_data from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` goleta_scheduling_data.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of goleta_scheduling_data.
     */
    distinct?: Goleta_scheduling_dataScalarFieldEnum | Goleta_scheduling_dataScalarFieldEnum[]
  }

  /**
   * goleta_scheduling_data findMany
   */
  export type goleta_scheduling_dataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goleta_scheduling_data
     */
    select?: goleta_scheduling_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the goleta_scheduling_data
     */
    omit?: goleta_scheduling_dataOmit<ExtArgs> | null
    /**
     * Filter, which goleta_scheduling_data to fetch.
     */
    where?: goleta_scheduling_dataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of goleta_scheduling_data to fetch.
     */
    orderBy?: goleta_scheduling_dataOrderByWithRelationInput | goleta_scheduling_dataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing goleta_scheduling_data.
     */
    cursor?: goleta_scheduling_dataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` goleta_scheduling_data from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` goleta_scheduling_data.
     */
    skip?: number
    distinct?: Goleta_scheduling_dataScalarFieldEnum | Goleta_scheduling_dataScalarFieldEnum[]
  }

  /**
   * goleta_scheduling_data create
   */
  export type goleta_scheduling_dataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goleta_scheduling_data
     */
    select?: goleta_scheduling_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the goleta_scheduling_data
     */
    omit?: goleta_scheduling_dataOmit<ExtArgs> | null
    /**
     * The data needed to create a goleta_scheduling_data.
     */
    data: XOR<goleta_scheduling_dataCreateInput, goleta_scheduling_dataUncheckedCreateInput>
  }

  /**
   * goleta_scheduling_data createMany
   */
  export type goleta_scheduling_dataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many goleta_scheduling_data.
     */
    data: goleta_scheduling_dataCreateManyInput | goleta_scheduling_dataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * goleta_scheduling_data createManyAndReturn
   */
  export type goleta_scheduling_dataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goleta_scheduling_data
     */
    select?: goleta_scheduling_dataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the goleta_scheduling_data
     */
    omit?: goleta_scheduling_dataOmit<ExtArgs> | null
    /**
     * The data used to create many goleta_scheduling_data.
     */
    data: goleta_scheduling_dataCreateManyInput | goleta_scheduling_dataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * goleta_scheduling_data update
   */
  export type goleta_scheduling_dataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goleta_scheduling_data
     */
    select?: goleta_scheduling_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the goleta_scheduling_data
     */
    omit?: goleta_scheduling_dataOmit<ExtArgs> | null
    /**
     * The data needed to update a goleta_scheduling_data.
     */
    data: XOR<goleta_scheduling_dataUpdateInput, goleta_scheduling_dataUncheckedUpdateInput>
    /**
     * Choose, which goleta_scheduling_data to update.
     */
    where: goleta_scheduling_dataWhereUniqueInput
  }

  /**
   * goleta_scheduling_data updateMany
   */
  export type goleta_scheduling_dataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update goleta_scheduling_data.
     */
    data: XOR<goleta_scheduling_dataUpdateManyMutationInput, goleta_scheduling_dataUncheckedUpdateManyInput>
    /**
     * Filter which goleta_scheduling_data to update
     */
    where?: goleta_scheduling_dataWhereInput
    /**
     * Limit how many goleta_scheduling_data to update.
     */
    limit?: number
  }

  /**
   * goleta_scheduling_data updateManyAndReturn
   */
  export type goleta_scheduling_dataUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goleta_scheduling_data
     */
    select?: goleta_scheduling_dataSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the goleta_scheduling_data
     */
    omit?: goleta_scheduling_dataOmit<ExtArgs> | null
    /**
     * The data used to update goleta_scheduling_data.
     */
    data: XOR<goleta_scheduling_dataUpdateManyMutationInput, goleta_scheduling_dataUncheckedUpdateManyInput>
    /**
     * Filter which goleta_scheduling_data to update
     */
    where?: goleta_scheduling_dataWhereInput
    /**
     * Limit how many goleta_scheduling_data to update.
     */
    limit?: number
  }

  /**
   * goleta_scheduling_data upsert
   */
  export type goleta_scheduling_dataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goleta_scheduling_data
     */
    select?: goleta_scheduling_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the goleta_scheduling_data
     */
    omit?: goleta_scheduling_dataOmit<ExtArgs> | null
    /**
     * The filter to search for the goleta_scheduling_data to update in case it exists.
     */
    where: goleta_scheduling_dataWhereUniqueInput
    /**
     * In case the goleta_scheduling_data found by the `where` argument doesn't exist, create a new goleta_scheduling_data with this data.
     */
    create: XOR<goleta_scheduling_dataCreateInput, goleta_scheduling_dataUncheckedCreateInput>
    /**
     * In case the goleta_scheduling_data was found with the provided `where` argument, update it with this data.
     */
    update: XOR<goleta_scheduling_dataUpdateInput, goleta_scheduling_dataUncheckedUpdateInput>
  }

  /**
   * goleta_scheduling_data delete
   */
  export type goleta_scheduling_dataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goleta_scheduling_data
     */
    select?: goleta_scheduling_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the goleta_scheduling_data
     */
    omit?: goleta_scheduling_dataOmit<ExtArgs> | null
    /**
     * Filter which goleta_scheduling_data to delete.
     */
    where: goleta_scheduling_dataWhereUniqueInput
  }

  /**
   * goleta_scheduling_data deleteMany
   */
  export type goleta_scheduling_dataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which goleta_scheduling_data to delete
     */
    where?: goleta_scheduling_dataWhereInput
    /**
     * Limit how many goleta_scheduling_data to delete.
     */
    limit?: number
  }

  /**
   * goleta_scheduling_data without action
   */
  export type goleta_scheduling_dataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goleta_scheduling_data
     */
    select?: goleta_scheduling_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the goleta_scheduling_data
     */
    omit?: goleta_scheduling_dataOmit<ExtArgs> | null
  }


  /**
   * Model internal_forecasts
   */

  export type AggregateInternal_forecasts = {
    _count: Internal_forecastsCountAggregateOutputType | null
    _avg: Internal_forecastsAvgAggregateOutputType | null
    _sum: Internal_forecastsSumAggregateOutputType | null
    _min: Internal_forecastsMinAggregateOutputType | null
    _max: Internal_forecastsMaxAggregateOutputType | null
  }

  export type Internal_forecastsAvgAggregateOutputType = {
    value: Decimal | null
  }

  export type Internal_forecastsSumAggregateOutputType = {
    value: Decimal | null
  }

  export type Internal_forecastsMinAggregateOutputType = {
    flowdatestart: Date | null
    term: string | null
    markdate: Date | null
    marklocation: string | null
    markmarket: string | null
    curvecreator: string | null
    currentcurve: boolean | null
    valuetype: string | null
    value: Decimal | null
    units: string | null
    marktype: string | null
    marktypedesc: string | null
    gridstorpurpose: string | null
    tablecreationtime: Date | null
  }

  export type Internal_forecastsMaxAggregateOutputType = {
    flowdatestart: Date | null
    term: string | null
    markdate: Date | null
    marklocation: string | null
    markmarket: string | null
    curvecreator: string | null
    currentcurve: boolean | null
    valuetype: string | null
    value: Decimal | null
    units: string | null
    marktype: string | null
    marktypedesc: string | null
    gridstorpurpose: string | null
    tablecreationtime: Date | null
  }

  export type Internal_forecastsCountAggregateOutputType = {
    flowdatestart: number
    term: number
    markdate: number
    marklocation: number
    markmarket: number
    curvecreator: number
    currentcurve: number
    valuetype: number
    value: number
    units: number
    marktype: number
    marktypedesc: number
    gridstorpurpose: number
    tablecreationtime: number
    _all: number
  }


  export type Internal_forecastsAvgAggregateInputType = {
    value?: true
  }

  export type Internal_forecastsSumAggregateInputType = {
    value?: true
  }

  export type Internal_forecastsMinAggregateInputType = {
    flowdatestart?: true
    term?: true
    markdate?: true
    marklocation?: true
    markmarket?: true
    curvecreator?: true
    currentcurve?: true
    valuetype?: true
    value?: true
    units?: true
    marktype?: true
    marktypedesc?: true
    gridstorpurpose?: true
    tablecreationtime?: true
  }

  export type Internal_forecastsMaxAggregateInputType = {
    flowdatestart?: true
    term?: true
    markdate?: true
    marklocation?: true
    markmarket?: true
    curvecreator?: true
    currentcurve?: true
    valuetype?: true
    value?: true
    units?: true
    marktype?: true
    marktypedesc?: true
    gridstorpurpose?: true
    tablecreationtime?: true
  }

  export type Internal_forecastsCountAggregateInputType = {
    flowdatestart?: true
    term?: true
    markdate?: true
    marklocation?: true
    markmarket?: true
    curvecreator?: true
    currentcurve?: true
    valuetype?: true
    value?: true
    units?: true
    marktype?: true
    marktypedesc?: true
    gridstorpurpose?: true
    tablecreationtime?: true
    _all?: true
  }

  export type Internal_forecastsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which internal_forecasts to aggregate.
     */
    where?: internal_forecastsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of internal_forecasts to fetch.
     */
    orderBy?: internal_forecastsOrderByWithRelationInput | internal_forecastsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: internal_forecastsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` internal_forecasts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` internal_forecasts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned internal_forecasts
    **/
    _count?: true | Internal_forecastsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Internal_forecastsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Internal_forecastsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Internal_forecastsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Internal_forecastsMaxAggregateInputType
  }

  export type GetInternal_forecastsAggregateType<T extends Internal_forecastsAggregateArgs> = {
        [P in keyof T & keyof AggregateInternal_forecasts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInternal_forecasts[P]>
      : GetScalarType<T[P], AggregateInternal_forecasts[P]>
  }




  export type internal_forecastsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: internal_forecastsWhereInput
    orderBy?: internal_forecastsOrderByWithAggregationInput | internal_forecastsOrderByWithAggregationInput[]
    by: Internal_forecastsScalarFieldEnum[] | Internal_forecastsScalarFieldEnum
    having?: internal_forecastsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Internal_forecastsCountAggregateInputType | true
    _avg?: Internal_forecastsAvgAggregateInputType
    _sum?: Internal_forecastsSumAggregateInputType
    _min?: Internal_forecastsMinAggregateInputType
    _max?: Internal_forecastsMaxAggregateInputType
  }

  export type Internal_forecastsGroupByOutputType = {
    flowdatestart: Date | null
    term: string | null
    markdate: Date
    marklocation: string
    markmarket: string
    curvecreator: string
    currentcurve: boolean
    valuetype: string
    value: Decimal | null
    units: string | null
    marktype: string | null
    marktypedesc: string | null
    gridstorpurpose: string | null
    tablecreationtime: Date | null
    _count: Internal_forecastsCountAggregateOutputType | null
    _avg: Internal_forecastsAvgAggregateOutputType | null
    _sum: Internal_forecastsSumAggregateOutputType | null
    _min: Internal_forecastsMinAggregateOutputType | null
    _max: Internal_forecastsMaxAggregateOutputType | null
  }

  type GetInternal_forecastsGroupByPayload<T extends internal_forecastsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Internal_forecastsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Internal_forecastsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Internal_forecastsGroupByOutputType[P]>
            : GetScalarType<T[P], Internal_forecastsGroupByOutputType[P]>
        }
      >
    >


  export type internal_forecastsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    flowdatestart?: boolean
    term?: boolean
    markdate?: boolean
    marklocation?: boolean
    markmarket?: boolean
    curvecreator?: boolean
    currentcurve?: boolean
    valuetype?: boolean
    value?: boolean
    units?: boolean
    marktype?: boolean
    marktypedesc?: boolean
    gridstorpurpose?: boolean
    tablecreationtime?: boolean
  }, ExtArgs["result"]["internal_forecasts"]>

  export type internal_forecastsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    flowdatestart?: boolean
    term?: boolean
    markdate?: boolean
    marklocation?: boolean
    markmarket?: boolean
    curvecreator?: boolean
    currentcurve?: boolean
    valuetype?: boolean
    value?: boolean
    units?: boolean
    marktype?: boolean
    marktypedesc?: boolean
    gridstorpurpose?: boolean
    tablecreationtime?: boolean
  }, ExtArgs["result"]["internal_forecasts"]>

  export type internal_forecastsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    flowdatestart?: boolean
    term?: boolean
    markdate?: boolean
    marklocation?: boolean
    markmarket?: boolean
    curvecreator?: boolean
    currentcurve?: boolean
    valuetype?: boolean
    value?: boolean
    units?: boolean
    marktype?: boolean
    marktypedesc?: boolean
    gridstorpurpose?: boolean
    tablecreationtime?: boolean
  }, ExtArgs["result"]["internal_forecasts"]>

  export type internal_forecastsSelectScalar = {
    flowdatestart?: boolean
    term?: boolean
    markdate?: boolean
    marklocation?: boolean
    markmarket?: boolean
    curvecreator?: boolean
    currentcurve?: boolean
    valuetype?: boolean
    value?: boolean
    units?: boolean
    marktype?: boolean
    marktypedesc?: boolean
    gridstorpurpose?: boolean
    tablecreationtime?: boolean
  }

  export type internal_forecastsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"flowdatestart" | "term" | "markdate" | "marklocation" | "markmarket" | "curvecreator" | "currentcurve" | "valuetype" | "value" | "units" | "marktype" | "marktypedesc" | "gridstorpurpose" | "tablecreationtime", ExtArgs["result"]["internal_forecasts"]>

  export type $internal_forecastsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "internal_forecasts"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      flowdatestart: Date | null
      term: string | null
      markdate: Date
      marklocation: string
      markmarket: string
      curvecreator: string
      currentcurve: boolean
      valuetype: string
      value: Prisma.Decimal | null
      units: string | null
      marktype: string | null
      marktypedesc: string | null
      gridstorpurpose: string | null
      tablecreationtime: Date | null
    }, ExtArgs["result"]["internal_forecasts"]>
    composites: {}
  }

  type internal_forecastsGetPayload<S extends boolean | null | undefined | internal_forecastsDefaultArgs> = $Result.GetResult<Prisma.$internal_forecastsPayload, S>

  type internal_forecastsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<internal_forecastsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Internal_forecastsCountAggregateInputType | true
    }

  export interface internal_forecastsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['internal_forecasts'], meta: { name: 'internal_forecasts' } }
    /**
     * Find zero or one Internal_forecasts that matches the filter.
     * @param {internal_forecastsFindUniqueArgs} args - Arguments to find a Internal_forecasts
     * @example
     * // Get one Internal_forecasts
     * const internal_forecasts = await prisma.internal_forecasts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends internal_forecastsFindUniqueArgs>(args: SelectSubset<T, internal_forecastsFindUniqueArgs<ExtArgs>>): Prisma__internal_forecastsClient<$Result.GetResult<Prisma.$internal_forecastsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Internal_forecasts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {internal_forecastsFindUniqueOrThrowArgs} args - Arguments to find a Internal_forecasts
     * @example
     * // Get one Internal_forecasts
     * const internal_forecasts = await prisma.internal_forecasts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends internal_forecastsFindUniqueOrThrowArgs>(args: SelectSubset<T, internal_forecastsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__internal_forecastsClient<$Result.GetResult<Prisma.$internal_forecastsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Internal_forecasts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {internal_forecastsFindFirstArgs} args - Arguments to find a Internal_forecasts
     * @example
     * // Get one Internal_forecasts
     * const internal_forecasts = await prisma.internal_forecasts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends internal_forecastsFindFirstArgs>(args?: SelectSubset<T, internal_forecastsFindFirstArgs<ExtArgs>>): Prisma__internal_forecastsClient<$Result.GetResult<Prisma.$internal_forecastsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Internal_forecasts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {internal_forecastsFindFirstOrThrowArgs} args - Arguments to find a Internal_forecasts
     * @example
     * // Get one Internal_forecasts
     * const internal_forecasts = await prisma.internal_forecasts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends internal_forecastsFindFirstOrThrowArgs>(args?: SelectSubset<T, internal_forecastsFindFirstOrThrowArgs<ExtArgs>>): Prisma__internal_forecastsClient<$Result.GetResult<Prisma.$internal_forecastsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Internal_forecasts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {internal_forecastsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Internal_forecasts
     * const internal_forecasts = await prisma.internal_forecasts.findMany()
     * 
     * // Get first 10 Internal_forecasts
     * const internal_forecasts = await prisma.internal_forecasts.findMany({ take: 10 })
     * 
     * // Only select the `flowdatestart`
     * const internal_forecastsWithFlowdatestartOnly = await prisma.internal_forecasts.findMany({ select: { flowdatestart: true } })
     * 
     */
    findMany<T extends internal_forecastsFindManyArgs>(args?: SelectSubset<T, internal_forecastsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$internal_forecastsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Internal_forecasts.
     * @param {internal_forecastsCreateArgs} args - Arguments to create a Internal_forecasts.
     * @example
     * // Create one Internal_forecasts
     * const Internal_forecasts = await prisma.internal_forecasts.create({
     *   data: {
     *     // ... data to create a Internal_forecasts
     *   }
     * })
     * 
     */
    create<T extends internal_forecastsCreateArgs>(args: SelectSubset<T, internal_forecastsCreateArgs<ExtArgs>>): Prisma__internal_forecastsClient<$Result.GetResult<Prisma.$internal_forecastsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Internal_forecasts.
     * @param {internal_forecastsCreateManyArgs} args - Arguments to create many Internal_forecasts.
     * @example
     * // Create many Internal_forecasts
     * const internal_forecasts = await prisma.internal_forecasts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends internal_forecastsCreateManyArgs>(args?: SelectSubset<T, internal_forecastsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Internal_forecasts and returns the data saved in the database.
     * @param {internal_forecastsCreateManyAndReturnArgs} args - Arguments to create many Internal_forecasts.
     * @example
     * // Create many Internal_forecasts
     * const internal_forecasts = await prisma.internal_forecasts.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Internal_forecasts and only return the `flowdatestart`
     * const internal_forecastsWithFlowdatestartOnly = await prisma.internal_forecasts.createManyAndReturn({
     *   select: { flowdatestart: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends internal_forecastsCreateManyAndReturnArgs>(args?: SelectSubset<T, internal_forecastsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$internal_forecastsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Internal_forecasts.
     * @param {internal_forecastsDeleteArgs} args - Arguments to delete one Internal_forecasts.
     * @example
     * // Delete one Internal_forecasts
     * const Internal_forecasts = await prisma.internal_forecasts.delete({
     *   where: {
     *     // ... filter to delete one Internal_forecasts
     *   }
     * })
     * 
     */
    delete<T extends internal_forecastsDeleteArgs>(args: SelectSubset<T, internal_forecastsDeleteArgs<ExtArgs>>): Prisma__internal_forecastsClient<$Result.GetResult<Prisma.$internal_forecastsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Internal_forecasts.
     * @param {internal_forecastsUpdateArgs} args - Arguments to update one Internal_forecasts.
     * @example
     * // Update one Internal_forecasts
     * const internal_forecasts = await prisma.internal_forecasts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends internal_forecastsUpdateArgs>(args: SelectSubset<T, internal_forecastsUpdateArgs<ExtArgs>>): Prisma__internal_forecastsClient<$Result.GetResult<Prisma.$internal_forecastsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Internal_forecasts.
     * @param {internal_forecastsDeleteManyArgs} args - Arguments to filter Internal_forecasts to delete.
     * @example
     * // Delete a few Internal_forecasts
     * const { count } = await prisma.internal_forecasts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends internal_forecastsDeleteManyArgs>(args?: SelectSubset<T, internal_forecastsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Internal_forecasts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {internal_forecastsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Internal_forecasts
     * const internal_forecasts = await prisma.internal_forecasts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends internal_forecastsUpdateManyArgs>(args: SelectSubset<T, internal_forecastsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Internal_forecasts and returns the data updated in the database.
     * @param {internal_forecastsUpdateManyAndReturnArgs} args - Arguments to update many Internal_forecasts.
     * @example
     * // Update many Internal_forecasts
     * const internal_forecasts = await prisma.internal_forecasts.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Internal_forecasts and only return the `flowdatestart`
     * const internal_forecastsWithFlowdatestartOnly = await prisma.internal_forecasts.updateManyAndReturn({
     *   select: { flowdatestart: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends internal_forecastsUpdateManyAndReturnArgs>(args: SelectSubset<T, internal_forecastsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$internal_forecastsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Internal_forecasts.
     * @param {internal_forecastsUpsertArgs} args - Arguments to update or create a Internal_forecasts.
     * @example
     * // Update or create a Internal_forecasts
     * const internal_forecasts = await prisma.internal_forecasts.upsert({
     *   create: {
     *     // ... data to create a Internal_forecasts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Internal_forecasts we want to update
     *   }
     * })
     */
    upsert<T extends internal_forecastsUpsertArgs>(args: SelectSubset<T, internal_forecastsUpsertArgs<ExtArgs>>): Prisma__internal_forecastsClient<$Result.GetResult<Prisma.$internal_forecastsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Internal_forecasts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {internal_forecastsCountArgs} args - Arguments to filter Internal_forecasts to count.
     * @example
     * // Count the number of Internal_forecasts
     * const count = await prisma.internal_forecasts.count({
     *   where: {
     *     // ... the filter for the Internal_forecasts we want to count
     *   }
     * })
    **/
    count<T extends internal_forecastsCountArgs>(
      args?: Subset<T, internal_forecastsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Internal_forecastsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Internal_forecasts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Internal_forecastsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Internal_forecastsAggregateArgs>(args: Subset<T, Internal_forecastsAggregateArgs>): Prisma.PrismaPromise<GetInternal_forecastsAggregateType<T>>

    /**
     * Group by Internal_forecasts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {internal_forecastsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends internal_forecastsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: internal_forecastsGroupByArgs['orderBy'] }
        : { orderBy?: internal_forecastsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, internal_forecastsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInternal_forecastsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the internal_forecasts model
   */
  readonly fields: internal_forecastsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for internal_forecasts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__internal_forecastsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the internal_forecasts model
   */
  interface internal_forecastsFieldRefs {
    readonly flowdatestart: FieldRef<"internal_forecasts", 'DateTime'>
    readonly term: FieldRef<"internal_forecasts", 'String'>
    readonly markdate: FieldRef<"internal_forecasts", 'DateTime'>
    readonly marklocation: FieldRef<"internal_forecasts", 'String'>
    readonly markmarket: FieldRef<"internal_forecasts", 'String'>
    readonly curvecreator: FieldRef<"internal_forecasts", 'String'>
    readonly currentcurve: FieldRef<"internal_forecasts", 'Boolean'>
    readonly valuetype: FieldRef<"internal_forecasts", 'String'>
    readonly value: FieldRef<"internal_forecasts", 'Decimal'>
    readonly units: FieldRef<"internal_forecasts", 'String'>
    readonly marktype: FieldRef<"internal_forecasts", 'String'>
    readonly marktypedesc: FieldRef<"internal_forecasts", 'String'>
    readonly gridstorpurpose: FieldRef<"internal_forecasts", 'String'>
    readonly tablecreationtime: FieldRef<"internal_forecasts", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * internal_forecasts findUnique
   */
  export type internal_forecastsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the internal_forecasts
     */
    select?: internal_forecastsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the internal_forecasts
     */
    omit?: internal_forecastsOmit<ExtArgs> | null
    /**
     * Filter, which internal_forecasts to fetch.
     */
    where: internal_forecastsWhereUniqueInput
  }

  /**
   * internal_forecasts findUniqueOrThrow
   */
  export type internal_forecastsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the internal_forecasts
     */
    select?: internal_forecastsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the internal_forecasts
     */
    omit?: internal_forecastsOmit<ExtArgs> | null
    /**
     * Filter, which internal_forecasts to fetch.
     */
    where: internal_forecastsWhereUniqueInput
  }

  /**
   * internal_forecasts findFirst
   */
  export type internal_forecastsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the internal_forecasts
     */
    select?: internal_forecastsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the internal_forecasts
     */
    omit?: internal_forecastsOmit<ExtArgs> | null
    /**
     * Filter, which internal_forecasts to fetch.
     */
    where?: internal_forecastsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of internal_forecasts to fetch.
     */
    orderBy?: internal_forecastsOrderByWithRelationInput | internal_forecastsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for internal_forecasts.
     */
    cursor?: internal_forecastsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` internal_forecasts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` internal_forecasts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of internal_forecasts.
     */
    distinct?: Internal_forecastsScalarFieldEnum | Internal_forecastsScalarFieldEnum[]
  }

  /**
   * internal_forecasts findFirstOrThrow
   */
  export type internal_forecastsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the internal_forecasts
     */
    select?: internal_forecastsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the internal_forecasts
     */
    omit?: internal_forecastsOmit<ExtArgs> | null
    /**
     * Filter, which internal_forecasts to fetch.
     */
    where?: internal_forecastsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of internal_forecasts to fetch.
     */
    orderBy?: internal_forecastsOrderByWithRelationInput | internal_forecastsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for internal_forecasts.
     */
    cursor?: internal_forecastsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` internal_forecasts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` internal_forecasts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of internal_forecasts.
     */
    distinct?: Internal_forecastsScalarFieldEnum | Internal_forecastsScalarFieldEnum[]
  }

  /**
   * internal_forecasts findMany
   */
  export type internal_forecastsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the internal_forecasts
     */
    select?: internal_forecastsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the internal_forecasts
     */
    omit?: internal_forecastsOmit<ExtArgs> | null
    /**
     * Filter, which internal_forecasts to fetch.
     */
    where?: internal_forecastsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of internal_forecasts to fetch.
     */
    orderBy?: internal_forecastsOrderByWithRelationInput | internal_forecastsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing internal_forecasts.
     */
    cursor?: internal_forecastsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` internal_forecasts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` internal_forecasts.
     */
    skip?: number
    distinct?: Internal_forecastsScalarFieldEnum | Internal_forecastsScalarFieldEnum[]
  }

  /**
   * internal_forecasts create
   */
  export type internal_forecastsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the internal_forecasts
     */
    select?: internal_forecastsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the internal_forecasts
     */
    omit?: internal_forecastsOmit<ExtArgs> | null
    /**
     * The data needed to create a internal_forecasts.
     */
    data: XOR<internal_forecastsCreateInput, internal_forecastsUncheckedCreateInput>
  }

  /**
   * internal_forecasts createMany
   */
  export type internal_forecastsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many internal_forecasts.
     */
    data: internal_forecastsCreateManyInput | internal_forecastsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * internal_forecasts createManyAndReturn
   */
  export type internal_forecastsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the internal_forecasts
     */
    select?: internal_forecastsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the internal_forecasts
     */
    omit?: internal_forecastsOmit<ExtArgs> | null
    /**
     * The data used to create many internal_forecasts.
     */
    data: internal_forecastsCreateManyInput | internal_forecastsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * internal_forecasts update
   */
  export type internal_forecastsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the internal_forecasts
     */
    select?: internal_forecastsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the internal_forecasts
     */
    omit?: internal_forecastsOmit<ExtArgs> | null
    /**
     * The data needed to update a internal_forecasts.
     */
    data: XOR<internal_forecastsUpdateInput, internal_forecastsUncheckedUpdateInput>
    /**
     * Choose, which internal_forecasts to update.
     */
    where: internal_forecastsWhereUniqueInput
  }

  /**
   * internal_forecasts updateMany
   */
  export type internal_forecastsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update internal_forecasts.
     */
    data: XOR<internal_forecastsUpdateManyMutationInput, internal_forecastsUncheckedUpdateManyInput>
    /**
     * Filter which internal_forecasts to update
     */
    where?: internal_forecastsWhereInput
    /**
     * Limit how many internal_forecasts to update.
     */
    limit?: number
  }

  /**
   * internal_forecasts updateManyAndReturn
   */
  export type internal_forecastsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the internal_forecasts
     */
    select?: internal_forecastsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the internal_forecasts
     */
    omit?: internal_forecastsOmit<ExtArgs> | null
    /**
     * The data used to update internal_forecasts.
     */
    data: XOR<internal_forecastsUpdateManyMutationInput, internal_forecastsUncheckedUpdateManyInput>
    /**
     * Filter which internal_forecasts to update
     */
    where?: internal_forecastsWhereInput
    /**
     * Limit how many internal_forecasts to update.
     */
    limit?: number
  }

  /**
   * internal_forecasts upsert
   */
  export type internal_forecastsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the internal_forecasts
     */
    select?: internal_forecastsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the internal_forecasts
     */
    omit?: internal_forecastsOmit<ExtArgs> | null
    /**
     * The filter to search for the internal_forecasts to update in case it exists.
     */
    where: internal_forecastsWhereUniqueInput
    /**
     * In case the internal_forecasts found by the `where` argument doesn't exist, create a new internal_forecasts with this data.
     */
    create: XOR<internal_forecastsCreateInput, internal_forecastsUncheckedCreateInput>
    /**
     * In case the internal_forecasts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<internal_forecastsUpdateInput, internal_forecastsUncheckedUpdateInput>
  }

  /**
   * internal_forecasts delete
   */
  export type internal_forecastsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the internal_forecasts
     */
    select?: internal_forecastsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the internal_forecasts
     */
    omit?: internal_forecastsOmit<ExtArgs> | null
    /**
     * Filter which internal_forecasts to delete.
     */
    where: internal_forecastsWhereUniqueInput
  }

  /**
   * internal_forecasts deleteMany
   */
  export type internal_forecastsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which internal_forecasts to delete
     */
    where?: internal_forecastsWhereInput
    /**
     * Limit how many internal_forecasts to delete.
     */
    limit?: number
  }

  /**
   * internal_forecasts without action
   */
  export type internal_forecastsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the internal_forecasts
     */
    select?: internal_forecastsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the internal_forecasts
     */
    omit?: internal_forecastsOmit<ExtArgs> | null
  }


  /**
   * Model monthly_revenue_forecasts
   */

  export type AggregateMonthly_revenue_forecasts = {
    _count: Monthly_revenue_forecastsCountAggregateOutputType | null
    _avg: Monthly_revenue_forecastsAvgAggregateOutputType | null
    _sum: Monthly_revenue_forecastsSumAggregateOutputType | null
    _min: Monthly_revenue_forecastsMinAggregateOutputType | null
    _max: Monthly_revenue_forecastsMaxAggregateOutputType | null
  }

  export type Monthly_revenue_forecastsAvgAggregateOutputType = {
    price: Decimal | null
  }

  export type Monthly_revenue_forecastsSumAggregateOutputType = {
    price: Decimal | null
  }

  export type Monthly_revenue_forecastsMinAggregateOutputType = {
    forecastmonth: Date | null
    markdate: Date | null
    curvename: string | null
    casetype: string | null
    optimizationtype: string | null
    location: string | null
    pricetype: string | null
    price: Decimal | null
    unit: string | null
  }

  export type Monthly_revenue_forecastsMaxAggregateOutputType = {
    forecastmonth: Date | null
    markdate: Date | null
    curvename: string | null
    casetype: string | null
    optimizationtype: string | null
    location: string | null
    pricetype: string | null
    price: Decimal | null
    unit: string | null
  }

  export type Monthly_revenue_forecastsCountAggregateOutputType = {
    forecastmonth: number
    markdate: number
    curvename: number
    casetype: number
    optimizationtype: number
    location: number
    pricetype: number
    price: number
    unit: number
    _all: number
  }


  export type Monthly_revenue_forecastsAvgAggregateInputType = {
    price?: true
  }

  export type Monthly_revenue_forecastsSumAggregateInputType = {
    price?: true
  }

  export type Monthly_revenue_forecastsMinAggregateInputType = {
    forecastmonth?: true
    markdate?: true
    curvename?: true
    casetype?: true
    optimizationtype?: true
    location?: true
    pricetype?: true
    price?: true
    unit?: true
  }

  export type Monthly_revenue_forecastsMaxAggregateInputType = {
    forecastmonth?: true
    markdate?: true
    curvename?: true
    casetype?: true
    optimizationtype?: true
    location?: true
    pricetype?: true
    price?: true
    unit?: true
  }

  export type Monthly_revenue_forecastsCountAggregateInputType = {
    forecastmonth?: true
    markdate?: true
    curvename?: true
    casetype?: true
    optimizationtype?: true
    location?: true
    pricetype?: true
    price?: true
    unit?: true
    _all?: true
  }

  export type Monthly_revenue_forecastsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which monthly_revenue_forecasts to aggregate.
     */
    where?: monthly_revenue_forecastsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of monthly_revenue_forecasts to fetch.
     */
    orderBy?: monthly_revenue_forecastsOrderByWithRelationInput | monthly_revenue_forecastsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: monthly_revenue_forecastsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` monthly_revenue_forecasts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` monthly_revenue_forecasts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned monthly_revenue_forecasts
    **/
    _count?: true | Monthly_revenue_forecastsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Monthly_revenue_forecastsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Monthly_revenue_forecastsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Monthly_revenue_forecastsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Monthly_revenue_forecastsMaxAggregateInputType
  }

  export type GetMonthly_revenue_forecastsAggregateType<T extends Monthly_revenue_forecastsAggregateArgs> = {
        [P in keyof T & keyof AggregateMonthly_revenue_forecasts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMonthly_revenue_forecasts[P]>
      : GetScalarType<T[P], AggregateMonthly_revenue_forecasts[P]>
  }




  export type monthly_revenue_forecastsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: monthly_revenue_forecastsWhereInput
    orderBy?: monthly_revenue_forecastsOrderByWithAggregationInput | monthly_revenue_forecastsOrderByWithAggregationInput[]
    by: Monthly_revenue_forecastsScalarFieldEnum[] | Monthly_revenue_forecastsScalarFieldEnum
    having?: monthly_revenue_forecastsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Monthly_revenue_forecastsCountAggregateInputType | true
    _avg?: Monthly_revenue_forecastsAvgAggregateInputType
    _sum?: Monthly_revenue_forecastsSumAggregateInputType
    _min?: Monthly_revenue_forecastsMinAggregateInputType
    _max?: Monthly_revenue_forecastsMaxAggregateInputType
  }

  export type Monthly_revenue_forecastsGroupByOutputType = {
    forecastmonth: Date
    markdate: Date
    curvename: string
    casetype: string
    optimizationtype: string
    location: string
    pricetype: string
    price: Decimal | null
    unit: string | null
    _count: Monthly_revenue_forecastsCountAggregateOutputType | null
    _avg: Monthly_revenue_forecastsAvgAggregateOutputType | null
    _sum: Monthly_revenue_forecastsSumAggregateOutputType | null
    _min: Monthly_revenue_forecastsMinAggregateOutputType | null
    _max: Monthly_revenue_forecastsMaxAggregateOutputType | null
  }

  type GetMonthly_revenue_forecastsGroupByPayload<T extends monthly_revenue_forecastsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Monthly_revenue_forecastsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Monthly_revenue_forecastsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Monthly_revenue_forecastsGroupByOutputType[P]>
            : GetScalarType<T[P], Monthly_revenue_forecastsGroupByOutputType[P]>
        }
      >
    >


  export type monthly_revenue_forecastsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    forecastmonth?: boolean
    markdate?: boolean
    curvename?: boolean
    casetype?: boolean
    optimizationtype?: boolean
    location?: boolean
    pricetype?: boolean
    price?: boolean
    unit?: boolean
  }, ExtArgs["result"]["monthly_revenue_forecasts"]>

  export type monthly_revenue_forecastsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    forecastmonth?: boolean
    markdate?: boolean
    curvename?: boolean
    casetype?: boolean
    optimizationtype?: boolean
    location?: boolean
    pricetype?: boolean
    price?: boolean
    unit?: boolean
  }, ExtArgs["result"]["monthly_revenue_forecasts"]>

  export type monthly_revenue_forecastsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    forecastmonth?: boolean
    markdate?: boolean
    curvename?: boolean
    casetype?: boolean
    optimizationtype?: boolean
    location?: boolean
    pricetype?: boolean
    price?: boolean
    unit?: boolean
  }, ExtArgs["result"]["monthly_revenue_forecasts"]>

  export type monthly_revenue_forecastsSelectScalar = {
    forecastmonth?: boolean
    markdate?: boolean
    curvename?: boolean
    casetype?: boolean
    optimizationtype?: boolean
    location?: boolean
    pricetype?: boolean
    price?: boolean
    unit?: boolean
  }

  export type monthly_revenue_forecastsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"forecastmonth" | "markdate" | "curvename" | "casetype" | "optimizationtype" | "location" | "pricetype" | "price" | "unit", ExtArgs["result"]["monthly_revenue_forecasts"]>

  export type $monthly_revenue_forecastsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "monthly_revenue_forecasts"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      forecastmonth: Date
      markdate: Date
      curvename: string
      casetype: string
      optimizationtype: string
      location: string
      pricetype: string
      price: Prisma.Decimal | null
      unit: string | null
    }, ExtArgs["result"]["monthly_revenue_forecasts"]>
    composites: {}
  }

  type monthly_revenue_forecastsGetPayload<S extends boolean | null | undefined | monthly_revenue_forecastsDefaultArgs> = $Result.GetResult<Prisma.$monthly_revenue_forecastsPayload, S>

  type monthly_revenue_forecastsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<monthly_revenue_forecastsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Monthly_revenue_forecastsCountAggregateInputType | true
    }

  export interface monthly_revenue_forecastsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['monthly_revenue_forecasts'], meta: { name: 'monthly_revenue_forecasts' } }
    /**
     * Find zero or one Monthly_revenue_forecasts that matches the filter.
     * @param {monthly_revenue_forecastsFindUniqueArgs} args - Arguments to find a Monthly_revenue_forecasts
     * @example
     * // Get one Monthly_revenue_forecasts
     * const monthly_revenue_forecasts = await prisma.monthly_revenue_forecasts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends monthly_revenue_forecastsFindUniqueArgs>(args: SelectSubset<T, monthly_revenue_forecastsFindUniqueArgs<ExtArgs>>): Prisma__monthly_revenue_forecastsClient<$Result.GetResult<Prisma.$monthly_revenue_forecastsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Monthly_revenue_forecasts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {monthly_revenue_forecastsFindUniqueOrThrowArgs} args - Arguments to find a Monthly_revenue_forecasts
     * @example
     * // Get one Monthly_revenue_forecasts
     * const monthly_revenue_forecasts = await prisma.monthly_revenue_forecasts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends monthly_revenue_forecastsFindUniqueOrThrowArgs>(args: SelectSubset<T, monthly_revenue_forecastsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__monthly_revenue_forecastsClient<$Result.GetResult<Prisma.$monthly_revenue_forecastsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Monthly_revenue_forecasts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {monthly_revenue_forecastsFindFirstArgs} args - Arguments to find a Monthly_revenue_forecasts
     * @example
     * // Get one Monthly_revenue_forecasts
     * const monthly_revenue_forecasts = await prisma.monthly_revenue_forecasts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends monthly_revenue_forecastsFindFirstArgs>(args?: SelectSubset<T, monthly_revenue_forecastsFindFirstArgs<ExtArgs>>): Prisma__monthly_revenue_forecastsClient<$Result.GetResult<Prisma.$monthly_revenue_forecastsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Monthly_revenue_forecasts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {monthly_revenue_forecastsFindFirstOrThrowArgs} args - Arguments to find a Monthly_revenue_forecasts
     * @example
     * // Get one Monthly_revenue_forecasts
     * const monthly_revenue_forecasts = await prisma.monthly_revenue_forecasts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends monthly_revenue_forecastsFindFirstOrThrowArgs>(args?: SelectSubset<T, monthly_revenue_forecastsFindFirstOrThrowArgs<ExtArgs>>): Prisma__monthly_revenue_forecastsClient<$Result.GetResult<Prisma.$monthly_revenue_forecastsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Monthly_revenue_forecasts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {monthly_revenue_forecastsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Monthly_revenue_forecasts
     * const monthly_revenue_forecasts = await prisma.monthly_revenue_forecasts.findMany()
     * 
     * // Get first 10 Monthly_revenue_forecasts
     * const monthly_revenue_forecasts = await prisma.monthly_revenue_forecasts.findMany({ take: 10 })
     * 
     * // Only select the `forecastmonth`
     * const monthly_revenue_forecastsWithForecastmonthOnly = await prisma.monthly_revenue_forecasts.findMany({ select: { forecastmonth: true } })
     * 
     */
    findMany<T extends monthly_revenue_forecastsFindManyArgs>(args?: SelectSubset<T, monthly_revenue_forecastsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$monthly_revenue_forecastsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Monthly_revenue_forecasts.
     * @param {monthly_revenue_forecastsCreateArgs} args - Arguments to create a Monthly_revenue_forecasts.
     * @example
     * // Create one Monthly_revenue_forecasts
     * const Monthly_revenue_forecasts = await prisma.monthly_revenue_forecasts.create({
     *   data: {
     *     // ... data to create a Monthly_revenue_forecasts
     *   }
     * })
     * 
     */
    create<T extends monthly_revenue_forecastsCreateArgs>(args: SelectSubset<T, monthly_revenue_forecastsCreateArgs<ExtArgs>>): Prisma__monthly_revenue_forecastsClient<$Result.GetResult<Prisma.$monthly_revenue_forecastsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Monthly_revenue_forecasts.
     * @param {monthly_revenue_forecastsCreateManyArgs} args - Arguments to create many Monthly_revenue_forecasts.
     * @example
     * // Create many Monthly_revenue_forecasts
     * const monthly_revenue_forecasts = await prisma.monthly_revenue_forecasts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends monthly_revenue_forecastsCreateManyArgs>(args?: SelectSubset<T, monthly_revenue_forecastsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Monthly_revenue_forecasts and returns the data saved in the database.
     * @param {monthly_revenue_forecastsCreateManyAndReturnArgs} args - Arguments to create many Monthly_revenue_forecasts.
     * @example
     * // Create many Monthly_revenue_forecasts
     * const monthly_revenue_forecasts = await prisma.monthly_revenue_forecasts.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Monthly_revenue_forecasts and only return the `forecastmonth`
     * const monthly_revenue_forecastsWithForecastmonthOnly = await prisma.monthly_revenue_forecasts.createManyAndReturn({
     *   select: { forecastmonth: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends monthly_revenue_forecastsCreateManyAndReturnArgs>(args?: SelectSubset<T, monthly_revenue_forecastsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$monthly_revenue_forecastsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Monthly_revenue_forecasts.
     * @param {monthly_revenue_forecastsDeleteArgs} args - Arguments to delete one Monthly_revenue_forecasts.
     * @example
     * // Delete one Monthly_revenue_forecasts
     * const Monthly_revenue_forecasts = await prisma.monthly_revenue_forecasts.delete({
     *   where: {
     *     // ... filter to delete one Monthly_revenue_forecasts
     *   }
     * })
     * 
     */
    delete<T extends monthly_revenue_forecastsDeleteArgs>(args: SelectSubset<T, monthly_revenue_forecastsDeleteArgs<ExtArgs>>): Prisma__monthly_revenue_forecastsClient<$Result.GetResult<Prisma.$monthly_revenue_forecastsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Monthly_revenue_forecasts.
     * @param {monthly_revenue_forecastsUpdateArgs} args - Arguments to update one Monthly_revenue_forecasts.
     * @example
     * // Update one Monthly_revenue_forecasts
     * const monthly_revenue_forecasts = await prisma.monthly_revenue_forecasts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends monthly_revenue_forecastsUpdateArgs>(args: SelectSubset<T, monthly_revenue_forecastsUpdateArgs<ExtArgs>>): Prisma__monthly_revenue_forecastsClient<$Result.GetResult<Prisma.$monthly_revenue_forecastsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Monthly_revenue_forecasts.
     * @param {monthly_revenue_forecastsDeleteManyArgs} args - Arguments to filter Monthly_revenue_forecasts to delete.
     * @example
     * // Delete a few Monthly_revenue_forecasts
     * const { count } = await prisma.monthly_revenue_forecasts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends monthly_revenue_forecastsDeleteManyArgs>(args?: SelectSubset<T, monthly_revenue_forecastsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Monthly_revenue_forecasts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {monthly_revenue_forecastsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Monthly_revenue_forecasts
     * const monthly_revenue_forecasts = await prisma.monthly_revenue_forecasts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends monthly_revenue_forecastsUpdateManyArgs>(args: SelectSubset<T, monthly_revenue_forecastsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Monthly_revenue_forecasts and returns the data updated in the database.
     * @param {monthly_revenue_forecastsUpdateManyAndReturnArgs} args - Arguments to update many Monthly_revenue_forecasts.
     * @example
     * // Update many Monthly_revenue_forecasts
     * const monthly_revenue_forecasts = await prisma.monthly_revenue_forecasts.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Monthly_revenue_forecasts and only return the `forecastmonth`
     * const monthly_revenue_forecastsWithForecastmonthOnly = await prisma.monthly_revenue_forecasts.updateManyAndReturn({
     *   select: { forecastmonth: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends monthly_revenue_forecastsUpdateManyAndReturnArgs>(args: SelectSubset<T, monthly_revenue_forecastsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$monthly_revenue_forecastsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Monthly_revenue_forecasts.
     * @param {monthly_revenue_forecastsUpsertArgs} args - Arguments to update or create a Monthly_revenue_forecasts.
     * @example
     * // Update or create a Monthly_revenue_forecasts
     * const monthly_revenue_forecasts = await prisma.monthly_revenue_forecasts.upsert({
     *   create: {
     *     // ... data to create a Monthly_revenue_forecasts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Monthly_revenue_forecasts we want to update
     *   }
     * })
     */
    upsert<T extends monthly_revenue_forecastsUpsertArgs>(args: SelectSubset<T, monthly_revenue_forecastsUpsertArgs<ExtArgs>>): Prisma__monthly_revenue_forecastsClient<$Result.GetResult<Prisma.$monthly_revenue_forecastsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Monthly_revenue_forecasts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {monthly_revenue_forecastsCountArgs} args - Arguments to filter Monthly_revenue_forecasts to count.
     * @example
     * // Count the number of Monthly_revenue_forecasts
     * const count = await prisma.monthly_revenue_forecasts.count({
     *   where: {
     *     // ... the filter for the Monthly_revenue_forecasts we want to count
     *   }
     * })
    **/
    count<T extends monthly_revenue_forecastsCountArgs>(
      args?: Subset<T, monthly_revenue_forecastsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Monthly_revenue_forecastsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Monthly_revenue_forecasts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Monthly_revenue_forecastsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Monthly_revenue_forecastsAggregateArgs>(args: Subset<T, Monthly_revenue_forecastsAggregateArgs>): Prisma.PrismaPromise<GetMonthly_revenue_forecastsAggregateType<T>>

    /**
     * Group by Monthly_revenue_forecasts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {monthly_revenue_forecastsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends monthly_revenue_forecastsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: monthly_revenue_forecastsGroupByArgs['orderBy'] }
        : { orderBy?: monthly_revenue_forecastsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, monthly_revenue_forecastsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMonthly_revenue_forecastsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the monthly_revenue_forecasts model
   */
  readonly fields: monthly_revenue_forecastsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for monthly_revenue_forecasts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__monthly_revenue_forecastsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the monthly_revenue_forecasts model
   */
  interface monthly_revenue_forecastsFieldRefs {
    readonly forecastmonth: FieldRef<"monthly_revenue_forecasts", 'DateTime'>
    readonly markdate: FieldRef<"monthly_revenue_forecasts", 'DateTime'>
    readonly curvename: FieldRef<"monthly_revenue_forecasts", 'String'>
    readonly casetype: FieldRef<"monthly_revenue_forecasts", 'String'>
    readonly optimizationtype: FieldRef<"monthly_revenue_forecasts", 'String'>
    readonly location: FieldRef<"monthly_revenue_forecasts", 'String'>
    readonly pricetype: FieldRef<"monthly_revenue_forecasts", 'String'>
    readonly price: FieldRef<"monthly_revenue_forecasts", 'Decimal'>
    readonly unit: FieldRef<"monthly_revenue_forecasts", 'String'>
  }
    

  // Custom InputTypes
  /**
   * monthly_revenue_forecasts findUnique
   */
  export type monthly_revenue_forecastsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the monthly_revenue_forecasts
     */
    select?: monthly_revenue_forecastsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the monthly_revenue_forecasts
     */
    omit?: monthly_revenue_forecastsOmit<ExtArgs> | null
    /**
     * Filter, which monthly_revenue_forecasts to fetch.
     */
    where: monthly_revenue_forecastsWhereUniqueInput
  }

  /**
   * monthly_revenue_forecasts findUniqueOrThrow
   */
  export type monthly_revenue_forecastsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the monthly_revenue_forecasts
     */
    select?: monthly_revenue_forecastsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the monthly_revenue_forecasts
     */
    omit?: monthly_revenue_forecastsOmit<ExtArgs> | null
    /**
     * Filter, which monthly_revenue_forecasts to fetch.
     */
    where: monthly_revenue_forecastsWhereUniqueInput
  }

  /**
   * monthly_revenue_forecasts findFirst
   */
  export type monthly_revenue_forecastsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the monthly_revenue_forecasts
     */
    select?: monthly_revenue_forecastsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the monthly_revenue_forecasts
     */
    omit?: monthly_revenue_forecastsOmit<ExtArgs> | null
    /**
     * Filter, which monthly_revenue_forecasts to fetch.
     */
    where?: monthly_revenue_forecastsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of monthly_revenue_forecasts to fetch.
     */
    orderBy?: monthly_revenue_forecastsOrderByWithRelationInput | monthly_revenue_forecastsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for monthly_revenue_forecasts.
     */
    cursor?: monthly_revenue_forecastsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` monthly_revenue_forecasts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` monthly_revenue_forecasts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of monthly_revenue_forecasts.
     */
    distinct?: Monthly_revenue_forecastsScalarFieldEnum | Monthly_revenue_forecastsScalarFieldEnum[]
  }

  /**
   * monthly_revenue_forecasts findFirstOrThrow
   */
  export type monthly_revenue_forecastsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the monthly_revenue_forecasts
     */
    select?: monthly_revenue_forecastsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the monthly_revenue_forecasts
     */
    omit?: monthly_revenue_forecastsOmit<ExtArgs> | null
    /**
     * Filter, which monthly_revenue_forecasts to fetch.
     */
    where?: monthly_revenue_forecastsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of monthly_revenue_forecasts to fetch.
     */
    orderBy?: monthly_revenue_forecastsOrderByWithRelationInput | monthly_revenue_forecastsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for monthly_revenue_forecasts.
     */
    cursor?: monthly_revenue_forecastsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` monthly_revenue_forecasts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` monthly_revenue_forecasts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of monthly_revenue_forecasts.
     */
    distinct?: Monthly_revenue_forecastsScalarFieldEnum | Monthly_revenue_forecastsScalarFieldEnum[]
  }

  /**
   * monthly_revenue_forecasts findMany
   */
  export type monthly_revenue_forecastsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the monthly_revenue_forecasts
     */
    select?: monthly_revenue_forecastsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the monthly_revenue_forecasts
     */
    omit?: monthly_revenue_forecastsOmit<ExtArgs> | null
    /**
     * Filter, which monthly_revenue_forecasts to fetch.
     */
    where?: monthly_revenue_forecastsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of monthly_revenue_forecasts to fetch.
     */
    orderBy?: monthly_revenue_forecastsOrderByWithRelationInput | monthly_revenue_forecastsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing monthly_revenue_forecasts.
     */
    cursor?: monthly_revenue_forecastsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` monthly_revenue_forecasts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` monthly_revenue_forecasts.
     */
    skip?: number
    distinct?: Monthly_revenue_forecastsScalarFieldEnum | Monthly_revenue_forecastsScalarFieldEnum[]
  }

  /**
   * monthly_revenue_forecasts create
   */
  export type monthly_revenue_forecastsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the monthly_revenue_forecasts
     */
    select?: monthly_revenue_forecastsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the monthly_revenue_forecasts
     */
    omit?: monthly_revenue_forecastsOmit<ExtArgs> | null
    /**
     * The data needed to create a monthly_revenue_forecasts.
     */
    data: XOR<monthly_revenue_forecastsCreateInput, monthly_revenue_forecastsUncheckedCreateInput>
  }

  /**
   * monthly_revenue_forecasts createMany
   */
  export type monthly_revenue_forecastsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many monthly_revenue_forecasts.
     */
    data: monthly_revenue_forecastsCreateManyInput | monthly_revenue_forecastsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * monthly_revenue_forecasts createManyAndReturn
   */
  export type monthly_revenue_forecastsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the monthly_revenue_forecasts
     */
    select?: monthly_revenue_forecastsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the monthly_revenue_forecasts
     */
    omit?: monthly_revenue_forecastsOmit<ExtArgs> | null
    /**
     * The data used to create many monthly_revenue_forecasts.
     */
    data: monthly_revenue_forecastsCreateManyInput | monthly_revenue_forecastsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * monthly_revenue_forecasts update
   */
  export type monthly_revenue_forecastsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the monthly_revenue_forecasts
     */
    select?: monthly_revenue_forecastsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the monthly_revenue_forecasts
     */
    omit?: monthly_revenue_forecastsOmit<ExtArgs> | null
    /**
     * The data needed to update a monthly_revenue_forecasts.
     */
    data: XOR<monthly_revenue_forecastsUpdateInput, monthly_revenue_forecastsUncheckedUpdateInput>
    /**
     * Choose, which monthly_revenue_forecasts to update.
     */
    where: monthly_revenue_forecastsWhereUniqueInput
  }

  /**
   * monthly_revenue_forecasts updateMany
   */
  export type monthly_revenue_forecastsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update monthly_revenue_forecasts.
     */
    data: XOR<monthly_revenue_forecastsUpdateManyMutationInput, monthly_revenue_forecastsUncheckedUpdateManyInput>
    /**
     * Filter which monthly_revenue_forecasts to update
     */
    where?: monthly_revenue_forecastsWhereInput
    /**
     * Limit how many monthly_revenue_forecasts to update.
     */
    limit?: number
  }

  /**
   * monthly_revenue_forecasts updateManyAndReturn
   */
  export type monthly_revenue_forecastsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the monthly_revenue_forecasts
     */
    select?: monthly_revenue_forecastsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the monthly_revenue_forecasts
     */
    omit?: monthly_revenue_forecastsOmit<ExtArgs> | null
    /**
     * The data used to update monthly_revenue_forecasts.
     */
    data: XOR<monthly_revenue_forecastsUpdateManyMutationInput, monthly_revenue_forecastsUncheckedUpdateManyInput>
    /**
     * Filter which monthly_revenue_forecasts to update
     */
    where?: monthly_revenue_forecastsWhereInput
    /**
     * Limit how many monthly_revenue_forecasts to update.
     */
    limit?: number
  }

  /**
   * monthly_revenue_forecasts upsert
   */
  export type monthly_revenue_forecastsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the monthly_revenue_forecasts
     */
    select?: monthly_revenue_forecastsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the monthly_revenue_forecasts
     */
    omit?: monthly_revenue_forecastsOmit<ExtArgs> | null
    /**
     * The filter to search for the monthly_revenue_forecasts to update in case it exists.
     */
    where: monthly_revenue_forecastsWhereUniqueInput
    /**
     * In case the monthly_revenue_forecasts found by the `where` argument doesn't exist, create a new monthly_revenue_forecasts with this data.
     */
    create: XOR<monthly_revenue_forecastsCreateInput, monthly_revenue_forecastsUncheckedCreateInput>
    /**
     * In case the monthly_revenue_forecasts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<monthly_revenue_forecastsUpdateInput, monthly_revenue_forecastsUncheckedUpdateInput>
  }

  /**
   * monthly_revenue_forecasts delete
   */
  export type monthly_revenue_forecastsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the monthly_revenue_forecasts
     */
    select?: monthly_revenue_forecastsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the monthly_revenue_forecasts
     */
    omit?: monthly_revenue_forecastsOmit<ExtArgs> | null
    /**
     * Filter which monthly_revenue_forecasts to delete.
     */
    where: monthly_revenue_forecastsWhereUniqueInput
  }

  /**
   * monthly_revenue_forecasts deleteMany
   */
  export type monthly_revenue_forecastsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which monthly_revenue_forecasts to delete
     */
    where?: monthly_revenue_forecastsWhereInput
    /**
     * Limit how many monthly_revenue_forecasts to delete.
     */
    limit?: number
  }

  /**
   * monthly_revenue_forecasts without action
   */
  export type monthly_revenue_forecastsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the monthly_revenue_forecasts
     */
    select?: monthly_revenue_forecastsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the monthly_revenue_forecasts
     */
    omit?: monthly_revenue_forecastsOmit<ExtArgs> | null
  }


  /**
   * Model yes_fundamentals
   */

  export type AggregateYes_fundamentals = {
    _count: Yes_fundamentalsCountAggregateOutputType | null
    _avg: Yes_fundamentalsAvgAggregateOutputType | null
    _sum: Yes_fundamentalsSumAggregateOutputType | null
    _min: Yes_fundamentalsMinAggregateOutputType | null
    _max: Yes_fundamentalsMaxAggregateOutputType | null
  }

  export type Yes_fundamentalsAvgAggregateOutputType = {
    value: number | null
  }

  export type Yes_fundamentalsSumAggregateOutputType = {
    value: number | null
  }

  export type Yes_fundamentalsMinAggregateOutputType = {
    utc_datetime_ib: Date | null
    local_datetime_ib: Date | null
    entity: string | null
    attribute: string | null
    value: number | null
  }

  export type Yes_fundamentalsMaxAggregateOutputType = {
    utc_datetime_ib: Date | null
    local_datetime_ib: Date | null
    entity: string | null
    attribute: string | null
    value: number | null
  }

  export type Yes_fundamentalsCountAggregateOutputType = {
    utc_datetime_ib: number
    local_datetime_ib: number
    entity: number
    attribute: number
    value: number
    _all: number
  }


  export type Yes_fundamentalsAvgAggregateInputType = {
    value?: true
  }

  export type Yes_fundamentalsSumAggregateInputType = {
    value?: true
  }

  export type Yes_fundamentalsMinAggregateInputType = {
    utc_datetime_ib?: true
    local_datetime_ib?: true
    entity?: true
    attribute?: true
    value?: true
  }

  export type Yes_fundamentalsMaxAggregateInputType = {
    utc_datetime_ib?: true
    local_datetime_ib?: true
    entity?: true
    attribute?: true
    value?: true
  }

  export type Yes_fundamentalsCountAggregateInputType = {
    utc_datetime_ib?: true
    local_datetime_ib?: true
    entity?: true
    attribute?: true
    value?: true
    _all?: true
  }

  export type Yes_fundamentalsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which yes_fundamentals to aggregate.
     */
    where?: yes_fundamentalsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of yes_fundamentals to fetch.
     */
    orderBy?: yes_fundamentalsOrderByWithRelationInput | yes_fundamentalsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: yes_fundamentalsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` yes_fundamentals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` yes_fundamentals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned yes_fundamentals
    **/
    _count?: true | Yes_fundamentalsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Yes_fundamentalsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Yes_fundamentalsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Yes_fundamentalsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Yes_fundamentalsMaxAggregateInputType
  }

  export type GetYes_fundamentalsAggregateType<T extends Yes_fundamentalsAggregateArgs> = {
        [P in keyof T & keyof AggregateYes_fundamentals]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateYes_fundamentals[P]>
      : GetScalarType<T[P], AggregateYes_fundamentals[P]>
  }




  export type yes_fundamentalsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: yes_fundamentalsWhereInput
    orderBy?: yes_fundamentalsOrderByWithAggregationInput | yes_fundamentalsOrderByWithAggregationInput[]
    by: Yes_fundamentalsScalarFieldEnum[] | Yes_fundamentalsScalarFieldEnum
    having?: yes_fundamentalsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Yes_fundamentalsCountAggregateInputType | true
    _avg?: Yes_fundamentalsAvgAggregateInputType
    _sum?: Yes_fundamentalsSumAggregateInputType
    _min?: Yes_fundamentalsMinAggregateInputType
    _max?: Yes_fundamentalsMaxAggregateInputType
  }

  export type Yes_fundamentalsGroupByOutputType = {
    utc_datetime_ib: Date
    local_datetime_ib: Date
    entity: string
    attribute: string
    value: number | null
    _count: Yes_fundamentalsCountAggregateOutputType | null
    _avg: Yes_fundamentalsAvgAggregateOutputType | null
    _sum: Yes_fundamentalsSumAggregateOutputType | null
    _min: Yes_fundamentalsMinAggregateOutputType | null
    _max: Yes_fundamentalsMaxAggregateOutputType | null
  }

  type GetYes_fundamentalsGroupByPayload<T extends yes_fundamentalsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Yes_fundamentalsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Yes_fundamentalsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Yes_fundamentalsGroupByOutputType[P]>
            : GetScalarType<T[P], Yes_fundamentalsGroupByOutputType[P]>
        }
      >
    >


  export type yes_fundamentalsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    utc_datetime_ib?: boolean
    local_datetime_ib?: boolean
    entity?: boolean
    attribute?: boolean
    value?: boolean
  }, ExtArgs["result"]["yes_fundamentals"]>

  export type yes_fundamentalsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    utc_datetime_ib?: boolean
    local_datetime_ib?: boolean
    entity?: boolean
    attribute?: boolean
    value?: boolean
  }, ExtArgs["result"]["yes_fundamentals"]>

  export type yes_fundamentalsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    utc_datetime_ib?: boolean
    local_datetime_ib?: boolean
    entity?: boolean
    attribute?: boolean
    value?: boolean
  }, ExtArgs["result"]["yes_fundamentals"]>

  export type yes_fundamentalsSelectScalar = {
    utc_datetime_ib?: boolean
    local_datetime_ib?: boolean
    entity?: boolean
    attribute?: boolean
    value?: boolean
  }

  export type yes_fundamentalsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"utc_datetime_ib" | "local_datetime_ib" | "entity" | "attribute" | "value", ExtArgs["result"]["yes_fundamentals"]>

  export type $yes_fundamentalsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "yes_fundamentals"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      utc_datetime_ib: Date
      local_datetime_ib: Date
      entity: string
      attribute: string
      value: number | null
    }, ExtArgs["result"]["yes_fundamentals"]>
    composites: {}
  }

  type yes_fundamentalsGetPayload<S extends boolean | null | undefined | yes_fundamentalsDefaultArgs> = $Result.GetResult<Prisma.$yes_fundamentalsPayload, S>

  type yes_fundamentalsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<yes_fundamentalsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Yes_fundamentalsCountAggregateInputType | true
    }

  export interface yes_fundamentalsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['yes_fundamentals'], meta: { name: 'yes_fundamentals' } }
    /**
     * Find zero or one Yes_fundamentals that matches the filter.
     * @param {yes_fundamentalsFindUniqueArgs} args - Arguments to find a Yes_fundamentals
     * @example
     * // Get one Yes_fundamentals
     * const yes_fundamentals = await prisma.yes_fundamentals.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends yes_fundamentalsFindUniqueArgs>(args: SelectSubset<T, yes_fundamentalsFindUniqueArgs<ExtArgs>>): Prisma__yes_fundamentalsClient<$Result.GetResult<Prisma.$yes_fundamentalsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Yes_fundamentals that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {yes_fundamentalsFindUniqueOrThrowArgs} args - Arguments to find a Yes_fundamentals
     * @example
     * // Get one Yes_fundamentals
     * const yes_fundamentals = await prisma.yes_fundamentals.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends yes_fundamentalsFindUniqueOrThrowArgs>(args: SelectSubset<T, yes_fundamentalsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__yes_fundamentalsClient<$Result.GetResult<Prisma.$yes_fundamentalsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Yes_fundamentals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {yes_fundamentalsFindFirstArgs} args - Arguments to find a Yes_fundamentals
     * @example
     * // Get one Yes_fundamentals
     * const yes_fundamentals = await prisma.yes_fundamentals.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends yes_fundamentalsFindFirstArgs>(args?: SelectSubset<T, yes_fundamentalsFindFirstArgs<ExtArgs>>): Prisma__yes_fundamentalsClient<$Result.GetResult<Prisma.$yes_fundamentalsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Yes_fundamentals that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {yes_fundamentalsFindFirstOrThrowArgs} args - Arguments to find a Yes_fundamentals
     * @example
     * // Get one Yes_fundamentals
     * const yes_fundamentals = await prisma.yes_fundamentals.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends yes_fundamentalsFindFirstOrThrowArgs>(args?: SelectSubset<T, yes_fundamentalsFindFirstOrThrowArgs<ExtArgs>>): Prisma__yes_fundamentalsClient<$Result.GetResult<Prisma.$yes_fundamentalsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Yes_fundamentals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {yes_fundamentalsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Yes_fundamentals
     * const yes_fundamentals = await prisma.yes_fundamentals.findMany()
     * 
     * // Get first 10 Yes_fundamentals
     * const yes_fundamentals = await prisma.yes_fundamentals.findMany({ take: 10 })
     * 
     * // Only select the `utc_datetime_ib`
     * const yes_fundamentalsWithUtc_datetime_ibOnly = await prisma.yes_fundamentals.findMany({ select: { utc_datetime_ib: true } })
     * 
     */
    findMany<T extends yes_fundamentalsFindManyArgs>(args?: SelectSubset<T, yes_fundamentalsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$yes_fundamentalsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Yes_fundamentals.
     * @param {yes_fundamentalsCreateArgs} args - Arguments to create a Yes_fundamentals.
     * @example
     * // Create one Yes_fundamentals
     * const Yes_fundamentals = await prisma.yes_fundamentals.create({
     *   data: {
     *     // ... data to create a Yes_fundamentals
     *   }
     * })
     * 
     */
    create<T extends yes_fundamentalsCreateArgs>(args: SelectSubset<T, yes_fundamentalsCreateArgs<ExtArgs>>): Prisma__yes_fundamentalsClient<$Result.GetResult<Prisma.$yes_fundamentalsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Yes_fundamentals.
     * @param {yes_fundamentalsCreateManyArgs} args - Arguments to create many Yes_fundamentals.
     * @example
     * // Create many Yes_fundamentals
     * const yes_fundamentals = await prisma.yes_fundamentals.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends yes_fundamentalsCreateManyArgs>(args?: SelectSubset<T, yes_fundamentalsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Yes_fundamentals and returns the data saved in the database.
     * @param {yes_fundamentalsCreateManyAndReturnArgs} args - Arguments to create many Yes_fundamentals.
     * @example
     * // Create many Yes_fundamentals
     * const yes_fundamentals = await prisma.yes_fundamentals.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Yes_fundamentals and only return the `utc_datetime_ib`
     * const yes_fundamentalsWithUtc_datetime_ibOnly = await prisma.yes_fundamentals.createManyAndReturn({
     *   select: { utc_datetime_ib: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends yes_fundamentalsCreateManyAndReturnArgs>(args?: SelectSubset<T, yes_fundamentalsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$yes_fundamentalsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Yes_fundamentals.
     * @param {yes_fundamentalsDeleteArgs} args - Arguments to delete one Yes_fundamentals.
     * @example
     * // Delete one Yes_fundamentals
     * const Yes_fundamentals = await prisma.yes_fundamentals.delete({
     *   where: {
     *     // ... filter to delete one Yes_fundamentals
     *   }
     * })
     * 
     */
    delete<T extends yes_fundamentalsDeleteArgs>(args: SelectSubset<T, yes_fundamentalsDeleteArgs<ExtArgs>>): Prisma__yes_fundamentalsClient<$Result.GetResult<Prisma.$yes_fundamentalsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Yes_fundamentals.
     * @param {yes_fundamentalsUpdateArgs} args - Arguments to update one Yes_fundamentals.
     * @example
     * // Update one Yes_fundamentals
     * const yes_fundamentals = await prisma.yes_fundamentals.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends yes_fundamentalsUpdateArgs>(args: SelectSubset<T, yes_fundamentalsUpdateArgs<ExtArgs>>): Prisma__yes_fundamentalsClient<$Result.GetResult<Prisma.$yes_fundamentalsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Yes_fundamentals.
     * @param {yes_fundamentalsDeleteManyArgs} args - Arguments to filter Yes_fundamentals to delete.
     * @example
     * // Delete a few Yes_fundamentals
     * const { count } = await prisma.yes_fundamentals.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends yes_fundamentalsDeleteManyArgs>(args?: SelectSubset<T, yes_fundamentalsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Yes_fundamentals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {yes_fundamentalsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Yes_fundamentals
     * const yes_fundamentals = await prisma.yes_fundamentals.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends yes_fundamentalsUpdateManyArgs>(args: SelectSubset<T, yes_fundamentalsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Yes_fundamentals and returns the data updated in the database.
     * @param {yes_fundamentalsUpdateManyAndReturnArgs} args - Arguments to update many Yes_fundamentals.
     * @example
     * // Update many Yes_fundamentals
     * const yes_fundamentals = await prisma.yes_fundamentals.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Yes_fundamentals and only return the `utc_datetime_ib`
     * const yes_fundamentalsWithUtc_datetime_ibOnly = await prisma.yes_fundamentals.updateManyAndReturn({
     *   select: { utc_datetime_ib: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends yes_fundamentalsUpdateManyAndReturnArgs>(args: SelectSubset<T, yes_fundamentalsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$yes_fundamentalsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Yes_fundamentals.
     * @param {yes_fundamentalsUpsertArgs} args - Arguments to update or create a Yes_fundamentals.
     * @example
     * // Update or create a Yes_fundamentals
     * const yes_fundamentals = await prisma.yes_fundamentals.upsert({
     *   create: {
     *     // ... data to create a Yes_fundamentals
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Yes_fundamentals we want to update
     *   }
     * })
     */
    upsert<T extends yes_fundamentalsUpsertArgs>(args: SelectSubset<T, yes_fundamentalsUpsertArgs<ExtArgs>>): Prisma__yes_fundamentalsClient<$Result.GetResult<Prisma.$yes_fundamentalsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Yes_fundamentals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {yes_fundamentalsCountArgs} args - Arguments to filter Yes_fundamentals to count.
     * @example
     * // Count the number of Yes_fundamentals
     * const count = await prisma.yes_fundamentals.count({
     *   where: {
     *     // ... the filter for the Yes_fundamentals we want to count
     *   }
     * })
    **/
    count<T extends yes_fundamentalsCountArgs>(
      args?: Subset<T, yes_fundamentalsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Yes_fundamentalsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Yes_fundamentals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Yes_fundamentalsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Yes_fundamentalsAggregateArgs>(args: Subset<T, Yes_fundamentalsAggregateArgs>): Prisma.PrismaPromise<GetYes_fundamentalsAggregateType<T>>

    /**
     * Group by Yes_fundamentals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {yes_fundamentalsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends yes_fundamentalsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: yes_fundamentalsGroupByArgs['orderBy'] }
        : { orderBy?: yes_fundamentalsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, yes_fundamentalsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetYes_fundamentalsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the yes_fundamentals model
   */
  readonly fields: yes_fundamentalsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for yes_fundamentals.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__yes_fundamentalsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the yes_fundamentals model
   */
  interface yes_fundamentalsFieldRefs {
    readonly utc_datetime_ib: FieldRef<"yes_fundamentals", 'DateTime'>
    readonly local_datetime_ib: FieldRef<"yes_fundamentals", 'DateTime'>
    readonly entity: FieldRef<"yes_fundamentals", 'String'>
    readonly attribute: FieldRef<"yes_fundamentals", 'String'>
    readonly value: FieldRef<"yes_fundamentals", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * yes_fundamentals findUnique
   */
  export type yes_fundamentalsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the yes_fundamentals
     */
    select?: yes_fundamentalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the yes_fundamentals
     */
    omit?: yes_fundamentalsOmit<ExtArgs> | null
    /**
     * Filter, which yes_fundamentals to fetch.
     */
    where: yes_fundamentalsWhereUniqueInput
  }

  /**
   * yes_fundamentals findUniqueOrThrow
   */
  export type yes_fundamentalsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the yes_fundamentals
     */
    select?: yes_fundamentalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the yes_fundamentals
     */
    omit?: yes_fundamentalsOmit<ExtArgs> | null
    /**
     * Filter, which yes_fundamentals to fetch.
     */
    where: yes_fundamentalsWhereUniqueInput
  }

  /**
   * yes_fundamentals findFirst
   */
  export type yes_fundamentalsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the yes_fundamentals
     */
    select?: yes_fundamentalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the yes_fundamentals
     */
    omit?: yes_fundamentalsOmit<ExtArgs> | null
    /**
     * Filter, which yes_fundamentals to fetch.
     */
    where?: yes_fundamentalsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of yes_fundamentals to fetch.
     */
    orderBy?: yes_fundamentalsOrderByWithRelationInput | yes_fundamentalsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for yes_fundamentals.
     */
    cursor?: yes_fundamentalsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` yes_fundamentals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` yes_fundamentals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of yes_fundamentals.
     */
    distinct?: Yes_fundamentalsScalarFieldEnum | Yes_fundamentalsScalarFieldEnum[]
  }

  /**
   * yes_fundamentals findFirstOrThrow
   */
  export type yes_fundamentalsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the yes_fundamentals
     */
    select?: yes_fundamentalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the yes_fundamentals
     */
    omit?: yes_fundamentalsOmit<ExtArgs> | null
    /**
     * Filter, which yes_fundamentals to fetch.
     */
    where?: yes_fundamentalsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of yes_fundamentals to fetch.
     */
    orderBy?: yes_fundamentalsOrderByWithRelationInput | yes_fundamentalsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for yes_fundamentals.
     */
    cursor?: yes_fundamentalsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` yes_fundamentals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` yes_fundamentals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of yes_fundamentals.
     */
    distinct?: Yes_fundamentalsScalarFieldEnum | Yes_fundamentalsScalarFieldEnum[]
  }

  /**
   * yes_fundamentals findMany
   */
  export type yes_fundamentalsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the yes_fundamentals
     */
    select?: yes_fundamentalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the yes_fundamentals
     */
    omit?: yes_fundamentalsOmit<ExtArgs> | null
    /**
     * Filter, which yes_fundamentals to fetch.
     */
    where?: yes_fundamentalsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of yes_fundamentals to fetch.
     */
    orderBy?: yes_fundamentalsOrderByWithRelationInput | yes_fundamentalsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing yes_fundamentals.
     */
    cursor?: yes_fundamentalsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` yes_fundamentals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` yes_fundamentals.
     */
    skip?: number
    distinct?: Yes_fundamentalsScalarFieldEnum | Yes_fundamentalsScalarFieldEnum[]
  }

  /**
   * yes_fundamentals create
   */
  export type yes_fundamentalsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the yes_fundamentals
     */
    select?: yes_fundamentalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the yes_fundamentals
     */
    omit?: yes_fundamentalsOmit<ExtArgs> | null
    /**
     * The data needed to create a yes_fundamentals.
     */
    data: XOR<yes_fundamentalsCreateInput, yes_fundamentalsUncheckedCreateInput>
  }

  /**
   * yes_fundamentals createMany
   */
  export type yes_fundamentalsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many yes_fundamentals.
     */
    data: yes_fundamentalsCreateManyInput | yes_fundamentalsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * yes_fundamentals createManyAndReturn
   */
  export type yes_fundamentalsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the yes_fundamentals
     */
    select?: yes_fundamentalsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the yes_fundamentals
     */
    omit?: yes_fundamentalsOmit<ExtArgs> | null
    /**
     * The data used to create many yes_fundamentals.
     */
    data: yes_fundamentalsCreateManyInput | yes_fundamentalsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * yes_fundamentals update
   */
  export type yes_fundamentalsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the yes_fundamentals
     */
    select?: yes_fundamentalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the yes_fundamentals
     */
    omit?: yes_fundamentalsOmit<ExtArgs> | null
    /**
     * The data needed to update a yes_fundamentals.
     */
    data: XOR<yes_fundamentalsUpdateInput, yes_fundamentalsUncheckedUpdateInput>
    /**
     * Choose, which yes_fundamentals to update.
     */
    where: yes_fundamentalsWhereUniqueInput
  }

  /**
   * yes_fundamentals updateMany
   */
  export type yes_fundamentalsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update yes_fundamentals.
     */
    data: XOR<yes_fundamentalsUpdateManyMutationInput, yes_fundamentalsUncheckedUpdateManyInput>
    /**
     * Filter which yes_fundamentals to update
     */
    where?: yes_fundamentalsWhereInput
    /**
     * Limit how many yes_fundamentals to update.
     */
    limit?: number
  }

  /**
   * yes_fundamentals updateManyAndReturn
   */
  export type yes_fundamentalsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the yes_fundamentals
     */
    select?: yes_fundamentalsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the yes_fundamentals
     */
    omit?: yes_fundamentalsOmit<ExtArgs> | null
    /**
     * The data used to update yes_fundamentals.
     */
    data: XOR<yes_fundamentalsUpdateManyMutationInput, yes_fundamentalsUncheckedUpdateManyInput>
    /**
     * Filter which yes_fundamentals to update
     */
    where?: yes_fundamentalsWhereInput
    /**
     * Limit how many yes_fundamentals to update.
     */
    limit?: number
  }

  /**
   * yes_fundamentals upsert
   */
  export type yes_fundamentalsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the yes_fundamentals
     */
    select?: yes_fundamentalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the yes_fundamentals
     */
    omit?: yes_fundamentalsOmit<ExtArgs> | null
    /**
     * The filter to search for the yes_fundamentals to update in case it exists.
     */
    where: yes_fundamentalsWhereUniqueInput
    /**
     * In case the yes_fundamentals found by the `where` argument doesn't exist, create a new yes_fundamentals with this data.
     */
    create: XOR<yes_fundamentalsCreateInput, yes_fundamentalsUncheckedCreateInput>
    /**
     * In case the yes_fundamentals was found with the provided `where` argument, update it with this data.
     */
    update: XOR<yes_fundamentalsUpdateInput, yes_fundamentalsUncheckedUpdateInput>
  }

  /**
   * yes_fundamentals delete
   */
  export type yes_fundamentalsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the yes_fundamentals
     */
    select?: yes_fundamentalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the yes_fundamentals
     */
    omit?: yes_fundamentalsOmit<ExtArgs> | null
    /**
     * Filter which yes_fundamentals to delete.
     */
    where: yes_fundamentalsWhereUniqueInput
  }

  /**
   * yes_fundamentals deleteMany
   */
  export type yes_fundamentalsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which yes_fundamentals to delete
     */
    where?: yes_fundamentalsWhereInput
    /**
     * Limit how many yes_fundamentals to delete.
     */
    limit?: number
  }

  /**
   * yes_fundamentals without action
   */
  export type yes_fundamentalsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the yes_fundamentals
     */
    select?: yes_fundamentalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the yes_fundamentals
     */
    omit?: yes_fundamentalsOmit<ExtArgs> | null
  }


  /**
   * Model yes_ids
   */

  export type AggregateYes_ids = {
    _count: Yes_idsCountAggregateOutputType | null
    _min: Yes_idsMinAggregateOutputType | null
    _max: Yes_idsMaxAggregateOutputType | null
  }

  export type Yes_idsMinAggregateOutputType = {
    node_name: string | null
    object_id: string | null
    iso: string | null
    tz: string | null
  }

  export type Yes_idsMaxAggregateOutputType = {
    node_name: string | null
    object_id: string | null
    iso: string | null
    tz: string | null
  }

  export type Yes_idsCountAggregateOutputType = {
    node_name: number
    object_id: number
    iso: number
    tz: number
    _all: number
  }


  export type Yes_idsMinAggregateInputType = {
    node_name?: true
    object_id?: true
    iso?: true
    tz?: true
  }

  export type Yes_idsMaxAggregateInputType = {
    node_name?: true
    object_id?: true
    iso?: true
    tz?: true
  }

  export type Yes_idsCountAggregateInputType = {
    node_name?: true
    object_id?: true
    iso?: true
    tz?: true
    _all?: true
  }

  export type Yes_idsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which yes_ids to aggregate.
     */
    where?: yes_idsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of yes_ids to fetch.
     */
    orderBy?: yes_idsOrderByWithRelationInput | yes_idsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: yes_idsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` yes_ids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` yes_ids.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned yes_ids
    **/
    _count?: true | Yes_idsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Yes_idsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Yes_idsMaxAggregateInputType
  }

  export type GetYes_idsAggregateType<T extends Yes_idsAggregateArgs> = {
        [P in keyof T & keyof AggregateYes_ids]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateYes_ids[P]>
      : GetScalarType<T[P], AggregateYes_ids[P]>
  }




  export type yes_idsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: yes_idsWhereInput
    orderBy?: yes_idsOrderByWithAggregationInput | yes_idsOrderByWithAggregationInput[]
    by: Yes_idsScalarFieldEnum[] | Yes_idsScalarFieldEnum
    having?: yes_idsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Yes_idsCountAggregateInputType | true
    _min?: Yes_idsMinAggregateInputType
    _max?: Yes_idsMaxAggregateInputType
  }

  export type Yes_idsGroupByOutputType = {
    node_name: string | null
    object_id: string
    iso: string | null
    tz: string | null
    _count: Yes_idsCountAggregateOutputType | null
    _min: Yes_idsMinAggregateOutputType | null
    _max: Yes_idsMaxAggregateOutputType | null
  }

  type GetYes_idsGroupByPayload<T extends yes_idsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Yes_idsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Yes_idsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Yes_idsGroupByOutputType[P]>
            : GetScalarType<T[P], Yes_idsGroupByOutputType[P]>
        }
      >
    >


  export type yes_idsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    node_name?: boolean
    object_id?: boolean
    iso?: boolean
    tz?: boolean
  }, ExtArgs["result"]["yes_ids"]>

  export type yes_idsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    node_name?: boolean
    object_id?: boolean
    iso?: boolean
    tz?: boolean
  }, ExtArgs["result"]["yes_ids"]>

  export type yes_idsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    node_name?: boolean
    object_id?: boolean
    iso?: boolean
    tz?: boolean
  }, ExtArgs["result"]["yes_ids"]>

  export type yes_idsSelectScalar = {
    node_name?: boolean
    object_id?: boolean
    iso?: boolean
    tz?: boolean
  }

  export type yes_idsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"node_name" | "object_id" | "iso" | "tz", ExtArgs["result"]["yes_ids"]>

  export type $yes_idsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "yes_ids"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      node_name: string | null
      object_id: string
      iso: string | null
      tz: string | null
    }, ExtArgs["result"]["yes_ids"]>
    composites: {}
  }

  type yes_idsGetPayload<S extends boolean | null | undefined | yes_idsDefaultArgs> = $Result.GetResult<Prisma.$yes_idsPayload, S>

  type yes_idsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<yes_idsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Yes_idsCountAggregateInputType | true
    }

  export interface yes_idsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['yes_ids'], meta: { name: 'yes_ids' } }
    /**
     * Find zero or one Yes_ids that matches the filter.
     * @param {yes_idsFindUniqueArgs} args - Arguments to find a Yes_ids
     * @example
     * // Get one Yes_ids
     * const yes_ids = await prisma.yes_ids.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends yes_idsFindUniqueArgs>(args: SelectSubset<T, yes_idsFindUniqueArgs<ExtArgs>>): Prisma__yes_idsClient<$Result.GetResult<Prisma.$yes_idsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Yes_ids that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {yes_idsFindUniqueOrThrowArgs} args - Arguments to find a Yes_ids
     * @example
     * // Get one Yes_ids
     * const yes_ids = await prisma.yes_ids.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends yes_idsFindUniqueOrThrowArgs>(args: SelectSubset<T, yes_idsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__yes_idsClient<$Result.GetResult<Prisma.$yes_idsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Yes_ids that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {yes_idsFindFirstArgs} args - Arguments to find a Yes_ids
     * @example
     * // Get one Yes_ids
     * const yes_ids = await prisma.yes_ids.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends yes_idsFindFirstArgs>(args?: SelectSubset<T, yes_idsFindFirstArgs<ExtArgs>>): Prisma__yes_idsClient<$Result.GetResult<Prisma.$yes_idsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Yes_ids that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {yes_idsFindFirstOrThrowArgs} args - Arguments to find a Yes_ids
     * @example
     * // Get one Yes_ids
     * const yes_ids = await prisma.yes_ids.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends yes_idsFindFirstOrThrowArgs>(args?: SelectSubset<T, yes_idsFindFirstOrThrowArgs<ExtArgs>>): Prisma__yes_idsClient<$Result.GetResult<Prisma.$yes_idsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Yes_ids that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {yes_idsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Yes_ids
     * const yes_ids = await prisma.yes_ids.findMany()
     * 
     * // Get first 10 Yes_ids
     * const yes_ids = await prisma.yes_ids.findMany({ take: 10 })
     * 
     * // Only select the `node_name`
     * const yes_idsWithNode_nameOnly = await prisma.yes_ids.findMany({ select: { node_name: true } })
     * 
     */
    findMany<T extends yes_idsFindManyArgs>(args?: SelectSubset<T, yes_idsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$yes_idsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Yes_ids.
     * @param {yes_idsCreateArgs} args - Arguments to create a Yes_ids.
     * @example
     * // Create one Yes_ids
     * const Yes_ids = await prisma.yes_ids.create({
     *   data: {
     *     // ... data to create a Yes_ids
     *   }
     * })
     * 
     */
    create<T extends yes_idsCreateArgs>(args: SelectSubset<T, yes_idsCreateArgs<ExtArgs>>): Prisma__yes_idsClient<$Result.GetResult<Prisma.$yes_idsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Yes_ids.
     * @param {yes_idsCreateManyArgs} args - Arguments to create many Yes_ids.
     * @example
     * // Create many Yes_ids
     * const yes_ids = await prisma.yes_ids.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends yes_idsCreateManyArgs>(args?: SelectSubset<T, yes_idsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Yes_ids and returns the data saved in the database.
     * @param {yes_idsCreateManyAndReturnArgs} args - Arguments to create many Yes_ids.
     * @example
     * // Create many Yes_ids
     * const yes_ids = await prisma.yes_ids.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Yes_ids and only return the `node_name`
     * const yes_idsWithNode_nameOnly = await prisma.yes_ids.createManyAndReturn({
     *   select: { node_name: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends yes_idsCreateManyAndReturnArgs>(args?: SelectSubset<T, yes_idsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$yes_idsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Yes_ids.
     * @param {yes_idsDeleteArgs} args - Arguments to delete one Yes_ids.
     * @example
     * // Delete one Yes_ids
     * const Yes_ids = await prisma.yes_ids.delete({
     *   where: {
     *     // ... filter to delete one Yes_ids
     *   }
     * })
     * 
     */
    delete<T extends yes_idsDeleteArgs>(args: SelectSubset<T, yes_idsDeleteArgs<ExtArgs>>): Prisma__yes_idsClient<$Result.GetResult<Prisma.$yes_idsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Yes_ids.
     * @param {yes_idsUpdateArgs} args - Arguments to update one Yes_ids.
     * @example
     * // Update one Yes_ids
     * const yes_ids = await prisma.yes_ids.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends yes_idsUpdateArgs>(args: SelectSubset<T, yes_idsUpdateArgs<ExtArgs>>): Prisma__yes_idsClient<$Result.GetResult<Prisma.$yes_idsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Yes_ids.
     * @param {yes_idsDeleteManyArgs} args - Arguments to filter Yes_ids to delete.
     * @example
     * // Delete a few Yes_ids
     * const { count } = await prisma.yes_ids.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends yes_idsDeleteManyArgs>(args?: SelectSubset<T, yes_idsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Yes_ids.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {yes_idsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Yes_ids
     * const yes_ids = await prisma.yes_ids.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends yes_idsUpdateManyArgs>(args: SelectSubset<T, yes_idsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Yes_ids and returns the data updated in the database.
     * @param {yes_idsUpdateManyAndReturnArgs} args - Arguments to update many Yes_ids.
     * @example
     * // Update many Yes_ids
     * const yes_ids = await prisma.yes_ids.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Yes_ids and only return the `node_name`
     * const yes_idsWithNode_nameOnly = await prisma.yes_ids.updateManyAndReturn({
     *   select: { node_name: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends yes_idsUpdateManyAndReturnArgs>(args: SelectSubset<T, yes_idsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$yes_idsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Yes_ids.
     * @param {yes_idsUpsertArgs} args - Arguments to update or create a Yes_ids.
     * @example
     * // Update or create a Yes_ids
     * const yes_ids = await prisma.yes_ids.upsert({
     *   create: {
     *     // ... data to create a Yes_ids
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Yes_ids we want to update
     *   }
     * })
     */
    upsert<T extends yes_idsUpsertArgs>(args: SelectSubset<T, yes_idsUpsertArgs<ExtArgs>>): Prisma__yes_idsClient<$Result.GetResult<Prisma.$yes_idsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Yes_ids.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {yes_idsCountArgs} args - Arguments to filter Yes_ids to count.
     * @example
     * // Count the number of Yes_ids
     * const count = await prisma.yes_ids.count({
     *   where: {
     *     // ... the filter for the Yes_ids we want to count
     *   }
     * })
    **/
    count<T extends yes_idsCountArgs>(
      args?: Subset<T, yes_idsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Yes_idsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Yes_ids.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Yes_idsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Yes_idsAggregateArgs>(args: Subset<T, Yes_idsAggregateArgs>): Prisma.PrismaPromise<GetYes_idsAggregateType<T>>

    /**
     * Group by Yes_ids.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {yes_idsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends yes_idsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: yes_idsGroupByArgs['orderBy'] }
        : { orderBy?: yes_idsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, yes_idsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetYes_idsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the yes_ids model
   */
  readonly fields: yes_idsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for yes_ids.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__yes_idsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the yes_ids model
   */
  interface yes_idsFieldRefs {
    readonly node_name: FieldRef<"yes_ids", 'String'>
    readonly object_id: FieldRef<"yes_ids", 'String'>
    readonly iso: FieldRef<"yes_ids", 'String'>
    readonly tz: FieldRef<"yes_ids", 'String'>
  }
    

  // Custom InputTypes
  /**
   * yes_ids findUnique
   */
  export type yes_idsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the yes_ids
     */
    select?: yes_idsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the yes_ids
     */
    omit?: yes_idsOmit<ExtArgs> | null
    /**
     * Filter, which yes_ids to fetch.
     */
    where: yes_idsWhereUniqueInput
  }

  /**
   * yes_ids findUniqueOrThrow
   */
  export type yes_idsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the yes_ids
     */
    select?: yes_idsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the yes_ids
     */
    omit?: yes_idsOmit<ExtArgs> | null
    /**
     * Filter, which yes_ids to fetch.
     */
    where: yes_idsWhereUniqueInput
  }

  /**
   * yes_ids findFirst
   */
  export type yes_idsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the yes_ids
     */
    select?: yes_idsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the yes_ids
     */
    omit?: yes_idsOmit<ExtArgs> | null
    /**
     * Filter, which yes_ids to fetch.
     */
    where?: yes_idsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of yes_ids to fetch.
     */
    orderBy?: yes_idsOrderByWithRelationInput | yes_idsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for yes_ids.
     */
    cursor?: yes_idsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` yes_ids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` yes_ids.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of yes_ids.
     */
    distinct?: Yes_idsScalarFieldEnum | Yes_idsScalarFieldEnum[]
  }

  /**
   * yes_ids findFirstOrThrow
   */
  export type yes_idsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the yes_ids
     */
    select?: yes_idsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the yes_ids
     */
    omit?: yes_idsOmit<ExtArgs> | null
    /**
     * Filter, which yes_ids to fetch.
     */
    where?: yes_idsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of yes_ids to fetch.
     */
    orderBy?: yes_idsOrderByWithRelationInput | yes_idsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for yes_ids.
     */
    cursor?: yes_idsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` yes_ids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` yes_ids.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of yes_ids.
     */
    distinct?: Yes_idsScalarFieldEnum | Yes_idsScalarFieldEnum[]
  }

  /**
   * yes_ids findMany
   */
  export type yes_idsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the yes_ids
     */
    select?: yes_idsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the yes_ids
     */
    omit?: yes_idsOmit<ExtArgs> | null
    /**
     * Filter, which yes_ids to fetch.
     */
    where?: yes_idsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of yes_ids to fetch.
     */
    orderBy?: yes_idsOrderByWithRelationInput | yes_idsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing yes_ids.
     */
    cursor?: yes_idsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` yes_ids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` yes_ids.
     */
    skip?: number
    distinct?: Yes_idsScalarFieldEnum | Yes_idsScalarFieldEnum[]
  }

  /**
   * yes_ids create
   */
  export type yes_idsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the yes_ids
     */
    select?: yes_idsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the yes_ids
     */
    omit?: yes_idsOmit<ExtArgs> | null
    /**
     * The data needed to create a yes_ids.
     */
    data: XOR<yes_idsCreateInput, yes_idsUncheckedCreateInput>
  }

  /**
   * yes_ids createMany
   */
  export type yes_idsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many yes_ids.
     */
    data: yes_idsCreateManyInput | yes_idsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * yes_ids createManyAndReturn
   */
  export type yes_idsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the yes_ids
     */
    select?: yes_idsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the yes_ids
     */
    omit?: yes_idsOmit<ExtArgs> | null
    /**
     * The data used to create many yes_ids.
     */
    data: yes_idsCreateManyInput | yes_idsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * yes_ids update
   */
  export type yes_idsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the yes_ids
     */
    select?: yes_idsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the yes_ids
     */
    omit?: yes_idsOmit<ExtArgs> | null
    /**
     * The data needed to update a yes_ids.
     */
    data: XOR<yes_idsUpdateInput, yes_idsUncheckedUpdateInput>
    /**
     * Choose, which yes_ids to update.
     */
    where: yes_idsWhereUniqueInput
  }

  /**
   * yes_ids updateMany
   */
  export type yes_idsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update yes_ids.
     */
    data: XOR<yes_idsUpdateManyMutationInput, yes_idsUncheckedUpdateManyInput>
    /**
     * Filter which yes_ids to update
     */
    where?: yes_idsWhereInput
    /**
     * Limit how many yes_ids to update.
     */
    limit?: number
  }

  /**
   * yes_ids updateManyAndReturn
   */
  export type yes_idsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the yes_ids
     */
    select?: yes_idsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the yes_ids
     */
    omit?: yes_idsOmit<ExtArgs> | null
    /**
     * The data used to update yes_ids.
     */
    data: XOR<yes_idsUpdateManyMutationInput, yes_idsUncheckedUpdateManyInput>
    /**
     * Filter which yes_ids to update
     */
    where?: yes_idsWhereInput
    /**
     * Limit how many yes_ids to update.
     */
    limit?: number
  }

  /**
   * yes_ids upsert
   */
  export type yes_idsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the yes_ids
     */
    select?: yes_idsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the yes_ids
     */
    omit?: yes_idsOmit<ExtArgs> | null
    /**
     * The filter to search for the yes_ids to update in case it exists.
     */
    where: yes_idsWhereUniqueInput
    /**
     * In case the yes_ids found by the `where` argument doesn't exist, create a new yes_ids with this data.
     */
    create: XOR<yes_idsCreateInput, yes_idsUncheckedCreateInput>
    /**
     * In case the yes_ids was found with the provided `where` argument, update it with this data.
     */
    update: XOR<yes_idsUpdateInput, yes_idsUncheckedUpdateInput>
  }

  /**
   * yes_ids delete
   */
  export type yes_idsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the yes_ids
     */
    select?: yes_idsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the yes_ids
     */
    omit?: yes_idsOmit<ExtArgs> | null
    /**
     * Filter which yes_ids to delete.
     */
    where: yes_idsWhereUniqueInput
  }

  /**
   * yes_ids deleteMany
   */
  export type yes_idsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which yes_ids to delete
     */
    where?: yes_idsWhereInput
    /**
     * Limit how many yes_ids to delete.
     */
    limit?: number
  }

  /**
   * yes_ids without action
   */
  export type yes_idsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the yes_ids
     */
    select?: yes_idsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the yes_ids
     */
    omit?: yes_idsOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Caiso_bess_fleet_dataScalarFieldEnum: {
    utc_datetime_ib: 'utc_datetime_ib',
    local_datetime_ib: 'local_datetime_ib',
    entity: 'entity',
    attribute: 'attribute',
    value: 'value'
  };

  export type Caiso_bess_fleet_dataScalarFieldEnum = (typeof Caiso_bess_fleet_dataScalarFieldEnum)[keyof typeof Caiso_bess_fleet_dataScalarFieldEnum]


  export const Eox_forwardsScalarFieldEnum: {
    curve_date: 'curve_date',
    iso: 'iso',
    market: 'market',
    peak_hour: 'peak_hour',
    contract_begin: 'contract_begin',
    mid: 'mid',
    bid: 'bid',
    ask: 'ask',
    atc: 'atc',
    hr: 'hr'
  };

  export type Eox_forwardsScalarFieldEnum = (typeof Eox_forwardsScalarFieldEnum)[keyof typeof Eox_forwardsScalarFieldEnum]


  export const Eox_tagsScalarFieldEnum: {
    iso: 'iso',
    market: 'market',
    peak_hour: 'peak_hour'
  };

  export type Eox_tagsScalarFieldEnum = (typeof Eox_tagsScalarFieldEnum)[keyof typeof Eox_tagsScalarFieldEnum]


  export const Goleta_ascend_dataScalarFieldEnum: {
    utc_datetime_ib: 'utc_datetime_ib',
    local_datetime_ib: 'local_datetime_ib',
    strategy: 'strategy',
    attribute: 'attribute',
    value: 'value'
  };

  export type Goleta_ascend_dataScalarFieldEnum = (typeof Goleta_ascend_dataScalarFieldEnum)[keyof typeof Goleta_ascend_dataScalarFieldEnum]


  export const Goleta_budgetsScalarFieldEnum: {
    utc_datetime_ib: 'utc_datetime_ib',
    local_datetime_ib: 'local_datetime_ib',
    entity: 'entity',
    attribute: 'attribute',
    value: 'value'
  };

  export type Goleta_budgetsScalarFieldEnum = (typeof Goleta_budgetsScalarFieldEnum)[keyof typeof Goleta_budgetsScalarFieldEnum]


  export const Goleta_charging_constraintsScalarFieldEnum: {
    year: 'year',
    month: 'month',
    hour: 'hour',
    value: 'value'
  };

  export type Goleta_charging_constraintsScalarFieldEnum = (typeof Goleta_charging_constraintsScalarFieldEnum)[keyof typeof Goleta_charging_constraintsScalarFieldEnum]


  export const Goleta_operational_dataScalarFieldEnum: {
    utc_datetime_ib: 'utc_datetime_ib',
    local_datetime_ib: 'local_datetime_ib',
    entity: 'entity',
    attribute: 'attribute',
    value: 'value'
  };

  export type Goleta_operational_dataScalarFieldEnum = (typeof Goleta_operational_dataScalarFieldEnum)[keyof typeof Goleta_operational_dataScalarFieldEnum]


  export const Goleta_revenue_metricsScalarFieldEnum: {
    utc_datetime_ib: 'utc_datetime_ib',
    local_datetime_ib: 'local_datetime_ib',
    entity: 'entity',
    attribute: 'attribute',
    value: 'value'
  };

  export type Goleta_revenue_metricsScalarFieldEnum = (typeof Goleta_revenue_metricsScalarFieldEnum)[keyof typeof Goleta_revenue_metricsScalarFieldEnum]


  export const Goleta_scheduling_dataScalarFieldEnum: {
    utc_datetime_ib: 'utc_datetime_ib',
    local_datetime_ib: 'local_datetime_ib',
    entity: 'entity',
    attribute: 'attribute',
    value: 'value'
  };

  export type Goleta_scheduling_dataScalarFieldEnum = (typeof Goleta_scheduling_dataScalarFieldEnum)[keyof typeof Goleta_scheduling_dataScalarFieldEnum]


  export const Internal_forecastsScalarFieldEnum: {
    flowdatestart: 'flowdatestart',
    term: 'term',
    markdate: 'markdate',
    marklocation: 'marklocation',
    markmarket: 'markmarket',
    curvecreator: 'curvecreator',
    currentcurve: 'currentcurve',
    valuetype: 'valuetype',
    value: 'value',
    units: 'units',
    marktype: 'marktype',
    marktypedesc: 'marktypedesc',
    gridstorpurpose: 'gridstorpurpose',
    tablecreationtime: 'tablecreationtime'
  };

  export type Internal_forecastsScalarFieldEnum = (typeof Internal_forecastsScalarFieldEnum)[keyof typeof Internal_forecastsScalarFieldEnum]


  export const Monthly_revenue_forecastsScalarFieldEnum: {
    forecastmonth: 'forecastmonth',
    markdate: 'markdate',
    curvename: 'curvename',
    casetype: 'casetype',
    optimizationtype: 'optimizationtype',
    location: 'location',
    pricetype: 'pricetype',
    price: 'price',
    unit: 'unit'
  };

  export type Monthly_revenue_forecastsScalarFieldEnum = (typeof Monthly_revenue_forecastsScalarFieldEnum)[keyof typeof Monthly_revenue_forecastsScalarFieldEnum]


  export const Yes_fundamentalsScalarFieldEnum: {
    utc_datetime_ib: 'utc_datetime_ib',
    local_datetime_ib: 'local_datetime_ib',
    entity: 'entity',
    attribute: 'attribute',
    value: 'value'
  };

  export type Yes_fundamentalsScalarFieldEnum = (typeof Yes_fundamentalsScalarFieldEnum)[keyof typeof Yes_fundamentalsScalarFieldEnum]


  export const Yes_idsScalarFieldEnum: {
    node_name: 'node_name',
    object_id: 'object_id',
    iso: 'iso',
    tz: 'tz'
  };

  export type Yes_idsScalarFieldEnum = (typeof Yes_idsScalarFieldEnum)[keyof typeof Yes_idsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type caiso_bess_fleet_dataWhereInput = {
    AND?: caiso_bess_fleet_dataWhereInput | caiso_bess_fleet_dataWhereInput[]
    OR?: caiso_bess_fleet_dataWhereInput[]
    NOT?: caiso_bess_fleet_dataWhereInput | caiso_bess_fleet_dataWhereInput[]
    utc_datetime_ib?: DateTimeFilter<"caiso_bess_fleet_data"> | Date | string
    local_datetime_ib?: DateTimeFilter<"caiso_bess_fleet_data"> | Date | string
    entity?: StringFilter<"caiso_bess_fleet_data"> | string
    attribute?: StringFilter<"caiso_bess_fleet_data"> | string
    value?: DecimalNullableFilter<"caiso_bess_fleet_data"> | Decimal | DecimalJsLike | number | string | null
  }

  export type caiso_bess_fleet_dataOrderByWithRelationInput = {
    utc_datetime_ib?: SortOrder
    local_datetime_ib?: SortOrder
    entity?: SortOrder
    attribute?: SortOrder
    value?: SortOrderInput | SortOrder
  }

  export type caiso_bess_fleet_dataWhereUniqueInput = Prisma.AtLeast<{
    utc_datetime_ib_local_datetime_ib_entity_attribute?: caiso_bess_fleet_dataUtc_datetime_ibLocal_datetime_ibEntityAttributeCompoundUniqueInput
    AND?: caiso_bess_fleet_dataWhereInput | caiso_bess_fleet_dataWhereInput[]
    OR?: caiso_bess_fleet_dataWhereInput[]
    NOT?: caiso_bess_fleet_dataWhereInput | caiso_bess_fleet_dataWhereInput[]
    utc_datetime_ib?: DateTimeFilter<"caiso_bess_fleet_data"> | Date | string
    local_datetime_ib?: DateTimeFilter<"caiso_bess_fleet_data"> | Date | string
    entity?: StringFilter<"caiso_bess_fleet_data"> | string
    attribute?: StringFilter<"caiso_bess_fleet_data"> | string
    value?: DecimalNullableFilter<"caiso_bess_fleet_data"> | Decimal | DecimalJsLike | number | string | null
  }, "utc_datetime_ib_local_datetime_ib_entity_attribute">

  export type caiso_bess_fleet_dataOrderByWithAggregationInput = {
    utc_datetime_ib?: SortOrder
    local_datetime_ib?: SortOrder
    entity?: SortOrder
    attribute?: SortOrder
    value?: SortOrderInput | SortOrder
    _count?: caiso_bess_fleet_dataCountOrderByAggregateInput
    _avg?: caiso_bess_fleet_dataAvgOrderByAggregateInput
    _max?: caiso_bess_fleet_dataMaxOrderByAggregateInput
    _min?: caiso_bess_fleet_dataMinOrderByAggregateInput
    _sum?: caiso_bess_fleet_dataSumOrderByAggregateInput
  }

  export type caiso_bess_fleet_dataScalarWhereWithAggregatesInput = {
    AND?: caiso_bess_fleet_dataScalarWhereWithAggregatesInput | caiso_bess_fleet_dataScalarWhereWithAggregatesInput[]
    OR?: caiso_bess_fleet_dataScalarWhereWithAggregatesInput[]
    NOT?: caiso_bess_fleet_dataScalarWhereWithAggregatesInput | caiso_bess_fleet_dataScalarWhereWithAggregatesInput[]
    utc_datetime_ib?: DateTimeWithAggregatesFilter<"caiso_bess_fleet_data"> | Date | string
    local_datetime_ib?: DateTimeWithAggregatesFilter<"caiso_bess_fleet_data"> | Date | string
    entity?: StringWithAggregatesFilter<"caiso_bess_fleet_data"> | string
    attribute?: StringWithAggregatesFilter<"caiso_bess_fleet_data"> | string
    value?: DecimalNullableWithAggregatesFilter<"caiso_bess_fleet_data"> | Decimal | DecimalJsLike | number | string | null
  }

  export type eox_forwardsWhereInput = {
    AND?: eox_forwardsWhereInput | eox_forwardsWhereInput[]
    OR?: eox_forwardsWhereInput[]
    NOT?: eox_forwardsWhereInput | eox_forwardsWhereInput[]
    curve_date?: DateTimeFilter<"eox_forwards"> | Date | string
    iso?: StringFilter<"eox_forwards"> | string
    market?: StringFilter<"eox_forwards"> | string
    peak_hour?: StringFilter<"eox_forwards"> | string
    contract_begin?: DateTimeFilter<"eox_forwards"> | Date | string
    mid?: DecimalNullableFilter<"eox_forwards"> | Decimal | DecimalJsLike | number | string | null
    bid?: DecimalNullableFilter<"eox_forwards"> | Decimal | DecimalJsLike | number | string | null
    ask?: DecimalNullableFilter<"eox_forwards"> | Decimal | DecimalJsLike | number | string | null
    atc?: DecimalNullableFilter<"eox_forwards"> | Decimal | DecimalJsLike | number | string | null
    hr?: DecimalNullableFilter<"eox_forwards"> | Decimal | DecimalJsLike | number | string | null
  }

  export type eox_forwardsOrderByWithRelationInput = {
    curve_date?: SortOrder
    iso?: SortOrder
    market?: SortOrder
    peak_hour?: SortOrder
    contract_begin?: SortOrder
    mid?: SortOrderInput | SortOrder
    bid?: SortOrderInput | SortOrder
    ask?: SortOrderInput | SortOrder
    atc?: SortOrderInput | SortOrder
    hr?: SortOrderInput | SortOrder
  }

  export type eox_forwardsWhereUniqueInput = Prisma.AtLeast<{
    curve_date_iso_market_peak_hour_contract_begin?: eox_forwardsCurve_dateIsoMarketPeak_hourContract_beginCompoundUniqueInput
    AND?: eox_forwardsWhereInput | eox_forwardsWhereInput[]
    OR?: eox_forwardsWhereInput[]
    NOT?: eox_forwardsWhereInput | eox_forwardsWhereInput[]
    curve_date?: DateTimeFilter<"eox_forwards"> | Date | string
    iso?: StringFilter<"eox_forwards"> | string
    market?: StringFilter<"eox_forwards"> | string
    peak_hour?: StringFilter<"eox_forwards"> | string
    contract_begin?: DateTimeFilter<"eox_forwards"> | Date | string
    mid?: DecimalNullableFilter<"eox_forwards"> | Decimal | DecimalJsLike | number | string | null
    bid?: DecimalNullableFilter<"eox_forwards"> | Decimal | DecimalJsLike | number | string | null
    ask?: DecimalNullableFilter<"eox_forwards"> | Decimal | DecimalJsLike | number | string | null
    atc?: DecimalNullableFilter<"eox_forwards"> | Decimal | DecimalJsLike | number | string | null
    hr?: DecimalNullableFilter<"eox_forwards"> | Decimal | DecimalJsLike | number | string | null
  }, "curve_date_iso_market_peak_hour_contract_begin">

  export type eox_forwardsOrderByWithAggregationInput = {
    curve_date?: SortOrder
    iso?: SortOrder
    market?: SortOrder
    peak_hour?: SortOrder
    contract_begin?: SortOrder
    mid?: SortOrderInput | SortOrder
    bid?: SortOrderInput | SortOrder
    ask?: SortOrderInput | SortOrder
    atc?: SortOrderInput | SortOrder
    hr?: SortOrderInput | SortOrder
    _count?: eox_forwardsCountOrderByAggregateInput
    _avg?: eox_forwardsAvgOrderByAggregateInput
    _max?: eox_forwardsMaxOrderByAggregateInput
    _min?: eox_forwardsMinOrderByAggregateInput
    _sum?: eox_forwardsSumOrderByAggregateInput
  }

  export type eox_forwardsScalarWhereWithAggregatesInput = {
    AND?: eox_forwardsScalarWhereWithAggregatesInput | eox_forwardsScalarWhereWithAggregatesInput[]
    OR?: eox_forwardsScalarWhereWithAggregatesInput[]
    NOT?: eox_forwardsScalarWhereWithAggregatesInput | eox_forwardsScalarWhereWithAggregatesInput[]
    curve_date?: DateTimeWithAggregatesFilter<"eox_forwards"> | Date | string
    iso?: StringWithAggregatesFilter<"eox_forwards"> | string
    market?: StringWithAggregatesFilter<"eox_forwards"> | string
    peak_hour?: StringWithAggregatesFilter<"eox_forwards"> | string
    contract_begin?: DateTimeWithAggregatesFilter<"eox_forwards"> | Date | string
    mid?: DecimalNullableWithAggregatesFilter<"eox_forwards"> | Decimal | DecimalJsLike | number | string | null
    bid?: DecimalNullableWithAggregatesFilter<"eox_forwards"> | Decimal | DecimalJsLike | number | string | null
    ask?: DecimalNullableWithAggregatesFilter<"eox_forwards"> | Decimal | DecimalJsLike | number | string | null
    atc?: DecimalNullableWithAggregatesFilter<"eox_forwards"> | Decimal | DecimalJsLike | number | string | null
    hr?: DecimalNullableWithAggregatesFilter<"eox_forwards"> | Decimal | DecimalJsLike | number | string | null
  }

  export type eox_tagsWhereInput = {
    AND?: eox_tagsWhereInput | eox_tagsWhereInput[]
    OR?: eox_tagsWhereInput[]
    NOT?: eox_tagsWhereInput | eox_tagsWhereInput[]
    iso?: StringFilter<"eox_tags"> | string
    market?: StringFilter<"eox_tags"> | string
    peak_hour?: StringFilter<"eox_tags"> | string
  }

  export type eox_tagsOrderByWithRelationInput = {
    iso?: SortOrder
    market?: SortOrder
    peak_hour?: SortOrder
  }

  export type eox_tagsWhereUniqueInput = Prisma.AtLeast<{
    iso_market_peak_hour?: eox_tagsIsoMarketPeak_hourCompoundUniqueInput
    AND?: eox_tagsWhereInput | eox_tagsWhereInput[]
    OR?: eox_tagsWhereInput[]
    NOT?: eox_tagsWhereInput | eox_tagsWhereInput[]
    iso?: StringFilter<"eox_tags"> | string
    market?: StringFilter<"eox_tags"> | string
    peak_hour?: StringFilter<"eox_tags"> | string
  }, "iso_market_peak_hour">

  export type eox_tagsOrderByWithAggregationInput = {
    iso?: SortOrder
    market?: SortOrder
    peak_hour?: SortOrder
    _count?: eox_tagsCountOrderByAggregateInput
    _max?: eox_tagsMaxOrderByAggregateInput
    _min?: eox_tagsMinOrderByAggregateInput
  }

  export type eox_tagsScalarWhereWithAggregatesInput = {
    AND?: eox_tagsScalarWhereWithAggregatesInput | eox_tagsScalarWhereWithAggregatesInput[]
    OR?: eox_tagsScalarWhereWithAggregatesInput[]
    NOT?: eox_tagsScalarWhereWithAggregatesInput | eox_tagsScalarWhereWithAggregatesInput[]
    iso?: StringWithAggregatesFilter<"eox_tags"> | string
    market?: StringWithAggregatesFilter<"eox_tags"> | string
    peak_hour?: StringWithAggregatesFilter<"eox_tags"> | string
  }

  export type goleta_ascend_dataWhereInput = {
    AND?: goleta_ascend_dataWhereInput | goleta_ascend_dataWhereInput[]
    OR?: goleta_ascend_dataWhereInput[]
    NOT?: goleta_ascend_dataWhereInput | goleta_ascend_dataWhereInput[]
    utc_datetime_ib?: DateTimeFilter<"goleta_ascend_data"> | Date | string
    local_datetime_ib?: DateTimeFilter<"goleta_ascend_data"> | Date | string
    strategy?: StringFilter<"goleta_ascend_data"> | string
    attribute?: StringFilter<"goleta_ascend_data"> | string
    value?: FloatNullableFilter<"goleta_ascend_data"> | number | null
  }

  export type goleta_ascend_dataOrderByWithRelationInput = {
    utc_datetime_ib?: SortOrder
    local_datetime_ib?: SortOrder
    strategy?: SortOrder
    attribute?: SortOrder
    value?: SortOrderInput | SortOrder
  }

  export type goleta_ascend_dataWhereUniqueInput = Prisma.AtLeast<{
    utc_datetime_ib_local_datetime_ib_strategy_attribute?: goleta_ascend_dataUtc_datetime_ibLocal_datetime_ibStrategyAttributeCompoundUniqueInput
    AND?: goleta_ascend_dataWhereInput | goleta_ascend_dataWhereInput[]
    OR?: goleta_ascend_dataWhereInput[]
    NOT?: goleta_ascend_dataWhereInput | goleta_ascend_dataWhereInput[]
    utc_datetime_ib?: DateTimeFilter<"goleta_ascend_data"> | Date | string
    local_datetime_ib?: DateTimeFilter<"goleta_ascend_data"> | Date | string
    strategy?: StringFilter<"goleta_ascend_data"> | string
    attribute?: StringFilter<"goleta_ascend_data"> | string
    value?: FloatNullableFilter<"goleta_ascend_data"> | number | null
  }, "utc_datetime_ib_local_datetime_ib_strategy_attribute">

  export type goleta_ascend_dataOrderByWithAggregationInput = {
    utc_datetime_ib?: SortOrder
    local_datetime_ib?: SortOrder
    strategy?: SortOrder
    attribute?: SortOrder
    value?: SortOrderInput | SortOrder
    _count?: goleta_ascend_dataCountOrderByAggregateInput
    _avg?: goleta_ascend_dataAvgOrderByAggregateInput
    _max?: goleta_ascend_dataMaxOrderByAggregateInput
    _min?: goleta_ascend_dataMinOrderByAggregateInput
    _sum?: goleta_ascend_dataSumOrderByAggregateInput
  }

  export type goleta_ascend_dataScalarWhereWithAggregatesInput = {
    AND?: goleta_ascend_dataScalarWhereWithAggregatesInput | goleta_ascend_dataScalarWhereWithAggregatesInput[]
    OR?: goleta_ascend_dataScalarWhereWithAggregatesInput[]
    NOT?: goleta_ascend_dataScalarWhereWithAggregatesInput | goleta_ascend_dataScalarWhereWithAggregatesInput[]
    utc_datetime_ib?: DateTimeWithAggregatesFilter<"goleta_ascend_data"> | Date | string
    local_datetime_ib?: DateTimeWithAggregatesFilter<"goleta_ascend_data"> | Date | string
    strategy?: StringWithAggregatesFilter<"goleta_ascend_data"> | string
    attribute?: StringWithAggregatesFilter<"goleta_ascend_data"> | string
    value?: FloatNullableWithAggregatesFilter<"goleta_ascend_data"> | number | null
  }

  export type goleta_budgetsWhereInput = {
    AND?: goleta_budgetsWhereInput | goleta_budgetsWhereInput[]
    OR?: goleta_budgetsWhereInput[]
    NOT?: goleta_budgetsWhereInput | goleta_budgetsWhereInput[]
    utc_datetime_ib?: DateTimeFilter<"goleta_budgets"> | Date | string
    local_datetime_ib?: DateTimeFilter<"goleta_budgets"> | Date | string
    entity?: StringFilter<"goleta_budgets"> | string
    attribute?: StringFilter<"goleta_budgets"> | string
    value?: DecimalNullableFilter<"goleta_budgets"> | Decimal | DecimalJsLike | number | string | null
  }

  export type goleta_budgetsOrderByWithRelationInput = {
    utc_datetime_ib?: SortOrder
    local_datetime_ib?: SortOrder
    entity?: SortOrder
    attribute?: SortOrder
    value?: SortOrderInput | SortOrder
  }

  export type goleta_budgetsWhereUniqueInput = Prisma.AtLeast<{
    utc_datetime_ib_local_datetime_ib_entity_attribute?: goleta_budgetsUtc_datetime_ibLocal_datetime_ibEntityAttributeCompoundUniqueInput
    AND?: goleta_budgetsWhereInput | goleta_budgetsWhereInput[]
    OR?: goleta_budgetsWhereInput[]
    NOT?: goleta_budgetsWhereInput | goleta_budgetsWhereInput[]
    utc_datetime_ib?: DateTimeFilter<"goleta_budgets"> | Date | string
    local_datetime_ib?: DateTimeFilter<"goleta_budgets"> | Date | string
    entity?: StringFilter<"goleta_budgets"> | string
    attribute?: StringFilter<"goleta_budgets"> | string
    value?: DecimalNullableFilter<"goleta_budgets"> | Decimal | DecimalJsLike | number | string | null
  }, "utc_datetime_ib_local_datetime_ib_entity_attribute">

  export type goleta_budgetsOrderByWithAggregationInput = {
    utc_datetime_ib?: SortOrder
    local_datetime_ib?: SortOrder
    entity?: SortOrder
    attribute?: SortOrder
    value?: SortOrderInput | SortOrder
    _count?: goleta_budgetsCountOrderByAggregateInput
    _avg?: goleta_budgetsAvgOrderByAggregateInput
    _max?: goleta_budgetsMaxOrderByAggregateInput
    _min?: goleta_budgetsMinOrderByAggregateInput
    _sum?: goleta_budgetsSumOrderByAggregateInput
  }

  export type goleta_budgetsScalarWhereWithAggregatesInput = {
    AND?: goleta_budgetsScalarWhereWithAggregatesInput | goleta_budgetsScalarWhereWithAggregatesInput[]
    OR?: goleta_budgetsScalarWhereWithAggregatesInput[]
    NOT?: goleta_budgetsScalarWhereWithAggregatesInput | goleta_budgetsScalarWhereWithAggregatesInput[]
    utc_datetime_ib?: DateTimeWithAggregatesFilter<"goleta_budgets"> | Date | string
    local_datetime_ib?: DateTimeWithAggregatesFilter<"goleta_budgets"> | Date | string
    entity?: StringWithAggregatesFilter<"goleta_budgets"> | string
    attribute?: StringWithAggregatesFilter<"goleta_budgets"> | string
    value?: DecimalNullableWithAggregatesFilter<"goleta_budgets"> | Decimal | DecimalJsLike | number | string | null
  }

  export type goleta_charging_constraintsWhereInput = {
    AND?: goleta_charging_constraintsWhereInput | goleta_charging_constraintsWhereInput[]
    OR?: goleta_charging_constraintsWhereInput[]
    NOT?: goleta_charging_constraintsWhereInput | goleta_charging_constraintsWhereInput[]
    year?: IntFilter<"goleta_charging_constraints"> | number
    month?: IntFilter<"goleta_charging_constraints"> | number
    hour?: IntFilter<"goleta_charging_constraints"> | number
    value?: DecimalNullableFilter<"goleta_charging_constraints"> | Decimal | DecimalJsLike | number | string | null
  }

  export type goleta_charging_constraintsOrderByWithRelationInput = {
    year?: SortOrder
    month?: SortOrder
    hour?: SortOrder
    value?: SortOrderInput | SortOrder
  }

  export type goleta_charging_constraintsWhereUniqueInput = Prisma.AtLeast<{
    year_month_hour?: goleta_charging_constraintsYearMonthHourCompoundUniqueInput
    AND?: goleta_charging_constraintsWhereInput | goleta_charging_constraintsWhereInput[]
    OR?: goleta_charging_constraintsWhereInput[]
    NOT?: goleta_charging_constraintsWhereInput | goleta_charging_constraintsWhereInput[]
    year?: IntFilter<"goleta_charging_constraints"> | number
    month?: IntFilter<"goleta_charging_constraints"> | number
    hour?: IntFilter<"goleta_charging_constraints"> | number
    value?: DecimalNullableFilter<"goleta_charging_constraints"> | Decimal | DecimalJsLike | number | string | null
  }, "year_month_hour">

  export type goleta_charging_constraintsOrderByWithAggregationInput = {
    year?: SortOrder
    month?: SortOrder
    hour?: SortOrder
    value?: SortOrderInput | SortOrder
    _count?: goleta_charging_constraintsCountOrderByAggregateInput
    _avg?: goleta_charging_constraintsAvgOrderByAggregateInput
    _max?: goleta_charging_constraintsMaxOrderByAggregateInput
    _min?: goleta_charging_constraintsMinOrderByAggregateInput
    _sum?: goleta_charging_constraintsSumOrderByAggregateInput
  }

  export type goleta_charging_constraintsScalarWhereWithAggregatesInput = {
    AND?: goleta_charging_constraintsScalarWhereWithAggregatesInput | goleta_charging_constraintsScalarWhereWithAggregatesInput[]
    OR?: goleta_charging_constraintsScalarWhereWithAggregatesInput[]
    NOT?: goleta_charging_constraintsScalarWhereWithAggregatesInput | goleta_charging_constraintsScalarWhereWithAggregatesInput[]
    year?: IntWithAggregatesFilter<"goleta_charging_constraints"> | number
    month?: IntWithAggregatesFilter<"goleta_charging_constraints"> | number
    hour?: IntWithAggregatesFilter<"goleta_charging_constraints"> | number
    value?: DecimalNullableWithAggregatesFilter<"goleta_charging_constraints"> | Decimal | DecimalJsLike | number | string | null
  }

  export type goleta_operational_dataWhereInput = {
    AND?: goleta_operational_dataWhereInput | goleta_operational_dataWhereInput[]
    OR?: goleta_operational_dataWhereInput[]
    NOT?: goleta_operational_dataWhereInput | goleta_operational_dataWhereInput[]
    utc_datetime_ib?: DateTimeFilter<"goleta_operational_data"> | Date | string
    local_datetime_ib?: DateTimeFilter<"goleta_operational_data"> | Date | string
    entity?: StringFilter<"goleta_operational_data"> | string
    attribute?: StringFilter<"goleta_operational_data"> | string
    value?: FloatNullableFilter<"goleta_operational_data"> | number | null
  }

  export type goleta_operational_dataOrderByWithRelationInput = {
    utc_datetime_ib?: SortOrder
    local_datetime_ib?: SortOrder
    entity?: SortOrder
    attribute?: SortOrder
    value?: SortOrderInput | SortOrder
  }

  export type goleta_operational_dataWhereUniqueInput = Prisma.AtLeast<{
    utc_datetime_ib_local_datetime_ib_entity_attribute?: goleta_operational_dataUtc_datetime_ibLocal_datetime_ibEntityAttributeCompoundUniqueInput
    AND?: goleta_operational_dataWhereInput | goleta_operational_dataWhereInput[]
    OR?: goleta_operational_dataWhereInput[]
    NOT?: goleta_operational_dataWhereInput | goleta_operational_dataWhereInput[]
    utc_datetime_ib?: DateTimeFilter<"goleta_operational_data"> | Date | string
    local_datetime_ib?: DateTimeFilter<"goleta_operational_data"> | Date | string
    entity?: StringFilter<"goleta_operational_data"> | string
    attribute?: StringFilter<"goleta_operational_data"> | string
    value?: FloatNullableFilter<"goleta_operational_data"> | number | null
  }, "utc_datetime_ib_local_datetime_ib_entity_attribute">

  export type goleta_operational_dataOrderByWithAggregationInput = {
    utc_datetime_ib?: SortOrder
    local_datetime_ib?: SortOrder
    entity?: SortOrder
    attribute?: SortOrder
    value?: SortOrderInput | SortOrder
    _count?: goleta_operational_dataCountOrderByAggregateInput
    _avg?: goleta_operational_dataAvgOrderByAggregateInput
    _max?: goleta_operational_dataMaxOrderByAggregateInput
    _min?: goleta_operational_dataMinOrderByAggregateInput
    _sum?: goleta_operational_dataSumOrderByAggregateInput
  }

  export type goleta_operational_dataScalarWhereWithAggregatesInput = {
    AND?: goleta_operational_dataScalarWhereWithAggregatesInput | goleta_operational_dataScalarWhereWithAggregatesInput[]
    OR?: goleta_operational_dataScalarWhereWithAggregatesInput[]
    NOT?: goleta_operational_dataScalarWhereWithAggregatesInput | goleta_operational_dataScalarWhereWithAggregatesInput[]
    utc_datetime_ib?: DateTimeWithAggregatesFilter<"goleta_operational_data"> | Date | string
    local_datetime_ib?: DateTimeWithAggregatesFilter<"goleta_operational_data"> | Date | string
    entity?: StringWithAggregatesFilter<"goleta_operational_data"> | string
    attribute?: StringWithAggregatesFilter<"goleta_operational_data"> | string
    value?: FloatNullableWithAggregatesFilter<"goleta_operational_data"> | number | null
  }

  export type goleta_revenue_metricsWhereInput = {
    AND?: goleta_revenue_metricsWhereInput | goleta_revenue_metricsWhereInput[]
    OR?: goleta_revenue_metricsWhereInput[]
    NOT?: goleta_revenue_metricsWhereInput | goleta_revenue_metricsWhereInput[]
    utc_datetime_ib?: DateTimeFilter<"goleta_revenue_metrics"> | Date | string
    local_datetime_ib?: DateTimeFilter<"goleta_revenue_metrics"> | Date | string
    entity?: StringFilter<"goleta_revenue_metrics"> | string
    attribute?: StringFilter<"goleta_revenue_metrics"> | string
    value?: FloatNullableFilter<"goleta_revenue_metrics"> | number | null
  }

  export type goleta_revenue_metricsOrderByWithRelationInput = {
    utc_datetime_ib?: SortOrder
    local_datetime_ib?: SortOrder
    entity?: SortOrder
    attribute?: SortOrder
    value?: SortOrderInput | SortOrder
  }

  export type goleta_revenue_metricsWhereUniqueInput = Prisma.AtLeast<{
    utc_datetime_ib_local_datetime_ib_entity_attribute?: goleta_revenue_metricsUtc_datetime_ibLocal_datetime_ibEntityAttributeCompoundUniqueInput
    AND?: goleta_revenue_metricsWhereInput | goleta_revenue_metricsWhereInput[]
    OR?: goleta_revenue_metricsWhereInput[]
    NOT?: goleta_revenue_metricsWhereInput | goleta_revenue_metricsWhereInput[]
    utc_datetime_ib?: DateTimeFilter<"goleta_revenue_metrics"> | Date | string
    local_datetime_ib?: DateTimeFilter<"goleta_revenue_metrics"> | Date | string
    entity?: StringFilter<"goleta_revenue_metrics"> | string
    attribute?: StringFilter<"goleta_revenue_metrics"> | string
    value?: FloatNullableFilter<"goleta_revenue_metrics"> | number | null
  }, "utc_datetime_ib_local_datetime_ib_entity_attribute">

  export type goleta_revenue_metricsOrderByWithAggregationInput = {
    utc_datetime_ib?: SortOrder
    local_datetime_ib?: SortOrder
    entity?: SortOrder
    attribute?: SortOrder
    value?: SortOrderInput | SortOrder
    _count?: goleta_revenue_metricsCountOrderByAggregateInput
    _avg?: goleta_revenue_metricsAvgOrderByAggregateInput
    _max?: goleta_revenue_metricsMaxOrderByAggregateInput
    _min?: goleta_revenue_metricsMinOrderByAggregateInput
    _sum?: goleta_revenue_metricsSumOrderByAggregateInput
  }

  export type goleta_revenue_metricsScalarWhereWithAggregatesInput = {
    AND?: goleta_revenue_metricsScalarWhereWithAggregatesInput | goleta_revenue_metricsScalarWhereWithAggregatesInput[]
    OR?: goleta_revenue_metricsScalarWhereWithAggregatesInput[]
    NOT?: goleta_revenue_metricsScalarWhereWithAggregatesInput | goleta_revenue_metricsScalarWhereWithAggregatesInput[]
    utc_datetime_ib?: DateTimeWithAggregatesFilter<"goleta_revenue_metrics"> | Date | string
    local_datetime_ib?: DateTimeWithAggregatesFilter<"goleta_revenue_metrics"> | Date | string
    entity?: StringWithAggregatesFilter<"goleta_revenue_metrics"> | string
    attribute?: StringWithAggregatesFilter<"goleta_revenue_metrics"> | string
    value?: FloatNullableWithAggregatesFilter<"goleta_revenue_metrics"> | number | null
  }

  export type goleta_scheduling_dataWhereInput = {
    AND?: goleta_scheduling_dataWhereInput | goleta_scheduling_dataWhereInput[]
    OR?: goleta_scheduling_dataWhereInput[]
    NOT?: goleta_scheduling_dataWhereInput | goleta_scheduling_dataWhereInput[]
    utc_datetime_ib?: DateTimeFilter<"goleta_scheduling_data"> | Date | string
    local_datetime_ib?: DateTimeFilter<"goleta_scheduling_data"> | Date | string
    entity?: StringFilter<"goleta_scheduling_data"> | string
    attribute?: StringFilter<"goleta_scheduling_data"> | string
    value?: FloatNullableFilter<"goleta_scheduling_data"> | number | null
  }

  export type goleta_scheduling_dataOrderByWithRelationInput = {
    utc_datetime_ib?: SortOrder
    local_datetime_ib?: SortOrder
    entity?: SortOrder
    attribute?: SortOrder
    value?: SortOrderInput | SortOrder
  }

  export type goleta_scheduling_dataWhereUniqueInput = Prisma.AtLeast<{
    utc_datetime_ib_local_datetime_ib_entity_attribute?: goleta_scheduling_dataUtc_datetime_ibLocal_datetime_ibEntityAttributeCompoundUniqueInput
    AND?: goleta_scheduling_dataWhereInput | goleta_scheduling_dataWhereInput[]
    OR?: goleta_scheduling_dataWhereInput[]
    NOT?: goleta_scheduling_dataWhereInput | goleta_scheduling_dataWhereInput[]
    utc_datetime_ib?: DateTimeFilter<"goleta_scheduling_data"> | Date | string
    local_datetime_ib?: DateTimeFilter<"goleta_scheduling_data"> | Date | string
    entity?: StringFilter<"goleta_scheduling_data"> | string
    attribute?: StringFilter<"goleta_scheduling_data"> | string
    value?: FloatNullableFilter<"goleta_scheduling_data"> | number | null
  }, "utc_datetime_ib_local_datetime_ib_entity_attribute">

  export type goleta_scheduling_dataOrderByWithAggregationInput = {
    utc_datetime_ib?: SortOrder
    local_datetime_ib?: SortOrder
    entity?: SortOrder
    attribute?: SortOrder
    value?: SortOrderInput | SortOrder
    _count?: goleta_scheduling_dataCountOrderByAggregateInput
    _avg?: goleta_scheduling_dataAvgOrderByAggregateInput
    _max?: goleta_scheduling_dataMaxOrderByAggregateInput
    _min?: goleta_scheduling_dataMinOrderByAggregateInput
    _sum?: goleta_scheduling_dataSumOrderByAggregateInput
  }

  export type goleta_scheduling_dataScalarWhereWithAggregatesInput = {
    AND?: goleta_scheduling_dataScalarWhereWithAggregatesInput | goleta_scheduling_dataScalarWhereWithAggregatesInput[]
    OR?: goleta_scheduling_dataScalarWhereWithAggregatesInput[]
    NOT?: goleta_scheduling_dataScalarWhereWithAggregatesInput | goleta_scheduling_dataScalarWhereWithAggregatesInput[]
    utc_datetime_ib?: DateTimeWithAggregatesFilter<"goleta_scheduling_data"> | Date | string
    local_datetime_ib?: DateTimeWithAggregatesFilter<"goleta_scheduling_data"> | Date | string
    entity?: StringWithAggregatesFilter<"goleta_scheduling_data"> | string
    attribute?: StringWithAggregatesFilter<"goleta_scheduling_data"> | string
    value?: FloatNullableWithAggregatesFilter<"goleta_scheduling_data"> | number | null
  }

  export type internal_forecastsWhereInput = {
    AND?: internal_forecastsWhereInput | internal_forecastsWhereInput[]
    OR?: internal_forecastsWhereInput[]
    NOT?: internal_forecastsWhereInput | internal_forecastsWhereInput[]
    flowdatestart?: DateTimeNullableFilter<"internal_forecasts"> | Date | string | null
    term?: StringNullableFilter<"internal_forecasts"> | string | null
    markdate?: DateTimeFilter<"internal_forecasts"> | Date | string
    marklocation?: StringFilter<"internal_forecasts"> | string
    markmarket?: StringFilter<"internal_forecasts"> | string
    curvecreator?: StringFilter<"internal_forecasts"> | string
    currentcurve?: BoolFilter<"internal_forecasts"> | boolean
    valuetype?: StringFilter<"internal_forecasts"> | string
    value?: DecimalNullableFilter<"internal_forecasts"> | Decimal | DecimalJsLike | number | string | null
    units?: StringNullableFilter<"internal_forecasts"> | string | null
    marktype?: StringNullableFilter<"internal_forecasts"> | string | null
    marktypedesc?: StringNullableFilter<"internal_forecasts"> | string | null
    gridstorpurpose?: StringNullableFilter<"internal_forecasts"> | string | null
    tablecreationtime?: DateTimeNullableFilter<"internal_forecasts"> | Date | string | null
  }

  export type internal_forecastsOrderByWithRelationInput = {
    flowdatestart?: SortOrderInput | SortOrder
    term?: SortOrderInput | SortOrder
    markdate?: SortOrder
    marklocation?: SortOrder
    markmarket?: SortOrder
    curvecreator?: SortOrder
    currentcurve?: SortOrder
    valuetype?: SortOrder
    value?: SortOrderInput | SortOrder
    units?: SortOrderInput | SortOrder
    marktype?: SortOrderInput | SortOrder
    marktypedesc?: SortOrderInput | SortOrder
    gridstorpurpose?: SortOrderInput | SortOrder
    tablecreationtime?: SortOrderInput | SortOrder
  }

  export type internal_forecastsWhereUniqueInput = Prisma.AtLeast<{
    markdate_marklocation_markmarket_curvecreator_currentcurve_valuetype?: internal_forecastsMarkdateMarklocationMarkmarketCurvecreatorCurrentcurveValuetypeCompoundUniqueInput
    AND?: internal_forecastsWhereInput | internal_forecastsWhereInput[]
    OR?: internal_forecastsWhereInput[]
    NOT?: internal_forecastsWhereInput | internal_forecastsWhereInput[]
    flowdatestart?: DateTimeNullableFilter<"internal_forecasts"> | Date | string | null
    term?: StringNullableFilter<"internal_forecasts"> | string | null
    markdate?: DateTimeFilter<"internal_forecasts"> | Date | string
    marklocation?: StringFilter<"internal_forecasts"> | string
    markmarket?: StringFilter<"internal_forecasts"> | string
    curvecreator?: StringFilter<"internal_forecasts"> | string
    currentcurve?: BoolFilter<"internal_forecasts"> | boolean
    valuetype?: StringFilter<"internal_forecasts"> | string
    value?: DecimalNullableFilter<"internal_forecasts"> | Decimal | DecimalJsLike | number | string | null
    units?: StringNullableFilter<"internal_forecasts"> | string | null
    marktype?: StringNullableFilter<"internal_forecasts"> | string | null
    marktypedesc?: StringNullableFilter<"internal_forecasts"> | string | null
    gridstorpurpose?: StringNullableFilter<"internal_forecasts"> | string | null
    tablecreationtime?: DateTimeNullableFilter<"internal_forecasts"> | Date | string | null
  }, "markdate_marklocation_markmarket_curvecreator_currentcurve_valuetype">

  export type internal_forecastsOrderByWithAggregationInput = {
    flowdatestart?: SortOrderInput | SortOrder
    term?: SortOrderInput | SortOrder
    markdate?: SortOrder
    marklocation?: SortOrder
    markmarket?: SortOrder
    curvecreator?: SortOrder
    currentcurve?: SortOrder
    valuetype?: SortOrder
    value?: SortOrderInput | SortOrder
    units?: SortOrderInput | SortOrder
    marktype?: SortOrderInput | SortOrder
    marktypedesc?: SortOrderInput | SortOrder
    gridstorpurpose?: SortOrderInput | SortOrder
    tablecreationtime?: SortOrderInput | SortOrder
    _count?: internal_forecastsCountOrderByAggregateInput
    _avg?: internal_forecastsAvgOrderByAggregateInput
    _max?: internal_forecastsMaxOrderByAggregateInput
    _min?: internal_forecastsMinOrderByAggregateInput
    _sum?: internal_forecastsSumOrderByAggregateInput
  }

  export type internal_forecastsScalarWhereWithAggregatesInput = {
    AND?: internal_forecastsScalarWhereWithAggregatesInput | internal_forecastsScalarWhereWithAggregatesInput[]
    OR?: internal_forecastsScalarWhereWithAggregatesInput[]
    NOT?: internal_forecastsScalarWhereWithAggregatesInput | internal_forecastsScalarWhereWithAggregatesInput[]
    flowdatestart?: DateTimeNullableWithAggregatesFilter<"internal_forecasts"> | Date | string | null
    term?: StringNullableWithAggregatesFilter<"internal_forecasts"> | string | null
    markdate?: DateTimeWithAggregatesFilter<"internal_forecasts"> | Date | string
    marklocation?: StringWithAggregatesFilter<"internal_forecasts"> | string
    markmarket?: StringWithAggregatesFilter<"internal_forecasts"> | string
    curvecreator?: StringWithAggregatesFilter<"internal_forecasts"> | string
    currentcurve?: BoolWithAggregatesFilter<"internal_forecasts"> | boolean
    valuetype?: StringWithAggregatesFilter<"internal_forecasts"> | string
    value?: DecimalNullableWithAggregatesFilter<"internal_forecasts"> | Decimal | DecimalJsLike | number | string | null
    units?: StringNullableWithAggregatesFilter<"internal_forecasts"> | string | null
    marktype?: StringNullableWithAggregatesFilter<"internal_forecasts"> | string | null
    marktypedesc?: StringNullableWithAggregatesFilter<"internal_forecasts"> | string | null
    gridstorpurpose?: StringNullableWithAggregatesFilter<"internal_forecasts"> | string | null
    tablecreationtime?: DateTimeNullableWithAggregatesFilter<"internal_forecasts"> | Date | string | null
  }

  export type monthly_revenue_forecastsWhereInput = {
    AND?: monthly_revenue_forecastsWhereInput | monthly_revenue_forecastsWhereInput[]
    OR?: monthly_revenue_forecastsWhereInput[]
    NOT?: monthly_revenue_forecastsWhereInput | monthly_revenue_forecastsWhereInput[]
    forecastmonth?: DateTimeFilter<"monthly_revenue_forecasts"> | Date | string
    markdate?: DateTimeFilter<"monthly_revenue_forecasts"> | Date | string
    curvename?: StringFilter<"monthly_revenue_forecasts"> | string
    casetype?: StringFilter<"monthly_revenue_forecasts"> | string
    optimizationtype?: StringFilter<"monthly_revenue_forecasts"> | string
    location?: StringFilter<"monthly_revenue_forecasts"> | string
    pricetype?: StringFilter<"monthly_revenue_forecasts"> | string
    price?: DecimalNullableFilter<"monthly_revenue_forecasts"> | Decimal | DecimalJsLike | number | string | null
    unit?: StringNullableFilter<"monthly_revenue_forecasts"> | string | null
  }

  export type monthly_revenue_forecastsOrderByWithRelationInput = {
    forecastmonth?: SortOrder
    markdate?: SortOrder
    curvename?: SortOrder
    casetype?: SortOrder
    optimizationtype?: SortOrder
    location?: SortOrder
    pricetype?: SortOrder
    price?: SortOrderInput | SortOrder
    unit?: SortOrderInput | SortOrder
  }

  export type monthly_revenue_forecastsWhereUniqueInput = Prisma.AtLeast<{
    forecastmonth_markdate_curvename_casetype_optimizationtype_location_pricetype?: monthly_revenue_forecastsForecastmonthMarkdateCurvenameCasetypeOptimizationtypeLocationPricetypeCompoundUniqueInput
    AND?: monthly_revenue_forecastsWhereInput | monthly_revenue_forecastsWhereInput[]
    OR?: monthly_revenue_forecastsWhereInput[]
    NOT?: monthly_revenue_forecastsWhereInput | monthly_revenue_forecastsWhereInput[]
    forecastmonth?: DateTimeFilter<"monthly_revenue_forecasts"> | Date | string
    markdate?: DateTimeFilter<"monthly_revenue_forecasts"> | Date | string
    curvename?: StringFilter<"monthly_revenue_forecasts"> | string
    casetype?: StringFilter<"monthly_revenue_forecasts"> | string
    optimizationtype?: StringFilter<"monthly_revenue_forecasts"> | string
    location?: StringFilter<"monthly_revenue_forecasts"> | string
    pricetype?: StringFilter<"monthly_revenue_forecasts"> | string
    price?: DecimalNullableFilter<"monthly_revenue_forecasts"> | Decimal | DecimalJsLike | number | string | null
    unit?: StringNullableFilter<"monthly_revenue_forecasts"> | string | null
  }, "forecastmonth_markdate_curvename_casetype_optimizationtype_location_pricetype">

  export type monthly_revenue_forecastsOrderByWithAggregationInput = {
    forecastmonth?: SortOrder
    markdate?: SortOrder
    curvename?: SortOrder
    casetype?: SortOrder
    optimizationtype?: SortOrder
    location?: SortOrder
    pricetype?: SortOrder
    price?: SortOrderInput | SortOrder
    unit?: SortOrderInput | SortOrder
    _count?: monthly_revenue_forecastsCountOrderByAggregateInput
    _avg?: monthly_revenue_forecastsAvgOrderByAggregateInput
    _max?: monthly_revenue_forecastsMaxOrderByAggregateInput
    _min?: monthly_revenue_forecastsMinOrderByAggregateInput
    _sum?: monthly_revenue_forecastsSumOrderByAggregateInput
  }

  export type monthly_revenue_forecastsScalarWhereWithAggregatesInput = {
    AND?: monthly_revenue_forecastsScalarWhereWithAggregatesInput | monthly_revenue_forecastsScalarWhereWithAggregatesInput[]
    OR?: monthly_revenue_forecastsScalarWhereWithAggregatesInput[]
    NOT?: monthly_revenue_forecastsScalarWhereWithAggregatesInput | monthly_revenue_forecastsScalarWhereWithAggregatesInput[]
    forecastmonth?: DateTimeWithAggregatesFilter<"monthly_revenue_forecasts"> | Date | string
    markdate?: DateTimeWithAggregatesFilter<"monthly_revenue_forecasts"> | Date | string
    curvename?: StringWithAggregatesFilter<"monthly_revenue_forecasts"> | string
    casetype?: StringWithAggregatesFilter<"monthly_revenue_forecasts"> | string
    optimizationtype?: StringWithAggregatesFilter<"monthly_revenue_forecasts"> | string
    location?: StringWithAggregatesFilter<"monthly_revenue_forecasts"> | string
    pricetype?: StringWithAggregatesFilter<"monthly_revenue_forecasts"> | string
    price?: DecimalNullableWithAggregatesFilter<"monthly_revenue_forecasts"> | Decimal | DecimalJsLike | number | string | null
    unit?: StringNullableWithAggregatesFilter<"monthly_revenue_forecasts"> | string | null
  }

  export type yes_fundamentalsWhereInput = {
    AND?: yes_fundamentalsWhereInput | yes_fundamentalsWhereInput[]
    OR?: yes_fundamentalsWhereInput[]
    NOT?: yes_fundamentalsWhereInput | yes_fundamentalsWhereInput[]
    utc_datetime_ib?: DateTimeFilter<"yes_fundamentals"> | Date | string
    local_datetime_ib?: DateTimeFilter<"yes_fundamentals"> | Date | string
    entity?: StringFilter<"yes_fundamentals"> | string
    attribute?: StringFilter<"yes_fundamentals"> | string
    value?: FloatNullableFilter<"yes_fundamentals"> | number | null
  }

  export type yes_fundamentalsOrderByWithRelationInput = {
    utc_datetime_ib?: SortOrder
    local_datetime_ib?: SortOrder
    entity?: SortOrder
    attribute?: SortOrder
    value?: SortOrderInput | SortOrder
  }

  export type yes_fundamentalsWhereUniqueInput = Prisma.AtLeast<{
    utc_datetime_ib_local_datetime_ib_entity_attribute?: yes_fundamentalsUtc_datetime_ibLocal_datetime_ibEntityAttributeCompoundUniqueInput
    AND?: yes_fundamentalsWhereInput | yes_fundamentalsWhereInput[]
    OR?: yes_fundamentalsWhereInput[]
    NOT?: yes_fundamentalsWhereInput | yes_fundamentalsWhereInput[]
    utc_datetime_ib?: DateTimeFilter<"yes_fundamentals"> | Date | string
    local_datetime_ib?: DateTimeFilter<"yes_fundamentals"> | Date | string
    entity?: StringFilter<"yes_fundamentals"> | string
    attribute?: StringFilter<"yes_fundamentals"> | string
    value?: FloatNullableFilter<"yes_fundamentals"> | number | null
  }, "utc_datetime_ib_local_datetime_ib_entity_attribute">

  export type yes_fundamentalsOrderByWithAggregationInput = {
    utc_datetime_ib?: SortOrder
    local_datetime_ib?: SortOrder
    entity?: SortOrder
    attribute?: SortOrder
    value?: SortOrderInput | SortOrder
    _count?: yes_fundamentalsCountOrderByAggregateInput
    _avg?: yes_fundamentalsAvgOrderByAggregateInput
    _max?: yes_fundamentalsMaxOrderByAggregateInput
    _min?: yes_fundamentalsMinOrderByAggregateInput
    _sum?: yes_fundamentalsSumOrderByAggregateInput
  }

  export type yes_fundamentalsScalarWhereWithAggregatesInput = {
    AND?: yes_fundamentalsScalarWhereWithAggregatesInput | yes_fundamentalsScalarWhereWithAggregatesInput[]
    OR?: yes_fundamentalsScalarWhereWithAggregatesInput[]
    NOT?: yes_fundamentalsScalarWhereWithAggregatesInput | yes_fundamentalsScalarWhereWithAggregatesInput[]
    utc_datetime_ib?: DateTimeWithAggregatesFilter<"yes_fundamentals"> | Date | string
    local_datetime_ib?: DateTimeWithAggregatesFilter<"yes_fundamentals"> | Date | string
    entity?: StringWithAggregatesFilter<"yes_fundamentals"> | string
    attribute?: StringWithAggregatesFilter<"yes_fundamentals"> | string
    value?: FloatNullableWithAggregatesFilter<"yes_fundamentals"> | number | null
  }

  export type yes_idsWhereInput = {
    AND?: yes_idsWhereInput | yes_idsWhereInput[]
    OR?: yes_idsWhereInput[]
    NOT?: yes_idsWhereInput | yes_idsWhereInput[]
    node_name?: StringNullableFilter<"yes_ids"> | string | null
    object_id?: StringFilter<"yes_ids"> | string
    iso?: StringNullableFilter<"yes_ids"> | string | null
    tz?: StringNullableFilter<"yes_ids"> | string | null
  }

  export type yes_idsOrderByWithRelationInput = {
    node_name?: SortOrderInput | SortOrder
    object_id?: SortOrder
    iso?: SortOrderInput | SortOrder
    tz?: SortOrderInput | SortOrder
  }

  export type yes_idsWhereUniqueInput = Prisma.AtLeast<{
    object_id?: string
    AND?: yes_idsWhereInput | yes_idsWhereInput[]
    OR?: yes_idsWhereInput[]
    NOT?: yes_idsWhereInput | yes_idsWhereInput[]
    node_name?: StringNullableFilter<"yes_ids"> | string | null
    iso?: StringNullableFilter<"yes_ids"> | string | null
    tz?: StringNullableFilter<"yes_ids"> | string | null
  }, "object_id">

  export type yes_idsOrderByWithAggregationInput = {
    node_name?: SortOrderInput | SortOrder
    object_id?: SortOrder
    iso?: SortOrderInput | SortOrder
    tz?: SortOrderInput | SortOrder
    _count?: yes_idsCountOrderByAggregateInput
    _max?: yes_idsMaxOrderByAggregateInput
    _min?: yes_idsMinOrderByAggregateInput
  }

  export type yes_idsScalarWhereWithAggregatesInput = {
    AND?: yes_idsScalarWhereWithAggregatesInput | yes_idsScalarWhereWithAggregatesInput[]
    OR?: yes_idsScalarWhereWithAggregatesInput[]
    NOT?: yes_idsScalarWhereWithAggregatesInput | yes_idsScalarWhereWithAggregatesInput[]
    node_name?: StringNullableWithAggregatesFilter<"yes_ids"> | string | null
    object_id?: StringWithAggregatesFilter<"yes_ids"> | string
    iso?: StringNullableWithAggregatesFilter<"yes_ids"> | string | null
    tz?: StringNullableWithAggregatesFilter<"yes_ids"> | string | null
  }

  export type caiso_bess_fleet_dataCreateInput = {
    utc_datetime_ib: Date | string
    local_datetime_ib: Date | string
    entity: string
    attribute: string
    value?: Decimal | DecimalJsLike | number | string | null
  }

  export type caiso_bess_fleet_dataUncheckedCreateInput = {
    utc_datetime_ib: Date | string
    local_datetime_ib: Date | string
    entity: string
    attribute: string
    value?: Decimal | DecimalJsLike | number | string | null
  }

  export type caiso_bess_fleet_dataUpdateInput = {
    utc_datetime_ib?: DateTimeFieldUpdateOperationsInput | Date | string
    local_datetime_ib?: DateTimeFieldUpdateOperationsInput | Date | string
    entity?: StringFieldUpdateOperationsInput | string
    attribute?: StringFieldUpdateOperationsInput | string
    value?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type caiso_bess_fleet_dataUncheckedUpdateInput = {
    utc_datetime_ib?: DateTimeFieldUpdateOperationsInput | Date | string
    local_datetime_ib?: DateTimeFieldUpdateOperationsInput | Date | string
    entity?: StringFieldUpdateOperationsInput | string
    attribute?: StringFieldUpdateOperationsInput | string
    value?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type caiso_bess_fleet_dataCreateManyInput = {
    utc_datetime_ib: Date | string
    local_datetime_ib: Date | string
    entity: string
    attribute: string
    value?: Decimal | DecimalJsLike | number | string | null
  }

  export type caiso_bess_fleet_dataUpdateManyMutationInput = {
    utc_datetime_ib?: DateTimeFieldUpdateOperationsInput | Date | string
    local_datetime_ib?: DateTimeFieldUpdateOperationsInput | Date | string
    entity?: StringFieldUpdateOperationsInput | string
    attribute?: StringFieldUpdateOperationsInput | string
    value?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type caiso_bess_fleet_dataUncheckedUpdateManyInput = {
    utc_datetime_ib?: DateTimeFieldUpdateOperationsInput | Date | string
    local_datetime_ib?: DateTimeFieldUpdateOperationsInput | Date | string
    entity?: StringFieldUpdateOperationsInput | string
    attribute?: StringFieldUpdateOperationsInput | string
    value?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type eox_forwardsCreateInput = {
    curve_date: Date | string
    iso: string
    market: string
    peak_hour: string
    contract_begin: Date | string
    mid?: Decimal | DecimalJsLike | number | string | null
    bid?: Decimal | DecimalJsLike | number | string | null
    ask?: Decimal | DecimalJsLike | number | string | null
    atc?: Decimal | DecimalJsLike | number | string | null
    hr?: Decimal | DecimalJsLike | number | string | null
  }

  export type eox_forwardsUncheckedCreateInput = {
    curve_date: Date | string
    iso: string
    market: string
    peak_hour: string
    contract_begin: Date | string
    mid?: Decimal | DecimalJsLike | number | string | null
    bid?: Decimal | DecimalJsLike | number | string | null
    ask?: Decimal | DecimalJsLike | number | string | null
    atc?: Decimal | DecimalJsLike | number | string | null
    hr?: Decimal | DecimalJsLike | number | string | null
  }

  export type eox_forwardsUpdateInput = {
    curve_date?: DateTimeFieldUpdateOperationsInput | Date | string
    iso?: StringFieldUpdateOperationsInput | string
    market?: StringFieldUpdateOperationsInput | string
    peak_hour?: StringFieldUpdateOperationsInput | string
    contract_begin?: DateTimeFieldUpdateOperationsInput | Date | string
    mid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ask?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    atc?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    hr?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type eox_forwardsUncheckedUpdateInput = {
    curve_date?: DateTimeFieldUpdateOperationsInput | Date | string
    iso?: StringFieldUpdateOperationsInput | string
    market?: StringFieldUpdateOperationsInput | string
    peak_hour?: StringFieldUpdateOperationsInput | string
    contract_begin?: DateTimeFieldUpdateOperationsInput | Date | string
    mid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ask?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    atc?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    hr?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type eox_forwardsCreateManyInput = {
    curve_date: Date | string
    iso: string
    market: string
    peak_hour: string
    contract_begin: Date | string
    mid?: Decimal | DecimalJsLike | number | string | null
    bid?: Decimal | DecimalJsLike | number | string | null
    ask?: Decimal | DecimalJsLike | number | string | null
    atc?: Decimal | DecimalJsLike | number | string | null
    hr?: Decimal | DecimalJsLike | number | string | null
  }

  export type eox_forwardsUpdateManyMutationInput = {
    curve_date?: DateTimeFieldUpdateOperationsInput | Date | string
    iso?: StringFieldUpdateOperationsInput | string
    market?: StringFieldUpdateOperationsInput | string
    peak_hour?: StringFieldUpdateOperationsInput | string
    contract_begin?: DateTimeFieldUpdateOperationsInput | Date | string
    mid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ask?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    atc?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    hr?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type eox_forwardsUncheckedUpdateManyInput = {
    curve_date?: DateTimeFieldUpdateOperationsInput | Date | string
    iso?: StringFieldUpdateOperationsInput | string
    market?: StringFieldUpdateOperationsInput | string
    peak_hour?: StringFieldUpdateOperationsInput | string
    contract_begin?: DateTimeFieldUpdateOperationsInput | Date | string
    mid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bid?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ask?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    atc?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    hr?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type eox_tagsCreateInput = {
    iso: string
    market: string
    peak_hour: string
  }

  export type eox_tagsUncheckedCreateInput = {
    iso: string
    market: string
    peak_hour: string
  }

  export type eox_tagsUpdateInput = {
    iso?: StringFieldUpdateOperationsInput | string
    market?: StringFieldUpdateOperationsInput | string
    peak_hour?: StringFieldUpdateOperationsInput | string
  }

  export type eox_tagsUncheckedUpdateInput = {
    iso?: StringFieldUpdateOperationsInput | string
    market?: StringFieldUpdateOperationsInput | string
    peak_hour?: StringFieldUpdateOperationsInput | string
  }

  export type eox_tagsCreateManyInput = {
    iso: string
    market: string
    peak_hour: string
  }

  export type eox_tagsUpdateManyMutationInput = {
    iso?: StringFieldUpdateOperationsInput | string
    market?: StringFieldUpdateOperationsInput | string
    peak_hour?: StringFieldUpdateOperationsInput | string
  }

  export type eox_tagsUncheckedUpdateManyInput = {
    iso?: StringFieldUpdateOperationsInput | string
    market?: StringFieldUpdateOperationsInput | string
    peak_hour?: StringFieldUpdateOperationsInput | string
  }

  export type goleta_ascend_dataCreateInput = {
    utc_datetime_ib: Date | string
    local_datetime_ib: Date | string
    strategy: string
    attribute: string
    value?: number | null
  }

  export type goleta_ascend_dataUncheckedCreateInput = {
    utc_datetime_ib: Date | string
    local_datetime_ib: Date | string
    strategy: string
    attribute: string
    value?: number | null
  }

  export type goleta_ascend_dataUpdateInput = {
    utc_datetime_ib?: DateTimeFieldUpdateOperationsInput | Date | string
    local_datetime_ib?: DateTimeFieldUpdateOperationsInput | Date | string
    strategy?: StringFieldUpdateOperationsInput | string
    attribute?: StringFieldUpdateOperationsInput | string
    value?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type goleta_ascend_dataUncheckedUpdateInput = {
    utc_datetime_ib?: DateTimeFieldUpdateOperationsInput | Date | string
    local_datetime_ib?: DateTimeFieldUpdateOperationsInput | Date | string
    strategy?: StringFieldUpdateOperationsInput | string
    attribute?: StringFieldUpdateOperationsInput | string
    value?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type goleta_ascend_dataCreateManyInput = {
    utc_datetime_ib: Date | string
    local_datetime_ib: Date | string
    strategy: string
    attribute: string
    value?: number | null
  }

  export type goleta_ascend_dataUpdateManyMutationInput = {
    utc_datetime_ib?: DateTimeFieldUpdateOperationsInput | Date | string
    local_datetime_ib?: DateTimeFieldUpdateOperationsInput | Date | string
    strategy?: StringFieldUpdateOperationsInput | string
    attribute?: StringFieldUpdateOperationsInput | string
    value?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type goleta_ascend_dataUncheckedUpdateManyInput = {
    utc_datetime_ib?: DateTimeFieldUpdateOperationsInput | Date | string
    local_datetime_ib?: DateTimeFieldUpdateOperationsInput | Date | string
    strategy?: StringFieldUpdateOperationsInput | string
    attribute?: StringFieldUpdateOperationsInput | string
    value?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type goleta_budgetsCreateInput = {
    utc_datetime_ib: Date | string
    local_datetime_ib: Date | string
    entity: string
    attribute: string
    value?: Decimal | DecimalJsLike | number | string | null
  }

  export type goleta_budgetsUncheckedCreateInput = {
    utc_datetime_ib: Date | string
    local_datetime_ib: Date | string
    entity: string
    attribute: string
    value?: Decimal | DecimalJsLike | number | string | null
  }

  export type goleta_budgetsUpdateInput = {
    utc_datetime_ib?: DateTimeFieldUpdateOperationsInput | Date | string
    local_datetime_ib?: DateTimeFieldUpdateOperationsInput | Date | string
    entity?: StringFieldUpdateOperationsInput | string
    attribute?: StringFieldUpdateOperationsInput | string
    value?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type goleta_budgetsUncheckedUpdateInput = {
    utc_datetime_ib?: DateTimeFieldUpdateOperationsInput | Date | string
    local_datetime_ib?: DateTimeFieldUpdateOperationsInput | Date | string
    entity?: StringFieldUpdateOperationsInput | string
    attribute?: StringFieldUpdateOperationsInput | string
    value?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type goleta_budgetsCreateManyInput = {
    utc_datetime_ib: Date | string
    local_datetime_ib: Date | string
    entity: string
    attribute: string
    value?: Decimal | DecimalJsLike | number | string | null
  }

  export type goleta_budgetsUpdateManyMutationInput = {
    utc_datetime_ib?: DateTimeFieldUpdateOperationsInput | Date | string
    local_datetime_ib?: DateTimeFieldUpdateOperationsInput | Date | string
    entity?: StringFieldUpdateOperationsInput | string
    attribute?: StringFieldUpdateOperationsInput | string
    value?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type goleta_budgetsUncheckedUpdateManyInput = {
    utc_datetime_ib?: DateTimeFieldUpdateOperationsInput | Date | string
    local_datetime_ib?: DateTimeFieldUpdateOperationsInput | Date | string
    entity?: StringFieldUpdateOperationsInput | string
    attribute?: StringFieldUpdateOperationsInput | string
    value?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type goleta_charging_constraintsCreateInput = {
    year: number
    month: number
    hour: number
    value?: Decimal | DecimalJsLike | number | string | null
  }

  export type goleta_charging_constraintsUncheckedCreateInput = {
    year: number
    month: number
    hour: number
    value?: Decimal | DecimalJsLike | number | string | null
  }

  export type goleta_charging_constraintsUpdateInput = {
    year?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    hour?: IntFieldUpdateOperationsInput | number
    value?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type goleta_charging_constraintsUncheckedUpdateInput = {
    year?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    hour?: IntFieldUpdateOperationsInput | number
    value?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type goleta_charging_constraintsCreateManyInput = {
    year: number
    month: number
    hour: number
    value?: Decimal | DecimalJsLike | number | string | null
  }

  export type goleta_charging_constraintsUpdateManyMutationInput = {
    year?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    hour?: IntFieldUpdateOperationsInput | number
    value?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type goleta_charging_constraintsUncheckedUpdateManyInput = {
    year?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    hour?: IntFieldUpdateOperationsInput | number
    value?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type goleta_operational_dataCreateInput = {
    utc_datetime_ib: Date | string
    local_datetime_ib: Date | string
    entity: string
    attribute: string
    value?: number | null
  }

  export type goleta_operational_dataUncheckedCreateInput = {
    utc_datetime_ib: Date | string
    local_datetime_ib: Date | string
    entity: string
    attribute: string
    value?: number | null
  }

  export type goleta_operational_dataUpdateInput = {
    utc_datetime_ib?: DateTimeFieldUpdateOperationsInput | Date | string
    local_datetime_ib?: DateTimeFieldUpdateOperationsInput | Date | string
    entity?: StringFieldUpdateOperationsInput | string
    attribute?: StringFieldUpdateOperationsInput | string
    value?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type goleta_operational_dataUncheckedUpdateInput = {
    utc_datetime_ib?: DateTimeFieldUpdateOperationsInput | Date | string
    local_datetime_ib?: DateTimeFieldUpdateOperationsInput | Date | string
    entity?: StringFieldUpdateOperationsInput | string
    attribute?: StringFieldUpdateOperationsInput | string
    value?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type goleta_operational_dataCreateManyInput = {
    utc_datetime_ib: Date | string
    local_datetime_ib: Date | string
    entity: string
    attribute: string
    value?: number | null
  }

  export type goleta_operational_dataUpdateManyMutationInput = {
    utc_datetime_ib?: DateTimeFieldUpdateOperationsInput | Date | string
    local_datetime_ib?: DateTimeFieldUpdateOperationsInput | Date | string
    entity?: StringFieldUpdateOperationsInput | string
    attribute?: StringFieldUpdateOperationsInput | string
    value?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type goleta_operational_dataUncheckedUpdateManyInput = {
    utc_datetime_ib?: DateTimeFieldUpdateOperationsInput | Date | string
    local_datetime_ib?: DateTimeFieldUpdateOperationsInput | Date | string
    entity?: StringFieldUpdateOperationsInput | string
    attribute?: StringFieldUpdateOperationsInput | string
    value?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type goleta_revenue_metricsCreateInput = {
    utc_datetime_ib: Date | string
    local_datetime_ib: Date | string
    entity: string
    attribute: string
    value?: number | null
  }

  export type goleta_revenue_metricsUncheckedCreateInput = {
    utc_datetime_ib: Date | string
    local_datetime_ib: Date | string
    entity: string
    attribute: string
    value?: number | null
  }

  export type goleta_revenue_metricsUpdateInput = {
    utc_datetime_ib?: DateTimeFieldUpdateOperationsInput | Date | string
    local_datetime_ib?: DateTimeFieldUpdateOperationsInput | Date | string
    entity?: StringFieldUpdateOperationsInput | string
    attribute?: StringFieldUpdateOperationsInput | string
    value?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type goleta_revenue_metricsUncheckedUpdateInput = {
    utc_datetime_ib?: DateTimeFieldUpdateOperationsInput | Date | string
    local_datetime_ib?: DateTimeFieldUpdateOperationsInput | Date | string
    entity?: StringFieldUpdateOperationsInput | string
    attribute?: StringFieldUpdateOperationsInput | string
    value?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type goleta_revenue_metricsCreateManyInput = {
    utc_datetime_ib: Date | string
    local_datetime_ib: Date | string
    entity: string
    attribute: string
    value?: number | null
  }

  export type goleta_revenue_metricsUpdateManyMutationInput = {
    utc_datetime_ib?: DateTimeFieldUpdateOperationsInput | Date | string
    local_datetime_ib?: DateTimeFieldUpdateOperationsInput | Date | string
    entity?: StringFieldUpdateOperationsInput | string
    attribute?: StringFieldUpdateOperationsInput | string
    value?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type goleta_revenue_metricsUncheckedUpdateManyInput = {
    utc_datetime_ib?: DateTimeFieldUpdateOperationsInput | Date | string
    local_datetime_ib?: DateTimeFieldUpdateOperationsInput | Date | string
    entity?: StringFieldUpdateOperationsInput | string
    attribute?: StringFieldUpdateOperationsInput | string
    value?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type goleta_scheduling_dataCreateInput = {
    utc_datetime_ib: Date | string
    local_datetime_ib: Date | string
    entity: string
    attribute: string
    value?: number | null
  }

  export type goleta_scheduling_dataUncheckedCreateInput = {
    utc_datetime_ib: Date | string
    local_datetime_ib: Date | string
    entity: string
    attribute: string
    value?: number | null
  }

  export type goleta_scheduling_dataUpdateInput = {
    utc_datetime_ib?: DateTimeFieldUpdateOperationsInput | Date | string
    local_datetime_ib?: DateTimeFieldUpdateOperationsInput | Date | string
    entity?: StringFieldUpdateOperationsInput | string
    attribute?: StringFieldUpdateOperationsInput | string
    value?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type goleta_scheduling_dataUncheckedUpdateInput = {
    utc_datetime_ib?: DateTimeFieldUpdateOperationsInput | Date | string
    local_datetime_ib?: DateTimeFieldUpdateOperationsInput | Date | string
    entity?: StringFieldUpdateOperationsInput | string
    attribute?: StringFieldUpdateOperationsInput | string
    value?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type goleta_scheduling_dataCreateManyInput = {
    utc_datetime_ib: Date | string
    local_datetime_ib: Date | string
    entity: string
    attribute: string
    value?: number | null
  }

  export type goleta_scheduling_dataUpdateManyMutationInput = {
    utc_datetime_ib?: DateTimeFieldUpdateOperationsInput | Date | string
    local_datetime_ib?: DateTimeFieldUpdateOperationsInput | Date | string
    entity?: StringFieldUpdateOperationsInput | string
    attribute?: StringFieldUpdateOperationsInput | string
    value?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type goleta_scheduling_dataUncheckedUpdateManyInput = {
    utc_datetime_ib?: DateTimeFieldUpdateOperationsInput | Date | string
    local_datetime_ib?: DateTimeFieldUpdateOperationsInput | Date | string
    entity?: StringFieldUpdateOperationsInput | string
    attribute?: StringFieldUpdateOperationsInput | string
    value?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type internal_forecastsCreateInput = {
    flowdatestart?: Date | string | null
    term?: string | null
    markdate: Date | string
    marklocation: string
    markmarket: string
    curvecreator: string
    currentcurve: boolean
    valuetype: string
    value?: Decimal | DecimalJsLike | number | string | null
    units?: string | null
    marktype?: string | null
    marktypedesc?: string | null
    gridstorpurpose?: string | null
    tablecreationtime?: Date | string | null
  }

  export type internal_forecastsUncheckedCreateInput = {
    flowdatestart?: Date | string | null
    term?: string | null
    markdate: Date | string
    marklocation: string
    markmarket: string
    curvecreator: string
    currentcurve: boolean
    valuetype: string
    value?: Decimal | DecimalJsLike | number | string | null
    units?: string | null
    marktype?: string | null
    marktypedesc?: string | null
    gridstorpurpose?: string | null
    tablecreationtime?: Date | string | null
  }

  export type internal_forecastsUpdateInput = {
    flowdatestart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    term?: NullableStringFieldUpdateOperationsInput | string | null
    markdate?: DateTimeFieldUpdateOperationsInput | Date | string
    marklocation?: StringFieldUpdateOperationsInput | string
    markmarket?: StringFieldUpdateOperationsInput | string
    curvecreator?: StringFieldUpdateOperationsInput | string
    currentcurve?: BoolFieldUpdateOperationsInput | boolean
    valuetype?: StringFieldUpdateOperationsInput | string
    value?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    units?: NullableStringFieldUpdateOperationsInput | string | null
    marktype?: NullableStringFieldUpdateOperationsInput | string | null
    marktypedesc?: NullableStringFieldUpdateOperationsInput | string | null
    gridstorpurpose?: NullableStringFieldUpdateOperationsInput | string | null
    tablecreationtime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type internal_forecastsUncheckedUpdateInput = {
    flowdatestart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    term?: NullableStringFieldUpdateOperationsInput | string | null
    markdate?: DateTimeFieldUpdateOperationsInput | Date | string
    marklocation?: StringFieldUpdateOperationsInput | string
    markmarket?: StringFieldUpdateOperationsInput | string
    curvecreator?: StringFieldUpdateOperationsInput | string
    currentcurve?: BoolFieldUpdateOperationsInput | boolean
    valuetype?: StringFieldUpdateOperationsInput | string
    value?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    units?: NullableStringFieldUpdateOperationsInput | string | null
    marktype?: NullableStringFieldUpdateOperationsInput | string | null
    marktypedesc?: NullableStringFieldUpdateOperationsInput | string | null
    gridstorpurpose?: NullableStringFieldUpdateOperationsInput | string | null
    tablecreationtime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type internal_forecastsCreateManyInput = {
    flowdatestart?: Date | string | null
    term?: string | null
    markdate: Date | string
    marklocation: string
    markmarket: string
    curvecreator: string
    currentcurve: boolean
    valuetype: string
    value?: Decimal | DecimalJsLike | number | string | null
    units?: string | null
    marktype?: string | null
    marktypedesc?: string | null
    gridstorpurpose?: string | null
    tablecreationtime?: Date | string | null
  }

  export type internal_forecastsUpdateManyMutationInput = {
    flowdatestart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    term?: NullableStringFieldUpdateOperationsInput | string | null
    markdate?: DateTimeFieldUpdateOperationsInput | Date | string
    marklocation?: StringFieldUpdateOperationsInput | string
    markmarket?: StringFieldUpdateOperationsInput | string
    curvecreator?: StringFieldUpdateOperationsInput | string
    currentcurve?: BoolFieldUpdateOperationsInput | boolean
    valuetype?: StringFieldUpdateOperationsInput | string
    value?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    units?: NullableStringFieldUpdateOperationsInput | string | null
    marktype?: NullableStringFieldUpdateOperationsInput | string | null
    marktypedesc?: NullableStringFieldUpdateOperationsInput | string | null
    gridstorpurpose?: NullableStringFieldUpdateOperationsInput | string | null
    tablecreationtime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type internal_forecastsUncheckedUpdateManyInput = {
    flowdatestart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    term?: NullableStringFieldUpdateOperationsInput | string | null
    markdate?: DateTimeFieldUpdateOperationsInput | Date | string
    marklocation?: StringFieldUpdateOperationsInput | string
    markmarket?: StringFieldUpdateOperationsInput | string
    curvecreator?: StringFieldUpdateOperationsInput | string
    currentcurve?: BoolFieldUpdateOperationsInput | boolean
    valuetype?: StringFieldUpdateOperationsInput | string
    value?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    units?: NullableStringFieldUpdateOperationsInput | string | null
    marktype?: NullableStringFieldUpdateOperationsInput | string | null
    marktypedesc?: NullableStringFieldUpdateOperationsInput | string | null
    gridstorpurpose?: NullableStringFieldUpdateOperationsInput | string | null
    tablecreationtime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type monthly_revenue_forecastsCreateInput = {
    forecastmonth: Date | string
    markdate: Date | string
    curvename: string
    casetype: string
    optimizationtype: string
    location: string
    pricetype: string
    price?: Decimal | DecimalJsLike | number | string | null
    unit?: string | null
  }

  export type monthly_revenue_forecastsUncheckedCreateInput = {
    forecastmonth: Date | string
    markdate: Date | string
    curvename: string
    casetype: string
    optimizationtype: string
    location: string
    pricetype: string
    price?: Decimal | DecimalJsLike | number | string | null
    unit?: string | null
  }

  export type monthly_revenue_forecastsUpdateInput = {
    forecastmonth?: DateTimeFieldUpdateOperationsInput | Date | string
    markdate?: DateTimeFieldUpdateOperationsInput | Date | string
    curvename?: StringFieldUpdateOperationsInput | string
    casetype?: StringFieldUpdateOperationsInput | string
    optimizationtype?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    pricetype?: StringFieldUpdateOperationsInput | string
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    unit?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type monthly_revenue_forecastsUncheckedUpdateInput = {
    forecastmonth?: DateTimeFieldUpdateOperationsInput | Date | string
    markdate?: DateTimeFieldUpdateOperationsInput | Date | string
    curvename?: StringFieldUpdateOperationsInput | string
    casetype?: StringFieldUpdateOperationsInput | string
    optimizationtype?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    pricetype?: StringFieldUpdateOperationsInput | string
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    unit?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type monthly_revenue_forecastsCreateManyInput = {
    forecastmonth: Date | string
    markdate: Date | string
    curvename: string
    casetype: string
    optimizationtype: string
    location: string
    pricetype: string
    price?: Decimal | DecimalJsLike | number | string | null
    unit?: string | null
  }

  export type monthly_revenue_forecastsUpdateManyMutationInput = {
    forecastmonth?: DateTimeFieldUpdateOperationsInput | Date | string
    markdate?: DateTimeFieldUpdateOperationsInput | Date | string
    curvename?: StringFieldUpdateOperationsInput | string
    casetype?: StringFieldUpdateOperationsInput | string
    optimizationtype?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    pricetype?: StringFieldUpdateOperationsInput | string
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    unit?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type monthly_revenue_forecastsUncheckedUpdateManyInput = {
    forecastmonth?: DateTimeFieldUpdateOperationsInput | Date | string
    markdate?: DateTimeFieldUpdateOperationsInput | Date | string
    curvename?: StringFieldUpdateOperationsInput | string
    casetype?: StringFieldUpdateOperationsInput | string
    optimizationtype?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    pricetype?: StringFieldUpdateOperationsInput | string
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    unit?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type yes_fundamentalsCreateInput = {
    utc_datetime_ib: Date | string
    local_datetime_ib: Date | string
    entity: string
    attribute: string
    value?: number | null
  }

  export type yes_fundamentalsUncheckedCreateInput = {
    utc_datetime_ib: Date | string
    local_datetime_ib: Date | string
    entity: string
    attribute: string
    value?: number | null
  }

  export type yes_fundamentalsUpdateInput = {
    utc_datetime_ib?: DateTimeFieldUpdateOperationsInput | Date | string
    local_datetime_ib?: DateTimeFieldUpdateOperationsInput | Date | string
    entity?: StringFieldUpdateOperationsInput | string
    attribute?: StringFieldUpdateOperationsInput | string
    value?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type yes_fundamentalsUncheckedUpdateInput = {
    utc_datetime_ib?: DateTimeFieldUpdateOperationsInput | Date | string
    local_datetime_ib?: DateTimeFieldUpdateOperationsInput | Date | string
    entity?: StringFieldUpdateOperationsInput | string
    attribute?: StringFieldUpdateOperationsInput | string
    value?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type yes_fundamentalsCreateManyInput = {
    utc_datetime_ib: Date | string
    local_datetime_ib: Date | string
    entity: string
    attribute: string
    value?: number | null
  }

  export type yes_fundamentalsUpdateManyMutationInput = {
    utc_datetime_ib?: DateTimeFieldUpdateOperationsInput | Date | string
    local_datetime_ib?: DateTimeFieldUpdateOperationsInput | Date | string
    entity?: StringFieldUpdateOperationsInput | string
    attribute?: StringFieldUpdateOperationsInput | string
    value?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type yes_fundamentalsUncheckedUpdateManyInput = {
    utc_datetime_ib?: DateTimeFieldUpdateOperationsInput | Date | string
    local_datetime_ib?: DateTimeFieldUpdateOperationsInput | Date | string
    entity?: StringFieldUpdateOperationsInput | string
    attribute?: StringFieldUpdateOperationsInput | string
    value?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type yes_idsCreateInput = {
    node_name?: string | null
    object_id: string
    iso?: string | null
    tz?: string | null
  }

  export type yes_idsUncheckedCreateInput = {
    node_name?: string | null
    object_id: string
    iso?: string | null
    tz?: string | null
  }

  export type yes_idsUpdateInput = {
    node_name?: NullableStringFieldUpdateOperationsInput | string | null
    object_id?: StringFieldUpdateOperationsInput | string
    iso?: NullableStringFieldUpdateOperationsInput | string | null
    tz?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type yes_idsUncheckedUpdateInput = {
    node_name?: NullableStringFieldUpdateOperationsInput | string | null
    object_id?: StringFieldUpdateOperationsInput | string
    iso?: NullableStringFieldUpdateOperationsInput | string | null
    tz?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type yes_idsCreateManyInput = {
    node_name?: string | null
    object_id: string
    iso?: string | null
    tz?: string | null
  }

  export type yes_idsUpdateManyMutationInput = {
    node_name?: NullableStringFieldUpdateOperationsInput | string | null
    object_id?: StringFieldUpdateOperationsInput | string
    iso?: NullableStringFieldUpdateOperationsInput | string | null
    tz?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type yes_idsUncheckedUpdateManyInput = {
    node_name?: NullableStringFieldUpdateOperationsInput | string | null
    object_id?: StringFieldUpdateOperationsInput | string
    iso?: NullableStringFieldUpdateOperationsInput | string | null
    tz?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type caiso_bess_fleet_dataUtc_datetime_ibLocal_datetime_ibEntityAttributeCompoundUniqueInput = {
    utc_datetime_ib: Date | string
    local_datetime_ib: Date | string
    entity: string
    attribute: string
  }

  export type caiso_bess_fleet_dataCountOrderByAggregateInput = {
    utc_datetime_ib?: SortOrder
    local_datetime_ib?: SortOrder
    entity?: SortOrder
    attribute?: SortOrder
    value?: SortOrder
  }

  export type caiso_bess_fleet_dataAvgOrderByAggregateInput = {
    value?: SortOrder
  }

  export type caiso_bess_fleet_dataMaxOrderByAggregateInput = {
    utc_datetime_ib?: SortOrder
    local_datetime_ib?: SortOrder
    entity?: SortOrder
    attribute?: SortOrder
    value?: SortOrder
  }

  export type caiso_bess_fleet_dataMinOrderByAggregateInput = {
    utc_datetime_ib?: SortOrder
    local_datetime_ib?: SortOrder
    entity?: SortOrder
    attribute?: SortOrder
    value?: SortOrder
  }

  export type caiso_bess_fleet_dataSumOrderByAggregateInput = {
    value?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type eox_forwardsCurve_dateIsoMarketPeak_hourContract_beginCompoundUniqueInput = {
    curve_date: Date | string
    iso: string
    market: string
    peak_hour: string
    contract_begin: Date | string
  }

  export type eox_forwardsCountOrderByAggregateInput = {
    curve_date?: SortOrder
    iso?: SortOrder
    market?: SortOrder
    peak_hour?: SortOrder
    contract_begin?: SortOrder
    mid?: SortOrder
    bid?: SortOrder
    ask?: SortOrder
    atc?: SortOrder
    hr?: SortOrder
  }

  export type eox_forwardsAvgOrderByAggregateInput = {
    mid?: SortOrder
    bid?: SortOrder
    ask?: SortOrder
    atc?: SortOrder
    hr?: SortOrder
  }

  export type eox_forwardsMaxOrderByAggregateInput = {
    curve_date?: SortOrder
    iso?: SortOrder
    market?: SortOrder
    peak_hour?: SortOrder
    contract_begin?: SortOrder
    mid?: SortOrder
    bid?: SortOrder
    ask?: SortOrder
    atc?: SortOrder
    hr?: SortOrder
  }

  export type eox_forwardsMinOrderByAggregateInput = {
    curve_date?: SortOrder
    iso?: SortOrder
    market?: SortOrder
    peak_hour?: SortOrder
    contract_begin?: SortOrder
    mid?: SortOrder
    bid?: SortOrder
    ask?: SortOrder
    atc?: SortOrder
    hr?: SortOrder
  }

  export type eox_forwardsSumOrderByAggregateInput = {
    mid?: SortOrder
    bid?: SortOrder
    ask?: SortOrder
    atc?: SortOrder
    hr?: SortOrder
  }

  export type eox_tagsIsoMarketPeak_hourCompoundUniqueInput = {
    iso: string
    market: string
    peak_hour: string
  }

  export type eox_tagsCountOrderByAggregateInput = {
    iso?: SortOrder
    market?: SortOrder
    peak_hour?: SortOrder
  }

  export type eox_tagsMaxOrderByAggregateInput = {
    iso?: SortOrder
    market?: SortOrder
    peak_hour?: SortOrder
  }

  export type eox_tagsMinOrderByAggregateInput = {
    iso?: SortOrder
    market?: SortOrder
    peak_hour?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type goleta_ascend_dataUtc_datetime_ibLocal_datetime_ibStrategyAttributeCompoundUniqueInput = {
    utc_datetime_ib: Date | string
    local_datetime_ib: Date | string
    strategy: string
    attribute: string
  }

  export type goleta_ascend_dataCountOrderByAggregateInput = {
    utc_datetime_ib?: SortOrder
    local_datetime_ib?: SortOrder
    strategy?: SortOrder
    attribute?: SortOrder
    value?: SortOrder
  }

  export type goleta_ascend_dataAvgOrderByAggregateInput = {
    value?: SortOrder
  }

  export type goleta_ascend_dataMaxOrderByAggregateInput = {
    utc_datetime_ib?: SortOrder
    local_datetime_ib?: SortOrder
    strategy?: SortOrder
    attribute?: SortOrder
    value?: SortOrder
  }

  export type goleta_ascend_dataMinOrderByAggregateInput = {
    utc_datetime_ib?: SortOrder
    local_datetime_ib?: SortOrder
    strategy?: SortOrder
    attribute?: SortOrder
    value?: SortOrder
  }

  export type goleta_ascend_dataSumOrderByAggregateInput = {
    value?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type goleta_budgetsUtc_datetime_ibLocal_datetime_ibEntityAttributeCompoundUniqueInput = {
    utc_datetime_ib: Date | string
    local_datetime_ib: Date | string
    entity: string
    attribute: string
  }

  export type goleta_budgetsCountOrderByAggregateInput = {
    utc_datetime_ib?: SortOrder
    local_datetime_ib?: SortOrder
    entity?: SortOrder
    attribute?: SortOrder
    value?: SortOrder
  }

  export type goleta_budgetsAvgOrderByAggregateInput = {
    value?: SortOrder
  }

  export type goleta_budgetsMaxOrderByAggregateInput = {
    utc_datetime_ib?: SortOrder
    local_datetime_ib?: SortOrder
    entity?: SortOrder
    attribute?: SortOrder
    value?: SortOrder
  }

  export type goleta_budgetsMinOrderByAggregateInput = {
    utc_datetime_ib?: SortOrder
    local_datetime_ib?: SortOrder
    entity?: SortOrder
    attribute?: SortOrder
    value?: SortOrder
  }

  export type goleta_budgetsSumOrderByAggregateInput = {
    value?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type goleta_charging_constraintsYearMonthHourCompoundUniqueInput = {
    year: number
    month: number
    hour: number
  }

  export type goleta_charging_constraintsCountOrderByAggregateInput = {
    year?: SortOrder
    month?: SortOrder
    hour?: SortOrder
    value?: SortOrder
  }

  export type goleta_charging_constraintsAvgOrderByAggregateInput = {
    year?: SortOrder
    month?: SortOrder
    hour?: SortOrder
    value?: SortOrder
  }

  export type goleta_charging_constraintsMaxOrderByAggregateInput = {
    year?: SortOrder
    month?: SortOrder
    hour?: SortOrder
    value?: SortOrder
  }

  export type goleta_charging_constraintsMinOrderByAggregateInput = {
    year?: SortOrder
    month?: SortOrder
    hour?: SortOrder
    value?: SortOrder
  }

  export type goleta_charging_constraintsSumOrderByAggregateInput = {
    year?: SortOrder
    month?: SortOrder
    hour?: SortOrder
    value?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type goleta_operational_dataUtc_datetime_ibLocal_datetime_ibEntityAttributeCompoundUniqueInput = {
    utc_datetime_ib: Date | string
    local_datetime_ib: Date | string
    entity: string
    attribute: string
  }

  export type goleta_operational_dataCountOrderByAggregateInput = {
    utc_datetime_ib?: SortOrder
    local_datetime_ib?: SortOrder
    entity?: SortOrder
    attribute?: SortOrder
    value?: SortOrder
  }

  export type goleta_operational_dataAvgOrderByAggregateInput = {
    value?: SortOrder
  }

  export type goleta_operational_dataMaxOrderByAggregateInput = {
    utc_datetime_ib?: SortOrder
    local_datetime_ib?: SortOrder
    entity?: SortOrder
    attribute?: SortOrder
    value?: SortOrder
  }

  export type goleta_operational_dataMinOrderByAggregateInput = {
    utc_datetime_ib?: SortOrder
    local_datetime_ib?: SortOrder
    entity?: SortOrder
    attribute?: SortOrder
    value?: SortOrder
  }

  export type goleta_operational_dataSumOrderByAggregateInput = {
    value?: SortOrder
  }

  export type goleta_revenue_metricsUtc_datetime_ibLocal_datetime_ibEntityAttributeCompoundUniqueInput = {
    utc_datetime_ib: Date | string
    local_datetime_ib: Date | string
    entity: string
    attribute: string
  }

  export type goleta_revenue_metricsCountOrderByAggregateInput = {
    utc_datetime_ib?: SortOrder
    local_datetime_ib?: SortOrder
    entity?: SortOrder
    attribute?: SortOrder
    value?: SortOrder
  }

  export type goleta_revenue_metricsAvgOrderByAggregateInput = {
    value?: SortOrder
  }

  export type goleta_revenue_metricsMaxOrderByAggregateInput = {
    utc_datetime_ib?: SortOrder
    local_datetime_ib?: SortOrder
    entity?: SortOrder
    attribute?: SortOrder
    value?: SortOrder
  }

  export type goleta_revenue_metricsMinOrderByAggregateInput = {
    utc_datetime_ib?: SortOrder
    local_datetime_ib?: SortOrder
    entity?: SortOrder
    attribute?: SortOrder
    value?: SortOrder
  }

  export type goleta_revenue_metricsSumOrderByAggregateInput = {
    value?: SortOrder
  }

  export type goleta_scheduling_dataUtc_datetime_ibLocal_datetime_ibEntityAttributeCompoundUniqueInput = {
    utc_datetime_ib: Date | string
    local_datetime_ib: Date | string
    entity: string
    attribute: string
  }

  export type goleta_scheduling_dataCountOrderByAggregateInput = {
    utc_datetime_ib?: SortOrder
    local_datetime_ib?: SortOrder
    entity?: SortOrder
    attribute?: SortOrder
    value?: SortOrder
  }

  export type goleta_scheduling_dataAvgOrderByAggregateInput = {
    value?: SortOrder
  }

  export type goleta_scheduling_dataMaxOrderByAggregateInput = {
    utc_datetime_ib?: SortOrder
    local_datetime_ib?: SortOrder
    entity?: SortOrder
    attribute?: SortOrder
    value?: SortOrder
  }

  export type goleta_scheduling_dataMinOrderByAggregateInput = {
    utc_datetime_ib?: SortOrder
    local_datetime_ib?: SortOrder
    entity?: SortOrder
    attribute?: SortOrder
    value?: SortOrder
  }

  export type goleta_scheduling_dataSumOrderByAggregateInput = {
    value?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type internal_forecastsMarkdateMarklocationMarkmarketCurvecreatorCurrentcurveValuetypeCompoundUniqueInput = {
    markdate: Date | string
    marklocation: string
    markmarket: string
    curvecreator: string
    currentcurve: boolean
    valuetype: string
  }

  export type internal_forecastsCountOrderByAggregateInput = {
    flowdatestart?: SortOrder
    term?: SortOrder
    markdate?: SortOrder
    marklocation?: SortOrder
    markmarket?: SortOrder
    curvecreator?: SortOrder
    currentcurve?: SortOrder
    valuetype?: SortOrder
    value?: SortOrder
    units?: SortOrder
    marktype?: SortOrder
    marktypedesc?: SortOrder
    gridstorpurpose?: SortOrder
    tablecreationtime?: SortOrder
  }

  export type internal_forecastsAvgOrderByAggregateInput = {
    value?: SortOrder
  }

  export type internal_forecastsMaxOrderByAggregateInput = {
    flowdatestart?: SortOrder
    term?: SortOrder
    markdate?: SortOrder
    marklocation?: SortOrder
    markmarket?: SortOrder
    curvecreator?: SortOrder
    currentcurve?: SortOrder
    valuetype?: SortOrder
    value?: SortOrder
    units?: SortOrder
    marktype?: SortOrder
    marktypedesc?: SortOrder
    gridstorpurpose?: SortOrder
    tablecreationtime?: SortOrder
  }

  export type internal_forecastsMinOrderByAggregateInput = {
    flowdatestart?: SortOrder
    term?: SortOrder
    markdate?: SortOrder
    marklocation?: SortOrder
    markmarket?: SortOrder
    curvecreator?: SortOrder
    currentcurve?: SortOrder
    valuetype?: SortOrder
    value?: SortOrder
    units?: SortOrder
    marktype?: SortOrder
    marktypedesc?: SortOrder
    gridstorpurpose?: SortOrder
    tablecreationtime?: SortOrder
  }

  export type internal_forecastsSumOrderByAggregateInput = {
    value?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type monthly_revenue_forecastsForecastmonthMarkdateCurvenameCasetypeOptimizationtypeLocationPricetypeCompoundUniqueInput = {
    forecastmonth: Date | string
    markdate: Date | string
    curvename: string
    casetype: string
    optimizationtype: string
    location: string
    pricetype: string
  }

  export type monthly_revenue_forecastsCountOrderByAggregateInput = {
    forecastmonth?: SortOrder
    markdate?: SortOrder
    curvename?: SortOrder
    casetype?: SortOrder
    optimizationtype?: SortOrder
    location?: SortOrder
    pricetype?: SortOrder
    price?: SortOrder
    unit?: SortOrder
  }

  export type monthly_revenue_forecastsAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type monthly_revenue_forecastsMaxOrderByAggregateInput = {
    forecastmonth?: SortOrder
    markdate?: SortOrder
    curvename?: SortOrder
    casetype?: SortOrder
    optimizationtype?: SortOrder
    location?: SortOrder
    pricetype?: SortOrder
    price?: SortOrder
    unit?: SortOrder
  }

  export type monthly_revenue_forecastsMinOrderByAggregateInput = {
    forecastmonth?: SortOrder
    markdate?: SortOrder
    curvename?: SortOrder
    casetype?: SortOrder
    optimizationtype?: SortOrder
    location?: SortOrder
    pricetype?: SortOrder
    price?: SortOrder
    unit?: SortOrder
  }

  export type monthly_revenue_forecastsSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type yes_fundamentalsUtc_datetime_ibLocal_datetime_ibEntityAttributeCompoundUniqueInput = {
    utc_datetime_ib: Date | string
    local_datetime_ib: Date | string
    entity: string
    attribute: string
  }

  export type yes_fundamentalsCountOrderByAggregateInput = {
    utc_datetime_ib?: SortOrder
    local_datetime_ib?: SortOrder
    entity?: SortOrder
    attribute?: SortOrder
    value?: SortOrder
  }

  export type yes_fundamentalsAvgOrderByAggregateInput = {
    value?: SortOrder
  }

  export type yes_fundamentalsMaxOrderByAggregateInput = {
    utc_datetime_ib?: SortOrder
    local_datetime_ib?: SortOrder
    entity?: SortOrder
    attribute?: SortOrder
    value?: SortOrder
  }

  export type yes_fundamentalsMinOrderByAggregateInput = {
    utc_datetime_ib?: SortOrder
    local_datetime_ib?: SortOrder
    entity?: SortOrder
    attribute?: SortOrder
    value?: SortOrder
  }

  export type yes_fundamentalsSumOrderByAggregateInput = {
    value?: SortOrder
  }

  export type yes_idsCountOrderByAggregateInput = {
    node_name?: SortOrder
    object_id?: SortOrder
    iso?: SortOrder
    tz?: SortOrder
  }

  export type yes_idsMaxOrderByAggregateInput = {
    node_name?: SortOrder
    object_id?: SortOrder
    iso?: SortOrder
    tz?: SortOrder
  }

  export type yes_idsMinOrderByAggregateInput = {
    node_name?: SortOrder
    object_id?: SortOrder
    iso?: SortOrder
    tz?: SortOrder
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}