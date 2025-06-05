
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
 * Model Player_position
 * 
 */
export type Player_position = $Result.DefaultSelection<Prisma.$Player_positionPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model MemberFunction
 * 
 */
export type MemberFunction = $Result.DefaultSelection<Prisma.$MemberFunctionPayload>
/**
 * Model Members
 * 
 */
export type Members = $Result.DefaultSelection<Prisma.$MembersPayload>
/**
 * Model Club
 * 
 */
export type Club = $Result.DefaultSelection<Prisma.$ClubPayload>
/**
 * Model Partner
 * 
 */
export type Partner = $Result.DefaultSelection<Prisma.$PartnerPayload>
/**
 * Model Actuality
 * 
 */
export type Actuality = $Result.DefaultSelection<Prisma.$ActualityPayload>
/**
 * Model Album
 * 
 */
export type Album = $Result.DefaultSelection<Prisma.$AlbumPayload>
/**
 * Model Media
 * 
 */
export type Media = $Result.DefaultSelection<Prisma.$MediaPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Player_positions
 * const player_positions = await prisma.player_position.findMany()
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
   * // Fetch zero or more Player_positions
   * const player_positions = await prisma.player_position.findMany()
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
   * `prisma.player_position`: Exposes CRUD operations for the **Player_position** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Player_positions
    * const player_positions = await prisma.player_position.findMany()
    * ```
    */
  get player_position(): Prisma.Player_positionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.memberFunction`: Exposes CRUD operations for the **MemberFunction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MemberFunctions
    * const memberFunctions = await prisma.memberFunction.findMany()
    * ```
    */
  get memberFunction(): Prisma.MemberFunctionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.members`: Exposes CRUD operations for the **Members** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Members
    * const members = await prisma.members.findMany()
    * ```
    */
  get members(): Prisma.MembersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.club`: Exposes CRUD operations for the **Club** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clubs
    * const clubs = await prisma.club.findMany()
    * ```
    */
  get club(): Prisma.ClubDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.partner`: Exposes CRUD operations for the **Partner** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Partners
    * const partners = await prisma.partner.findMany()
    * ```
    */
  get partner(): Prisma.PartnerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.actuality`: Exposes CRUD operations for the **Actuality** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Actualities
    * const actualities = await prisma.actuality.findMany()
    * ```
    */
  get actuality(): Prisma.ActualityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.album`: Exposes CRUD operations for the **Album** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Albums
    * const albums = await prisma.album.findMany()
    * ```
    */
  get album(): Prisma.AlbumDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.media`: Exposes CRUD operations for the **Media** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Media
    * const media = await prisma.media.findMany()
    * ```
    */
  get media(): Prisma.MediaDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
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
    Player_position: 'Player_position',
    Category: 'Category',
    MemberFunction: 'MemberFunction',
    Members: 'Members',
    Club: 'Club',
    Partner: 'Partner',
    Actuality: 'Actuality',
    Album: 'Album',
    Media: 'Media'
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
      modelProps: "player_position" | "category" | "memberFunction" | "members" | "club" | "partner" | "actuality" | "album" | "media"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Player_position: {
        payload: Prisma.$Player_positionPayload<ExtArgs>
        fields: Prisma.Player_positionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Player_positionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Player_positionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Player_positionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Player_positionPayload>
          }
          findFirst: {
            args: Prisma.Player_positionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Player_positionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Player_positionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Player_positionPayload>
          }
          findMany: {
            args: Prisma.Player_positionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Player_positionPayload>[]
          }
          create: {
            args: Prisma.Player_positionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Player_positionPayload>
          }
          createMany: {
            args: Prisma.Player_positionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Player_positionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Player_positionPayload>[]
          }
          delete: {
            args: Prisma.Player_positionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Player_positionPayload>
          }
          update: {
            args: Prisma.Player_positionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Player_positionPayload>
          }
          deleteMany: {
            args: Prisma.Player_positionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Player_positionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Player_positionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Player_positionPayload>[]
          }
          upsert: {
            args: Prisma.Player_positionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Player_positionPayload>
          }
          aggregate: {
            args: Prisma.Player_positionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlayer_position>
          }
          groupBy: {
            args: Prisma.Player_positionGroupByArgs<ExtArgs>
            result: $Utils.Optional<Player_positionGroupByOutputType>[]
          }
          count: {
            args: Prisma.Player_positionCountArgs<ExtArgs>
            result: $Utils.Optional<Player_positionCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      MemberFunction: {
        payload: Prisma.$MemberFunctionPayload<ExtArgs>
        fields: Prisma.MemberFunctionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MemberFunctionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberFunctionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MemberFunctionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberFunctionPayload>
          }
          findFirst: {
            args: Prisma.MemberFunctionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberFunctionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MemberFunctionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberFunctionPayload>
          }
          findMany: {
            args: Prisma.MemberFunctionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberFunctionPayload>[]
          }
          create: {
            args: Prisma.MemberFunctionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberFunctionPayload>
          }
          createMany: {
            args: Prisma.MemberFunctionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MemberFunctionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberFunctionPayload>[]
          }
          delete: {
            args: Prisma.MemberFunctionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberFunctionPayload>
          }
          update: {
            args: Prisma.MemberFunctionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberFunctionPayload>
          }
          deleteMany: {
            args: Prisma.MemberFunctionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MemberFunctionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MemberFunctionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberFunctionPayload>[]
          }
          upsert: {
            args: Prisma.MemberFunctionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberFunctionPayload>
          }
          aggregate: {
            args: Prisma.MemberFunctionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMemberFunction>
          }
          groupBy: {
            args: Prisma.MemberFunctionGroupByArgs<ExtArgs>
            result: $Utils.Optional<MemberFunctionGroupByOutputType>[]
          }
          count: {
            args: Prisma.MemberFunctionCountArgs<ExtArgs>
            result: $Utils.Optional<MemberFunctionCountAggregateOutputType> | number
          }
        }
      }
      Members: {
        payload: Prisma.$MembersPayload<ExtArgs>
        fields: Prisma.MembersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MembersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MembersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembersPayload>
          }
          findFirst: {
            args: Prisma.MembersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MembersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembersPayload>
          }
          findMany: {
            args: Prisma.MembersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembersPayload>[]
          }
          create: {
            args: Prisma.MembersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembersPayload>
          }
          createMany: {
            args: Prisma.MembersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MembersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembersPayload>[]
          }
          delete: {
            args: Prisma.MembersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembersPayload>
          }
          update: {
            args: Prisma.MembersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembersPayload>
          }
          deleteMany: {
            args: Prisma.MembersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MembersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MembersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembersPayload>[]
          }
          upsert: {
            args: Prisma.MembersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembersPayload>
          }
          aggregate: {
            args: Prisma.MembersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMembers>
          }
          groupBy: {
            args: Prisma.MembersGroupByArgs<ExtArgs>
            result: $Utils.Optional<MembersGroupByOutputType>[]
          }
          count: {
            args: Prisma.MembersCountArgs<ExtArgs>
            result: $Utils.Optional<MembersCountAggregateOutputType> | number
          }
        }
      }
      Club: {
        payload: Prisma.$ClubPayload<ExtArgs>
        fields: Prisma.ClubFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClubFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClubFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubPayload>
          }
          findFirst: {
            args: Prisma.ClubFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClubFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubPayload>
          }
          findMany: {
            args: Prisma.ClubFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubPayload>[]
          }
          create: {
            args: Prisma.ClubCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubPayload>
          }
          createMany: {
            args: Prisma.ClubCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClubCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubPayload>[]
          }
          delete: {
            args: Prisma.ClubDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubPayload>
          }
          update: {
            args: Prisma.ClubUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubPayload>
          }
          deleteMany: {
            args: Prisma.ClubDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClubUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClubUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubPayload>[]
          }
          upsert: {
            args: Prisma.ClubUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubPayload>
          }
          aggregate: {
            args: Prisma.ClubAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClub>
          }
          groupBy: {
            args: Prisma.ClubGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClubGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClubCountArgs<ExtArgs>
            result: $Utils.Optional<ClubCountAggregateOutputType> | number
          }
        }
      }
      Partner: {
        payload: Prisma.$PartnerPayload<ExtArgs>
        fields: Prisma.PartnerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PartnerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PartnerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerPayload>
          }
          findFirst: {
            args: Prisma.PartnerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PartnerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerPayload>
          }
          findMany: {
            args: Prisma.PartnerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerPayload>[]
          }
          create: {
            args: Prisma.PartnerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerPayload>
          }
          createMany: {
            args: Prisma.PartnerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PartnerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerPayload>[]
          }
          delete: {
            args: Prisma.PartnerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerPayload>
          }
          update: {
            args: Prisma.PartnerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerPayload>
          }
          deleteMany: {
            args: Prisma.PartnerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PartnerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PartnerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerPayload>[]
          }
          upsert: {
            args: Prisma.PartnerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerPayload>
          }
          aggregate: {
            args: Prisma.PartnerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePartner>
          }
          groupBy: {
            args: Prisma.PartnerGroupByArgs<ExtArgs>
            result: $Utils.Optional<PartnerGroupByOutputType>[]
          }
          count: {
            args: Prisma.PartnerCountArgs<ExtArgs>
            result: $Utils.Optional<PartnerCountAggregateOutputType> | number
          }
        }
      }
      Actuality: {
        payload: Prisma.$ActualityPayload<ExtArgs>
        fields: Prisma.ActualityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActualityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActualityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActualityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActualityPayload>
          }
          findFirst: {
            args: Prisma.ActualityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActualityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActualityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActualityPayload>
          }
          findMany: {
            args: Prisma.ActualityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActualityPayload>[]
          }
          create: {
            args: Prisma.ActualityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActualityPayload>
          }
          createMany: {
            args: Prisma.ActualityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActualityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActualityPayload>[]
          }
          delete: {
            args: Prisma.ActualityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActualityPayload>
          }
          update: {
            args: Prisma.ActualityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActualityPayload>
          }
          deleteMany: {
            args: Prisma.ActualityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActualityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ActualityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActualityPayload>[]
          }
          upsert: {
            args: Prisma.ActualityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActualityPayload>
          }
          aggregate: {
            args: Prisma.ActualityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActuality>
          }
          groupBy: {
            args: Prisma.ActualityGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActualityGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActualityCountArgs<ExtArgs>
            result: $Utils.Optional<ActualityCountAggregateOutputType> | number
          }
        }
      }
      Album: {
        payload: Prisma.$AlbumPayload<ExtArgs>
        fields: Prisma.AlbumFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlbumFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlbumFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>
          }
          findFirst: {
            args: Prisma.AlbumFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlbumFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>
          }
          findMany: {
            args: Prisma.AlbumFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>[]
          }
          create: {
            args: Prisma.AlbumCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>
          }
          createMany: {
            args: Prisma.AlbumCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AlbumCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>[]
          }
          delete: {
            args: Prisma.AlbumDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>
          }
          update: {
            args: Prisma.AlbumUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>
          }
          deleteMany: {
            args: Prisma.AlbumDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlbumUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AlbumUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>[]
          }
          upsert: {
            args: Prisma.AlbumUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlbumPayload>
          }
          aggregate: {
            args: Prisma.AlbumAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlbum>
          }
          groupBy: {
            args: Prisma.AlbumGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlbumGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlbumCountArgs<ExtArgs>
            result: $Utils.Optional<AlbumCountAggregateOutputType> | number
          }
        }
      }
      Media: {
        payload: Prisma.$MediaPayload<ExtArgs>
        fields: Prisma.MediaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MediaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MediaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          findFirst: {
            args: Prisma.MediaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MediaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          findMany: {
            args: Prisma.MediaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>[]
          }
          create: {
            args: Prisma.MediaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          createMany: {
            args: Prisma.MediaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MediaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>[]
          }
          delete: {
            args: Prisma.MediaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          update: {
            args: Prisma.MediaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          deleteMany: {
            args: Prisma.MediaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MediaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MediaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>[]
          }
          upsert: {
            args: Prisma.MediaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          aggregate: {
            args: Prisma.MediaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedia>
          }
          groupBy: {
            args: Prisma.MediaGroupByArgs<ExtArgs>
            result: $Utils.Optional<MediaGroupByOutputType>[]
          }
          count: {
            args: Prisma.MediaCountArgs<ExtArgs>
            result: $Utils.Optional<MediaCountAggregateOutputType> | number
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
    player_position?: Player_positionOmit
    category?: CategoryOmit
    memberFunction?: MemberFunctionOmit
    members?: MembersOmit
    club?: ClubOmit
    partner?: PartnerOmit
    actuality?: ActualityOmit
    album?: AlbumOmit
    media?: MediaOmit
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
   * Count Type Player_positionCountOutputType
   */

  export type Player_positionCountOutputType = {
    members: number
  }

  export type Player_positionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | Player_positionCountOutputTypeCountMembersArgs
  }

  // Custom InputTypes
  /**
   * Player_positionCountOutputType without action
   */
  export type Player_positionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player_positionCountOutputType
     */
    select?: Player_positionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Player_positionCountOutputType without action
   */
  export type Player_positionCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MembersWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    members: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | CategoryCountOutputTypeCountMembersArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MembersWhereInput
  }


  /**
   * Count Type MemberFunctionCountOutputType
   */

  export type MemberFunctionCountOutputType = {
    member: number
  }

  export type MemberFunctionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    member?: boolean | MemberFunctionCountOutputTypeCountMemberArgs
  }

  // Custom InputTypes
  /**
   * MemberFunctionCountOutputType without action
   */
  export type MemberFunctionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberFunctionCountOutputType
     */
    select?: MemberFunctionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MemberFunctionCountOutputType without action
   */
  export type MemberFunctionCountOutputTypeCountMemberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MembersWhereInput
  }


  /**
   * Count Type AlbumCountOutputType
   */

  export type AlbumCountOutputType = {
    media: number
  }

  export type AlbumCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    media?: boolean | AlbumCountOutputTypeCountMediaArgs
  }

  // Custom InputTypes
  /**
   * AlbumCountOutputType without action
   */
  export type AlbumCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumCountOutputType
     */
    select?: AlbumCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AlbumCountOutputType without action
   */
  export type AlbumCountOutputTypeCountMediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MediaWhereInput
  }


  /**
   * Count Type MediaCountOutputType
   */

  export type MediaCountOutputType = {
    album: number
  }

  export type MediaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    album?: boolean | MediaCountOutputTypeCountAlbumArgs
  }

  // Custom InputTypes
  /**
   * MediaCountOutputType without action
   */
  export type MediaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaCountOutputType
     */
    select?: MediaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MediaCountOutputType without action
   */
  export type MediaCountOutputTypeCountAlbumArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlbumWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Player_position
   */

  export type AggregatePlayer_position = {
    _count: Player_positionCountAggregateOutputType | null
    _min: Player_positionMinAggregateOutputType | null
    _max: Player_positionMaxAggregateOutputType | null
  }

  export type Player_positionMinAggregateOutputType = {
    id: string | null
    label: string | null
  }

  export type Player_positionMaxAggregateOutputType = {
    id: string | null
    label: string | null
  }

  export type Player_positionCountAggregateOutputType = {
    id: number
    label: number
    _all: number
  }


  export type Player_positionMinAggregateInputType = {
    id?: true
    label?: true
  }

  export type Player_positionMaxAggregateInputType = {
    id?: true
    label?: true
  }

  export type Player_positionCountAggregateInputType = {
    id?: true
    label?: true
    _all?: true
  }

  export type Player_positionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Player_position to aggregate.
     */
    where?: Player_positionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Player_positions to fetch.
     */
    orderBy?: Player_positionOrderByWithRelationInput | Player_positionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Player_positionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Player_positions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Player_positions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Player_positions
    **/
    _count?: true | Player_positionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Player_positionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Player_positionMaxAggregateInputType
  }

  export type GetPlayer_positionAggregateType<T extends Player_positionAggregateArgs> = {
        [P in keyof T & keyof AggregatePlayer_position]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlayer_position[P]>
      : GetScalarType<T[P], AggregatePlayer_position[P]>
  }




  export type Player_positionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Player_positionWhereInput
    orderBy?: Player_positionOrderByWithAggregationInput | Player_positionOrderByWithAggregationInput[]
    by: Player_positionScalarFieldEnum[] | Player_positionScalarFieldEnum
    having?: Player_positionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Player_positionCountAggregateInputType | true
    _min?: Player_positionMinAggregateInputType
    _max?: Player_positionMaxAggregateInputType
  }

  export type Player_positionGroupByOutputType = {
    id: string
    label: string
    _count: Player_positionCountAggregateOutputType | null
    _min: Player_positionMinAggregateOutputType | null
    _max: Player_positionMaxAggregateOutputType | null
  }

  type GetPlayer_positionGroupByPayload<T extends Player_positionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Player_positionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Player_positionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Player_positionGroupByOutputType[P]>
            : GetScalarType<T[P], Player_positionGroupByOutputType[P]>
        }
      >
    >


  export type Player_positionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    members?: boolean | Player_position$membersArgs<ExtArgs>
    _count?: boolean | Player_positionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["player_position"]>

  export type Player_positionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
  }, ExtArgs["result"]["player_position"]>

  export type Player_positionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
  }, ExtArgs["result"]["player_position"]>

  export type Player_positionSelectScalar = {
    id?: boolean
    label?: boolean
  }

  export type Player_positionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "label", ExtArgs["result"]["player_position"]>
  export type Player_positionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | Player_position$membersArgs<ExtArgs>
    _count?: boolean | Player_positionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type Player_positionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type Player_positionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $Player_positionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Player_position"
    objects: {
      members: Prisma.$MembersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      label: string
    }, ExtArgs["result"]["player_position"]>
    composites: {}
  }

  type Player_positionGetPayload<S extends boolean | null | undefined | Player_positionDefaultArgs> = $Result.GetResult<Prisma.$Player_positionPayload, S>

  type Player_positionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Player_positionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Player_positionCountAggregateInputType | true
    }

  export interface Player_positionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Player_position'], meta: { name: 'Player_position' } }
    /**
     * Find zero or one Player_position that matches the filter.
     * @param {Player_positionFindUniqueArgs} args - Arguments to find a Player_position
     * @example
     * // Get one Player_position
     * const player_position = await prisma.player_position.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Player_positionFindUniqueArgs>(args: SelectSubset<T, Player_positionFindUniqueArgs<ExtArgs>>): Prisma__Player_positionClient<$Result.GetResult<Prisma.$Player_positionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Player_position that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Player_positionFindUniqueOrThrowArgs} args - Arguments to find a Player_position
     * @example
     * // Get one Player_position
     * const player_position = await prisma.player_position.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Player_positionFindUniqueOrThrowArgs>(args: SelectSubset<T, Player_positionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Player_positionClient<$Result.GetResult<Prisma.$Player_positionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Player_position that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Player_positionFindFirstArgs} args - Arguments to find a Player_position
     * @example
     * // Get one Player_position
     * const player_position = await prisma.player_position.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Player_positionFindFirstArgs>(args?: SelectSubset<T, Player_positionFindFirstArgs<ExtArgs>>): Prisma__Player_positionClient<$Result.GetResult<Prisma.$Player_positionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Player_position that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Player_positionFindFirstOrThrowArgs} args - Arguments to find a Player_position
     * @example
     * // Get one Player_position
     * const player_position = await prisma.player_position.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Player_positionFindFirstOrThrowArgs>(args?: SelectSubset<T, Player_positionFindFirstOrThrowArgs<ExtArgs>>): Prisma__Player_positionClient<$Result.GetResult<Prisma.$Player_positionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Player_positions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Player_positionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Player_positions
     * const player_positions = await prisma.player_position.findMany()
     * 
     * // Get first 10 Player_positions
     * const player_positions = await prisma.player_position.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const player_positionWithIdOnly = await prisma.player_position.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Player_positionFindManyArgs>(args?: SelectSubset<T, Player_positionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Player_positionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Player_position.
     * @param {Player_positionCreateArgs} args - Arguments to create a Player_position.
     * @example
     * // Create one Player_position
     * const Player_position = await prisma.player_position.create({
     *   data: {
     *     // ... data to create a Player_position
     *   }
     * })
     * 
     */
    create<T extends Player_positionCreateArgs>(args: SelectSubset<T, Player_positionCreateArgs<ExtArgs>>): Prisma__Player_positionClient<$Result.GetResult<Prisma.$Player_positionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Player_positions.
     * @param {Player_positionCreateManyArgs} args - Arguments to create many Player_positions.
     * @example
     * // Create many Player_positions
     * const player_position = await prisma.player_position.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Player_positionCreateManyArgs>(args?: SelectSubset<T, Player_positionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Player_positions and returns the data saved in the database.
     * @param {Player_positionCreateManyAndReturnArgs} args - Arguments to create many Player_positions.
     * @example
     * // Create many Player_positions
     * const player_position = await prisma.player_position.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Player_positions and only return the `id`
     * const player_positionWithIdOnly = await prisma.player_position.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Player_positionCreateManyAndReturnArgs>(args?: SelectSubset<T, Player_positionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Player_positionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Player_position.
     * @param {Player_positionDeleteArgs} args - Arguments to delete one Player_position.
     * @example
     * // Delete one Player_position
     * const Player_position = await prisma.player_position.delete({
     *   where: {
     *     // ... filter to delete one Player_position
     *   }
     * })
     * 
     */
    delete<T extends Player_positionDeleteArgs>(args: SelectSubset<T, Player_positionDeleteArgs<ExtArgs>>): Prisma__Player_positionClient<$Result.GetResult<Prisma.$Player_positionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Player_position.
     * @param {Player_positionUpdateArgs} args - Arguments to update one Player_position.
     * @example
     * // Update one Player_position
     * const player_position = await prisma.player_position.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Player_positionUpdateArgs>(args: SelectSubset<T, Player_positionUpdateArgs<ExtArgs>>): Prisma__Player_positionClient<$Result.GetResult<Prisma.$Player_positionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Player_positions.
     * @param {Player_positionDeleteManyArgs} args - Arguments to filter Player_positions to delete.
     * @example
     * // Delete a few Player_positions
     * const { count } = await prisma.player_position.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Player_positionDeleteManyArgs>(args?: SelectSubset<T, Player_positionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Player_positions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Player_positionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Player_positions
     * const player_position = await prisma.player_position.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Player_positionUpdateManyArgs>(args: SelectSubset<T, Player_positionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Player_positions and returns the data updated in the database.
     * @param {Player_positionUpdateManyAndReturnArgs} args - Arguments to update many Player_positions.
     * @example
     * // Update many Player_positions
     * const player_position = await prisma.player_position.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Player_positions and only return the `id`
     * const player_positionWithIdOnly = await prisma.player_position.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends Player_positionUpdateManyAndReturnArgs>(args: SelectSubset<T, Player_positionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Player_positionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Player_position.
     * @param {Player_positionUpsertArgs} args - Arguments to update or create a Player_position.
     * @example
     * // Update or create a Player_position
     * const player_position = await prisma.player_position.upsert({
     *   create: {
     *     // ... data to create a Player_position
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Player_position we want to update
     *   }
     * })
     */
    upsert<T extends Player_positionUpsertArgs>(args: SelectSubset<T, Player_positionUpsertArgs<ExtArgs>>): Prisma__Player_positionClient<$Result.GetResult<Prisma.$Player_positionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Player_positions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Player_positionCountArgs} args - Arguments to filter Player_positions to count.
     * @example
     * // Count the number of Player_positions
     * const count = await prisma.player_position.count({
     *   where: {
     *     // ... the filter for the Player_positions we want to count
     *   }
     * })
    **/
    count<T extends Player_positionCountArgs>(
      args?: Subset<T, Player_positionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Player_positionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Player_position.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Player_positionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Player_positionAggregateArgs>(args: Subset<T, Player_positionAggregateArgs>): Prisma.PrismaPromise<GetPlayer_positionAggregateType<T>>

    /**
     * Group by Player_position.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Player_positionGroupByArgs} args - Group by arguments.
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
      T extends Player_positionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Player_positionGroupByArgs['orderBy'] }
        : { orderBy?: Player_positionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Player_positionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlayer_positionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Player_position model
   */
  readonly fields: Player_positionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Player_position.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Player_positionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    members<T extends Player_position$membersArgs<ExtArgs> = {}>(args?: Subset<T, Player_position$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Player_position model
   */
  interface Player_positionFieldRefs {
    readonly id: FieldRef<"Player_position", 'String'>
    readonly label: FieldRef<"Player_position", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Player_position findUnique
   */
  export type Player_positionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player_position
     */
    select?: Player_positionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player_position
     */
    omit?: Player_positionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Player_positionInclude<ExtArgs> | null
    /**
     * Filter, which Player_position to fetch.
     */
    where: Player_positionWhereUniqueInput
  }

  /**
   * Player_position findUniqueOrThrow
   */
  export type Player_positionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player_position
     */
    select?: Player_positionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player_position
     */
    omit?: Player_positionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Player_positionInclude<ExtArgs> | null
    /**
     * Filter, which Player_position to fetch.
     */
    where: Player_positionWhereUniqueInput
  }

  /**
   * Player_position findFirst
   */
  export type Player_positionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player_position
     */
    select?: Player_positionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player_position
     */
    omit?: Player_positionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Player_positionInclude<ExtArgs> | null
    /**
     * Filter, which Player_position to fetch.
     */
    where?: Player_positionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Player_positions to fetch.
     */
    orderBy?: Player_positionOrderByWithRelationInput | Player_positionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Player_positions.
     */
    cursor?: Player_positionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Player_positions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Player_positions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Player_positions.
     */
    distinct?: Player_positionScalarFieldEnum | Player_positionScalarFieldEnum[]
  }

  /**
   * Player_position findFirstOrThrow
   */
  export type Player_positionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player_position
     */
    select?: Player_positionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player_position
     */
    omit?: Player_positionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Player_positionInclude<ExtArgs> | null
    /**
     * Filter, which Player_position to fetch.
     */
    where?: Player_positionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Player_positions to fetch.
     */
    orderBy?: Player_positionOrderByWithRelationInput | Player_positionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Player_positions.
     */
    cursor?: Player_positionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Player_positions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Player_positions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Player_positions.
     */
    distinct?: Player_positionScalarFieldEnum | Player_positionScalarFieldEnum[]
  }

  /**
   * Player_position findMany
   */
  export type Player_positionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player_position
     */
    select?: Player_positionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player_position
     */
    omit?: Player_positionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Player_positionInclude<ExtArgs> | null
    /**
     * Filter, which Player_positions to fetch.
     */
    where?: Player_positionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Player_positions to fetch.
     */
    orderBy?: Player_positionOrderByWithRelationInput | Player_positionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Player_positions.
     */
    cursor?: Player_positionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Player_positions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Player_positions.
     */
    skip?: number
    distinct?: Player_positionScalarFieldEnum | Player_positionScalarFieldEnum[]
  }

  /**
   * Player_position create
   */
  export type Player_positionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player_position
     */
    select?: Player_positionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player_position
     */
    omit?: Player_positionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Player_positionInclude<ExtArgs> | null
    /**
     * The data needed to create a Player_position.
     */
    data: XOR<Player_positionCreateInput, Player_positionUncheckedCreateInput>
  }

  /**
   * Player_position createMany
   */
  export type Player_positionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Player_positions.
     */
    data: Player_positionCreateManyInput | Player_positionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Player_position createManyAndReturn
   */
  export type Player_positionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player_position
     */
    select?: Player_positionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Player_position
     */
    omit?: Player_positionOmit<ExtArgs> | null
    /**
     * The data used to create many Player_positions.
     */
    data: Player_positionCreateManyInput | Player_positionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Player_position update
   */
  export type Player_positionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player_position
     */
    select?: Player_positionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player_position
     */
    omit?: Player_positionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Player_positionInclude<ExtArgs> | null
    /**
     * The data needed to update a Player_position.
     */
    data: XOR<Player_positionUpdateInput, Player_positionUncheckedUpdateInput>
    /**
     * Choose, which Player_position to update.
     */
    where: Player_positionWhereUniqueInput
  }

  /**
   * Player_position updateMany
   */
  export type Player_positionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Player_positions.
     */
    data: XOR<Player_positionUpdateManyMutationInput, Player_positionUncheckedUpdateManyInput>
    /**
     * Filter which Player_positions to update
     */
    where?: Player_positionWhereInput
    /**
     * Limit how many Player_positions to update.
     */
    limit?: number
  }

  /**
   * Player_position updateManyAndReturn
   */
  export type Player_positionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player_position
     */
    select?: Player_positionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Player_position
     */
    omit?: Player_positionOmit<ExtArgs> | null
    /**
     * The data used to update Player_positions.
     */
    data: XOR<Player_positionUpdateManyMutationInput, Player_positionUncheckedUpdateManyInput>
    /**
     * Filter which Player_positions to update
     */
    where?: Player_positionWhereInput
    /**
     * Limit how many Player_positions to update.
     */
    limit?: number
  }

  /**
   * Player_position upsert
   */
  export type Player_positionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player_position
     */
    select?: Player_positionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player_position
     */
    omit?: Player_positionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Player_positionInclude<ExtArgs> | null
    /**
     * The filter to search for the Player_position to update in case it exists.
     */
    where: Player_positionWhereUniqueInput
    /**
     * In case the Player_position found by the `where` argument doesn't exist, create a new Player_position with this data.
     */
    create: XOR<Player_positionCreateInput, Player_positionUncheckedCreateInput>
    /**
     * In case the Player_position was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Player_positionUpdateInput, Player_positionUncheckedUpdateInput>
  }

  /**
   * Player_position delete
   */
  export type Player_positionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player_position
     */
    select?: Player_positionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player_position
     */
    omit?: Player_positionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Player_positionInclude<ExtArgs> | null
    /**
     * Filter which Player_position to delete.
     */
    where: Player_positionWhereUniqueInput
  }

  /**
   * Player_position deleteMany
   */
  export type Player_positionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Player_positions to delete
     */
    where?: Player_positionWhereInput
    /**
     * Limit how many Player_positions to delete.
     */
    limit?: number
  }

  /**
   * Player_position.members
   */
  export type Player_position$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Members
     */
    select?: MembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Members
     */
    omit?: MembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembersInclude<ExtArgs> | null
    where?: MembersWhereInput
    orderBy?: MembersOrderByWithRelationInput | MembersOrderByWithRelationInput[]
    cursor?: MembersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MembersScalarFieldEnum | MembersScalarFieldEnum[]
  }

  /**
   * Player_position without action
   */
  export type Player_positionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player_position
     */
    select?: Player_positionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player_position
     */
    omit?: Player_positionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Player_positionInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    label: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    label: string | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    label: number
    _all: number
  }


  export type CategoryMinAggregateInputType = {
    id?: true
    label?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    label?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    label?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    label: string
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    members?: boolean | Category$membersArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    label?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "label", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | Category$membersArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      members: Prisma.$MembersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      label: string
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    members<T extends Category$membersArgs<ExtArgs> = {}>(args?: Subset<T, Category$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'String'>
    readonly label: FieldRef<"Category", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.members
   */
  export type Category$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Members
     */
    select?: MembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Members
     */
    omit?: MembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembersInclude<ExtArgs> | null
    where?: MembersWhereInput
    orderBy?: MembersOrderByWithRelationInput | MembersOrderByWithRelationInput[]
    cursor?: MembersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MembersScalarFieldEnum | MembersScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model MemberFunction
   */

  export type AggregateMemberFunction = {
    _count: MemberFunctionCountAggregateOutputType | null
    _min: MemberFunctionMinAggregateOutputType | null
    _max: MemberFunctionMaxAggregateOutputType | null
  }

  export type MemberFunctionMinAggregateOutputType = {
    id: string | null
    label: string | null
  }

  export type MemberFunctionMaxAggregateOutputType = {
    id: string | null
    label: string | null
  }

  export type MemberFunctionCountAggregateOutputType = {
    id: number
    label: number
    _all: number
  }


  export type MemberFunctionMinAggregateInputType = {
    id?: true
    label?: true
  }

  export type MemberFunctionMaxAggregateInputType = {
    id?: true
    label?: true
  }

  export type MemberFunctionCountAggregateInputType = {
    id?: true
    label?: true
    _all?: true
  }

  export type MemberFunctionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MemberFunction to aggregate.
     */
    where?: MemberFunctionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MemberFunctions to fetch.
     */
    orderBy?: MemberFunctionOrderByWithRelationInput | MemberFunctionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MemberFunctionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MemberFunctions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MemberFunctions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MemberFunctions
    **/
    _count?: true | MemberFunctionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MemberFunctionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MemberFunctionMaxAggregateInputType
  }

  export type GetMemberFunctionAggregateType<T extends MemberFunctionAggregateArgs> = {
        [P in keyof T & keyof AggregateMemberFunction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMemberFunction[P]>
      : GetScalarType<T[P], AggregateMemberFunction[P]>
  }




  export type MemberFunctionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemberFunctionWhereInput
    orderBy?: MemberFunctionOrderByWithAggregationInput | MemberFunctionOrderByWithAggregationInput[]
    by: MemberFunctionScalarFieldEnum[] | MemberFunctionScalarFieldEnum
    having?: MemberFunctionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MemberFunctionCountAggregateInputType | true
    _min?: MemberFunctionMinAggregateInputType
    _max?: MemberFunctionMaxAggregateInputType
  }

  export type MemberFunctionGroupByOutputType = {
    id: string
    label: string
    _count: MemberFunctionCountAggregateOutputType | null
    _min: MemberFunctionMinAggregateOutputType | null
    _max: MemberFunctionMaxAggregateOutputType | null
  }

  type GetMemberFunctionGroupByPayload<T extends MemberFunctionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MemberFunctionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MemberFunctionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MemberFunctionGroupByOutputType[P]>
            : GetScalarType<T[P], MemberFunctionGroupByOutputType[P]>
        }
      >
    >


  export type MemberFunctionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    member?: boolean | MemberFunction$memberArgs<ExtArgs>
    _count?: boolean | MemberFunctionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["memberFunction"]>

  export type MemberFunctionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
  }, ExtArgs["result"]["memberFunction"]>

  export type MemberFunctionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
  }, ExtArgs["result"]["memberFunction"]>

  export type MemberFunctionSelectScalar = {
    id?: boolean
    label?: boolean
  }

  export type MemberFunctionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "label", ExtArgs["result"]["memberFunction"]>
  export type MemberFunctionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    member?: boolean | MemberFunction$memberArgs<ExtArgs>
    _count?: boolean | MemberFunctionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MemberFunctionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MemberFunctionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MemberFunctionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MemberFunction"
    objects: {
      member: Prisma.$MembersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      label: string
    }, ExtArgs["result"]["memberFunction"]>
    composites: {}
  }

  type MemberFunctionGetPayload<S extends boolean | null | undefined | MemberFunctionDefaultArgs> = $Result.GetResult<Prisma.$MemberFunctionPayload, S>

  type MemberFunctionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MemberFunctionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MemberFunctionCountAggregateInputType | true
    }

  export interface MemberFunctionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MemberFunction'], meta: { name: 'MemberFunction' } }
    /**
     * Find zero or one MemberFunction that matches the filter.
     * @param {MemberFunctionFindUniqueArgs} args - Arguments to find a MemberFunction
     * @example
     * // Get one MemberFunction
     * const memberFunction = await prisma.memberFunction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MemberFunctionFindUniqueArgs>(args: SelectSubset<T, MemberFunctionFindUniqueArgs<ExtArgs>>): Prisma__MemberFunctionClient<$Result.GetResult<Prisma.$MemberFunctionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MemberFunction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MemberFunctionFindUniqueOrThrowArgs} args - Arguments to find a MemberFunction
     * @example
     * // Get one MemberFunction
     * const memberFunction = await prisma.memberFunction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MemberFunctionFindUniqueOrThrowArgs>(args: SelectSubset<T, MemberFunctionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MemberFunctionClient<$Result.GetResult<Prisma.$MemberFunctionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MemberFunction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberFunctionFindFirstArgs} args - Arguments to find a MemberFunction
     * @example
     * // Get one MemberFunction
     * const memberFunction = await prisma.memberFunction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MemberFunctionFindFirstArgs>(args?: SelectSubset<T, MemberFunctionFindFirstArgs<ExtArgs>>): Prisma__MemberFunctionClient<$Result.GetResult<Prisma.$MemberFunctionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MemberFunction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberFunctionFindFirstOrThrowArgs} args - Arguments to find a MemberFunction
     * @example
     * // Get one MemberFunction
     * const memberFunction = await prisma.memberFunction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MemberFunctionFindFirstOrThrowArgs>(args?: SelectSubset<T, MemberFunctionFindFirstOrThrowArgs<ExtArgs>>): Prisma__MemberFunctionClient<$Result.GetResult<Prisma.$MemberFunctionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MemberFunctions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberFunctionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MemberFunctions
     * const memberFunctions = await prisma.memberFunction.findMany()
     * 
     * // Get first 10 MemberFunctions
     * const memberFunctions = await prisma.memberFunction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const memberFunctionWithIdOnly = await prisma.memberFunction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MemberFunctionFindManyArgs>(args?: SelectSubset<T, MemberFunctionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberFunctionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MemberFunction.
     * @param {MemberFunctionCreateArgs} args - Arguments to create a MemberFunction.
     * @example
     * // Create one MemberFunction
     * const MemberFunction = await prisma.memberFunction.create({
     *   data: {
     *     // ... data to create a MemberFunction
     *   }
     * })
     * 
     */
    create<T extends MemberFunctionCreateArgs>(args: SelectSubset<T, MemberFunctionCreateArgs<ExtArgs>>): Prisma__MemberFunctionClient<$Result.GetResult<Prisma.$MemberFunctionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MemberFunctions.
     * @param {MemberFunctionCreateManyArgs} args - Arguments to create many MemberFunctions.
     * @example
     * // Create many MemberFunctions
     * const memberFunction = await prisma.memberFunction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MemberFunctionCreateManyArgs>(args?: SelectSubset<T, MemberFunctionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MemberFunctions and returns the data saved in the database.
     * @param {MemberFunctionCreateManyAndReturnArgs} args - Arguments to create many MemberFunctions.
     * @example
     * // Create many MemberFunctions
     * const memberFunction = await prisma.memberFunction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MemberFunctions and only return the `id`
     * const memberFunctionWithIdOnly = await prisma.memberFunction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MemberFunctionCreateManyAndReturnArgs>(args?: SelectSubset<T, MemberFunctionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberFunctionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MemberFunction.
     * @param {MemberFunctionDeleteArgs} args - Arguments to delete one MemberFunction.
     * @example
     * // Delete one MemberFunction
     * const MemberFunction = await prisma.memberFunction.delete({
     *   where: {
     *     // ... filter to delete one MemberFunction
     *   }
     * })
     * 
     */
    delete<T extends MemberFunctionDeleteArgs>(args: SelectSubset<T, MemberFunctionDeleteArgs<ExtArgs>>): Prisma__MemberFunctionClient<$Result.GetResult<Prisma.$MemberFunctionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MemberFunction.
     * @param {MemberFunctionUpdateArgs} args - Arguments to update one MemberFunction.
     * @example
     * // Update one MemberFunction
     * const memberFunction = await prisma.memberFunction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MemberFunctionUpdateArgs>(args: SelectSubset<T, MemberFunctionUpdateArgs<ExtArgs>>): Prisma__MemberFunctionClient<$Result.GetResult<Prisma.$MemberFunctionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MemberFunctions.
     * @param {MemberFunctionDeleteManyArgs} args - Arguments to filter MemberFunctions to delete.
     * @example
     * // Delete a few MemberFunctions
     * const { count } = await prisma.memberFunction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MemberFunctionDeleteManyArgs>(args?: SelectSubset<T, MemberFunctionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MemberFunctions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberFunctionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MemberFunctions
     * const memberFunction = await prisma.memberFunction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MemberFunctionUpdateManyArgs>(args: SelectSubset<T, MemberFunctionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MemberFunctions and returns the data updated in the database.
     * @param {MemberFunctionUpdateManyAndReturnArgs} args - Arguments to update many MemberFunctions.
     * @example
     * // Update many MemberFunctions
     * const memberFunction = await prisma.memberFunction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MemberFunctions and only return the `id`
     * const memberFunctionWithIdOnly = await prisma.memberFunction.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends MemberFunctionUpdateManyAndReturnArgs>(args: SelectSubset<T, MemberFunctionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberFunctionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MemberFunction.
     * @param {MemberFunctionUpsertArgs} args - Arguments to update or create a MemberFunction.
     * @example
     * // Update or create a MemberFunction
     * const memberFunction = await prisma.memberFunction.upsert({
     *   create: {
     *     // ... data to create a MemberFunction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MemberFunction we want to update
     *   }
     * })
     */
    upsert<T extends MemberFunctionUpsertArgs>(args: SelectSubset<T, MemberFunctionUpsertArgs<ExtArgs>>): Prisma__MemberFunctionClient<$Result.GetResult<Prisma.$MemberFunctionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MemberFunctions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberFunctionCountArgs} args - Arguments to filter MemberFunctions to count.
     * @example
     * // Count the number of MemberFunctions
     * const count = await prisma.memberFunction.count({
     *   where: {
     *     // ... the filter for the MemberFunctions we want to count
     *   }
     * })
    **/
    count<T extends MemberFunctionCountArgs>(
      args?: Subset<T, MemberFunctionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MemberFunctionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MemberFunction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberFunctionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MemberFunctionAggregateArgs>(args: Subset<T, MemberFunctionAggregateArgs>): Prisma.PrismaPromise<GetMemberFunctionAggregateType<T>>

    /**
     * Group by MemberFunction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberFunctionGroupByArgs} args - Group by arguments.
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
      T extends MemberFunctionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MemberFunctionGroupByArgs['orderBy'] }
        : { orderBy?: MemberFunctionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MemberFunctionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMemberFunctionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MemberFunction model
   */
  readonly fields: MemberFunctionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MemberFunction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MemberFunctionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    member<T extends MemberFunction$memberArgs<ExtArgs> = {}>(args?: Subset<T, MemberFunction$memberArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the MemberFunction model
   */
  interface MemberFunctionFieldRefs {
    readonly id: FieldRef<"MemberFunction", 'String'>
    readonly label: FieldRef<"MemberFunction", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MemberFunction findUnique
   */
  export type MemberFunctionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberFunction
     */
    select?: MemberFunctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberFunction
     */
    omit?: MemberFunctionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberFunctionInclude<ExtArgs> | null
    /**
     * Filter, which MemberFunction to fetch.
     */
    where: MemberFunctionWhereUniqueInput
  }

  /**
   * MemberFunction findUniqueOrThrow
   */
  export type MemberFunctionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberFunction
     */
    select?: MemberFunctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberFunction
     */
    omit?: MemberFunctionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberFunctionInclude<ExtArgs> | null
    /**
     * Filter, which MemberFunction to fetch.
     */
    where: MemberFunctionWhereUniqueInput
  }

  /**
   * MemberFunction findFirst
   */
  export type MemberFunctionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberFunction
     */
    select?: MemberFunctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberFunction
     */
    omit?: MemberFunctionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberFunctionInclude<ExtArgs> | null
    /**
     * Filter, which MemberFunction to fetch.
     */
    where?: MemberFunctionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MemberFunctions to fetch.
     */
    orderBy?: MemberFunctionOrderByWithRelationInput | MemberFunctionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MemberFunctions.
     */
    cursor?: MemberFunctionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MemberFunctions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MemberFunctions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MemberFunctions.
     */
    distinct?: MemberFunctionScalarFieldEnum | MemberFunctionScalarFieldEnum[]
  }

  /**
   * MemberFunction findFirstOrThrow
   */
  export type MemberFunctionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberFunction
     */
    select?: MemberFunctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberFunction
     */
    omit?: MemberFunctionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberFunctionInclude<ExtArgs> | null
    /**
     * Filter, which MemberFunction to fetch.
     */
    where?: MemberFunctionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MemberFunctions to fetch.
     */
    orderBy?: MemberFunctionOrderByWithRelationInput | MemberFunctionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MemberFunctions.
     */
    cursor?: MemberFunctionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MemberFunctions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MemberFunctions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MemberFunctions.
     */
    distinct?: MemberFunctionScalarFieldEnum | MemberFunctionScalarFieldEnum[]
  }

  /**
   * MemberFunction findMany
   */
  export type MemberFunctionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberFunction
     */
    select?: MemberFunctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberFunction
     */
    omit?: MemberFunctionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberFunctionInclude<ExtArgs> | null
    /**
     * Filter, which MemberFunctions to fetch.
     */
    where?: MemberFunctionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MemberFunctions to fetch.
     */
    orderBy?: MemberFunctionOrderByWithRelationInput | MemberFunctionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MemberFunctions.
     */
    cursor?: MemberFunctionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MemberFunctions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MemberFunctions.
     */
    skip?: number
    distinct?: MemberFunctionScalarFieldEnum | MemberFunctionScalarFieldEnum[]
  }

  /**
   * MemberFunction create
   */
  export type MemberFunctionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberFunction
     */
    select?: MemberFunctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberFunction
     */
    omit?: MemberFunctionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberFunctionInclude<ExtArgs> | null
    /**
     * The data needed to create a MemberFunction.
     */
    data: XOR<MemberFunctionCreateInput, MemberFunctionUncheckedCreateInput>
  }

  /**
   * MemberFunction createMany
   */
  export type MemberFunctionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MemberFunctions.
     */
    data: MemberFunctionCreateManyInput | MemberFunctionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MemberFunction createManyAndReturn
   */
  export type MemberFunctionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberFunction
     */
    select?: MemberFunctionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MemberFunction
     */
    omit?: MemberFunctionOmit<ExtArgs> | null
    /**
     * The data used to create many MemberFunctions.
     */
    data: MemberFunctionCreateManyInput | MemberFunctionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MemberFunction update
   */
  export type MemberFunctionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberFunction
     */
    select?: MemberFunctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberFunction
     */
    omit?: MemberFunctionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberFunctionInclude<ExtArgs> | null
    /**
     * The data needed to update a MemberFunction.
     */
    data: XOR<MemberFunctionUpdateInput, MemberFunctionUncheckedUpdateInput>
    /**
     * Choose, which MemberFunction to update.
     */
    where: MemberFunctionWhereUniqueInput
  }

  /**
   * MemberFunction updateMany
   */
  export type MemberFunctionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MemberFunctions.
     */
    data: XOR<MemberFunctionUpdateManyMutationInput, MemberFunctionUncheckedUpdateManyInput>
    /**
     * Filter which MemberFunctions to update
     */
    where?: MemberFunctionWhereInput
    /**
     * Limit how many MemberFunctions to update.
     */
    limit?: number
  }

  /**
   * MemberFunction updateManyAndReturn
   */
  export type MemberFunctionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberFunction
     */
    select?: MemberFunctionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MemberFunction
     */
    omit?: MemberFunctionOmit<ExtArgs> | null
    /**
     * The data used to update MemberFunctions.
     */
    data: XOR<MemberFunctionUpdateManyMutationInput, MemberFunctionUncheckedUpdateManyInput>
    /**
     * Filter which MemberFunctions to update
     */
    where?: MemberFunctionWhereInput
    /**
     * Limit how many MemberFunctions to update.
     */
    limit?: number
  }

  /**
   * MemberFunction upsert
   */
  export type MemberFunctionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberFunction
     */
    select?: MemberFunctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberFunction
     */
    omit?: MemberFunctionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberFunctionInclude<ExtArgs> | null
    /**
     * The filter to search for the MemberFunction to update in case it exists.
     */
    where: MemberFunctionWhereUniqueInput
    /**
     * In case the MemberFunction found by the `where` argument doesn't exist, create a new MemberFunction with this data.
     */
    create: XOR<MemberFunctionCreateInput, MemberFunctionUncheckedCreateInput>
    /**
     * In case the MemberFunction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MemberFunctionUpdateInput, MemberFunctionUncheckedUpdateInput>
  }

  /**
   * MemberFunction delete
   */
  export type MemberFunctionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberFunction
     */
    select?: MemberFunctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberFunction
     */
    omit?: MemberFunctionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberFunctionInclude<ExtArgs> | null
    /**
     * Filter which MemberFunction to delete.
     */
    where: MemberFunctionWhereUniqueInput
  }

  /**
   * MemberFunction deleteMany
   */
  export type MemberFunctionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MemberFunctions to delete
     */
    where?: MemberFunctionWhereInput
    /**
     * Limit how many MemberFunctions to delete.
     */
    limit?: number
  }

  /**
   * MemberFunction.member
   */
  export type MemberFunction$memberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Members
     */
    select?: MembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Members
     */
    omit?: MembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembersInclude<ExtArgs> | null
    where?: MembersWhereInput
    orderBy?: MembersOrderByWithRelationInput | MembersOrderByWithRelationInput[]
    cursor?: MembersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MembersScalarFieldEnum | MembersScalarFieldEnum[]
  }

  /**
   * MemberFunction without action
   */
  export type MemberFunctionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberFunction
     */
    select?: MemberFunctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberFunction
     */
    omit?: MemberFunctionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberFunctionInclude<ExtArgs> | null
  }


  /**
   * Model Members
   */

  export type AggregateMembers = {
    _count: MembersCountAggregateOutputType | null
    _min: MembersMinAggregateOutputType | null
    _max: MembersMaxAggregateOutputType | null
  }

  export type MembersMinAggregateOutputType = {
    id: string | null
    firstname: string | null
    lastname: string | null
    photo: string | null
    is_admin: boolean | null
    positionId: string | null
    categoryId: string | null
    memberFunctionId: string | null
  }

  export type MembersMaxAggregateOutputType = {
    id: string | null
    firstname: string | null
    lastname: string | null
    photo: string | null
    is_admin: boolean | null
    positionId: string | null
    categoryId: string | null
    memberFunctionId: string | null
  }

  export type MembersCountAggregateOutputType = {
    id: number
    firstname: number
    lastname: number
    photo: number
    is_admin: number
    positionId: number
    categoryId: number
    memberFunctionId: number
    _all: number
  }


  export type MembersMinAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    photo?: true
    is_admin?: true
    positionId?: true
    categoryId?: true
    memberFunctionId?: true
  }

  export type MembersMaxAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    photo?: true
    is_admin?: true
    positionId?: true
    categoryId?: true
    memberFunctionId?: true
  }

  export type MembersCountAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    photo?: true
    is_admin?: true
    positionId?: true
    categoryId?: true
    memberFunctionId?: true
    _all?: true
  }

  export type MembersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Members to aggregate.
     */
    where?: MembersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MembersOrderByWithRelationInput | MembersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MembersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Members
    **/
    _count?: true | MembersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MembersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MembersMaxAggregateInputType
  }

  export type GetMembersAggregateType<T extends MembersAggregateArgs> = {
        [P in keyof T & keyof AggregateMembers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMembers[P]>
      : GetScalarType<T[P], AggregateMembers[P]>
  }




  export type MembersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MembersWhereInput
    orderBy?: MembersOrderByWithAggregationInput | MembersOrderByWithAggregationInput[]
    by: MembersScalarFieldEnum[] | MembersScalarFieldEnum
    having?: MembersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MembersCountAggregateInputType | true
    _min?: MembersMinAggregateInputType
    _max?: MembersMaxAggregateInputType
  }

  export type MembersGroupByOutputType = {
    id: string
    firstname: string
    lastname: string
    photo: string | null
    is_admin: boolean
    positionId: string | null
    categoryId: string | null
    memberFunctionId: string | null
    _count: MembersCountAggregateOutputType | null
    _min: MembersMinAggregateOutputType | null
    _max: MembersMaxAggregateOutputType | null
  }

  type GetMembersGroupByPayload<T extends MembersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MembersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MembersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MembersGroupByOutputType[P]>
            : GetScalarType<T[P], MembersGroupByOutputType[P]>
        }
      >
    >


  export type MembersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    photo?: boolean
    is_admin?: boolean
    positionId?: boolean
    categoryId?: boolean
    memberFunctionId?: boolean
    position?: boolean | Members$positionArgs<ExtArgs>
    category?: boolean | Members$categoryArgs<ExtArgs>
    memberFunction?: boolean | Members$memberFunctionArgs<ExtArgs>
  }, ExtArgs["result"]["members"]>

  export type MembersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    photo?: boolean
    is_admin?: boolean
    positionId?: boolean
    categoryId?: boolean
    memberFunctionId?: boolean
    position?: boolean | Members$positionArgs<ExtArgs>
    category?: boolean | Members$categoryArgs<ExtArgs>
    memberFunction?: boolean | Members$memberFunctionArgs<ExtArgs>
  }, ExtArgs["result"]["members"]>

  export type MembersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    photo?: boolean
    is_admin?: boolean
    positionId?: boolean
    categoryId?: boolean
    memberFunctionId?: boolean
    position?: boolean | Members$positionArgs<ExtArgs>
    category?: boolean | Members$categoryArgs<ExtArgs>
    memberFunction?: boolean | Members$memberFunctionArgs<ExtArgs>
  }, ExtArgs["result"]["members"]>

  export type MembersSelectScalar = {
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    photo?: boolean
    is_admin?: boolean
    positionId?: boolean
    categoryId?: boolean
    memberFunctionId?: boolean
  }

  export type MembersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstname" | "lastname" | "photo" | "is_admin" | "positionId" | "categoryId" | "memberFunctionId", ExtArgs["result"]["members"]>
  export type MembersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    position?: boolean | Members$positionArgs<ExtArgs>
    category?: boolean | Members$categoryArgs<ExtArgs>
    memberFunction?: boolean | Members$memberFunctionArgs<ExtArgs>
  }
  export type MembersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    position?: boolean | Members$positionArgs<ExtArgs>
    category?: boolean | Members$categoryArgs<ExtArgs>
    memberFunction?: boolean | Members$memberFunctionArgs<ExtArgs>
  }
  export type MembersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    position?: boolean | Members$positionArgs<ExtArgs>
    category?: boolean | Members$categoryArgs<ExtArgs>
    memberFunction?: boolean | Members$memberFunctionArgs<ExtArgs>
  }

  export type $MembersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Members"
    objects: {
      position: Prisma.$Player_positionPayload<ExtArgs> | null
      category: Prisma.$CategoryPayload<ExtArgs> | null
      memberFunction: Prisma.$MemberFunctionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstname: string
      lastname: string
      photo: string | null
      is_admin: boolean
      positionId: string | null
      categoryId: string | null
      memberFunctionId: string | null
    }, ExtArgs["result"]["members"]>
    composites: {}
  }

  type MembersGetPayload<S extends boolean | null | undefined | MembersDefaultArgs> = $Result.GetResult<Prisma.$MembersPayload, S>

  type MembersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MembersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MembersCountAggregateInputType | true
    }

  export interface MembersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Members'], meta: { name: 'Members' } }
    /**
     * Find zero or one Members that matches the filter.
     * @param {MembersFindUniqueArgs} args - Arguments to find a Members
     * @example
     * // Get one Members
     * const members = await prisma.members.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MembersFindUniqueArgs>(args: SelectSubset<T, MembersFindUniqueArgs<ExtArgs>>): Prisma__MembersClient<$Result.GetResult<Prisma.$MembersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Members that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MembersFindUniqueOrThrowArgs} args - Arguments to find a Members
     * @example
     * // Get one Members
     * const members = await prisma.members.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MembersFindUniqueOrThrowArgs>(args: SelectSubset<T, MembersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MembersClient<$Result.GetResult<Prisma.$MembersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Members that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembersFindFirstArgs} args - Arguments to find a Members
     * @example
     * // Get one Members
     * const members = await prisma.members.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MembersFindFirstArgs>(args?: SelectSubset<T, MembersFindFirstArgs<ExtArgs>>): Prisma__MembersClient<$Result.GetResult<Prisma.$MembersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Members that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembersFindFirstOrThrowArgs} args - Arguments to find a Members
     * @example
     * // Get one Members
     * const members = await prisma.members.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MembersFindFirstOrThrowArgs>(args?: SelectSubset<T, MembersFindFirstOrThrowArgs<ExtArgs>>): Prisma__MembersClient<$Result.GetResult<Prisma.$MembersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Members that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Members
     * const members = await prisma.members.findMany()
     * 
     * // Get first 10 Members
     * const members = await prisma.members.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const membersWithIdOnly = await prisma.members.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MembersFindManyArgs>(args?: SelectSubset<T, MembersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Members.
     * @param {MembersCreateArgs} args - Arguments to create a Members.
     * @example
     * // Create one Members
     * const Members = await prisma.members.create({
     *   data: {
     *     // ... data to create a Members
     *   }
     * })
     * 
     */
    create<T extends MembersCreateArgs>(args: SelectSubset<T, MembersCreateArgs<ExtArgs>>): Prisma__MembersClient<$Result.GetResult<Prisma.$MembersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Members.
     * @param {MembersCreateManyArgs} args - Arguments to create many Members.
     * @example
     * // Create many Members
     * const members = await prisma.members.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MembersCreateManyArgs>(args?: SelectSubset<T, MembersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Members and returns the data saved in the database.
     * @param {MembersCreateManyAndReturnArgs} args - Arguments to create many Members.
     * @example
     * // Create many Members
     * const members = await prisma.members.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Members and only return the `id`
     * const membersWithIdOnly = await prisma.members.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MembersCreateManyAndReturnArgs>(args?: SelectSubset<T, MembersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Members.
     * @param {MembersDeleteArgs} args - Arguments to delete one Members.
     * @example
     * // Delete one Members
     * const Members = await prisma.members.delete({
     *   where: {
     *     // ... filter to delete one Members
     *   }
     * })
     * 
     */
    delete<T extends MembersDeleteArgs>(args: SelectSubset<T, MembersDeleteArgs<ExtArgs>>): Prisma__MembersClient<$Result.GetResult<Prisma.$MembersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Members.
     * @param {MembersUpdateArgs} args - Arguments to update one Members.
     * @example
     * // Update one Members
     * const members = await prisma.members.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MembersUpdateArgs>(args: SelectSubset<T, MembersUpdateArgs<ExtArgs>>): Prisma__MembersClient<$Result.GetResult<Prisma.$MembersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Members.
     * @param {MembersDeleteManyArgs} args - Arguments to filter Members to delete.
     * @example
     * // Delete a few Members
     * const { count } = await prisma.members.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MembersDeleteManyArgs>(args?: SelectSubset<T, MembersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Members
     * const members = await prisma.members.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MembersUpdateManyArgs>(args: SelectSubset<T, MembersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Members and returns the data updated in the database.
     * @param {MembersUpdateManyAndReturnArgs} args - Arguments to update many Members.
     * @example
     * // Update many Members
     * const members = await prisma.members.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Members and only return the `id`
     * const membersWithIdOnly = await prisma.members.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends MembersUpdateManyAndReturnArgs>(args: SelectSubset<T, MembersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Members.
     * @param {MembersUpsertArgs} args - Arguments to update or create a Members.
     * @example
     * // Update or create a Members
     * const members = await prisma.members.upsert({
     *   create: {
     *     // ... data to create a Members
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Members we want to update
     *   }
     * })
     */
    upsert<T extends MembersUpsertArgs>(args: SelectSubset<T, MembersUpsertArgs<ExtArgs>>): Prisma__MembersClient<$Result.GetResult<Prisma.$MembersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembersCountArgs} args - Arguments to filter Members to count.
     * @example
     * // Count the number of Members
     * const count = await prisma.members.count({
     *   where: {
     *     // ... the filter for the Members we want to count
     *   }
     * })
    **/
    count<T extends MembersCountArgs>(
      args?: Subset<T, MembersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MembersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MembersAggregateArgs>(args: Subset<T, MembersAggregateArgs>): Prisma.PrismaPromise<GetMembersAggregateType<T>>

    /**
     * Group by Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembersGroupByArgs} args - Group by arguments.
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
      T extends MembersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MembersGroupByArgs['orderBy'] }
        : { orderBy?: MembersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MembersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMembersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Members model
   */
  readonly fields: MembersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Members.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MembersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    position<T extends Members$positionArgs<ExtArgs> = {}>(args?: Subset<T, Members$positionArgs<ExtArgs>>): Prisma__Player_positionClient<$Result.GetResult<Prisma.$Player_positionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    category<T extends Members$categoryArgs<ExtArgs> = {}>(args?: Subset<T, Members$categoryArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    memberFunction<T extends Members$memberFunctionArgs<ExtArgs> = {}>(args?: Subset<T, Members$memberFunctionArgs<ExtArgs>>): Prisma__MemberFunctionClient<$Result.GetResult<Prisma.$MemberFunctionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Members model
   */
  interface MembersFieldRefs {
    readonly id: FieldRef<"Members", 'String'>
    readonly firstname: FieldRef<"Members", 'String'>
    readonly lastname: FieldRef<"Members", 'String'>
    readonly photo: FieldRef<"Members", 'String'>
    readonly is_admin: FieldRef<"Members", 'Boolean'>
    readonly positionId: FieldRef<"Members", 'String'>
    readonly categoryId: FieldRef<"Members", 'String'>
    readonly memberFunctionId: FieldRef<"Members", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Members findUnique
   */
  export type MembersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Members
     */
    select?: MembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Members
     */
    omit?: MembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembersInclude<ExtArgs> | null
    /**
     * Filter, which Members to fetch.
     */
    where: MembersWhereUniqueInput
  }

  /**
   * Members findUniqueOrThrow
   */
  export type MembersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Members
     */
    select?: MembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Members
     */
    omit?: MembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembersInclude<ExtArgs> | null
    /**
     * Filter, which Members to fetch.
     */
    where: MembersWhereUniqueInput
  }

  /**
   * Members findFirst
   */
  export type MembersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Members
     */
    select?: MembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Members
     */
    omit?: MembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembersInclude<ExtArgs> | null
    /**
     * Filter, which Members to fetch.
     */
    where?: MembersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MembersOrderByWithRelationInput | MembersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Members.
     */
    cursor?: MembersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Members.
     */
    distinct?: MembersScalarFieldEnum | MembersScalarFieldEnum[]
  }

  /**
   * Members findFirstOrThrow
   */
  export type MembersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Members
     */
    select?: MembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Members
     */
    omit?: MembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembersInclude<ExtArgs> | null
    /**
     * Filter, which Members to fetch.
     */
    where?: MembersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MembersOrderByWithRelationInput | MembersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Members.
     */
    cursor?: MembersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Members.
     */
    distinct?: MembersScalarFieldEnum | MembersScalarFieldEnum[]
  }

  /**
   * Members findMany
   */
  export type MembersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Members
     */
    select?: MembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Members
     */
    omit?: MembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembersInclude<ExtArgs> | null
    /**
     * Filter, which Members to fetch.
     */
    where?: MembersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MembersOrderByWithRelationInput | MembersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Members.
     */
    cursor?: MembersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    distinct?: MembersScalarFieldEnum | MembersScalarFieldEnum[]
  }

  /**
   * Members create
   */
  export type MembersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Members
     */
    select?: MembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Members
     */
    omit?: MembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembersInclude<ExtArgs> | null
    /**
     * The data needed to create a Members.
     */
    data: XOR<MembersCreateInput, MembersUncheckedCreateInput>
  }

  /**
   * Members createMany
   */
  export type MembersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Members.
     */
    data: MembersCreateManyInput | MembersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Members createManyAndReturn
   */
  export type MembersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Members
     */
    select?: MembersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Members
     */
    omit?: MembersOmit<ExtArgs> | null
    /**
     * The data used to create many Members.
     */
    data: MembersCreateManyInput | MembersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Members update
   */
  export type MembersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Members
     */
    select?: MembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Members
     */
    omit?: MembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembersInclude<ExtArgs> | null
    /**
     * The data needed to update a Members.
     */
    data: XOR<MembersUpdateInput, MembersUncheckedUpdateInput>
    /**
     * Choose, which Members to update.
     */
    where: MembersWhereUniqueInput
  }

  /**
   * Members updateMany
   */
  export type MembersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Members.
     */
    data: XOR<MembersUpdateManyMutationInput, MembersUncheckedUpdateManyInput>
    /**
     * Filter which Members to update
     */
    where?: MembersWhereInput
    /**
     * Limit how many Members to update.
     */
    limit?: number
  }

  /**
   * Members updateManyAndReturn
   */
  export type MembersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Members
     */
    select?: MembersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Members
     */
    omit?: MembersOmit<ExtArgs> | null
    /**
     * The data used to update Members.
     */
    data: XOR<MembersUpdateManyMutationInput, MembersUncheckedUpdateManyInput>
    /**
     * Filter which Members to update
     */
    where?: MembersWhereInput
    /**
     * Limit how many Members to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Members upsert
   */
  export type MembersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Members
     */
    select?: MembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Members
     */
    omit?: MembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembersInclude<ExtArgs> | null
    /**
     * The filter to search for the Members to update in case it exists.
     */
    where: MembersWhereUniqueInput
    /**
     * In case the Members found by the `where` argument doesn't exist, create a new Members with this data.
     */
    create: XOR<MembersCreateInput, MembersUncheckedCreateInput>
    /**
     * In case the Members was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MembersUpdateInput, MembersUncheckedUpdateInput>
  }

  /**
   * Members delete
   */
  export type MembersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Members
     */
    select?: MembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Members
     */
    omit?: MembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembersInclude<ExtArgs> | null
    /**
     * Filter which Members to delete.
     */
    where: MembersWhereUniqueInput
  }

  /**
   * Members deleteMany
   */
  export type MembersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Members to delete
     */
    where?: MembersWhereInput
    /**
     * Limit how many Members to delete.
     */
    limit?: number
  }

  /**
   * Members.position
   */
  export type Members$positionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player_position
     */
    select?: Player_positionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player_position
     */
    omit?: Player_positionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Player_positionInclude<ExtArgs> | null
    where?: Player_positionWhereInput
  }

  /**
   * Members.category
   */
  export type Members$categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
  }

  /**
   * Members.memberFunction
   */
  export type Members$memberFunctionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberFunction
     */
    select?: MemberFunctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberFunction
     */
    omit?: MemberFunctionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberFunctionInclude<ExtArgs> | null
    where?: MemberFunctionWhereInput
  }

  /**
   * Members without action
   */
  export type MembersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Members
     */
    select?: MembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Members
     */
    omit?: MembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembersInclude<ExtArgs> | null
  }


  /**
   * Model Club
   */

  export type AggregateClub = {
    _count: ClubCountAggregateOutputType | null
    _min: ClubMinAggregateOutputType | null
    _max: ClubMaxAggregateOutputType | null
  }

  export type ClubMinAggregateOutputType = {
    id: string | null
    history: string | null
  }

  export type ClubMaxAggregateOutputType = {
    id: string | null
    history: string | null
  }

  export type ClubCountAggregateOutputType = {
    id: number
    history: number
    _all: number
  }


  export type ClubMinAggregateInputType = {
    id?: true
    history?: true
  }

  export type ClubMaxAggregateInputType = {
    id?: true
    history?: true
  }

  export type ClubCountAggregateInputType = {
    id?: true
    history?: true
    _all?: true
  }

  export type ClubAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Club to aggregate.
     */
    where?: ClubWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clubs to fetch.
     */
    orderBy?: ClubOrderByWithRelationInput | ClubOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClubWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clubs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clubs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clubs
    **/
    _count?: true | ClubCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClubMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClubMaxAggregateInputType
  }

  export type GetClubAggregateType<T extends ClubAggregateArgs> = {
        [P in keyof T & keyof AggregateClub]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClub[P]>
      : GetScalarType<T[P], AggregateClub[P]>
  }




  export type ClubGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClubWhereInput
    orderBy?: ClubOrderByWithAggregationInput | ClubOrderByWithAggregationInput[]
    by: ClubScalarFieldEnum[] | ClubScalarFieldEnum
    having?: ClubScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClubCountAggregateInputType | true
    _min?: ClubMinAggregateInputType
    _max?: ClubMaxAggregateInputType
  }

  export type ClubGroupByOutputType = {
    id: string
    history: string
    _count: ClubCountAggregateOutputType | null
    _min: ClubMinAggregateOutputType | null
    _max: ClubMaxAggregateOutputType | null
  }

  type GetClubGroupByPayload<T extends ClubGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClubGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClubGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClubGroupByOutputType[P]>
            : GetScalarType<T[P], ClubGroupByOutputType[P]>
        }
      >
    >


  export type ClubSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    history?: boolean
  }, ExtArgs["result"]["club"]>

  export type ClubSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    history?: boolean
  }, ExtArgs["result"]["club"]>

  export type ClubSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    history?: boolean
  }, ExtArgs["result"]["club"]>

  export type ClubSelectScalar = {
    id?: boolean
    history?: boolean
  }

  export type ClubOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "history", ExtArgs["result"]["club"]>

  export type $ClubPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Club"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      history: string
    }, ExtArgs["result"]["club"]>
    composites: {}
  }

  type ClubGetPayload<S extends boolean | null | undefined | ClubDefaultArgs> = $Result.GetResult<Prisma.$ClubPayload, S>

  type ClubCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClubFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClubCountAggregateInputType | true
    }

  export interface ClubDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Club'], meta: { name: 'Club' } }
    /**
     * Find zero or one Club that matches the filter.
     * @param {ClubFindUniqueArgs} args - Arguments to find a Club
     * @example
     * // Get one Club
     * const club = await prisma.club.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClubFindUniqueArgs>(args: SelectSubset<T, ClubFindUniqueArgs<ExtArgs>>): Prisma__ClubClient<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Club that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClubFindUniqueOrThrowArgs} args - Arguments to find a Club
     * @example
     * // Get one Club
     * const club = await prisma.club.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClubFindUniqueOrThrowArgs>(args: SelectSubset<T, ClubFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClubClient<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Club that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClubFindFirstArgs} args - Arguments to find a Club
     * @example
     * // Get one Club
     * const club = await prisma.club.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClubFindFirstArgs>(args?: SelectSubset<T, ClubFindFirstArgs<ExtArgs>>): Prisma__ClubClient<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Club that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClubFindFirstOrThrowArgs} args - Arguments to find a Club
     * @example
     * // Get one Club
     * const club = await prisma.club.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClubFindFirstOrThrowArgs>(args?: SelectSubset<T, ClubFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClubClient<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clubs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClubFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clubs
     * const clubs = await prisma.club.findMany()
     * 
     * // Get first 10 Clubs
     * const clubs = await prisma.club.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clubWithIdOnly = await prisma.club.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClubFindManyArgs>(args?: SelectSubset<T, ClubFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Club.
     * @param {ClubCreateArgs} args - Arguments to create a Club.
     * @example
     * // Create one Club
     * const Club = await prisma.club.create({
     *   data: {
     *     // ... data to create a Club
     *   }
     * })
     * 
     */
    create<T extends ClubCreateArgs>(args: SelectSubset<T, ClubCreateArgs<ExtArgs>>): Prisma__ClubClient<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clubs.
     * @param {ClubCreateManyArgs} args - Arguments to create many Clubs.
     * @example
     * // Create many Clubs
     * const club = await prisma.club.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClubCreateManyArgs>(args?: SelectSubset<T, ClubCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clubs and returns the data saved in the database.
     * @param {ClubCreateManyAndReturnArgs} args - Arguments to create many Clubs.
     * @example
     * // Create many Clubs
     * const club = await prisma.club.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clubs and only return the `id`
     * const clubWithIdOnly = await prisma.club.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClubCreateManyAndReturnArgs>(args?: SelectSubset<T, ClubCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Club.
     * @param {ClubDeleteArgs} args - Arguments to delete one Club.
     * @example
     * // Delete one Club
     * const Club = await prisma.club.delete({
     *   where: {
     *     // ... filter to delete one Club
     *   }
     * })
     * 
     */
    delete<T extends ClubDeleteArgs>(args: SelectSubset<T, ClubDeleteArgs<ExtArgs>>): Prisma__ClubClient<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Club.
     * @param {ClubUpdateArgs} args - Arguments to update one Club.
     * @example
     * // Update one Club
     * const club = await prisma.club.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClubUpdateArgs>(args: SelectSubset<T, ClubUpdateArgs<ExtArgs>>): Prisma__ClubClient<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clubs.
     * @param {ClubDeleteManyArgs} args - Arguments to filter Clubs to delete.
     * @example
     * // Delete a few Clubs
     * const { count } = await prisma.club.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClubDeleteManyArgs>(args?: SelectSubset<T, ClubDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clubs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClubUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clubs
     * const club = await prisma.club.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClubUpdateManyArgs>(args: SelectSubset<T, ClubUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clubs and returns the data updated in the database.
     * @param {ClubUpdateManyAndReturnArgs} args - Arguments to update many Clubs.
     * @example
     * // Update many Clubs
     * const club = await prisma.club.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clubs and only return the `id`
     * const clubWithIdOnly = await prisma.club.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends ClubUpdateManyAndReturnArgs>(args: SelectSubset<T, ClubUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Club.
     * @param {ClubUpsertArgs} args - Arguments to update or create a Club.
     * @example
     * // Update or create a Club
     * const club = await prisma.club.upsert({
     *   create: {
     *     // ... data to create a Club
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Club we want to update
     *   }
     * })
     */
    upsert<T extends ClubUpsertArgs>(args: SelectSubset<T, ClubUpsertArgs<ExtArgs>>): Prisma__ClubClient<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clubs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClubCountArgs} args - Arguments to filter Clubs to count.
     * @example
     * // Count the number of Clubs
     * const count = await prisma.club.count({
     *   where: {
     *     // ... the filter for the Clubs we want to count
     *   }
     * })
    **/
    count<T extends ClubCountArgs>(
      args?: Subset<T, ClubCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClubCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Club.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClubAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClubAggregateArgs>(args: Subset<T, ClubAggregateArgs>): Prisma.PrismaPromise<GetClubAggregateType<T>>

    /**
     * Group by Club.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClubGroupByArgs} args - Group by arguments.
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
      T extends ClubGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClubGroupByArgs['orderBy'] }
        : { orderBy?: ClubGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClubGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClubGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Club model
   */
  readonly fields: ClubFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Club.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClubClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Club model
   */
  interface ClubFieldRefs {
    readonly id: FieldRef<"Club", 'String'>
    readonly history: FieldRef<"Club", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Club findUnique
   */
  export type ClubFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * Filter, which Club to fetch.
     */
    where: ClubWhereUniqueInput
  }

  /**
   * Club findUniqueOrThrow
   */
  export type ClubFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * Filter, which Club to fetch.
     */
    where: ClubWhereUniqueInput
  }

  /**
   * Club findFirst
   */
  export type ClubFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * Filter, which Club to fetch.
     */
    where?: ClubWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clubs to fetch.
     */
    orderBy?: ClubOrderByWithRelationInput | ClubOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clubs.
     */
    cursor?: ClubWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clubs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clubs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clubs.
     */
    distinct?: ClubScalarFieldEnum | ClubScalarFieldEnum[]
  }

  /**
   * Club findFirstOrThrow
   */
  export type ClubFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * Filter, which Club to fetch.
     */
    where?: ClubWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clubs to fetch.
     */
    orderBy?: ClubOrderByWithRelationInput | ClubOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clubs.
     */
    cursor?: ClubWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clubs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clubs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clubs.
     */
    distinct?: ClubScalarFieldEnum | ClubScalarFieldEnum[]
  }

  /**
   * Club findMany
   */
  export type ClubFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * Filter, which Clubs to fetch.
     */
    where?: ClubWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clubs to fetch.
     */
    orderBy?: ClubOrderByWithRelationInput | ClubOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clubs.
     */
    cursor?: ClubWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clubs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clubs.
     */
    skip?: number
    distinct?: ClubScalarFieldEnum | ClubScalarFieldEnum[]
  }

  /**
   * Club create
   */
  export type ClubCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * The data needed to create a Club.
     */
    data: XOR<ClubCreateInput, ClubUncheckedCreateInput>
  }

  /**
   * Club createMany
   */
  export type ClubCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clubs.
     */
    data: ClubCreateManyInput | ClubCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Club createManyAndReturn
   */
  export type ClubCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * The data used to create many Clubs.
     */
    data: ClubCreateManyInput | ClubCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Club update
   */
  export type ClubUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * The data needed to update a Club.
     */
    data: XOR<ClubUpdateInput, ClubUncheckedUpdateInput>
    /**
     * Choose, which Club to update.
     */
    where: ClubWhereUniqueInput
  }

  /**
   * Club updateMany
   */
  export type ClubUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clubs.
     */
    data: XOR<ClubUpdateManyMutationInput, ClubUncheckedUpdateManyInput>
    /**
     * Filter which Clubs to update
     */
    where?: ClubWhereInput
    /**
     * Limit how many Clubs to update.
     */
    limit?: number
  }

  /**
   * Club updateManyAndReturn
   */
  export type ClubUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * The data used to update Clubs.
     */
    data: XOR<ClubUpdateManyMutationInput, ClubUncheckedUpdateManyInput>
    /**
     * Filter which Clubs to update
     */
    where?: ClubWhereInput
    /**
     * Limit how many Clubs to update.
     */
    limit?: number
  }

  /**
   * Club upsert
   */
  export type ClubUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * The filter to search for the Club to update in case it exists.
     */
    where: ClubWhereUniqueInput
    /**
     * In case the Club found by the `where` argument doesn't exist, create a new Club with this data.
     */
    create: XOR<ClubCreateInput, ClubUncheckedCreateInput>
    /**
     * In case the Club was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClubUpdateInput, ClubUncheckedUpdateInput>
  }

  /**
   * Club delete
   */
  export type ClubDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * Filter which Club to delete.
     */
    where: ClubWhereUniqueInput
  }

  /**
   * Club deleteMany
   */
  export type ClubDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clubs to delete
     */
    where?: ClubWhereInput
    /**
     * Limit how many Clubs to delete.
     */
    limit?: number
  }

  /**
   * Club without action
   */
  export type ClubDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
  }


  /**
   * Model Partner
   */

  export type AggregatePartner = {
    _count: PartnerCountAggregateOutputType | null
    _min: PartnerMinAggregateOutputType | null
    _max: PartnerMaxAggregateOutputType | null
  }

  export type PartnerMinAggregateOutputType = {
    id: string | null
    name: string | null
    photo: string | null
    is_main: boolean | null
  }

  export type PartnerMaxAggregateOutputType = {
    id: string | null
    name: string | null
    photo: string | null
    is_main: boolean | null
  }

  export type PartnerCountAggregateOutputType = {
    id: number
    name: number
    photo: number
    is_main: number
    _all: number
  }


  export type PartnerMinAggregateInputType = {
    id?: true
    name?: true
    photo?: true
    is_main?: true
  }

  export type PartnerMaxAggregateInputType = {
    id?: true
    name?: true
    photo?: true
    is_main?: true
  }

  export type PartnerCountAggregateInputType = {
    id?: true
    name?: true
    photo?: true
    is_main?: true
    _all?: true
  }

  export type PartnerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Partner to aggregate.
     */
    where?: PartnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Partners to fetch.
     */
    orderBy?: PartnerOrderByWithRelationInput | PartnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PartnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Partners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Partners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Partners
    **/
    _count?: true | PartnerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PartnerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PartnerMaxAggregateInputType
  }

  export type GetPartnerAggregateType<T extends PartnerAggregateArgs> = {
        [P in keyof T & keyof AggregatePartner]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePartner[P]>
      : GetScalarType<T[P], AggregatePartner[P]>
  }




  export type PartnerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PartnerWhereInput
    orderBy?: PartnerOrderByWithAggregationInput | PartnerOrderByWithAggregationInput[]
    by: PartnerScalarFieldEnum[] | PartnerScalarFieldEnum
    having?: PartnerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PartnerCountAggregateInputType | true
    _min?: PartnerMinAggregateInputType
    _max?: PartnerMaxAggregateInputType
  }

  export type PartnerGroupByOutputType = {
    id: string
    name: string
    photo: string
    is_main: boolean
    _count: PartnerCountAggregateOutputType | null
    _min: PartnerMinAggregateOutputType | null
    _max: PartnerMaxAggregateOutputType | null
  }

  type GetPartnerGroupByPayload<T extends PartnerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PartnerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PartnerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PartnerGroupByOutputType[P]>
            : GetScalarType<T[P], PartnerGroupByOutputType[P]>
        }
      >
    >


  export type PartnerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    photo?: boolean
    is_main?: boolean
  }, ExtArgs["result"]["partner"]>

  export type PartnerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    photo?: boolean
    is_main?: boolean
  }, ExtArgs["result"]["partner"]>

  export type PartnerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    photo?: boolean
    is_main?: boolean
  }, ExtArgs["result"]["partner"]>

  export type PartnerSelectScalar = {
    id?: boolean
    name?: boolean
    photo?: boolean
    is_main?: boolean
  }

  export type PartnerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "photo" | "is_main", ExtArgs["result"]["partner"]>

  export type $PartnerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Partner"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      photo: string
      is_main: boolean
    }, ExtArgs["result"]["partner"]>
    composites: {}
  }

  type PartnerGetPayload<S extends boolean | null | undefined | PartnerDefaultArgs> = $Result.GetResult<Prisma.$PartnerPayload, S>

  type PartnerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PartnerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PartnerCountAggregateInputType | true
    }

  export interface PartnerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Partner'], meta: { name: 'Partner' } }
    /**
     * Find zero or one Partner that matches the filter.
     * @param {PartnerFindUniqueArgs} args - Arguments to find a Partner
     * @example
     * // Get one Partner
     * const partner = await prisma.partner.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PartnerFindUniqueArgs>(args: SelectSubset<T, PartnerFindUniqueArgs<ExtArgs>>): Prisma__PartnerClient<$Result.GetResult<Prisma.$PartnerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Partner that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PartnerFindUniqueOrThrowArgs} args - Arguments to find a Partner
     * @example
     * // Get one Partner
     * const partner = await prisma.partner.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PartnerFindUniqueOrThrowArgs>(args: SelectSubset<T, PartnerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PartnerClient<$Result.GetResult<Prisma.$PartnerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Partner that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerFindFirstArgs} args - Arguments to find a Partner
     * @example
     * // Get one Partner
     * const partner = await prisma.partner.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PartnerFindFirstArgs>(args?: SelectSubset<T, PartnerFindFirstArgs<ExtArgs>>): Prisma__PartnerClient<$Result.GetResult<Prisma.$PartnerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Partner that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerFindFirstOrThrowArgs} args - Arguments to find a Partner
     * @example
     * // Get one Partner
     * const partner = await prisma.partner.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PartnerFindFirstOrThrowArgs>(args?: SelectSubset<T, PartnerFindFirstOrThrowArgs<ExtArgs>>): Prisma__PartnerClient<$Result.GetResult<Prisma.$PartnerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Partners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Partners
     * const partners = await prisma.partner.findMany()
     * 
     * // Get first 10 Partners
     * const partners = await prisma.partner.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const partnerWithIdOnly = await prisma.partner.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PartnerFindManyArgs>(args?: SelectSubset<T, PartnerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartnerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Partner.
     * @param {PartnerCreateArgs} args - Arguments to create a Partner.
     * @example
     * // Create one Partner
     * const Partner = await prisma.partner.create({
     *   data: {
     *     // ... data to create a Partner
     *   }
     * })
     * 
     */
    create<T extends PartnerCreateArgs>(args: SelectSubset<T, PartnerCreateArgs<ExtArgs>>): Prisma__PartnerClient<$Result.GetResult<Prisma.$PartnerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Partners.
     * @param {PartnerCreateManyArgs} args - Arguments to create many Partners.
     * @example
     * // Create many Partners
     * const partner = await prisma.partner.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PartnerCreateManyArgs>(args?: SelectSubset<T, PartnerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Partners and returns the data saved in the database.
     * @param {PartnerCreateManyAndReturnArgs} args - Arguments to create many Partners.
     * @example
     * // Create many Partners
     * const partner = await prisma.partner.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Partners and only return the `id`
     * const partnerWithIdOnly = await prisma.partner.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PartnerCreateManyAndReturnArgs>(args?: SelectSubset<T, PartnerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartnerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Partner.
     * @param {PartnerDeleteArgs} args - Arguments to delete one Partner.
     * @example
     * // Delete one Partner
     * const Partner = await prisma.partner.delete({
     *   where: {
     *     // ... filter to delete one Partner
     *   }
     * })
     * 
     */
    delete<T extends PartnerDeleteArgs>(args: SelectSubset<T, PartnerDeleteArgs<ExtArgs>>): Prisma__PartnerClient<$Result.GetResult<Prisma.$PartnerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Partner.
     * @param {PartnerUpdateArgs} args - Arguments to update one Partner.
     * @example
     * // Update one Partner
     * const partner = await prisma.partner.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PartnerUpdateArgs>(args: SelectSubset<T, PartnerUpdateArgs<ExtArgs>>): Prisma__PartnerClient<$Result.GetResult<Prisma.$PartnerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Partners.
     * @param {PartnerDeleteManyArgs} args - Arguments to filter Partners to delete.
     * @example
     * // Delete a few Partners
     * const { count } = await prisma.partner.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PartnerDeleteManyArgs>(args?: SelectSubset<T, PartnerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Partners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Partners
     * const partner = await prisma.partner.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PartnerUpdateManyArgs>(args: SelectSubset<T, PartnerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Partners and returns the data updated in the database.
     * @param {PartnerUpdateManyAndReturnArgs} args - Arguments to update many Partners.
     * @example
     * // Update many Partners
     * const partner = await prisma.partner.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Partners and only return the `id`
     * const partnerWithIdOnly = await prisma.partner.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends PartnerUpdateManyAndReturnArgs>(args: SelectSubset<T, PartnerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartnerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Partner.
     * @param {PartnerUpsertArgs} args - Arguments to update or create a Partner.
     * @example
     * // Update or create a Partner
     * const partner = await prisma.partner.upsert({
     *   create: {
     *     // ... data to create a Partner
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Partner we want to update
     *   }
     * })
     */
    upsert<T extends PartnerUpsertArgs>(args: SelectSubset<T, PartnerUpsertArgs<ExtArgs>>): Prisma__PartnerClient<$Result.GetResult<Prisma.$PartnerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Partners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerCountArgs} args - Arguments to filter Partners to count.
     * @example
     * // Count the number of Partners
     * const count = await prisma.partner.count({
     *   where: {
     *     // ... the filter for the Partners we want to count
     *   }
     * })
    **/
    count<T extends PartnerCountArgs>(
      args?: Subset<T, PartnerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PartnerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Partner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PartnerAggregateArgs>(args: Subset<T, PartnerAggregateArgs>): Prisma.PrismaPromise<GetPartnerAggregateType<T>>

    /**
     * Group by Partner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerGroupByArgs} args - Group by arguments.
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
      T extends PartnerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PartnerGroupByArgs['orderBy'] }
        : { orderBy?: PartnerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PartnerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPartnerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Partner model
   */
  readonly fields: PartnerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Partner.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PartnerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Partner model
   */
  interface PartnerFieldRefs {
    readonly id: FieldRef<"Partner", 'String'>
    readonly name: FieldRef<"Partner", 'String'>
    readonly photo: FieldRef<"Partner", 'String'>
    readonly is_main: FieldRef<"Partner", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Partner findUnique
   */
  export type PartnerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partner
     */
    select?: PartnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partner
     */
    omit?: PartnerOmit<ExtArgs> | null
    /**
     * Filter, which Partner to fetch.
     */
    where: PartnerWhereUniqueInput
  }

  /**
   * Partner findUniqueOrThrow
   */
  export type PartnerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partner
     */
    select?: PartnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partner
     */
    omit?: PartnerOmit<ExtArgs> | null
    /**
     * Filter, which Partner to fetch.
     */
    where: PartnerWhereUniqueInput
  }

  /**
   * Partner findFirst
   */
  export type PartnerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partner
     */
    select?: PartnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partner
     */
    omit?: PartnerOmit<ExtArgs> | null
    /**
     * Filter, which Partner to fetch.
     */
    where?: PartnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Partners to fetch.
     */
    orderBy?: PartnerOrderByWithRelationInput | PartnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Partners.
     */
    cursor?: PartnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Partners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Partners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Partners.
     */
    distinct?: PartnerScalarFieldEnum | PartnerScalarFieldEnum[]
  }

  /**
   * Partner findFirstOrThrow
   */
  export type PartnerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partner
     */
    select?: PartnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partner
     */
    omit?: PartnerOmit<ExtArgs> | null
    /**
     * Filter, which Partner to fetch.
     */
    where?: PartnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Partners to fetch.
     */
    orderBy?: PartnerOrderByWithRelationInput | PartnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Partners.
     */
    cursor?: PartnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Partners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Partners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Partners.
     */
    distinct?: PartnerScalarFieldEnum | PartnerScalarFieldEnum[]
  }

  /**
   * Partner findMany
   */
  export type PartnerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partner
     */
    select?: PartnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partner
     */
    omit?: PartnerOmit<ExtArgs> | null
    /**
     * Filter, which Partners to fetch.
     */
    where?: PartnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Partners to fetch.
     */
    orderBy?: PartnerOrderByWithRelationInput | PartnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Partners.
     */
    cursor?: PartnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Partners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Partners.
     */
    skip?: number
    distinct?: PartnerScalarFieldEnum | PartnerScalarFieldEnum[]
  }

  /**
   * Partner create
   */
  export type PartnerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partner
     */
    select?: PartnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partner
     */
    omit?: PartnerOmit<ExtArgs> | null
    /**
     * The data needed to create a Partner.
     */
    data: XOR<PartnerCreateInput, PartnerUncheckedCreateInput>
  }

  /**
   * Partner createMany
   */
  export type PartnerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Partners.
     */
    data: PartnerCreateManyInput | PartnerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Partner createManyAndReturn
   */
  export type PartnerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partner
     */
    select?: PartnerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Partner
     */
    omit?: PartnerOmit<ExtArgs> | null
    /**
     * The data used to create many Partners.
     */
    data: PartnerCreateManyInput | PartnerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Partner update
   */
  export type PartnerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partner
     */
    select?: PartnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partner
     */
    omit?: PartnerOmit<ExtArgs> | null
    /**
     * The data needed to update a Partner.
     */
    data: XOR<PartnerUpdateInput, PartnerUncheckedUpdateInput>
    /**
     * Choose, which Partner to update.
     */
    where: PartnerWhereUniqueInput
  }

  /**
   * Partner updateMany
   */
  export type PartnerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Partners.
     */
    data: XOR<PartnerUpdateManyMutationInput, PartnerUncheckedUpdateManyInput>
    /**
     * Filter which Partners to update
     */
    where?: PartnerWhereInput
    /**
     * Limit how many Partners to update.
     */
    limit?: number
  }

  /**
   * Partner updateManyAndReturn
   */
  export type PartnerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partner
     */
    select?: PartnerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Partner
     */
    omit?: PartnerOmit<ExtArgs> | null
    /**
     * The data used to update Partners.
     */
    data: XOR<PartnerUpdateManyMutationInput, PartnerUncheckedUpdateManyInput>
    /**
     * Filter which Partners to update
     */
    where?: PartnerWhereInput
    /**
     * Limit how many Partners to update.
     */
    limit?: number
  }

  /**
   * Partner upsert
   */
  export type PartnerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partner
     */
    select?: PartnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partner
     */
    omit?: PartnerOmit<ExtArgs> | null
    /**
     * The filter to search for the Partner to update in case it exists.
     */
    where: PartnerWhereUniqueInput
    /**
     * In case the Partner found by the `where` argument doesn't exist, create a new Partner with this data.
     */
    create: XOR<PartnerCreateInput, PartnerUncheckedCreateInput>
    /**
     * In case the Partner was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PartnerUpdateInput, PartnerUncheckedUpdateInput>
  }

  /**
   * Partner delete
   */
  export type PartnerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partner
     */
    select?: PartnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partner
     */
    omit?: PartnerOmit<ExtArgs> | null
    /**
     * Filter which Partner to delete.
     */
    where: PartnerWhereUniqueInput
  }

  /**
   * Partner deleteMany
   */
  export type PartnerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Partners to delete
     */
    where?: PartnerWhereInput
    /**
     * Limit how many Partners to delete.
     */
    limit?: number
  }

  /**
   * Partner without action
   */
  export type PartnerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partner
     */
    select?: PartnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partner
     */
    omit?: PartnerOmit<ExtArgs> | null
  }


  /**
   * Model Actuality
   */

  export type AggregateActuality = {
    _count: ActualityCountAggregateOutputType | null
    _min: ActualityMinAggregateOutputType | null
    _max: ActualityMaxAggregateOutputType | null
  }

  export type ActualityMinAggregateOutputType = {
    id: string | null
    title: string | null
    date: Date | null
    description: string | null
    contact: string | null
    phone: string | null
    mail: string | null
    photo: string | null
  }

  export type ActualityMaxAggregateOutputType = {
    id: string | null
    title: string | null
    date: Date | null
    description: string | null
    contact: string | null
    phone: string | null
    mail: string | null
    photo: string | null
  }

  export type ActualityCountAggregateOutputType = {
    id: number
    title: number
    date: number
    description: number
    contact: number
    phone: number
    mail: number
    photo: number
    _all: number
  }


  export type ActualityMinAggregateInputType = {
    id?: true
    title?: true
    date?: true
    description?: true
    contact?: true
    phone?: true
    mail?: true
    photo?: true
  }

  export type ActualityMaxAggregateInputType = {
    id?: true
    title?: true
    date?: true
    description?: true
    contact?: true
    phone?: true
    mail?: true
    photo?: true
  }

  export type ActualityCountAggregateInputType = {
    id?: true
    title?: true
    date?: true
    description?: true
    contact?: true
    phone?: true
    mail?: true
    photo?: true
    _all?: true
  }

  export type ActualityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Actuality to aggregate.
     */
    where?: ActualityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actualities to fetch.
     */
    orderBy?: ActualityOrderByWithRelationInput | ActualityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActualityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actualities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actualities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Actualities
    **/
    _count?: true | ActualityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActualityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActualityMaxAggregateInputType
  }

  export type GetActualityAggregateType<T extends ActualityAggregateArgs> = {
        [P in keyof T & keyof AggregateActuality]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActuality[P]>
      : GetScalarType<T[P], AggregateActuality[P]>
  }




  export type ActualityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActualityWhereInput
    orderBy?: ActualityOrderByWithAggregationInput | ActualityOrderByWithAggregationInput[]
    by: ActualityScalarFieldEnum[] | ActualityScalarFieldEnum
    having?: ActualityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActualityCountAggregateInputType | true
    _min?: ActualityMinAggregateInputType
    _max?: ActualityMaxAggregateInputType
  }

  export type ActualityGroupByOutputType = {
    id: string
    title: string
    date: Date
    description: string
    contact: string | null
    phone: string | null
    mail: string | null
    photo: string | null
    _count: ActualityCountAggregateOutputType | null
    _min: ActualityMinAggregateOutputType | null
    _max: ActualityMaxAggregateOutputType | null
  }

  type GetActualityGroupByPayload<T extends ActualityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActualityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActualityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActualityGroupByOutputType[P]>
            : GetScalarType<T[P], ActualityGroupByOutputType[P]>
        }
      >
    >


  export type ActualitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    date?: boolean
    description?: boolean
    contact?: boolean
    phone?: boolean
    mail?: boolean
    photo?: boolean
  }, ExtArgs["result"]["actuality"]>

  export type ActualitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    date?: boolean
    description?: boolean
    contact?: boolean
    phone?: boolean
    mail?: boolean
    photo?: boolean
  }, ExtArgs["result"]["actuality"]>

  export type ActualitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    date?: boolean
    description?: boolean
    contact?: boolean
    phone?: boolean
    mail?: boolean
    photo?: boolean
  }, ExtArgs["result"]["actuality"]>

  export type ActualitySelectScalar = {
    id?: boolean
    title?: boolean
    date?: boolean
    description?: boolean
    contact?: boolean
    phone?: boolean
    mail?: boolean
    photo?: boolean
  }

  export type ActualityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "date" | "description" | "contact" | "phone" | "mail" | "photo", ExtArgs["result"]["actuality"]>

  export type $ActualityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Actuality"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      date: Date
      description: string
      contact: string | null
      phone: string | null
      mail: string | null
      photo: string | null
    }, ExtArgs["result"]["actuality"]>
    composites: {}
  }

  type ActualityGetPayload<S extends boolean | null | undefined | ActualityDefaultArgs> = $Result.GetResult<Prisma.$ActualityPayload, S>

  type ActualityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActualityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActualityCountAggregateInputType | true
    }

  export interface ActualityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Actuality'], meta: { name: 'Actuality' } }
    /**
     * Find zero or one Actuality that matches the filter.
     * @param {ActualityFindUniqueArgs} args - Arguments to find a Actuality
     * @example
     * // Get one Actuality
     * const actuality = await prisma.actuality.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActualityFindUniqueArgs>(args: SelectSubset<T, ActualityFindUniqueArgs<ExtArgs>>): Prisma__ActualityClient<$Result.GetResult<Prisma.$ActualityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Actuality that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActualityFindUniqueOrThrowArgs} args - Arguments to find a Actuality
     * @example
     * // Get one Actuality
     * const actuality = await prisma.actuality.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActualityFindUniqueOrThrowArgs>(args: SelectSubset<T, ActualityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActualityClient<$Result.GetResult<Prisma.$ActualityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Actuality that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActualityFindFirstArgs} args - Arguments to find a Actuality
     * @example
     * // Get one Actuality
     * const actuality = await prisma.actuality.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActualityFindFirstArgs>(args?: SelectSubset<T, ActualityFindFirstArgs<ExtArgs>>): Prisma__ActualityClient<$Result.GetResult<Prisma.$ActualityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Actuality that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActualityFindFirstOrThrowArgs} args - Arguments to find a Actuality
     * @example
     * // Get one Actuality
     * const actuality = await prisma.actuality.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActualityFindFirstOrThrowArgs>(args?: SelectSubset<T, ActualityFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActualityClient<$Result.GetResult<Prisma.$ActualityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Actualities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActualityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Actualities
     * const actualities = await prisma.actuality.findMany()
     * 
     * // Get first 10 Actualities
     * const actualities = await prisma.actuality.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const actualityWithIdOnly = await prisma.actuality.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActualityFindManyArgs>(args?: SelectSubset<T, ActualityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActualityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Actuality.
     * @param {ActualityCreateArgs} args - Arguments to create a Actuality.
     * @example
     * // Create one Actuality
     * const Actuality = await prisma.actuality.create({
     *   data: {
     *     // ... data to create a Actuality
     *   }
     * })
     * 
     */
    create<T extends ActualityCreateArgs>(args: SelectSubset<T, ActualityCreateArgs<ExtArgs>>): Prisma__ActualityClient<$Result.GetResult<Prisma.$ActualityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Actualities.
     * @param {ActualityCreateManyArgs} args - Arguments to create many Actualities.
     * @example
     * // Create many Actualities
     * const actuality = await prisma.actuality.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActualityCreateManyArgs>(args?: SelectSubset<T, ActualityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Actualities and returns the data saved in the database.
     * @param {ActualityCreateManyAndReturnArgs} args - Arguments to create many Actualities.
     * @example
     * // Create many Actualities
     * const actuality = await prisma.actuality.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Actualities and only return the `id`
     * const actualityWithIdOnly = await prisma.actuality.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActualityCreateManyAndReturnArgs>(args?: SelectSubset<T, ActualityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActualityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Actuality.
     * @param {ActualityDeleteArgs} args - Arguments to delete one Actuality.
     * @example
     * // Delete one Actuality
     * const Actuality = await prisma.actuality.delete({
     *   where: {
     *     // ... filter to delete one Actuality
     *   }
     * })
     * 
     */
    delete<T extends ActualityDeleteArgs>(args: SelectSubset<T, ActualityDeleteArgs<ExtArgs>>): Prisma__ActualityClient<$Result.GetResult<Prisma.$ActualityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Actuality.
     * @param {ActualityUpdateArgs} args - Arguments to update one Actuality.
     * @example
     * // Update one Actuality
     * const actuality = await prisma.actuality.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActualityUpdateArgs>(args: SelectSubset<T, ActualityUpdateArgs<ExtArgs>>): Prisma__ActualityClient<$Result.GetResult<Prisma.$ActualityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Actualities.
     * @param {ActualityDeleteManyArgs} args - Arguments to filter Actualities to delete.
     * @example
     * // Delete a few Actualities
     * const { count } = await prisma.actuality.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActualityDeleteManyArgs>(args?: SelectSubset<T, ActualityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Actualities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActualityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Actualities
     * const actuality = await prisma.actuality.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActualityUpdateManyArgs>(args: SelectSubset<T, ActualityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Actualities and returns the data updated in the database.
     * @param {ActualityUpdateManyAndReturnArgs} args - Arguments to update many Actualities.
     * @example
     * // Update many Actualities
     * const actuality = await prisma.actuality.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Actualities and only return the `id`
     * const actualityWithIdOnly = await prisma.actuality.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends ActualityUpdateManyAndReturnArgs>(args: SelectSubset<T, ActualityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActualityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Actuality.
     * @param {ActualityUpsertArgs} args - Arguments to update or create a Actuality.
     * @example
     * // Update or create a Actuality
     * const actuality = await prisma.actuality.upsert({
     *   create: {
     *     // ... data to create a Actuality
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Actuality we want to update
     *   }
     * })
     */
    upsert<T extends ActualityUpsertArgs>(args: SelectSubset<T, ActualityUpsertArgs<ExtArgs>>): Prisma__ActualityClient<$Result.GetResult<Prisma.$ActualityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Actualities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActualityCountArgs} args - Arguments to filter Actualities to count.
     * @example
     * // Count the number of Actualities
     * const count = await prisma.actuality.count({
     *   where: {
     *     // ... the filter for the Actualities we want to count
     *   }
     * })
    **/
    count<T extends ActualityCountArgs>(
      args?: Subset<T, ActualityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActualityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Actuality.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActualityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ActualityAggregateArgs>(args: Subset<T, ActualityAggregateArgs>): Prisma.PrismaPromise<GetActualityAggregateType<T>>

    /**
     * Group by Actuality.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActualityGroupByArgs} args - Group by arguments.
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
      T extends ActualityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActualityGroupByArgs['orderBy'] }
        : { orderBy?: ActualityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ActualityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActualityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Actuality model
   */
  readonly fields: ActualityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Actuality.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActualityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Actuality model
   */
  interface ActualityFieldRefs {
    readonly id: FieldRef<"Actuality", 'String'>
    readonly title: FieldRef<"Actuality", 'String'>
    readonly date: FieldRef<"Actuality", 'DateTime'>
    readonly description: FieldRef<"Actuality", 'String'>
    readonly contact: FieldRef<"Actuality", 'String'>
    readonly phone: FieldRef<"Actuality", 'String'>
    readonly mail: FieldRef<"Actuality", 'String'>
    readonly photo: FieldRef<"Actuality", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Actuality findUnique
   */
  export type ActualityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actuality
     */
    select?: ActualitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actuality
     */
    omit?: ActualityOmit<ExtArgs> | null
    /**
     * Filter, which Actuality to fetch.
     */
    where: ActualityWhereUniqueInput
  }

  /**
   * Actuality findUniqueOrThrow
   */
  export type ActualityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actuality
     */
    select?: ActualitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actuality
     */
    omit?: ActualityOmit<ExtArgs> | null
    /**
     * Filter, which Actuality to fetch.
     */
    where: ActualityWhereUniqueInput
  }

  /**
   * Actuality findFirst
   */
  export type ActualityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actuality
     */
    select?: ActualitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actuality
     */
    omit?: ActualityOmit<ExtArgs> | null
    /**
     * Filter, which Actuality to fetch.
     */
    where?: ActualityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actualities to fetch.
     */
    orderBy?: ActualityOrderByWithRelationInput | ActualityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Actualities.
     */
    cursor?: ActualityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actualities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actualities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Actualities.
     */
    distinct?: ActualityScalarFieldEnum | ActualityScalarFieldEnum[]
  }

  /**
   * Actuality findFirstOrThrow
   */
  export type ActualityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actuality
     */
    select?: ActualitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actuality
     */
    omit?: ActualityOmit<ExtArgs> | null
    /**
     * Filter, which Actuality to fetch.
     */
    where?: ActualityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actualities to fetch.
     */
    orderBy?: ActualityOrderByWithRelationInput | ActualityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Actualities.
     */
    cursor?: ActualityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actualities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actualities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Actualities.
     */
    distinct?: ActualityScalarFieldEnum | ActualityScalarFieldEnum[]
  }

  /**
   * Actuality findMany
   */
  export type ActualityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actuality
     */
    select?: ActualitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actuality
     */
    omit?: ActualityOmit<ExtArgs> | null
    /**
     * Filter, which Actualities to fetch.
     */
    where?: ActualityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actualities to fetch.
     */
    orderBy?: ActualityOrderByWithRelationInput | ActualityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Actualities.
     */
    cursor?: ActualityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actualities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actualities.
     */
    skip?: number
    distinct?: ActualityScalarFieldEnum | ActualityScalarFieldEnum[]
  }

  /**
   * Actuality create
   */
  export type ActualityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actuality
     */
    select?: ActualitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actuality
     */
    omit?: ActualityOmit<ExtArgs> | null
    /**
     * The data needed to create a Actuality.
     */
    data: XOR<ActualityCreateInput, ActualityUncheckedCreateInput>
  }

  /**
   * Actuality createMany
   */
  export type ActualityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Actualities.
     */
    data: ActualityCreateManyInput | ActualityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Actuality createManyAndReturn
   */
  export type ActualityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actuality
     */
    select?: ActualitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Actuality
     */
    omit?: ActualityOmit<ExtArgs> | null
    /**
     * The data used to create many Actualities.
     */
    data: ActualityCreateManyInput | ActualityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Actuality update
   */
  export type ActualityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actuality
     */
    select?: ActualitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actuality
     */
    omit?: ActualityOmit<ExtArgs> | null
    /**
     * The data needed to update a Actuality.
     */
    data: XOR<ActualityUpdateInput, ActualityUncheckedUpdateInput>
    /**
     * Choose, which Actuality to update.
     */
    where: ActualityWhereUniqueInput
  }

  /**
   * Actuality updateMany
   */
  export type ActualityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Actualities.
     */
    data: XOR<ActualityUpdateManyMutationInput, ActualityUncheckedUpdateManyInput>
    /**
     * Filter which Actualities to update
     */
    where?: ActualityWhereInput
    /**
     * Limit how many Actualities to update.
     */
    limit?: number
  }

  /**
   * Actuality updateManyAndReturn
   */
  export type ActualityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actuality
     */
    select?: ActualitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Actuality
     */
    omit?: ActualityOmit<ExtArgs> | null
    /**
     * The data used to update Actualities.
     */
    data: XOR<ActualityUpdateManyMutationInput, ActualityUncheckedUpdateManyInput>
    /**
     * Filter which Actualities to update
     */
    where?: ActualityWhereInput
    /**
     * Limit how many Actualities to update.
     */
    limit?: number
  }

  /**
   * Actuality upsert
   */
  export type ActualityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actuality
     */
    select?: ActualitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actuality
     */
    omit?: ActualityOmit<ExtArgs> | null
    /**
     * The filter to search for the Actuality to update in case it exists.
     */
    where: ActualityWhereUniqueInput
    /**
     * In case the Actuality found by the `where` argument doesn't exist, create a new Actuality with this data.
     */
    create: XOR<ActualityCreateInput, ActualityUncheckedCreateInput>
    /**
     * In case the Actuality was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActualityUpdateInput, ActualityUncheckedUpdateInput>
  }

  /**
   * Actuality delete
   */
  export type ActualityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actuality
     */
    select?: ActualitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actuality
     */
    omit?: ActualityOmit<ExtArgs> | null
    /**
     * Filter which Actuality to delete.
     */
    where: ActualityWhereUniqueInput
  }

  /**
   * Actuality deleteMany
   */
  export type ActualityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Actualities to delete
     */
    where?: ActualityWhereInput
    /**
     * Limit how many Actualities to delete.
     */
    limit?: number
  }

  /**
   * Actuality without action
   */
  export type ActualityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actuality
     */
    select?: ActualitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actuality
     */
    omit?: ActualityOmit<ExtArgs> | null
  }


  /**
   * Model Album
   */

  export type AggregateAlbum = {
    _count: AlbumCountAggregateOutputType | null
    _min: AlbumMinAggregateOutputType | null
    _max: AlbumMaxAggregateOutputType | null
  }

  export type AlbumMinAggregateOutputType = {
    id: string | null
    title: string | null
  }

  export type AlbumMaxAggregateOutputType = {
    id: string | null
    title: string | null
  }

  export type AlbumCountAggregateOutputType = {
    id: number
    title: number
    _all: number
  }


  export type AlbumMinAggregateInputType = {
    id?: true
    title?: true
  }

  export type AlbumMaxAggregateInputType = {
    id?: true
    title?: true
  }

  export type AlbumCountAggregateInputType = {
    id?: true
    title?: true
    _all?: true
  }

  export type AlbumAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Album to aggregate.
     */
    where?: AlbumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Albums to fetch.
     */
    orderBy?: AlbumOrderByWithRelationInput | AlbumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlbumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Albums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Albums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Albums
    **/
    _count?: true | AlbumCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlbumMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlbumMaxAggregateInputType
  }

  export type GetAlbumAggregateType<T extends AlbumAggregateArgs> = {
        [P in keyof T & keyof AggregateAlbum]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlbum[P]>
      : GetScalarType<T[P], AggregateAlbum[P]>
  }




  export type AlbumGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlbumWhereInput
    orderBy?: AlbumOrderByWithAggregationInput | AlbumOrderByWithAggregationInput[]
    by: AlbumScalarFieldEnum[] | AlbumScalarFieldEnum
    having?: AlbumScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlbumCountAggregateInputType | true
    _min?: AlbumMinAggregateInputType
    _max?: AlbumMaxAggregateInputType
  }

  export type AlbumGroupByOutputType = {
    id: string
    title: string
    _count: AlbumCountAggregateOutputType | null
    _min: AlbumMinAggregateOutputType | null
    _max: AlbumMaxAggregateOutputType | null
  }

  type GetAlbumGroupByPayload<T extends AlbumGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlbumGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlbumGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlbumGroupByOutputType[P]>
            : GetScalarType<T[P], AlbumGroupByOutputType[P]>
        }
      >
    >


  export type AlbumSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    media?: boolean | Album$mediaArgs<ExtArgs>
    _count?: boolean | AlbumCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["album"]>

  export type AlbumSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
  }, ExtArgs["result"]["album"]>

  export type AlbumSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
  }, ExtArgs["result"]["album"]>

  export type AlbumSelectScalar = {
    id?: boolean
    title?: boolean
  }

  export type AlbumOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title", ExtArgs["result"]["album"]>
  export type AlbumInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    media?: boolean | Album$mediaArgs<ExtArgs>
    _count?: boolean | AlbumCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AlbumIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AlbumIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AlbumPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Album"
    objects: {
      media: Prisma.$MediaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
    }, ExtArgs["result"]["album"]>
    composites: {}
  }

  type AlbumGetPayload<S extends boolean | null | undefined | AlbumDefaultArgs> = $Result.GetResult<Prisma.$AlbumPayload, S>

  type AlbumCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AlbumFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AlbumCountAggregateInputType | true
    }

  export interface AlbumDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Album'], meta: { name: 'Album' } }
    /**
     * Find zero or one Album that matches the filter.
     * @param {AlbumFindUniqueArgs} args - Arguments to find a Album
     * @example
     * // Get one Album
     * const album = await prisma.album.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlbumFindUniqueArgs>(args: SelectSubset<T, AlbumFindUniqueArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Album that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AlbumFindUniqueOrThrowArgs} args - Arguments to find a Album
     * @example
     * // Get one Album
     * const album = await prisma.album.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlbumFindUniqueOrThrowArgs>(args: SelectSubset<T, AlbumFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Album that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumFindFirstArgs} args - Arguments to find a Album
     * @example
     * // Get one Album
     * const album = await prisma.album.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlbumFindFirstArgs>(args?: SelectSubset<T, AlbumFindFirstArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Album that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumFindFirstOrThrowArgs} args - Arguments to find a Album
     * @example
     * // Get one Album
     * const album = await prisma.album.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlbumFindFirstOrThrowArgs>(args?: SelectSubset<T, AlbumFindFirstOrThrowArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Albums that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Albums
     * const albums = await prisma.album.findMany()
     * 
     * // Get first 10 Albums
     * const albums = await prisma.album.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const albumWithIdOnly = await prisma.album.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AlbumFindManyArgs>(args?: SelectSubset<T, AlbumFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Album.
     * @param {AlbumCreateArgs} args - Arguments to create a Album.
     * @example
     * // Create one Album
     * const Album = await prisma.album.create({
     *   data: {
     *     // ... data to create a Album
     *   }
     * })
     * 
     */
    create<T extends AlbumCreateArgs>(args: SelectSubset<T, AlbumCreateArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Albums.
     * @param {AlbumCreateManyArgs} args - Arguments to create many Albums.
     * @example
     * // Create many Albums
     * const album = await prisma.album.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AlbumCreateManyArgs>(args?: SelectSubset<T, AlbumCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Albums and returns the data saved in the database.
     * @param {AlbumCreateManyAndReturnArgs} args - Arguments to create many Albums.
     * @example
     * // Create many Albums
     * const album = await prisma.album.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Albums and only return the `id`
     * const albumWithIdOnly = await prisma.album.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AlbumCreateManyAndReturnArgs>(args?: SelectSubset<T, AlbumCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Album.
     * @param {AlbumDeleteArgs} args - Arguments to delete one Album.
     * @example
     * // Delete one Album
     * const Album = await prisma.album.delete({
     *   where: {
     *     // ... filter to delete one Album
     *   }
     * })
     * 
     */
    delete<T extends AlbumDeleteArgs>(args: SelectSubset<T, AlbumDeleteArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Album.
     * @param {AlbumUpdateArgs} args - Arguments to update one Album.
     * @example
     * // Update one Album
     * const album = await prisma.album.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AlbumUpdateArgs>(args: SelectSubset<T, AlbumUpdateArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Albums.
     * @param {AlbumDeleteManyArgs} args - Arguments to filter Albums to delete.
     * @example
     * // Delete a few Albums
     * const { count } = await prisma.album.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AlbumDeleteManyArgs>(args?: SelectSubset<T, AlbumDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Albums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Albums
     * const album = await prisma.album.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AlbumUpdateManyArgs>(args: SelectSubset<T, AlbumUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Albums and returns the data updated in the database.
     * @param {AlbumUpdateManyAndReturnArgs} args - Arguments to update many Albums.
     * @example
     * // Update many Albums
     * const album = await prisma.album.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Albums and only return the `id`
     * const albumWithIdOnly = await prisma.album.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends AlbumUpdateManyAndReturnArgs>(args: SelectSubset<T, AlbumUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Album.
     * @param {AlbumUpsertArgs} args - Arguments to update or create a Album.
     * @example
     * // Update or create a Album
     * const album = await prisma.album.upsert({
     *   create: {
     *     // ... data to create a Album
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Album we want to update
     *   }
     * })
     */
    upsert<T extends AlbumUpsertArgs>(args: SelectSubset<T, AlbumUpsertArgs<ExtArgs>>): Prisma__AlbumClient<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Albums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumCountArgs} args - Arguments to filter Albums to count.
     * @example
     * // Count the number of Albums
     * const count = await prisma.album.count({
     *   where: {
     *     // ... the filter for the Albums we want to count
     *   }
     * })
    **/
    count<T extends AlbumCountArgs>(
      args?: Subset<T, AlbumCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlbumCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Album.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AlbumAggregateArgs>(args: Subset<T, AlbumAggregateArgs>): Prisma.PrismaPromise<GetAlbumAggregateType<T>>

    /**
     * Group by Album.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumGroupByArgs} args - Group by arguments.
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
      T extends AlbumGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlbumGroupByArgs['orderBy'] }
        : { orderBy?: AlbumGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AlbumGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlbumGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Album model
   */
  readonly fields: AlbumFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Album.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlbumClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    media<T extends Album$mediaArgs<ExtArgs> = {}>(args?: Subset<T, Album$mediaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Album model
   */
  interface AlbumFieldRefs {
    readonly id: FieldRef<"Album", 'String'>
    readonly title: FieldRef<"Album", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Album findUnique
   */
  export type AlbumFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * Filter, which Album to fetch.
     */
    where: AlbumWhereUniqueInput
  }

  /**
   * Album findUniqueOrThrow
   */
  export type AlbumFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * Filter, which Album to fetch.
     */
    where: AlbumWhereUniqueInput
  }

  /**
   * Album findFirst
   */
  export type AlbumFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * Filter, which Album to fetch.
     */
    where?: AlbumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Albums to fetch.
     */
    orderBy?: AlbumOrderByWithRelationInput | AlbumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Albums.
     */
    cursor?: AlbumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Albums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Albums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Albums.
     */
    distinct?: AlbumScalarFieldEnum | AlbumScalarFieldEnum[]
  }

  /**
   * Album findFirstOrThrow
   */
  export type AlbumFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * Filter, which Album to fetch.
     */
    where?: AlbumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Albums to fetch.
     */
    orderBy?: AlbumOrderByWithRelationInput | AlbumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Albums.
     */
    cursor?: AlbumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Albums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Albums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Albums.
     */
    distinct?: AlbumScalarFieldEnum | AlbumScalarFieldEnum[]
  }

  /**
   * Album findMany
   */
  export type AlbumFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * Filter, which Albums to fetch.
     */
    where?: AlbumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Albums to fetch.
     */
    orderBy?: AlbumOrderByWithRelationInput | AlbumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Albums.
     */
    cursor?: AlbumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Albums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Albums.
     */
    skip?: number
    distinct?: AlbumScalarFieldEnum | AlbumScalarFieldEnum[]
  }

  /**
   * Album create
   */
  export type AlbumCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * The data needed to create a Album.
     */
    data: XOR<AlbumCreateInput, AlbumUncheckedCreateInput>
  }

  /**
   * Album createMany
   */
  export type AlbumCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Albums.
     */
    data: AlbumCreateManyInput | AlbumCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Album createManyAndReturn
   */
  export type AlbumCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * The data used to create many Albums.
     */
    data: AlbumCreateManyInput | AlbumCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Album update
   */
  export type AlbumUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * The data needed to update a Album.
     */
    data: XOR<AlbumUpdateInput, AlbumUncheckedUpdateInput>
    /**
     * Choose, which Album to update.
     */
    where: AlbumWhereUniqueInput
  }

  /**
   * Album updateMany
   */
  export type AlbumUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Albums.
     */
    data: XOR<AlbumUpdateManyMutationInput, AlbumUncheckedUpdateManyInput>
    /**
     * Filter which Albums to update
     */
    where?: AlbumWhereInput
    /**
     * Limit how many Albums to update.
     */
    limit?: number
  }

  /**
   * Album updateManyAndReturn
   */
  export type AlbumUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * The data used to update Albums.
     */
    data: XOR<AlbumUpdateManyMutationInput, AlbumUncheckedUpdateManyInput>
    /**
     * Filter which Albums to update
     */
    where?: AlbumWhereInput
    /**
     * Limit how many Albums to update.
     */
    limit?: number
  }

  /**
   * Album upsert
   */
  export type AlbumUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * The filter to search for the Album to update in case it exists.
     */
    where: AlbumWhereUniqueInput
    /**
     * In case the Album found by the `where` argument doesn't exist, create a new Album with this data.
     */
    create: XOR<AlbumCreateInput, AlbumUncheckedCreateInput>
    /**
     * In case the Album was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlbumUpdateInput, AlbumUncheckedUpdateInput>
  }

  /**
   * Album delete
   */
  export type AlbumDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    /**
     * Filter which Album to delete.
     */
    where: AlbumWhereUniqueInput
  }

  /**
   * Album deleteMany
   */
  export type AlbumDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Albums to delete
     */
    where?: AlbumWhereInput
    /**
     * Limit how many Albums to delete.
     */
    limit?: number
  }

  /**
   * Album.media
   */
  export type Album$mediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    where?: MediaWhereInput
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    cursor?: MediaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * Album without action
   */
  export type AlbumDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
  }


  /**
   * Model Media
   */

  export type AggregateMedia = {
    _count: MediaCountAggregateOutputType | null
    _min: MediaMinAggregateOutputType | null
    _max: MediaMaxAggregateOutputType | null
  }

  export type MediaMinAggregateOutputType = {
    id: string | null
    title: string | null
    place: string | null
    photo: string | null
    date: Date | null
  }

  export type MediaMaxAggregateOutputType = {
    id: string | null
    title: string | null
    place: string | null
    photo: string | null
    date: Date | null
  }

  export type MediaCountAggregateOutputType = {
    id: number
    title: number
    place: number
    photo: number
    date: number
    _all: number
  }


  export type MediaMinAggregateInputType = {
    id?: true
    title?: true
    place?: true
    photo?: true
    date?: true
  }

  export type MediaMaxAggregateInputType = {
    id?: true
    title?: true
    place?: true
    photo?: true
    date?: true
  }

  export type MediaCountAggregateInputType = {
    id?: true
    title?: true
    place?: true
    photo?: true
    date?: true
    _all?: true
  }

  export type MediaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Media to aggregate.
     */
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Media
    **/
    _count?: true | MediaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MediaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MediaMaxAggregateInputType
  }

  export type GetMediaAggregateType<T extends MediaAggregateArgs> = {
        [P in keyof T & keyof AggregateMedia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedia[P]>
      : GetScalarType<T[P], AggregateMedia[P]>
  }




  export type MediaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MediaWhereInput
    orderBy?: MediaOrderByWithAggregationInput | MediaOrderByWithAggregationInput[]
    by: MediaScalarFieldEnum[] | MediaScalarFieldEnum
    having?: MediaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MediaCountAggregateInputType | true
    _min?: MediaMinAggregateInputType
    _max?: MediaMaxAggregateInputType
  }

  export type MediaGroupByOutputType = {
    id: string
    title: string
    place: string | null
    photo: string
    date: Date
    _count: MediaCountAggregateOutputType | null
    _min: MediaMinAggregateOutputType | null
    _max: MediaMaxAggregateOutputType | null
  }

  type GetMediaGroupByPayload<T extends MediaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MediaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MediaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MediaGroupByOutputType[P]>
            : GetScalarType<T[P], MediaGroupByOutputType[P]>
        }
      >
    >


  export type MediaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    place?: boolean
    photo?: boolean
    date?: boolean
    album?: boolean | Media$albumArgs<ExtArgs>
    _count?: boolean | MediaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["media"]>

  export type MediaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    place?: boolean
    photo?: boolean
    date?: boolean
  }, ExtArgs["result"]["media"]>

  export type MediaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    place?: boolean
    photo?: boolean
    date?: boolean
  }, ExtArgs["result"]["media"]>

  export type MediaSelectScalar = {
    id?: boolean
    title?: boolean
    place?: boolean
    photo?: boolean
    date?: boolean
  }

  export type MediaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "place" | "photo" | "date", ExtArgs["result"]["media"]>
  export type MediaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    album?: boolean | Media$albumArgs<ExtArgs>
    _count?: boolean | MediaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MediaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MediaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MediaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Media"
    objects: {
      album: Prisma.$AlbumPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      place: string | null
      photo: string
      date: Date
    }, ExtArgs["result"]["media"]>
    composites: {}
  }

  type MediaGetPayload<S extends boolean | null | undefined | MediaDefaultArgs> = $Result.GetResult<Prisma.$MediaPayload, S>

  type MediaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MediaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MediaCountAggregateInputType | true
    }

  export interface MediaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Media'], meta: { name: 'Media' } }
    /**
     * Find zero or one Media that matches the filter.
     * @param {MediaFindUniqueArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MediaFindUniqueArgs>(args: SelectSubset<T, MediaFindUniqueArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Media that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MediaFindUniqueOrThrowArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MediaFindUniqueOrThrowArgs>(args: SelectSubset<T, MediaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Media that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFindFirstArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MediaFindFirstArgs>(args?: SelectSubset<T, MediaFindFirstArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Media that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFindFirstOrThrowArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MediaFindFirstOrThrowArgs>(args?: SelectSubset<T, MediaFindFirstOrThrowArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Media that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Media
     * const media = await prisma.media.findMany()
     * 
     * // Get first 10 Media
     * const media = await prisma.media.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mediaWithIdOnly = await prisma.media.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MediaFindManyArgs>(args?: SelectSubset<T, MediaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Media.
     * @param {MediaCreateArgs} args - Arguments to create a Media.
     * @example
     * // Create one Media
     * const Media = await prisma.media.create({
     *   data: {
     *     // ... data to create a Media
     *   }
     * })
     * 
     */
    create<T extends MediaCreateArgs>(args: SelectSubset<T, MediaCreateArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Media.
     * @param {MediaCreateManyArgs} args - Arguments to create many Media.
     * @example
     * // Create many Media
     * const media = await prisma.media.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MediaCreateManyArgs>(args?: SelectSubset<T, MediaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Media and returns the data saved in the database.
     * @param {MediaCreateManyAndReturnArgs} args - Arguments to create many Media.
     * @example
     * // Create many Media
     * const media = await prisma.media.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Media and only return the `id`
     * const mediaWithIdOnly = await prisma.media.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MediaCreateManyAndReturnArgs>(args?: SelectSubset<T, MediaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Media.
     * @param {MediaDeleteArgs} args - Arguments to delete one Media.
     * @example
     * // Delete one Media
     * const Media = await prisma.media.delete({
     *   where: {
     *     // ... filter to delete one Media
     *   }
     * })
     * 
     */
    delete<T extends MediaDeleteArgs>(args: SelectSubset<T, MediaDeleteArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Media.
     * @param {MediaUpdateArgs} args - Arguments to update one Media.
     * @example
     * // Update one Media
     * const media = await prisma.media.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MediaUpdateArgs>(args: SelectSubset<T, MediaUpdateArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Media.
     * @param {MediaDeleteManyArgs} args - Arguments to filter Media to delete.
     * @example
     * // Delete a few Media
     * const { count } = await prisma.media.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MediaDeleteManyArgs>(args?: SelectSubset<T, MediaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Media
     * const media = await prisma.media.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MediaUpdateManyArgs>(args: SelectSubset<T, MediaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Media and returns the data updated in the database.
     * @param {MediaUpdateManyAndReturnArgs} args - Arguments to update many Media.
     * @example
     * // Update many Media
     * const media = await prisma.media.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Media and only return the `id`
     * const mediaWithIdOnly = await prisma.media.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends MediaUpdateManyAndReturnArgs>(args: SelectSubset<T, MediaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Media.
     * @param {MediaUpsertArgs} args - Arguments to update or create a Media.
     * @example
     * // Update or create a Media
     * const media = await prisma.media.upsert({
     *   create: {
     *     // ... data to create a Media
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Media we want to update
     *   }
     * })
     */
    upsert<T extends MediaUpsertArgs>(args: SelectSubset<T, MediaUpsertArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaCountArgs} args - Arguments to filter Media to count.
     * @example
     * // Count the number of Media
     * const count = await prisma.media.count({
     *   where: {
     *     // ... the filter for the Media we want to count
     *   }
     * })
    **/
    count<T extends MediaCountArgs>(
      args?: Subset<T, MediaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MediaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MediaAggregateArgs>(args: Subset<T, MediaAggregateArgs>): Prisma.PrismaPromise<GetMediaAggregateType<T>>

    /**
     * Group by Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaGroupByArgs} args - Group by arguments.
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
      T extends MediaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MediaGroupByArgs['orderBy'] }
        : { orderBy?: MediaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MediaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMediaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Media model
   */
  readonly fields: MediaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Media.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MediaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    album<T extends Media$albumArgs<ExtArgs> = {}>(args?: Subset<T, Media$albumArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlbumPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Media model
   */
  interface MediaFieldRefs {
    readonly id: FieldRef<"Media", 'String'>
    readonly title: FieldRef<"Media", 'String'>
    readonly place: FieldRef<"Media", 'String'>
    readonly photo: FieldRef<"Media", 'String'>
    readonly date: FieldRef<"Media", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Media findUnique
   */
  export type MediaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where: MediaWhereUniqueInput
  }

  /**
   * Media findUniqueOrThrow
   */
  export type MediaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where: MediaWhereUniqueInput
  }

  /**
   * Media findFirst
   */
  export type MediaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Media.
     */
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Media.
     */
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * Media findFirstOrThrow
   */
  export type MediaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Media.
     */
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Media.
     */
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * Media findMany
   */
  export type MediaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Media.
     */
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     */
    skip?: number
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * Media create
   */
  export type MediaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * The data needed to create a Media.
     */
    data: XOR<MediaCreateInput, MediaUncheckedCreateInput>
  }

  /**
   * Media createMany
   */
  export type MediaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Media.
     */
    data: MediaCreateManyInput | MediaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Media createManyAndReturn
   */
  export type MediaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * The data used to create many Media.
     */
    data: MediaCreateManyInput | MediaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Media update
   */
  export type MediaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * The data needed to update a Media.
     */
    data: XOR<MediaUpdateInput, MediaUncheckedUpdateInput>
    /**
     * Choose, which Media to update.
     */
    where: MediaWhereUniqueInput
  }

  /**
   * Media updateMany
   */
  export type MediaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Media.
     */
    data: XOR<MediaUpdateManyMutationInput, MediaUncheckedUpdateManyInput>
    /**
     * Filter which Media to update
     */
    where?: MediaWhereInput
    /**
     * Limit how many Media to update.
     */
    limit?: number
  }

  /**
   * Media updateManyAndReturn
   */
  export type MediaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * The data used to update Media.
     */
    data: XOR<MediaUpdateManyMutationInput, MediaUncheckedUpdateManyInput>
    /**
     * Filter which Media to update
     */
    where?: MediaWhereInput
    /**
     * Limit how many Media to update.
     */
    limit?: number
  }

  /**
   * Media upsert
   */
  export type MediaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * The filter to search for the Media to update in case it exists.
     */
    where: MediaWhereUniqueInput
    /**
     * In case the Media found by the `where` argument doesn't exist, create a new Media with this data.
     */
    create: XOR<MediaCreateInput, MediaUncheckedCreateInput>
    /**
     * In case the Media was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MediaUpdateInput, MediaUncheckedUpdateInput>
  }

  /**
   * Media delete
   */
  export type MediaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter which Media to delete.
     */
    where: MediaWhereUniqueInput
  }

  /**
   * Media deleteMany
   */
  export type MediaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Media to delete
     */
    where?: MediaWhereInput
    /**
     * Limit how many Media to delete.
     */
    limit?: number
  }

  /**
   * Media.album
   */
  export type Media$albumArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Album
     */
    omit?: AlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlbumInclude<ExtArgs> | null
    where?: AlbumWhereInput
    orderBy?: AlbumOrderByWithRelationInput | AlbumOrderByWithRelationInput[]
    cursor?: AlbumWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlbumScalarFieldEnum | AlbumScalarFieldEnum[]
  }

  /**
   * Media without action
   */
  export type MediaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
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


  export const Player_positionScalarFieldEnum: {
    id: 'id',
    label: 'label'
  };

  export type Player_positionScalarFieldEnum = (typeof Player_positionScalarFieldEnum)[keyof typeof Player_positionScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    label: 'label'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const MemberFunctionScalarFieldEnum: {
    id: 'id',
    label: 'label'
  };

  export type MemberFunctionScalarFieldEnum = (typeof MemberFunctionScalarFieldEnum)[keyof typeof MemberFunctionScalarFieldEnum]


  export const MembersScalarFieldEnum: {
    id: 'id',
    firstname: 'firstname',
    lastname: 'lastname',
    photo: 'photo',
    is_admin: 'is_admin',
    positionId: 'positionId',
    categoryId: 'categoryId',
    memberFunctionId: 'memberFunctionId'
  };

  export type MembersScalarFieldEnum = (typeof MembersScalarFieldEnum)[keyof typeof MembersScalarFieldEnum]


  export const ClubScalarFieldEnum: {
    id: 'id',
    history: 'history'
  };

  export type ClubScalarFieldEnum = (typeof ClubScalarFieldEnum)[keyof typeof ClubScalarFieldEnum]


  export const PartnerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    photo: 'photo',
    is_main: 'is_main'
  };

  export type PartnerScalarFieldEnum = (typeof PartnerScalarFieldEnum)[keyof typeof PartnerScalarFieldEnum]


  export const ActualityScalarFieldEnum: {
    id: 'id',
    title: 'title',
    date: 'date',
    description: 'description',
    contact: 'contact',
    phone: 'phone',
    mail: 'mail',
    photo: 'photo'
  };

  export type ActualityScalarFieldEnum = (typeof ActualityScalarFieldEnum)[keyof typeof ActualityScalarFieldEnum]


  export const AlbumScalarFieldEnum: {
    id: 'id',
    title: 'title'
  };

  export type AlbumScalarFieldEnum = (typeof AlbumScalarFieldEnum)[keyof typeof AlbumScalarFieldEnum]


  export const MediaScalarFieldEnum: {
    id: 'id',
    title: 'title',
    place: 'place',
    photo: 'photo',
    date: 'date'
  };

  export type MediaScalarFieldEnum = (typeof MediaScalarFieldEnum)[keyof typeof MediaScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type Player_positionWhereInput = {
    AND?: Player_positionWhereInput | Player_positionWhereInput[]
    OR?: Player_positionWhereInput[]
    NOT?: Player_positionWhereInput | Player_positionWhereInput[]
    id?: StringFilter<"Player_position"> | string
    label?: StringFilter<"Player_position"> | string
    members?: MembersListRelationFilter
  }

  export type Player_positionOrderByWithRelationInput = {
    id?: SortOrder
    label?: SortOrder
    members?: MembersOrderByRelationAggregateInput
  }

  export type Player_positionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: Player_positionWhereInput | Player_positionWhereInput[]
    OR?: Player_positionWhereInput[]
    NOT?: Player_positionWhereInput | Player_positionWhereInput[]
    label?: StringFilter<"Player_position"> | string
    members?: MembersListRelationFilter
  }, "id">

  export type Player_positionOrderByWithAggregationInput = {
    id?: SortOrder
    label?: SortOrder
    _count?: Player_positionCountOrderByAggregateInput
    _max?: Player_positionMaxOrderByAggregateInput
    _min?: Player_positionMinOrderByAggregateInput
  }

  export type Player_positionScalarWhereWithAggregatesInput = {
    AND?: Player_positionScalarWhereWithAggregatesInput | Player_positionScalarWhereWithAggregatesInput[]
    OR?: Player_positionScalarWhereWithAggregatesInput[]
    NOT?: Player_positionScalarWhereWithAggregatesInput | Player_positionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Player_position"> | string
    label?: StringWithAggregatesFilter<"Player_position"> | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: StringFilter<"Category"> | string
    label?: StringFilter<"Category"> | string
    members?: MembersListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    label?: SortOrder
    members?: MembersOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    label?: StringFilter<"Category"> | string
    members?: MembersListRelationFilter
  }, "id">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    label?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Category"> | string
    label?: StringWithAggregatesFilter<"Category"> | string
  }

  export type MemberFunctionWhereInput = {
    AND?: MemberFunctionWhereInput | MemberFunctionWhereInput[]
    OR?: MemberFunctionWhereInput[]
    NOT?: MemberFunctionWhereInput | MemberFunctionWhereInput[]
    id?: StringFilter<"MemberFunction"> | string
    label?: StringFilter<"MemberFunction"> | string
    member?: MembersListRelationFilter
  }

  export type MemberFunctionOrderByWithRelationInput = {
    id?: SortOrder
    label?: SortOrder
    member?: MembersOrderByRelationAggregateInput
  }

  export type MemberFunctionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MemberFunctionWhereInput | MemberFunctionWhereInput[]
    OR?: MemberFunctionWhereInput[]
    NOT?: MemberFunctionWhereInput | MemberFunctionWhereInput[]
    label?: StringFilter<"MemberFunction"> | string
    member?: MembersListRelationFilter
  }, "id">

  export type MemberFunctionOrderByWithAggregationInput = {
    id?: SortOrder
    label?: SortOrder
    _count?: MemberFunctionCountOrderByAggregateInput
    _max?: MemberFunctionMaxOrderByAggregateInput
    _min?: MemberFunctionMinOrderByAggregateInput
  }

  export type MemberFunctionScalarWhereWithAggregatesInput = {
    AND?: MemberFunctionScalarWhereWithAggregatesInput | MemberFunctionScalarWhereWithAggregatesInput[]
    OR?: MemberFunctionScalarWhereWithAggregatesInput[]
    NOT?: MemberFunctionScalarWhereWithAggregatesInput | MemberFunctionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MemberFunction"> | string
    label?: StringWithAggregatesFilter<"MemberFunction"> | string
  }

  export type MembersWhereInput = {
    AND?: MembersWhereInput | MembersWhereInput[]
    OR?: MembersWhereInput[]
    NOT?: MembersWhereInput | MembersWhereInput[]
    id?: StringFilter<"Members"> | string
    firstname?: StringFilter<"Members"> | string
    lastname?: StringFilter<"Members"> | string
    photo?: StringNullableFilter<"Members"> | string | null
    is_admin?: BoolFilter<"Members"> | boolean
    positionId?: StringNullableFilter<"Members"> | string | null
    categoryId?: StringNullableFilter<"Members"> | string | null
    memberFunctionId?: StringNullableFilter<"Members"> | string | null
    position?: XOR<Player_positionNullableScalarRelationFilter, Player_positionWhereInput> | null
    category?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
    memberFunction?: XOR<MemberFunctionNullableScalarRelationFilter, MemberFunctionWhereInput> | null
  }

  export type MembersOrderByWithRelationInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    photo?: SortOrderInput | SortOrder
    is_admin?: SortOrder
    positionId?: SortOrderInput | SortOrder
    categoryId?: SortOrderInput | SortOrder
    memberFunctionId?: SortOrderInput | SortOrder
    position?: Player_positionOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
    memberFunction?: MemberFunctionOrderByWithRelationInput
  }

  export type MembersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MembersWhereInput | MembersWhereInput[]
    OR?: MembersWhereInput[]
    NOT?: MembersWhereInput | MembersWhereInput[]
    firstname?: StringFilter<"Members"> | string
    lastname?: StringFilter<"Members"> | string
    photo?: StringNullableFilter<"Members"> | string | null
    is_admin?: BoolFilter<"Members"> | boolean
    positionId?: StringNullableFilter<"Members"> | string | null
    categoryId?: StringNullableFilter<"Members"> | string | null
    memberFunctionId?: StringNullableFilter<"Members"> | string | null
    position?: XOR<Player_positionNullableScalarRelationFilter, Player_positionWhereInput> | null
    category?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
    memberFunction?: XOR<MemberFunctionNullableScalarRelationFilter, MemberFunctionWhereInput> | null
  }, "id">

  export type MembersOrderByWithAggregationInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    photo?: SortOrderInput | SortOrder
    is_admin?: SortOrder
    positionId?: SortOrderInput | SortOrder
    categoryId?: SortOrderInput | SortOrder
    memberFunctionId?: SortOrderInput | SortOrder
    _count?: MembersCountOrderByAggregateInput
    _max?: MembersMaxOrderByAggregateInput
    _min?: MembersMinOrderByAggregateInput
  }

  export type MembersScalarWhereWithAggregatesInput = {
    AND?: MembersScalarWhereWithAggregatesInput | MembersScalarWhereWithAggregatesInput[]
    OR?: MembersScalarWhereWithAggregatesInput[]
    NOT?: MembersScalarWhereWithAggregatesInput | MembersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Members"> | string
    firstname?: StringWithAggregatesFilter<"Members"> | string
    lastname?: StringWithAggregatesFilter<"Members"> | string
    photo?: StringNullableWithAggregatesFilter<"Members"> | string | null
    is_admin?: BoolWithAggregatesFilter<"Members"> | boolean
    positionId?: StringNullableWithAggregatesFilter<"Members"> | string | null
    categoryId?: StringNullableWithAggregatesFilter<"Members"> | string | null
    memberFunctionId?: StringNullableWithAggregatesFilter<"Members"> | string | null
  }

  export type ClubWhereInput = {
    AND?: ClubWhereInput | ClubWhereInput[]
    OR?: ClubWhereInput[]
    NOT?: ClubWhereInput | ClubWhereInput[]
    id?: StringFilter<"Club"> | string
    history?: StringFilter<"Club"> | string
  }

  export type ClubOrderByWithRelationInput = {
    id?: SortOrder
    history?: SortOrder
  }

  export type ClubWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ClubWhereInput | ClubWhereInput[]
    OR?: ClubWhereInput[]
    NOT?: ClubWhereInput | ClubWhereInput[]
    history?: StringFilter<"Club"> | string
  }, "id">

  export type ClubOrderByWithAggregationInput = {
    id?: SortOrder
    history?: SortOrder
    _count?: ClubCountOrderByAggregateInput
    _max?: ClubMaxOrderByAggregateInput
    _min?: ClubMinOrderByAggregateInput
  }

  export type ClubScalarWhereWithAggregatesInput = {
    AND?: ClubScalarWhereWithAggregatesInput | ClubScalarWhereWithAggregatesInput[]
    OR?: ClubScalarWhereWithAggregatesInput[]
    NOT?: ClubScalarWhereWithAggregatesInput | ClubScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Club"> | string
    history?: StringWithAggregatesFilter<"Club"> | string
  }

  export type PartnerWhereInput = {
    AND?: PartnerWhereInput | PartnerWhereInput[]
    OR?: PartnerWhereInput[]
    NOT?: PartnerWhereInput | PartnerWhereInput[]
    id?: StringFilter<"Partner"> | string
    name?: StringFilter<"Partner"> | string
    photo?: StringFilter<"Partner"> | string
    is_main?: BoolFilter<"Partner"> | boolean
  }

  export type PartnerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    photo?: SortOrder
    is_main?: SortOrder
  }

  export type PartnerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PartnerWhereInput | PartnerWhereInput[]
    OR?: PartnerWhereInput[]
    NOT?: PartnerWhereInput | PartnerWhereInput[]
    name?: StringFilter<"Partner"> | string
    photo?: StringFilter<"Partner"> | string
    is_main?: BoolFilter<"Partner"> | boolean
  }, "id">

  export type PartnerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    photo?: SortOrder
    is_main?: SortOrder
    _count?: PartnerCountOrderByAggregateInput
    _max?: PartnerMaxOrderByAggregateInput
    _min?: PartnerMinOrderByAggregateInput
  }

  export type PartnerScalarWhereWithAggregatesInput = {
    AND?: PartnerScalarWhereWithAggregatesInput | PartnerScalarWhereWithAggregatesInput[]
    OR?: PartnerScalarWhereWithAggregatesInput[]
    NOT?: PartnerScalarWhereWithAggregatesInput | PartnerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Partner"> | string
    name?: StringWithAggregatesFilter<"Partner"> | string
    photo?: StringWithAggregatesFilter<"Partner"> | string
    is_main?: BoolWithAggregatesFilter<"Partner"> | boolean
  }

  export type ActualityWhereInput = {
    AND?: ActualityWhereInput | ActualityWhereInput[]
    OR?: ActualityWhereInput[]
    NOT?: ActualityWhereInput | ActualityWhereInput[]
    id?: StringFilter<"Actuality"> | string
    title?: StringFilter<"Actuality"> | string
    date?: DateTimeFilter<"Actuality"> | Date | string
    description?: StringFilter<"Actuality"> | string
    contact?: StringNullableFilter<"Actuality"> | string | null
    phone?: StringNullableFilter<"Actuality"> | string | null
    mail?: StringNullableFilter<"Actuality"> | string | null
    photo?: StringNullableFilter<"Actuality"> | string | null
  }

  export type ActualityOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    date?: SortOrder
    description?: SortOrder
    contact?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    mail?: SortOrderInput | SortOrder
    photo?: SortOrderInput | SortOrder
  }

  export type ActualityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ActualityWhereInput | ActualityWhereInput[]
    OR?: ActualityWhereInput[]
    NOT?: ActualityWhereInput | ActualityWhereInput[]
    title?: StringFilter<"Actuality"> | string
    date?: DateTimeFilter<"Actuality"> | Date | string
    description?: StringFilter<"Actuality"> | string
    contact?: StringNullableFilter<"Actuality"> | string | null
    phone?: StringNullableFilter<"Actuality"> | string | null
    mail?: StringNullableFilter<"Actuality"> | string | null
    photo?: StringNullableFilter<"Actuality"> | string | null
  }, "id">

  export type ActualityOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    date?: SortOrder
    description?: SortOrder
    contact?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    mail?: SortOrderInput | SortOrder
    photo?: SortOrderInput | SortOrder
    _count?: ActualityCountOrderByAggregateInput
    _max?: ActualityMaxOrderByAggregateInput
    _min?: ActualityMinOrderByAggregateInput
  }

  export type ActualityScalarWhereWithAggregatesInput = {
    AND?: ActualityScalarWhereWithAggregatesInput | ActualityScalarWhereWithAggregatesInput[]
    OR?: ActualityScalarWhereWithAggregatesInput[]
    NOT?: ActualityScalarWhereWithAggregatesInput | ActualityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Actuality"> | string
    title?: StringWithAggregatesFilter<"Actuality"> | string
    date?: DateTimeWithAggregatesFilter<"Actuality"> | Date | string
    description?: StringWithAggregatesFilter<"Actuality"> | string
    contact?: StringNullableWithAggregatesFilter<"Actuality"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Actuality"> | string | null
    mail?: StringNullableWithAggregatesFilter<"Actuality"> | string | null
    photo?: StringNullableWithAggregatesFilter<"Actuality"> | string | null
  }

  export type AlbumWhereInput = {
    AND?: AlbumWhereInput | AlbumWhereInput[]
    OR?: AlbumWhereInput[]
    NOT?: AlbumWhereInput | AlbumWhereInput[]
    id?: StringFilter<"Album"> | string
    title?: StringFilter<"Album"> | string
    media?: MediaListRelationFilter
  }

  export type AlbumOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    media?: MediaOrderByRelationAggregateInput
  }

  export type AlbumWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AlbumWhereInput | AlbumWhereInput[]
    OR?: AlbumWhereInput[]
    NOT?: AlbumWhereInput | AlbumWhereInput[]
    title?: StringFilter<"Album"> | string
    media?: MediaListRelationFilter
  }, "id">

  export type AlbumOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    _count?: AlbumCountOrderByAggregateInput
    _max?: AlbumMaxOrderByAggregateInput
    _min?: AlbumMinOrderByAggregateInput
  }

  export type AlbumScalarWhereWithAggregatesInput = {
    AND?: AlbumScalarWhereWithAggregatesInput | AlbumScalarWhereWithAggregatesInput[]
    OR?: AlbumScalarWhereWithAggregatesInput[]
    NOT?: AlbumScalarWhereWithAggregatesInput | AlbumScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Album"> | string
    title?: StringWithAggregatesFilter<"Album"> | string
  }

  export type MediaWhereInput = {
    AND?: MediaWhereInput | MediaWhereInput[]
    OR?: MediaWhereInput[]
    NOT?: MediaWhereInput | MediaWhereInput[]
    id?: StringFilter<"Media"> | string
    title?: StringFilter<"Media"> | string
    place?: StringNullableFilter<"Media"> | string | null
    photo?: StringFilter<"Media"> | string
    date?: DateTimeFilter<"Media"> | Date | string
    album?: AlbumListRelationFilter
  }

  export type MediaOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    place?: SortOrderInput | SortOrder
    photo?: SortOrder
    date?: SortOrder
    album?: AlbumOrderByRelationAggregateInput
  }

  export type MediaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MediaWhereInput | MediaWhereInput[]
    OR?: MediaWhereInput[]
    NOT?: MediaWhereInput | MediaWhereInput[]
    title?: StringFilter<"Media"> | string
    place?: StringNullableFilter<"Media"> | string | null
    photo?: StringFilter<"Media"> | string
    date?: DateTimeFilter<"Media"> | Date | string
    album?: AlbumListRelationFilter
  }, "id">

  export type MediaOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    place?: SortOrderInput | SortOrder
    photo?: SortOrder
    date?: SortOrder
    _count?: MediaCountOrderByAggregateInput
    _max?: MediaMaxOrderByAggregateInput
    _min?: MediaMinOrderByAggregateInput
  }

  export type MediaScalarWhereWithAggregatesInput = {
    AND?: MediaScalarWhereWithAggregatesInput | MediaScalarWhereWithAggregatesInput[]
    OR?: MediaScalarWhereWithAggregatesInput[]
    NOT?: MediaScalarWhereWithAggregatesInput | MediaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Media"> | string
    title?: StringWithAggregatesFilter<"Media"> | string
    place?: StringNullableWithAggregatesFilter<"Media"> | string | null
    photo?: StringWithAggregatesFilter<"Media"> | string
    date?: DateTimeWithAggregatesFilter<"Media"> | Date | string
  }

  export type Player_positionCreateInput = {
    id?: string
    label: string
    members?: MembersCreateNestedManyWithoutPositionInput
  }

  export type Player_positionUncheckedCreateInput = {
    id?: string
    label: string
    members?: MembersUncheckedCreateNestedManyWithoutPositionInput
  }

  export type Player_positionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    members?: MembersUpdateManyWithoutPositionNestedInput
  }

  export type Player_positionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    members?: MembersUncheckedUpdateManyWithoutPositionNestedInput
  }

  export type Player_positionCreateManyInput = {
    id?: string
    label: string
  }

  export type Player_positionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
  }

  export type Player_positionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryCreateInput = {
    id?: string
    label: string
    members?: MembersCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: string
    label: string
    members?: MembersUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    members?: MembersUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    members?: MembersUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: string
    label: string
  }

  export type CategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
  }

  export type MemberFunctionCreateInput = {
    id?: string
    label: string
    member?: MembersCreateNestedManyWithoutMemberFunctionInput
  }

  export type MemberFunctionUncheckedCreateInput = {
    id?: string
    label: string
    member?: MembersUncheckedCreateNestedManyWithoutMemberFunctionInput
  }

  export type MemberFunctionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    member?: MembersUpdateManyWithoutMemberFunctionNestedInput
  }

  export type MemberFunctionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    member?: MembersUncheckedUpdateManyWithoutMemberFunctionNestedInput
  }

  export type MemberFunctionCreateManyInput = {
    id?: string
    label: string
  }

  export type MemberFunctionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
  }

  export type MemberFunctionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
  }

  export type MembersCreateInput = {
    id?: string
    firstname: string
    lastname: string
    photo?: string | null
    is_admin?: boolean
    position?: Player_positionCreateNestedOneWithoutMembersInput
    category?: CategoryCreateNestedOneWithoutMembersInput
    memberFunction?: MemberFunctionCreateNestedOneWithoutMemberInput
  }

  export type MembersUncheckedCreateInput = {
    id?: string
    firstname: string
    lastname: string
    photo?: string | null
    is_admin?: boolean
    positionId?: string | null
    categoryId?: string | null
    memberFunctionId?: string | null
  }

  export type MembersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    position?: Player_positionUpdateOneWithoutMembersNestedInput
    category?: CategoryUpdateOneWithoutMembersNestedInput
    memberFunction?: MemberFunctionUpdateOneWithoutMemberNestedInput
  }

  export type MembersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    positionId?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    memberFunctionId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MembersCreateManyInput = {
    id?: string
    firstname: string
    lastname: string
    photo?: string | null
    is_admin?: boolean
    positionId?: string | null
    categoryId?: string | null
    memberFunctionId?: string | null
  }

  export type MembersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    is_admin?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MembersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    positionId?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    memberFunctionId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClubCreateInput = {
    id?: string
    history: string
  }

  export type ClubUncheckedCreateInput = {
    id?: string
    history: string
  }

  export type ClubUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    history?: StringFieldUpdateOperationsInput | string
  }

  export type ClubUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    history?: StringFieldUpdateOperationsInput | string
  }

  export type ClubCreateManyInput = {
    id?: string
    history: string
  }

  export type ClubUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    history?: StringFieldUpdateOperationsInput | string
  }

  export type ClubUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    history?: StringFieldUpdateOperationsInput | string
  }

  export type PartnerCreateInput = {
    id?: string
    name: string
    photo: string
    is_main: boolean
  }

  export type PartnerUncheckedCreateInput = {
    id?: string
    name: string
    photo: string
    is_main: boolean
  }

  export type PartnerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    is_main?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PartnerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    is_main?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PartnerCreateManyInput = {
    id?: string
    name: string
    photo: string
    is_main: boolean
  }

  export type PartnerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    is_main?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PartnerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    is_main?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ActualityCreateInput = {
    id?: string
    title: string
    date: Date | string
    description: string
    contact?: string | null
    phone?: string | null
    mail?: string | null
    photo?: string | null
  }

  export type ActualityUncheckedCreateInput = {
    id?: string
    title: string
    date: Date | string
    description: string
    contact?: string | null
    phone?: string | null
    mail?: string | null
    photo?: string | null
  }

  export type ActualityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    mail?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ActualityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    mail?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ActualityCreateManyInput = {
    id?: string
    title: string
    date: Date | string
    description: string
    contact?: string | null
    phone?: string | null
    mail?: string | null
    photo?: string | null
  }

  export type ActualityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    mail?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ActualityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    mail?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AlbumCreateInput = {
    id?: string
    title: string
    media?: MediaCreateNestedManyWithoutAlbumInput
  }

  export type AlbumUncheckedCreateInput = {
    id?: string
    title: string
    media?: MediaUncheckedCreateNestedManyWithoutAlbumInput
  }

  export type AlbumUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    media?: MediaUpdateManyWithoutAlbumNestedInput
  }

  export type AlbumUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    media?: MediaUncheckedUpdateManyWithoutAlbumNestedInput
  }

  export type AlbumCreateManyInput = {
    id?: string
    title: string
  }

  export type AlbumUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
  }

  export type AlbumUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
  }

  export type MediaCreateInput = {
    id?: string
    title: string
    place?: string | null
    photo: string
    date: Date | string
    album?: AlbumCreateNestedManyWithoutMediaInput
  }

  export type MediaUncheckedCreateInput = {
    id?: string
    title: string
    place?: string | null
    photo: string
    date: Date | string
    album?: AlbumUncheckedCreateNestedManyWithoutMediaInput
  }

  export type MediaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    place?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    album?: AlbumUpdateManyWithoutMediaNestedInput
  }

  export type MediaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    place?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    album?: AlbumUncheckedUpdateManyWithoutMediaNestedInput
  }

  export type MediaCreateManyInput = {
    id?: string
    title: string
    place?: string | null
    photo: string
    date: Date | string
  }

  export type MediaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    place?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    place?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type MembersListRelationFilter = {
    every?: MembersWhereInput
    some?: MembersWhereInput
    none?: MembersWhereInput
  }

  export type MembersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Player_positionCountOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
  }

  export type Player_positionMaxOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
  }

  export type Player_positionMinOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
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

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
  }

  export type MemberFunctionCountOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
  }

  export type MemberFunctionMaxOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
  }

  export type MemberFunctionMinOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
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

  export type Player_positionNullableScalarRelationFilter = {
    is?: Player_positionWhereInput | null
    isNot?: Player_positionWhereInput | null
  }

  export type CategoryNullableScalarRelationFilter = {
    is?: CategoryWhereInput | null
    isNot?: CategoryWhereInput | null
  }

  export type MemberFunctionNullableScalarRelationFilter = {
    is?: MemberFunctionWhereInput | null
    isNot?: MemberFunctionWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MembersCountOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    photo?: SortOrder
    is_admin?: SortOrder
    positionId?: SortOrder
    categoryId?: SortOrder
    memberFunctionId?: SortOrder
  }

  export type MembersMaxOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    photo?: SortOrder
    is_admin?: SortOrder
    positionId?: SortOrder
    categoryId?: SortOrder
    memberFunctionId?: SortOrder
  }

  export type MembersMinOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    photo?: SortOrder
    is_admin?: SortOrder
    positionId?: SortOrder
    categoryId?: SortOrder
    memberFunctionId?: SortOrder
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

  export type ClubCountOrderByAggregateInput = {
    id?: SortOrder
    history?: SortOrder
  }

  export type ClubMaxOrderByAggregateInput = {
    id?: SortOrder
    history?: SortOrder
  }

  export type ClubMinOrderByAggregateInput = {
    id?: SortOrder
    history?: SortOrder
  }

  export type PartnerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    photo?: SortOrder
    is_main?: SortOrder
  }

  export type PartnerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    photo?: SortOrder
    is_main?: SortOrder
  }

  export type PartnerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    photo?: SortOrder
    is_main?: SortOrder
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

  export type ActualityCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    date?: SortOrder
    description?: SortOrder
    contact?: SortOrder
    phone?: SortOrder
    mail?: SortOrder
    photo?: SortOrder
  }

  export type ActualityMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    date?: SortOrder
    description?: SortOrder
    contact?: SortOrder
    phone?: SortOrder
    mail?: SortOrder
    photo?: SortOrder
  }

  export type ActualityMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    date?: SortOrder
    description?: SortOrder
    contact?: SortOrder
    phone?: SortOrder
    mail?: SortOrder
    photo?: SortOrder
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

  export type MediaListRelationFilter = {
    every?: MediaWhereInput
    some?: MediaWhereInput
    none?: MediaWhereInput
  }

  export type MediaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AlbumCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
  }

  export type AlbumMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
  }

  export type AlbumMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
  }

  export type AlbumListRelationFilter = {
    every?: AlbumWhereInput
    some?: AlbumWhereInput
    none?: AlbumWhereInput
  }

  export type AlbumOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MediaCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    place?: SortOrder
    photo?: SortOrder
    date?: SortOrder
  }

  export type MediaMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    place?: SortOrder
    photo?: SortOrder
    date?: SortOrder
  }

  export type MediaMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    place?: SortOrder
    photo?: SortOrder
    date?: SortOrder
  }

  export type MembersCreateNestedManyWithoutPositionInput = {
    create?: XOR<MembersCreateWithoutPositionInput, MembersUncheckedCreateWithoutPositionInput> | MembersCreateWithoutPositionInput[] | MembersUncheckedCreateWithoutPositionInput[]
    connectOrCreate?: MembersCreateOrConnectWithoutPositionInput | MembersCreateOrConnectWithoutPositionInput[]
    createMany?: MembersCreateManyPositionInputEnvelope
    connect?: MembersWhereUniqueInput | MembersWhereUniqueInput[]
  }

  export type MembersUncheckedCreateNestedManyWithoutPositionInput = {
    create?: XOR<MembersCreateWithoutPositionInput, MembersUncheckedCreateWithoutPositionInput> | MembersCreateWithoutPositionInput[] | MembersUncheckedCreateWithoutPositionInput[]
    connectOrCreate?: MembersCreateOrConnectWithoutPositionInput | MembersCreateOrConnectWithoutPositionInput[]
    createMany?: MembersCreateManyPositionInputEnvelope
    connect?: MembersWhereUniqueInput | MembersWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type MembersUpdateManyWithoutPositionNestedInput = {
    create?: XOR<MembersCreateWithoutPositionInput, MembersUncheckedCreateWithoutPositionInput> | MembersCreateWithoutPositionInput[] | MembersUncheckedCreateWithoutPositionInput[]
    connectOrCreate?: MembersCreateOrConnectWithoutPositionInput | MembersCreateOrConnectWithoutPositionInput[]
    upsert?: MembersUpsertWithWhereUniqueWithoutPositionInput | MembersUpsertWithWhereUniqueWithoutPositionInput[]
    createMany?: MembersCreateManyPositionInputEnvelope
    set?: MembersWhereUniqueInput | MembersWhereUniqueInput[]
    disconnect?: MembersWhereUniqueInput | MembersWhereUniqueInput[]
    delete?: MembersWhereUniqueInput | MembersWhereUniqueInput[]
    connect?: MembersWhereUniqueInput | MembersWhereUniqueInput[]
    update?: MembersUpdateWithWhereUniqueWithoutPositionInput | MembersUpdateWithWhereUniqueWithoutPositionInput[]
    updateMany?: MembersUpdateManyWithWhereWithoutPositionInput | MembersUpdateManyWithWhereWithoutPositionInput[]
    deleteMany?: MembersScalarWhereInput | MembersScalarWhereInput[]
  }

  export type MembersUncheckedUpdateManyWithoutPositionNestedInput = {
    create?: XOR<MembersCreateWithoutPositionInput, MembersUncheckedCreateWithoutPositionInput> | MembersCreateWithoutPositionInput[] | MembersUncheckedCreateWithoutPositionInput[]
    connectOrCreate?: MembersCreateOrConnectWithoutPositionInput | MembersCreateOrConnectWithoutPositionInput[]
    upsert?: MembersUpsertWithWhereUniqueWithoutPositionInput | MembersUpsertWithWhereUniqueWithoutPositionInput[]
    createMany?: MembersCreateManyPositionInputEnvelope
    set?: MembersWhereUniqueInput | MembersWhereUniqueInput[]
    disconnect?: MembersWhereUniqueInput | MembersWhereUniqueInput[]
    delete?: MembersWhereUniqueInput | MembersWhereUniqueInput[]
    connect?: MembersWhereUniqueInput | MembersWhereUniqueInput[]
    update?: MembersUpdateWithWhereUniqueWithoutPositionInput | MembersUpdateWithWhereUniqueWithoutPositionInput[]
    updateMany?: MembersUpdateManyWithWhereWithoutPositionInput | MembersUpdateManyWithWhereWithoutPositionInput[]
    deleteMany?: MembersScalarWhereInput | MembersScalarWhereInput[]
  }

  export type MembersCreateNestedManyWithoutCategoryInput = {
    create?: XOR<MembersCreateWithoutCategoryInput, MembersUncheckedCreateWithoutCategoryInput> | MembersCreateWithoutCategoryInput[] | MembersUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: MembersCreateOrConnectWithoutCategoryInput | MembersCreateOrConnectWithoutCategoryInput[]
    createMany?: MembersCreateManyCategoryInputEnvelope
    connect?: MembersWhereUniqueInput | MembersWhereUniqueInput[]
  }

  export type MembersUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<MembersCreateWithoutCategoryInput, MembersUncheckedCreateWithoutCategoryInput> | MembersCreateWithoutCategoryInput[] | MembersUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: MembersCreateOrConnectWithoutCategoryInput | MembersCreateOrConnectWithoutCategoryInput[]
    createMany?: MembersCreateManyCategoryInputEnvelope
    connect?: MembersWhereUniqueInput | MembersWhereUniqueInput[]
  }

  export type MembersUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<MembersCreateWithoutCategoryInput, MembersUncheckedCreateWithoutCategoryInput> | MembersCreateWithoutCategoryInput[] | MembersUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: MembersCreateOrConnectWithoutCategoryInput | MembersCreateOrConnectWithoutCategoryInput[]
    upsert?: MembersUpsertWithWhereUniqueWithoutCategoryInput | MembersUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: MembersCreateManyCategoryInputEnvelope
    set?: MembersWhereUniqueInput | MembersWhereUniqueInput[]
    disconnect?: MembersWhereUniqueInput | MembersWhereUniqueInput[]
    delete?: MembersWhereUniqueInput | MembersWhereUniqueInput[]
    connect?: MembersWhereUniqueInput | MembersWhereUniqueInput[]
    update?: MembersUpdateWithWhereUniqueWithoutCategoryInput | MembersUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: MembersUpdateManyWithWhereWithoutCategoryInput | MembersUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: MembersScalarWhereInput | MembersScalarWhereInput[]
  }

  export type MembersUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<MembersCreateWithoutCategoryInput, MembersUncheckedCreateWithoutCategoryInput> | MembersCreateWithoutCategoryInput[] | MembersUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: MembersCreateOrConnectWithoutCategoryInput | MembersCreateOrConnectWithoutCategoryInput[]
    upsert?: MembersUpsertWithWhereUniqueWithoutCategoryInput | MembersUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: MembersCreateManyCategoryInputEnvelope
    set?: MembersWhereUniqueInput | MembersWhereUniqueInput[]
    disconnect?: MembersWhereUniqueInput | MembersWhereUniqueInput[]
    delete?: MembersWhereUniqueInput | MembersWhereUniqueInput[]
    connect?: MembersWhereUniqueInput | MembersWhereUniqueInput[]
    update?: MembersUpdateWithWhereUniqueWithoutCategoryInput | MembersUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: MembersUpdateManyWithWhereWithoutCategoryInput | MembersUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: MembersScalarWhereInput | MembersScalarWhereInput[]
  }

  export type MembersCreateNestedManyWithoutMemberFunctionInput = {
    create?: XOR<MembersCreateWithoutMemberFunctionInput, MembersUncheckedCreateWithoutMemberFunctionInput> | MembersCreateWithoutMemberFunctionInput[] | MembersUncheckedCreateWithoutMemberFunctionInput[]
    connectOrCreate?: MembersCreateOrConnectWithoutMemberFunctionInput | MembersCreateOrConnectWithoutMemberFunctionInput[]
    createMany?: MembersCreateManyMemberFunctionInputEnvelope
    connect?: MembersWhereUniqueInput | MembersWhereUniqueInput[]
  }

  export type MembersUncheckedCreateNestedManyWithoutMemberFunctionInput = {
    create?: XOR<MembersCreateWithoutMemberFunctionInput, MembersUncheckedCreateWithoutMemberFunctionInput> | MembersCreateWithoutMemberFunctionInput[] | MembersUncheckedCreateWithoutMemberFunctionInput[]
    connectOrCreate?: MembersCreateOrConnectWithoutMemberFunctionInput | MembersCreateOrConnectWithoutMemberFunctionInput[]
    createMany?: MembersCreateManyMemberFunctionInputEnvelope
    connect?: MembersWhereUniqueInput | MembersWhereUniqueInput[]
  }

  export type MembersUpdateManyWithoutMemberFunctionNestedInput = {
    create?: XOR<MembersCreateWithoutMemberFunctionInput, MembersUncheckedCreateWithoutMemberFunctionInput> | MembersCreateWithoutMemberFunctionInput[] | MembersUncheckedCreateWithoutMemberFunctionInput[]
    connectOrCreate?: MembersCreateOrConnectWithoutMemberFunctionInput | MembersCreateOrConnectWithoutMemberFunctionInput[]
    upsert?: MembersUpsertWithWhereUniqueWithoutMemberFunctionInput | MembersUpsertWithWhereUniqueWithoutMemberFunctionInput[]
    createMany?: MembersCreateManyMemberFunctionInputEnvelope
    set?: MembersWhereUniqueInput | MembersWhereUniqueInput[]
    disconnect?: MembersWhereUniqueInput | MembersWhereUniqueInput[]
    delete?: MembersWhereUniqueInput | MembersWhereUniqueInput[]
    connect?: MembersWhereUniqueInput | MembersWhereUniqueInput[]
    update?: MembersUpdateWithWhereUniqueWithoutMemberFunctionInput | MembersUpdateWithWhereUniqueWithoutMemberFunctionInput[]
    updateMany?: MembersUpdateManyWithWhereWithoutMemberFunctionInput | MembersUpdateManyWithWhereWithoutMemberFunctionInput[]
    deleteMany?: MembersScalarWhereInput | MembersScalarWhereInput[]
  }

  export type MembersUncheckedUpdateManyWithoutMemberFunctionNestedInput = {
    create?: XOR<MembersCreateWithoutMemberFunctionInput, MembersUncheckedCreateWithoutMemberFunctionInput> | MembersCreateWithoutMemberFunctionInput[] | MembersUncheckedCreateWithoutMemberFunctionInput[]
    connectOrCreate?: MembersCreateOrConnectWithoutMemberFunctionInput | MembersCreateOrConnectWithoutMemberFunctionInput[]
    upsert?: MembersUpsertWithWhereUniqueWithoutMemberFunctionInput | MembersUpsertWithWhereUniqueWithoutMemberFunctionInput[]
    createMany?: MembersCreateManyMemberFunctionInputEnvelope
    set?: MembersWhereUniqueInput | MembersWhereUniqueInput[]
    disconnect?: MembersWhereUniqueInput | MembersWhereUniqueInput[]
    delete?: MembersWhereUniqueInput | MembersWhereUniqueInput[]
    connect?: MembersWhereUniqueInput | MembersWhereUniqueInput[]
    update?: MembersUpdateWithWhereUniqueWithoutMemberFunctionInput | MembersUpdateWithWhereUniqueWithoutMemberFunctionInput[]
    updateMany?: MembersUpdateManyWithWhereWithoutMemberFunctionInput | MembersUpdateManyWithWhereWithoutMemberFunctionInput[]
    deleteMany?: MembersScalarWhereInput | MembersScalarWhereInput[]
  }

  export type Player_positionCreateNestedOneWithoutMembersInput = {
    create?: XOR<Player_positionCreateWithoutMembersInput, Player_positionUncheckedCreateWithoutMembersInput>
    connectOrCreate?: Player_positionCreateOrConnectWithoutMembersInput
    connect?: Player_positionWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutMembersInput = {
    create?: XOR<CategoryCreateWithoutMembersInput, CategoryUncheckedCreateWithoutMembersInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutMembersInput
    connect?: CategoryWhereUniqueInput
  }

  export type MemberFunctionCreateNestedOneWithoutMemberInput = {
    create?: XOR<MemberFunctionCreateWithoutMemberInput, MemberFunctionUncheckedCreateWithoutMemberInput>
    connectOrCreate?: MemberFunctionCreateOrConnectWithoutMemberInput
    connect?: MemberFunctionWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type Player_positionUpdateOneWithoutMembersNestedInput = {
    create?: XOR<Player_positionCreateWithoutMembersInput, Player_positionUncheckedCreateWithoutMembersInput>
    connectOrCreate?: Player_positionCreateOrConnectWithoutMembersInput
    upsert?: Player_positionUpsertWithoutMembersInput
    disconnect?: Player_positionWhereInput | boolean
    delete?: Player_positionWhereInput | boolean
    connect?: Player_positionWhereUniqueInput
    update?: XOR<XOR<Player_positionUpdateToOneWithWhereWithoutMembersInput, Player_positionUpdateWithoutMembersInput>, Player_positionUncheckedUpdateWithoutMembersInput>
  }

  export type CategoryUpdateOneWithoutMembersNestedInput = {
    create?: XOR<CategoryCreateWithoutMembersInput, CategoryUncheckedCreateWithoutMembersInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutMembersInput
    upsert?: CategoryUpsertWithoutMembersInput
    disconnect?: CategoryWhereInput | boolean
    delete?: CategoryWhereInput | boolean
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutMembersInput, CategoryUpdateWithoutMembersInput>, CategoryUncheckedUpdateWithoutMembersInput>
  }

  export type MemberFunctionUpdateOneWithoutMemberNestedInput = {
    create?: XOR<MemberFunctionCreateWithoutMemberInput, MemberFunctionUncheckedCreateWithoutMemberInput>
    connectOrCreate?: MemberFunctionCreateOrConnectWithoutMemberInput
    upsert?: MemberFunctionUpsertWithoutMemberInput
    disconnect?: MemberFunctionWhereInput | boolean
    delete?: MemberFunctionWhereInput | boolean
    connect?: MemberFunctionWhereUniqueInput
    update?: XOR<XOR<MemberFunctionUpdateToOneWithWhereWithoutMemberInput, MemberFunctionUpdateWithoutMemberInput>, MemberFunctionUncheckedUpdateWithoutMemberInput>
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type MediaCreateNestedManyWithoutAlbumInput = {
    create?: XOR<MediaCreateWithoutAlbumInput, MediaUncheckedCreateWithoutAlbumInput> | MediaCreateWithoutAlbumInput[] | MediaUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: MediaCreateOrConnectWithoutAlbumInput | MediaCreateOrConnectWithoutAlbumInput[]
    connect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
  }

  export type MediaUncheckedCreateNestedManyWithoutAlbumInput = {
    create?: XOR<MediaCreateWithoutAlbumInput, MediaUncheckedCreateWithoutAlbumInput> | MediaCreateWithoutAlbumInput[] | MediaUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: MediaCreateOrConnectWithoutAlbumInput | MediaCreateOrConnectWithoutAlbumInput[]
    connect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
  }

  export type MediaUpdateManyWithoutAlbumNestedInput = {
    create?: XOR<MediaCreateWithoutAlbumInput, MediaUncheckedCreateWithoutAlbumInput> | MediaCreateWithoutAlbumInput[] | MediaUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: MediaCreateOrConnectWithoutAlbumInput | MediaCreateOrConnectWithoutAlbumInput[]
    upsert?: MediaUpsertWithWhereUniqueWithoutAlbumInput | MediaUpsertWithWhereUniqueWithoutAlbumInput[]
    set?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    disconnect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    delete?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    connect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    update?: MediaUpdateWithWhereUniqueWithoutAlbumInput | MediaUpdateWithWhereUniqueWithoutAlbumInput[]
    updateMany?: MediaUpdateManyWithWhereWithoutAlbumInput | MediaUpdateManyWithWhereWithoutAlbumInput[]
    deleteMany?: MediaScalarWhereInput | MediaScalarWhereInput[]
  }

  export type MediaUncheckedUpdateManyWithoutAlbumNestedInput = {
    create?: XOR<MediaCreateWithoutAlbumInput, MediaUncheckedCreateWithoutAlbumInput> | MediaCreateWithoutAlbumInput[] | MediaUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: MediaCreateOrConnectWithoutAlbumInput | MediaCreateOrConnectWithoutAlbumInput[]
    upsert?: MediaUpsertWithWhereUniqueWithoutAlbumInput | MediaUpsertWithWhereUniqueWithoutAlbumInput[]
    set?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    disconnect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    delete?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    connect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    update?: MediaUpdateWithWhereUniqueWithoutAlbumInput | MediaUpdateWithWhereUniqueWithoutAlbumInput[]
    updateMany?: MediaUpdateManyWithWhereWithoutAlbumInput | MediaUpdateManyWithWhereWithoutAlbumInput[]
    deleteMany?: MediaScalarWhereInput | MediaScalarWhereInput[]
  }

  export type AlbumCreateNestedManyWithoutMediaInput = {
    create?: XOR<AlbumCreateWithoutMediaInput, AlbumUncheckedCreateWithoutMediaInput> | AlbumCreateWithoutMediaInput[] | AlbumUncheckedCreateWithoutMediaInput[]
    connectOrCreate?: AlbumCreateOrConnectWithoutMediaInput | AlbumCreateOrConnectWithoutMediaInput[]
    connect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
  }

  export type AlbumUncheckedCreateNestedManyWithoutMediaInput = {
    create?: XOR<AlbumCreateWithoutMediaInput, AlbumUncheckedCreateWithoutMediaInput> | AlbumCreateWithoutMediaInput[] | AlbumUncheckedCreateWithoutMediaInput[]
    connectOrCreate?: AlbumCreateOrConnectWithoutMediaInput | AlbumCreateOrConnectWithoutMediaInput[]
    connect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
  }

  export type AlbumUpdateManyWithoutMediaNestedInput = {
    create?: XOR<AlbumCreateWithoutMediaInput, AlbumUncheckedCreateWithoutMediaInput> | AlbumCreateWithoutMediaInput[] | AlbumUncheckedCreateWithoutMediaInput[]
    connectOrCreate?: AlbumCreateOrConnectWithoutMediaInput | AlbumCreateOrConnectWithoutMediaInput[]
    upsert?: AlbumUpsertWithWhereUniqueWithoutMediaInput | AlbumUpsertWithWhereUniqueWithoutMediaInput[]
    set?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    disconnect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    delete?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    connect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    update?: AlbumUpdateWithWhereUniqueWithoutMediaInput | AlbumUpdateWithWhereUniqueWithoutMediaInput[]
    updateMany?: AlbumUpdateManyWithWhereWithoutMediaInput | AlbumUpdateManyWithWhereWithoutMediaInput[]
    deleteMany?: AlbumScalarWhereInput | AlbumScalarWhereInput[]
  }

  export type AlbumUncheckedUpdateManyWithoutMediaNestedInput = {
    create?: XOR<AlbumCreateWithoutMediaInput, AlbumUncheckedCreateWithoutMediaInput> | AlbumCreateWithoutMediaInput[] | AlbumUncheckedCreateWithoutMediaInput[]
    connectOrCreate?: AlbumCreateOrConnectWithoutMediaInput | AlbumCreateOrConnectWithoutMediaInput[]
    upsert?: AlbumUpsertWithWhereUniqueWithoutMediaInput | AlbumUpsertWithWhereUniqueWithoutMediaInput[]
    set?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    disconnect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    delete?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    connect?: AlbumWhereUniqueInput | AlbumWhereUniqueInput[]
    update?: AlbumUpdateWithWhereUniqueWithoutMediaInput | AlbumUpdateWithWhereUniqueWithoutMediaInput[]
    updateMany?: AlbumUpdateManyWithWhereWithoutMediaInput | AlbumUpdateManyWithWhereWithoutMediaInput[]
    deleteMany?: AlbumScalarWhereInput | AlbumScalarWhereInput[]
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type MembersCreateWithoutPositionInput = {
    id?: string
    firstname: string
    lastname: string
    photo?: string | null
    is_admin?: boolean
    category?: CategoryCreateNestedOneWithoutMembersInput
    memberFunction?: MemberFunctionCreateNestedOneWithoutMemberInput
  }

  export type MembersUncheckedCreateWithoutPositionInput = {
    id?: string
    firstname: string
    lastname: string
    photo?: string | null
    is_admin?: boolean
    categoryId?: string | null
    memberFunctionId?: string | null
  }

  export type MembersCreateOrConnectWithoutPositionInput = {
    where: MembersWhereUniqueInput
    create: XOR<MembersCreateWithoutPositionInput, MembersUncheckedCreateWithoutPositionInput>
  }

  export type MembersCreateManyPositionInputEnvelope = {
    data: MembersCreateManyPositionInput | MembersCreateManyPositionInput[]
    skipDuplicates?: boolean
  }

  export type MembersUpsertWithWhereUniqueWithoutPositionInput = {
    where: MembersWhereUniqueInput
    update: XOR<MembersUpdateWithoutPositionInput, MembersUncheckedUpdateWithoutPositionInput>
    create: XOR<MembersCreateWithoutPositionInput, MembersUncheckedCreateWithoutPositionInput>
  }

  export type MembersUpdateWithWhereUniqueWithoutPositionInput = {
    where: MembersWhereUniqueInput
    data: XOR<MembersUpdateWithoutPositionInput, MembersUncheckedUpdateWithoutPositionInput>
  }

  export type MembersUpdateManyWithWhereWithoutPositionInput = {
    where: MembersScalarWhereInput
    data: XOR<MembersUpdateManyMutationInput, MembersUncheckedUpdateManyWithoutPositionInput>
  }

  export type MembersScalarWhereInput = {
    AND?: MembersScalarWhereInput | MembersScalarWhereInput[]
    OR?: MembersScalarWhereInput[]
    NOT?: MembersScalarWhereInput | MembersScalarWhereInput[]
    id?: StringFilter<"Members"> | string
    firstname?: StringFilter<"Members"> | string
    lastname?: StringFilter<"Members"> | string
    photo?: StringNullableFilter<"Members"> | string | null
    is_admin?: BoolFilter<"Members"> | boolean
    positionId?: StringNullableFilter<"Members"> | string | null
    categoryId?: StringNullableFilter<"Members"> | string | null
    memberFunctionId?: StringNullableFilter<"Members"> | string | null
  }

  export type MembersCreateWithoutCategoryInput = {
    id?: string
    firstname: string
    lastname: string
    photo?: string | null
    is_admin?: boolean
    position?: Player_positionCreateNestedOneWithoutMembersInput
    memberFunction?: MemberFunctionCreateNestedOneWithoutMemberInput
  }

  export type MembersUncheckedCreateWithoutCategoryInput = {
    id?: string
    firstname: string
    lastname: string
    photo?: string | null
    is_admin?: boolean
    positionId?: string | null
    memberFunctionId?: string | null
  }

  export type MembersCreateOrConnectWithoutCategoryInput = {
    where: MembersWhereUniqueInput
    create: XOR<MembersCreateWithoutCategoryInput, MembersUncheckedCreateWithoutCategoryInput>
  }

  export type MembersCreateManyCategoryInputEnvelope = {
    data: MembersCreateManyCategoryInput | MembersCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type MembersUpsertWithWhereUniqueWithoutCategoryInput = {
    where: MembersWhereUniqueInput
    update: XOR<MembersUpdateWithoutCategoryInput, MembersUncheckedUpdateWithoutCategoryInput>
    create: XOR<MembersCreateWithoutCategoryInput, MembersUncheckedCreateWithoutCategoryInput>
  }

  export type MembersUpdateWithWhereUniqueWithoutCategoryInput = {
    where: MembersWhereUniqueInput
    data: XOR<MembersUpdateWithoutCategoryInput, MembersUncheckedUpdateWithoutCategoryInput>
  }

  export type MembersUpdateManyWithWhereWithoutCategoryInput = {
    where: MembersScalarWhereInput
    data: XOR<MembersUpdateManyMutationInput, MembersUncheckedUpdateManyWithoutCategoryInput>
  }

  export type MembersCreateWithoutMemberFunctionInput = {
    id?: string
    firstname: string
    lastname: string
    photo?: string | null
    is_admin?: boolean
    position?: Player_positionCreateNestedOneWithoutMembersInput
    category?: CategoryCreateNestedOneWithoutMembersInput
  }

  export type MembersUncheckedCreateWithoutMemberFunctionInput = {
    id?: string
    firstname: string
    lastname: string
    photo?: string | null
    is_admin?: boolean
    positionId?: string | null
    categoryId?: string | null
  }

  export type MembersCreateOrConnectWithoutMemberFunctionInput = {
    where: MembersWhereUniqueInput
    create: XOR<MembersCreateWithoutMemberFunctionInput, MembersUncheckedCreateWithoutMemberFunctionInput>
  }

  export type MembersCreateManyMemberFunctionInputEnvelope = {
    data: MembersCreateManyMemberFunctionInput | MembersCreateManyMemberFunctionInput[]
    skipDuplicates?: boolean
  }

  export type MembersUpsertWithWhereUniqueWithoutMemberFunctionInput = {
    where: MembersWhereUniqueInput
    update: XOR<MembersUpdateWithoutMemberFunctionInput, MembersUncheckedUpdateWithoutMemberFunctionInput>
    create: XOR<MembersCreateWithoutMemberFunctionInput, MembersUncheckedCreateWithoutMemberFunctionInput>
  }

  export type MembersUpdateWithWhereUniqueWithoutMemberFunctionInput = {
    where: MembersWhereUniqueInput
    data: XOR<MembersUpdateWithoutMemberFunctionInput, MembersUncheckedUpdateWithoutMemberFunctionInput>
  }

  export type MembersUpdateManyWithWhereWithoutMemberFunctionInput = {
    where: MembersScalarWhereInput
    data: XOR<MembersUpdateManyMutationInput, MembersUncheckedUpdateManyWithoutMemberFunctionInput>
  }

  export type Player_positionCreateWithoutMembersInput = {
    id?: string
    label: string
  }

  export type Player_positionUncheckedCreateWithoutMembersInput = {
    id?: string
    label: string
  }

  export type Player_positionCreateOrConnectWithoutMembersInput = {
    where: Player_positionWhereUniqueInput
    create: XOR<Player_positionCreateWithoutMembersInput, Player_positionUncheckedCreateWithoutMembersInput>
  }

  export type CategoryCreateWithoutMembersInput = {
    id?: string
    label: string
  }

  export type CategoryUncheckedCreateWithoutMembersInput = {
    id?: string
    label: string
  }

  export type CategoryCreateOrConnectWithoutMembersInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutMembersInput, CategoryUncheckedCreateWithoutMembersInput>
  }

  export type MemberFunctionCreateWithoutMemberInput = {
    id?: string
    label: string
  }

  export type MemberFunctionUncheckedCreateWithoutMemberInput = {
    id?: string
    label: string
  }

  export type MemberFunctionCreateOrConnectWithoutMemberInput = {
    where: MemberFunctionWhereUniqueInput
    create: XOR<MemberFunctionCreateWithoutMemberInput, MemberFunctionUncheckedCreateWithoutMemberInput>
  }

  export type Player_positionUpsertWithoutMembersInput = {
    update: XOR<Player_positionUpdateWithoutMembersInput, Player_positionUncheckedUpdateWithoutMembersInput>
    create: XOR<Player_positionCreateWithoutMembersInput, Player_positionUncheckedCreateWithoutMembersInput>
    where?: Player_positionWhereInput
  }

  export type Player_positionUpdateToOneWithWhereWithoutMembersInput = {
    where?: Player_positionWhereInput
    data: XOR<Player_positionUpdateWithoutMembersInput, Player_positionUncheckedUpdateWithoutMembersInput>
  }

  export type Player_positionUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
  }

  export type Player_positionUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUpsertWithoutMembersInput = {
    update: XOR<CategoryUpdateWithoutMembersInput, CategoryUncheckedUpdateWithoutMembersInput>
    create: XOR<CategoryCreateWithoutMembersInput, CategoryUncheckedCreateWithoutMembersInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutMembersInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutMembersInput, CategoryUncheckedUpdateWithoutMembersInput>
  }

  export type CategoryUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
  }

  export type MemberFunctionUpsertWithoutMemberInput = {
    update: XOR<MemberFunctionUpdateWithoutMemberInput, MemberFunctionUncheckedUpdateWithoutMemberInput>
    create: XOR<MemberFunctionCreateWithoutMemberInput, MemberFunctionUncheckedCreateWithoutMemberInput>
    where?: MemberFunctionWhereInput
  }

  export type MemberFunctionUpdateToOneWithWhereWithoutMemberInput = {
    where?: MemberFunctionWhereInput
    data: XOR<MemberFunctionUpdateWithoutMemberInput, MemberFunctionUncheckedUpdateWithoutMemberInput>
  }

  export type MemberFunctionUpdateWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
  }

  export type MemberFunctionUncheckedUpdateWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
  }

  export type MediaCreateWithoutAlbumInput = {
    id?: string
    title: string
    place?: string | null
    photo: string
    date: Date | string
  }

  export type MediaUncheckedCreateWithoutAlbumInput = {
    id?: string
    title: string
    place?: string | null
    photo: string
    date: Date | string
  }

  export type MediaCreateOrConnectWithoutAlbumInput = {
    where: MediaWhereUniqueInput
    create: XOR<MediaCreateWithoutAlbumInput, MediaUncheckedCreateWithoutAlbumInput>
  }

  export type MediaUpsertWithWhereUniqueWithoutAlbumInput = {
    where: MediaWhereUniqueInput
    update: XOR<MediaUpdateWithoutAlbumInput, MediaUncheckedUpdateWithoutAlbumInput>
    create: XOR<MediaCreateWithoutAlbumInput, MediaUncheckedCreateWithoutAlbumInput>
  }

  export type MediaUpdateWithWhereUniqueWithoutAlbumInput = {
    where: MediaWhereUniqueInput
    data: XOR<MediaUpdateWithoutAlbumInput, MediaUncheckedUpdateWithoutAlbumInput>
  }

  export type MediaUpdateManyWithWhereWithoutAlbumInput = {
    where: MediaScalarWhereInput
    data: XOR<MediaUpdateManyMutationInput, MediaUncheckedUpdateManyWithoutAlbumInput>
  }

  export type MediaScalarWhereInput = {
    AND?: MediaScalarWhereInput | MediaScalarWhereInput[]
    OR?: MediaScalarWhereInput[]
    NOT?: MediaScalarWhereInput | MediaScalarWhereInput[]
    id?: StringFilter<"Media"> | string
    title?: StringFilter<"Media"> | string
    place?: StringNullableFilter<"Media"> | string | null
    photo?: StringFilter<"Media"> | string
    date?: DateTimeFilter<"Media"> | Date | string
  }

  export type AlbumCreateWithoutMediaInput = {
    id?: string
    title: string
  }

  export type AlbumUncheckedCreateWithoutMediaInput = {
    id?: string
    title: string
  }

  export type AlbumCreateOrConnectWithoutMediaInput = {
    where: AlbumWhereUniqueInput
    create: XOR<AlbumCreateWithoutMediaInput, AlbumUncheckedCreateWithoutMediaInput>
  }

  export type AlbumUpsertWithWhereUniqueWithoutMediaInput = {
    where: AlbumWhereUniqueInput
    update: XOR<AlbumUpdateWithoutMediaInput, AlbumUncheckedUpdateWithoutMediaInput>
    create: XOR<AlbumCreateWithoutMediaInput, AlbumUncheckedCreateWithoutMediaInput>
  }

  export type AlbumUpdateWithWhereUniqueWithoutMediaInput = {
    where: AlbumWhereUniqueInput
    data: XOR<AlbumUpdateWithoutMediaInput, AlbumUncheckedUpdateWithoutMediaInput>
  }

  export type AlbumUpdateManyWithWhereWithoutMediaInput = {
    where: AlbumScalarWhereInput
    data: XOR<AlbumUpdateManyMutationInput, AlbumUncheckedUpdateManyWithoutMediaInput>
  }

  export type AlbumScalarWhereInput = {
    AND?: AlbumScalarWhereInput | AlbumScalarWhereInput[]
    OR?: AlbumScalarWhereInput[]
    NOT?: AlbumScalarWhereInput | AlbumScalarWhereInput[]
    id?: StringFilter<"Album"> | string
    title?: StringFilter<"Album"> | string
  }

  export type MembersCreateManyPositionInput = {
    id?: string
    firstname: string
    lastname: string
    photo?: string | null
    is_admin?: boolean
    categoryId?: string | null
    memberFunctionId?: string | null
  }

  export type MembersUpdateWithoutPositionInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    category?: CategoryUpdateOneWithoutMembersNestedInput
    memberFunction?: MemberFunctionUpdateOneWithoutMemberNestedInput
  }

  export type MembersUncheckedUpdateWithoutPositionInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    memberFunctionId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MembersUncheckedUpdateManyWithoutPositionInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    memberFunctionId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MembersCreateManyCategoryInput = {
    id?: string
    firstname: string
    lastname: string
    photo?: string | null
    is_admin?: boolean
    positionId?: string | null
    memberFunctionId?: string | null
  }

  export type MembersUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    position?: Player_positionUpdateOneWithoutMembersNestedInput
    memberFunction?: MemberFunctionUpdateOneWithoutMemberNestedInput
  }

  export type MembersUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    positionId?: NullableStringFieldUpdateOperationsInput | string | null
    memberFunctionId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MembersUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    positionId?: NullableStringFieldUpdateOperationsInput | string | null
    memberFunctionId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MembersCreateManyMemberFunctionInput = {
    id?: string
    firstname: string
    lastname: string
    photo?: string | null
    is_admin?: boolean
    positionId?: string | null
    categoryId?: string | null
  }

  export type MembersUpdateWithoutMemberFunctionInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    position?: Player_positionUpdateOneWithoutMembersNestedInput
    category?: CategoryUpdateOneWithoutMembersNestedInput
  }

  export type MembersUncheckedUpdateWithoutMemberFunctionInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    positionId?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MembersUncheckedUpdateManyWithoutMemberFunctionInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    positionId?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MediaUpdateWithoutAlbumInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    place?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaUncheckedUpdateWithoutAlbumInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    place?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaUncheckedUpdateManyWithoutAlbumInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    place?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlbumUpdateWithoutMediaInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
  }

  export type AlbumUncheckedUpdateWithoutMediaInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
  }

  export type AlbumUncheckedUpdateManyWithoutMediaInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
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