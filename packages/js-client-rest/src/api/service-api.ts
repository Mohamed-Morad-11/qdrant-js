import {Client} from '../api-client.js';

export function createServiceApi(client: Client) {
    return {
        /**
         * Get lock options. If write is locked, all write operations and collection creation are forbidden
         */
        getLocks: client.path('/locks').method('get').create(),

        /**
         * Collect metrics data including app info, collections info, cluster info and statistics
         */
        metrics: client.path('/metrics').method('get').create(),

        /**
         * Set lock options. If write is locked, all write operations and collection creation are forbidden. Returns previous lock options
         */
        postLocks: client.path('/locks').method('post').create(),

        /**
         * Collect telemetry data including app info, system info, collections info, cluster info, configs and statistics
         */
        telemetry: client.path('/telemetry').method('get').create(),

        /**
         * An endpoint for health checking used in Kubernetes.
         */
        healthz: client.path('/healthz').method('get').create(),

        /**
         * An endpoint for health checking used in Kubernetes.
         */
        livez: client.path('/livez').method('get').create(),

        /**
         * An endpoint for health checking used in Kubernetes.
         */
        readyz: client.path('/readyz').method('get').create(),
    } as const;
}
