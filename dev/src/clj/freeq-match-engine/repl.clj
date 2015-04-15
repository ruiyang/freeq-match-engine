(ns freeq-match-engine.repl
  (:use ring.server.standalone
        [freeq-match-engine.handler :as freeq-handler]
        [freeq-match-engine.match-handler :as match]
        [cemerick.austin.repls :refer (browser-connected-repl-js)]
        [net.cgrand.enlive-html :as enlive]
        [compojure.route :refer (resources)]
        [compojure.core :refer (GET defroutes routes)]
        [clojure.java.io :as io]
        [ring.middleware.json :as json :only [wrap-json-response wrap-json-body]]
        [ring.util.response :as response]
        [compojure.handler :as handler]
        [compojure.core :refer (GET defroutes)]
        [ring.middleware.resource :refer :all]))

(defonce server (atom nil))

(enlive/deftemplate repl
  (io/resource "web/repl.html")
  []
  [:body] (enlive/append
           (enlive/html [:script (browser-connected-repl-js)])))

(defroutes repl-routes
  (GET "/repl" req (content-type (response (reduce str (repl))) "text/html")))

(def app
  (-> (routes repl-routes match/match-routes freeq-handler/app-routes)
      handler/api
      (json/wrap-json-body {:keywords? true})
      json/wrap-json-response
      (wrap-resource "public")
      (wrap-resource "web")))

(defn get-handler []
  ;; #'app expands to (var app) so that when we reload our code,
  ;; the server is forced to re-resolve the symbol in the var
  ;; rather than having its own copy. When the root binding
  ;; changes, the server picks it up without having to restart.
  (-> #'app))

(defn start-server
  "used for starting the server in development mode from REPL"
  [& [port]]
  (let [port (if port (Integer/parseInt port) 3000)]
    (reset! server
            (serve (get-handler)
                   {:port port
                    :auto-reload? true
                    :join? false}))
    (println (str "You can view the site at http://localhost:" port))))

(defn stop-server []
  (.stop @server)
  (reset! server nil))
